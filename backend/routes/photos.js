const express = require('express')
const router = express.Router();
const Photo = require('../models/photo')

router.get('/', async (_, res) => {
    try { 
        const photos = await Photo.find();
        res.json({ success: true, photos })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/addphoto', async (req, res) => {
    const { title, imageUrl, description } = req.body;

    try {
        const newPhoto = new Photo({
            title, imageUrl, description
        })
        await newPhoto.save()
        res.json({
            sucess: true, message: 'Added photo', photo: newPhoto
        })
    } catch (err){
        res.status(500).json({ message: err.message });
    }
})


router.post('/addphotos', async (req, res) => {
    const { photos } = req.body;

    try { 
        const savePromises = photos.map(async (item) => {
            const photo = new Photo({
                title: item.title,
                imageUrl: item.imageUrl,
                description: item?.description
            })

            await photo.save()
            return photo
        })

        const savedPhotos = await Promise.all(savePromises)
        res.json({
            success: true,
            title: savedPhotos.map(photo => photo.title)
        })

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router