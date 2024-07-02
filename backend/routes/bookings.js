const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

router.post('/', async (req, res) => {
    const { fullName, phoneNumber, email, address, dateOfService, services, message } = req.body;

    const newBooking = new Booking({
        fullName,
        phoneNumber,
        email,
        address,
        dateOfService,
        services,
        message,
    });

    try {
        await newBooking.save();
        res.status(201).json({
            success: true, 
            message: 'Booking added successfully'
        })
    } catch (err) {
        res.status(400).send('Error creating booking')
    }
})

router.get('/', async (_, res) => {
    try {
        const bookings = await Booking.find()
        res.status(200).json({success: true, bookings})
    } catch (err) {
        res.status(500).send("Error fetching bookings")
    }
})

module.exports = router