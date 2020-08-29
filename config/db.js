const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI ||
        "mongodb+srv://raf:1234@testcluster1.s4ly9.mongodb.net/exppensetracker?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDb connected:${conn.connection.host}`.cyan.bold);
  } catch (err) {
    console.log(`the error is ${err.massage}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
