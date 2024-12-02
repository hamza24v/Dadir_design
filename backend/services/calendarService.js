const { google } = require("googleapis");
const dayjs = require("dayjs");

async function addEvent(auth, serviceDetails) {
  const calendar = google.calendar({ version: "v3", auth });
  const event = {
    summary: `${serviceDetails.type} Service Appointment: ${serviceDetails.name}`,
    description: `Customer appointment for: ${serviceDetails.customerName}\nPhone Number: ${serviceDetails.customerPhone}\nEmail: ${serviceDetails.customerEmail}`,
    start: {
      dateTime: serviceDetails.startDateTime,
      timeZone: "America/New_York",
    },
    end: {
      dateTime: serviceDetails.endDateTime,
      timeZone: "America/New_York",
    },
    attendees: [{ email: serviceDetails.customerEmail }],
    location:
      serviceDetails.type === "Assembly"
        ? serviceDetails.location
        : `Pickup: ${serviceDetails.location.pickUp}, Dropoff: ${serviceDetails.location.dropOff}`,
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
        console.log("Event created:", event.data.htmlLink);
      }
    }
  );
}

async function getEvents(auth){
  try {
    const calendar = google.calendar({ version: "v3", auth });
    const startDateTime = dayjs();
    const res = await calendar.events.list({
      calendarId: "primary",
      timeMin: startDateTime.toISOString(),
      timeMax: startDateTime.add(2, 'month').toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    })
    return res.data.items;
  } catch(err){
    console.error("Error fetching appointments:", err);
  }
}

module.exports = {
  addEvent, getEvents
};
