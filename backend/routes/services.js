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
  try {
    const services = await Service.find()
    let id;
    if (services.length > 0) {
      let last_service_array = services.slice(-1)
      let last_service = last_service_array[0]
      id = last_service.id + 1;
    } else {
      id = 1
    }
    const service = new Service({
      id: id,
      category: req.body.category,
      description: req.body.description,
      newPrice: req.body.newPrice,
      oldPrice: req.body.oldPrice,
      include: req.body.include,
      image: req.body.image,
      serviceType: req.body.serviceType
    })

    await service.save()
    console.log("Saved")
    console.log(service)
    res.json({
      success: true,
      description: req.body.description
    })
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

})

router.post('/removeservice', async (req, res) => {
  try{
    await Service.findOneAndDelete({ id: req.body.id })
    console.log("Removed");
    res.json({
      success: true,
      description: req.body.description
    })
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  
})

module.exports = router;