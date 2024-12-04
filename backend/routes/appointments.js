const express = require("express");
const router = express.Router();
const { getEvents } = require("../services/calendarService");

router.get("/", async (req, res) => {
  try {
    const appointments = await getEvents(auth);
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).send("Error authorizing Google Calendar");
  }
});

module.exports = router;