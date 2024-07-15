const syncGallery = async (db, body, trigger) => {
  try {
    const { _id, title, description, imageUrl } = body;
    const Gallery = db.collection('photos');
    switch (trigger) {
      case 'create':
        await Gallery.insertOne({ _id, title, description, imageUrl });
        break;
      case 'update':
        await Gallery.updateOne(
          { _id },
          { $set:  {_id, title, description, imageUrl } }
        );
        
        break;
      case 'delete':
        await Gallery.findOneAndDelete({ _id });
        break;
      default: 
        throw new Error(`Unknown trigger: ${trigger}`);
    }
  } catch (error) {
    console.error('Gallery sync failed', error);
    throw new Error('Gallery sync failed')
  }
};

module.exports = syncGallery
