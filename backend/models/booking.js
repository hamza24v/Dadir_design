const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    fullName: String,
    phoneNumber: String,
    email: String,
    dateOfService: Date,
    services: [String],
    message: String
})


module.exports = mongoose.model('Booking', bookingSchema)