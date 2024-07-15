const connectDB = require('db/connection');
const syncService = require('./syncService');
const syncBooking = require('./syncBooking');
const syncGallery = require('./syncGallery');

exports.handler = async (event) => {
  let mongoose, db;
  try {
    const body = JSON.parse(event.body);
    mongoose = await connectDB();
    db = mongoose.connection;

    let trigger;
    if (event['requestContext']['http'].method === 'DELETE') {
      trigger = 'delete';
    } else if (body._createdAt === body._updatedAt) {
      trigger = 'create';
    } else {
      trigger = 'update';
    }

    switch (body._type) { 
      case 'service':
        await syncService(db, body, trigger);
        break;
      case 'booking':
        await syncBooking(db, body, trigger);
        break;
      case 'gallery':
        await syncGallery(db, body, trigger);
        break;
      default:
        throw new Error(`Unknown document type: ${body._type}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `${body._type} sync completed` })
    };
  } catch (error) {
    console.error('Sync failed', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Sync failed', error: error.message })
    };
  } finally {
    if (mongoose) {
      mongoose.connection.close();
    }
  }
};
