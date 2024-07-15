const syncService = async (db, body, trigger) => {
  try {
    const { _id, name, oldPrice, newPrice, variations, image, serviceType } = body;
    const Service = db.collection('services');
    switch (trigger) {
      case 'create':
        await Service.insertOne({ _id, name, oldPrice, newPrice, variations, image, serviceType });
        break;
      case 'update':
        await Service.updateOne(
          { _id },
          { $set: { name, oldPrice, newPrice, variations, image, serviceType } }
        );
        break;
      case 'delete':
        await Service.findOneAndDelete({ _id });
        break;
      default: 
        throw new Error(`Unknown trigger: ${trigger}`);
    }

  } catch (error) {
    console.error('Service sync failed', error);
    throw new Error('Service sync failed')
  }
};

module.exports = syncService
