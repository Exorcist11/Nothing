const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/nothing";
const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, option);
    console.log("✅ Connect to MongoDB successed!");
  } catch (error) {
    throw ("⭕ Connect to MongoDB failed:", error);
  }
};

module.exports = connectDB;
