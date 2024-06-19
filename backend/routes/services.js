const express = require('express');
const router = express.Router();
const Service = require('../models/service');

router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/addservice', async (req, res) => {
  const { name, newPrice, oldPrice, variations, image, serviceType } = req.body;

  try {
    const lastService = await Service.findOne().sort({ id: -1 });
    const newId = lastService ? lastService.id + 1 : 1; 

    const newService = new Service({
      id: newId,
      name,
      newPrice,
      oldPrice,
      variations,
      image,
      serviceType
    });

    await newService.save();

    res.json({
      success: true,
      message: 'Service added successfully',
      service: newService
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: err.message });
  }
});

router.post('/removeservice', async (req, res) => {
  try {
    await Service.findOneAndDelete({ id: req.body.id })
    console.log("Removed");
    res.json({
      success: true,
      name: req.body.name
    })
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

})

module.exports = router;