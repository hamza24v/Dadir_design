exports.sync = async (db, body) => {
    const { _id, name, oldPrice, newPrice, variations, image, serviceType } = body;
    const Service = db.collection('services');
    await Service.insertOne({ _id, name, oldPrice, newPrice, variations, image, serviceType });
  };
  