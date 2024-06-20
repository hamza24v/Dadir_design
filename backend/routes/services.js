const express = require('express');
const router = express.Router();
const Service = require('../models/service');

router.get('/', async (_, res) => {
  try {
    const services = await Service.find();
    res.json({ success: true, services });
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

router.post('/addservices', async (req, res) => {
  const { shop_items } = req.body;
  try {
    const services = await Service.find()
    const lastServiceId = services.length > 0 ? services[services.length - 1].id : 0;

    const savePromises = shop_items.map(async (item, index) => {
      const id = lastServiceId + index + 1;
      const service = new Service({
        id: id,
        name: item.name,
        newPrice: item.newPrice,
        oldPrice: item.oldPrice,
        variations: item.variations,
        image: item.image,
        serviceType: item.serviceType
      })

      await service.save()
      console.log("Saved")
      console.log(service)
      return service;

    })

    const savedServices = await Promise.all(savePromises)
    res.json({
      success: true,
      name: savedServices.map(service => service.name)
    })
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

router.post('/removeservice', async (req, res) => {
  try {
    await Service.findOneAndDelete({ id: req.body.id })

    console.log("Removed " + );
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