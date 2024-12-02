require('dotenv').config()
const express = require('express');
const connectDB = require('./db/connection');
const cors = require('cors')
const app = express();

//routes
const stripe = require('./routes/stripe')
const services = require('./routes/services')
const upload = require('./routes/upload')
const gallery = require('./routes/gallery')
const bookings = require('./routes/bookings')
const appointments = require('./routes/appointments')

const allowedOrigins = process.env.NODE_ENV === 'production' 
    ? ['https://www.ophelaservices.com'] 
    : ['https://www.ophelaservices.com', 'http://localhost:5173'];

app.use(cors({
    origin: function (origin, callback) {
        if (origin && allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET,POST',
    credentials: true
}));
const PORT = process.env.PORT || 3000

connectDB()
app.use('/stripe', stripe)
app.use(express.json())
app.use('/upload', upload)
app.use('/services', services)
app.use('/gallery', gallery)
app.use('/serviceImages', express.static('upload/serviceImages'))
app.use('/galleryImages', express.static('upload/gallery'))
app.use('/bookings', bookings)
app.use('/appointments', appointments)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));