const express = require('express');
const router = express.Router();
const Service = require('../models/service');

router.get('/', async (_, res) => {
  try {
    const services = await Service.find();
    res.status(201).send(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/addservice', async (req, res) => {
  const { name, newPrice, oldPrice, variations, image, services, priceId } = req.body;

  try {
    const lastService = await Service.findOne().sort({ id: -1 });
    const newId = lastService ? lastService.id + 1 : 1;

    const newService = new Service({
      id: newId,
      name,
      newPrice,
      oldPrice,
      priceId,
      variations,
      image,
      services
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

router.post('/addservices', async (req, res) => {
  const { shop_items } = req.body;
  
  try {
    const lastService = await Service.findOne().sort({ id: -1 }).exec();
    const lastServiceId = lastService ? lastService.id : 0;

    const savePromises = shop_items.map(async (item, index) => {
      const id = lastServiceId + index + 1;
      const service = new Service({
        id: id,
        name: item.name,
        newPrice: item.newPrice,
        oldPrice: item.oldPrice,
        priceId: item.priceId,
        variations: item.variations,
        image: item.image,
        services: item.services
      })

      await service.save()
      console.log("Saved")
      return service;

    })

    const savedServices = await Promise.all(savePromises)
    res.json({
      success: true,
      services: savedServices.map(service => ({
        id: service.id,
        name: service.name,
        priceId: service?.priceId
      }))
    });
  } catch (err) {
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

router.post('/removeservices', async (_, res) => {
  try {
    await Service.deleteMany({})
    res.json({
      sucess: true,
      message: 'All services have been removed'
    })
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

module.exports = router;