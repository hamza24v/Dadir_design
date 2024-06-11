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
  const service = new Service({
    id: req.body.id,
    category: req.body.category,
    description: req.body.description,
    newPrice: req.body.newPrice,
    oldPrice: req.body.oldPrice,
    include: req.body.include,
    image: req.body.image,
    serviceType: req.body.serviceType
  })

  await service.save()
  res.json({
    success: true,
    description: req.body.description
  })
})

module.exports = router;