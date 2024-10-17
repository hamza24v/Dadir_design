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

const allowedOrigins = ['https://www.ophelaservices.com', 'http://localhost:5173'];

app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));
app.use(express.json())
const PORT = process.env.PORT || 3000

connectDB() // connect to mongoDB
app.use('/upload', upload)
app.use('/stripe', stripe)
app.use('/services', services)
app.use('/gallery', gallery)
app.use('/serviceImages', express.static('upload/serviceImages'))
app.use('/galleryImages', express.static('upload/gallery'))
app.use('/bookings', bookings)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));