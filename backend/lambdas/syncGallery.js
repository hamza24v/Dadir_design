exports.sync = async (db, body) => {
    const { _id, title, description, imageUrl } = body;
    const Gallery = db.collection('photos');
    await Gallery.insertOne({ _id, title, description, imageUrl });
  };
  