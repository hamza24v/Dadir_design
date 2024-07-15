const syncBooking = async (db, body, trigger) => {
  try {
    const { _id, fullName, phoneNumber, email, address, dateOfService, services, message } = body;
    const Booking = db.collection('bookings');
    switch (trigger) {
      case 'create':
        await Booking.insertOne({ _id, fullName, phoneNumber, email, address, dateOfService, services, message });
        break;
      case 'update':
        await Booking.updateOne(
          { _id },
          { $set: { fullName, phoneNumber, email, address, dateOfService, services, message } }
        );
        break;
      case 'delete':
        await Booking.findOneAndDelete({ _id });
        break;
      default: 
        throw new Error(`Unknown trigger: ${trigger}`);
    }
  } catch (error) {
    console.error('Booking sync failed', error);
    throw new Error('Booking sync failed');
  }
};

module.exports = syncBooking
