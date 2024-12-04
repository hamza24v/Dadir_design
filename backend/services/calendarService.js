const dayjs = require("dayjs");
const { oauth2Client, loadTokens } = require("../services/authService");
const { google } = require("googleapis");

async function addEvent(serviceDetails) {
  await loadTokens();
  const calendar = google.calendar({ version: "v3", auth: oauth2Client });

  let location;
  if (serviceDetails.type === "Assembly") {
    location = serviceDetails.location;
  } else {
    location = JSON.parse(serviceDetails.location);
  }
  const event = {
    summary: `${serviceDetails.type} Service Appointment: ${serviceDetails.name}`,
    description: `Customer appointment for: ${
      serviceDetails.customerName
    }\nPhone Number: ${serviceDetails.customerPhone}\nEmail: ${
      serviceDetails.customerEmail
    }\n ${
      serviceDetails.type === "Delivery" ?? `Drop Off at: ${location.dropOff}`
    }`,
    start: {
      dateTime: serviceDetails.startDateTime,
      timeZone: "America/New_York",
    },
    end: {
      dateTime: serviceDetails.endDateTime,
      timeZone: "America/New_York",
    },
    attendees: [{ email: serviceDetails.customerEmail }],
    location: serviceDetails.type === "Assembly" ? location : location.pickUp,
  };

  calendar.events.insert(
    {
      calendarId: "primary",
      resource: event,
    },
    (err, event) => {
      if (err) {
        console.error("Error creating calendar event:", err);
      } else {
        console.log("Event created");
      }
    }
  );
}

async function getEvents() {
  await loadTokens();
  const calendar = google.calendar({ version: "v3", auth: oauth2Client });
  const startDateTime = dayjs();

  try {
    const res = await calendar.events.list({
      calendarId: "primary",
      timeMin: startDateTime.toISOString(),
      timeMax: startDateTime.add(2, "month").toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    });
    return res.data.items;
  } catch (err) {
    console.error("Error fetching appointments:", err);
  }
}

module.exports = {
  addEvent,
  getEvents,
};
