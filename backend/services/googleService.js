const process = require("process");
const { google } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/calendar.events"];

async function authorize() {
  try {
    const auth = await new google.auth.GoogleAuth({
      scopes: SCOPES,
      keyfilePath: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    });
    const client = await auth.getClient();
    console.log("Authenticated");
    return client;
  } catch (err) {
    console.error("Error authenticating", err);
    throw err;
  }
}

module.exports = { authorize };
