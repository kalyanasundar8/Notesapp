const mongoose = require("mongoose");

const connectToDb = async () => {
  dbUri = process.env.MONGO;

  try {
    const conn = await mongoose.connect(dbUri);
    console.log(`🎢 DB Connected: ${conn.connection.host}`.bgGreen);
  } catch (error) {
    process.exit(1);
  }
};

module.exports = connectToDb;
