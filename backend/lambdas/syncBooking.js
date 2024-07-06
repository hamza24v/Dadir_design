exports.sync = async (db, body) => {
    const { _id, fullName, phoneNumber, email, address, dateOfService, services, message } = body;
    const Booking = db.collection('bookings');
    await Booking.insertOne({ _id, fullName, phoneNumber, email, address, dateOfService, services, message });
  };
  