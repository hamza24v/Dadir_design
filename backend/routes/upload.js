const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const PORT = process.env.PORT || 3000;

// image storage engines
const galleryStorage = multer.diskStorage({
    destination: '../upload/gallery',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const serviceImageStorage = multer.diskStorage({
    destination: '../upload/serviceImages',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const uploadGallery = multer({ storage: galleryStorage });
const uploadServiceImage = multer({ storage: serviceImageStorage });

router.post("/serviceImages", uploadServiceImage.single('service'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    res.json({
        success: 1,
        image_url: `http://localhost:${PORT}/serviceImages/${req.file.filename}`
    })
})

router.post("/gallery", uploadGallery.single('photo'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    res.json({
        success: 1,
        image_url: `http://localhost:${PORT}/gallery/${req.file.filename}`
    })
})


module.exports = router;