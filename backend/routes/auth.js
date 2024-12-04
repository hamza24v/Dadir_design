const express = require("express");
const router = express.Router();
const { generateAuthUrl, oauth2Client, saveTokens } = require("../services/authService");


router.get("/", (req, res) => {
  try {
    res.redirect(generateAuthUrl());
  } catch (error) {
    console.error("Error generating OAuth URL:", error);
    res.status(500).send("Failed to generate OAuth URL");
  }
});

router.get("/callback", async (req, res) => {
  const code = req.query.code;
  try {
    const { tokens } = await oauth2Client.getToken(code);
    saveTokens(tokens)
    console.log("Tokens saved:", tokens);
    res.send("Authenticated");
  } catch (error) {
    console.error("Error during OAuth callback:", error);
    res.status(500).send("Authentication failed");
  }
});

module.exports = router;
