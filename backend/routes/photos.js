const express = require('express')
const router = express.Router();

router.get('/gallery', async(req, res) => {
    const { page = 1, limit = 12 } = req.query;
    try{
        const photos = await Photo.find()
                                        .limit(limit * 1)
                                        .skip((page - 1) * limit)
                                        .exec()
        res.json(photos)
    } catch(err) { 
        res.status(500).json({message: `Error fetching photos: ${err} `})
    }
})

module.exports = router