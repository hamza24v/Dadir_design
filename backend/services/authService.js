const { google } = require("googleapis");
const fs = require("fs").promises;

const SCOPES = ["https://www.googleapis.com/auth/calendar.events"];

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

function generateAuthUrl() {
  return oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    prompt: "consent",
  });
}

async function loadTokens() {
  try {
    const tokensData = await fs.readFile(process.env.TOKEN_PATH, "utf8");
    const tokens = JSON.parse(tokensData);

    oauth2Client.setCredentials(tokens);

    const now = Date.now();
    if (!tokens.expiry_date || tokens.expiry_date <= now) {
      console.log("Access token expired. Refreshing...");
      const { credentials } = await oauth2Client.refreshAccessToken();
      await saveTokens(credentials);
      oauth2Client.setCredentials(credentials);
      console.log("Access token refreshed successfully.");
    }
  } catch (error) {
    console.error("Error loading or refreshing tokens:", error);
    throw new Error("Failed to load or refresh tokens.");
  }
}

async function saveTokens(tokens) {
  try {
    await fs.writeFile(process.env.TOKEN_PATH, JSON.stringify(tokens));
    console.log("Tokens saved successfully.");
  } catch (error) {
    console.error("Error saving tokens:", error);
    throw new Error("Failed to save tokens.");
  }
}

module.exports = { oauth2Client, loadTokens, generateAuthUrl, saveTokens };
