require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const app = express();

//routes
const stripe = require('./routes/stripe')
const services = require('./routes/services')

app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 3000


async function connect(){
    try{ 
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to mongodb")
    } catch(error) {
        console.log(error)
    }
}

connect()

// image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage: storage})

// creating upload endpoint for images
app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('service'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${PORT}/images/${req.file.filename}`
    })
})
app.use(express.static("public")) // stripe recommendation

// app.use('/gallery', photoRoute);
app.use('/stripe', stripe)
app.use('/services', services)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));