const { google } = require("googleapis");
const dayjs = require("dayjs");
const fs = require("fs");
const credentials = require("../config/credentials.json");

// Initialize OAuth2 client
const oauth2Client = new google.auth.OAuth2(
  credentials.client_id,
  credentials.client_secret,
  credentials.redirect_uri
);

function loadTokens() {
  const tokens = JSON.parse(fs.readFileSync(process.env.TOKEN_PATH, "utf8"));
  oauth2Client.setCredentials(tokens);
}

async function addEvent(serviceDetails) {
  const calendar = google.calendar({ version: "v3", auth: oauth2Client });
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
    location:
      serviceDetails.type === "Assembly"
        ? serviceDetails.location
        : `Pickup: ${serviceDetails.location.pickUp}, Dropoff: ${serviceDetails.location.dropOff}`,
  };

  calendar.events.insert(
    {
      calendarId: process.env.MAIL_USERNAME,
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

async function getEvents() {
  loadTokens();
  const calendar = google.calendar({ version: "v3", auth: oauth2Client });
  const startDateTime = dayjs();

  try {
    const res = await calendar.events.list({
      calendarId: process.env.MAIL_USERNAME,
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
