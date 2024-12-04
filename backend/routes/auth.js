const express = require("express");
const router = express.Router();

const credentials = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);
const SCOPES = ["https://www.googleapis.com/auth/calendar.events"];

const oauth2Client = new google.auth.OAuth2(
  credentials.client_id,
  credentials.client_secret,
  credentials.redirect_uri
);

router.get("/", async (req, res) => {
  try {
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPES,
      prompt: "consent",
    });
    res.redirect(authUrl);
  } catch (error) {
    console.error("Error generating OAuth URL:", error);
    res.status(500).send("Failed to generate OAuth URL");
  }
});

router.get("/callback", async (req, res) => {
  const code = req.query.code;
  try {
    const { tokens } = await oauth2Client.getToken(code);
    fs.writeFileSync(process.env.TOKEN_PATH, JSON.stringify(tokens));
    console.log("Tokens saved:", tokens);
    res.send("Authenticated");
  } catch (error) {
    console.error("Error during OAuth callback:", error);
    res.status(500).send("Authentication failed");
  }
});

module.exports = router;
