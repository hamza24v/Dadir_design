const express = require('express');
const mongoose = require('mongoose');
const servicesRouter = require('./routes/services');
const photoRoute = require('./routes/photos') 
const app = express();
const fetchPhotos = require('./services/googlePhotos')
const stripe = require('./routes/stripe')

require('dotenv').config()

// async function connect(){
//     try{ 
//         await mongoose.connect(process.env.MONGODB_URI);
//         console.log("connected to mongodb")
//     } catch(error) {
//         console.log(error)
//     }
// }

connect()

// app.use('/gallery', photoRoute);
app.use('/stripe', stripe)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));