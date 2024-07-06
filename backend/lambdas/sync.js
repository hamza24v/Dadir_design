const connectDB = require('../db/connection');
const syncService = require('./syncService');
const syncBooking = require('./syncBooking');
const syncGallery = require('./syncGallery');

exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  const mongoose = await connectDB();
  const db = mongoose.connection;

  if (body._type === 'service') {
    await syncService.sync(db, body);
  } else if (body._type === 'booking') {
    await syncBooking.sync(db, body);
  } else if (body._type === 'gallery') {
    await syncGallery.sync(db, body);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `${body._type} sync completed` })
  };
};
