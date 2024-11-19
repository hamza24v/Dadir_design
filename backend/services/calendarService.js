const fs = require("fs").promises;
const path = require("path");
const process = require("process");
const { authenticate } = require("@google-cloud/local-auth");
const { google } = require("googleapis");
const dayjs = require("dayjs");

const SCOPES = ["https://www.googleapis.com/auth/calendar.events"];

const TOKEN_PATH = path.join(process.cwd(), "token.json");
const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");

async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: "authorized_user",
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
    console.log("Saved credentials");
  }
  return client;
}

async function addEvent(auth, serviceDetails) {
  const calendar = google.calendar({ version: "v3", auth });
  const event = {
    summary: `${serviceDetails.type} Service Appointment: ${serviceDetails.name}`,
    description: `Customer appointment for: ${serviceDetails.customerName}\nPhone Number: ${serviceDetails.phoneNumber}\nEmail: ${serviceDetails.email}`,
    start: {
      dateTime: serviceDetails.startDateTime,
      timeZone: "America/New_York",
    },
    end: {
      dateTime: serviceDetails.endDateTime,
      timeZone: "America/New_York",
    },
    attendees: [{ email: serviceDetails.customerEmail }],
    location: serviceDetails.type === 'Assembly'
    ? serviceDetails.location
    : `Pickup: ${serviceDetails.location.pickUp}, Dropoff: ${serviceDetails.location.dropOff}`,
  };

  // Check for conflicting events before adding
  const res = await calendar.events.list({
    calendarId: "primary",
    timeMin: serviceDetails.date,
    timeMax: endDateTime,
    timeZone: "America/New_York",
  });

  if (res.data.items.length > 0) {
    console.log("Conflict detected. Event not added.");
  } else {
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
}

module.exports = {
  authorize,
  addEvent,
};
