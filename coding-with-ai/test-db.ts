const mongoose = require("mongoose");
const connectDB = require("./src/lib/mongodb").default;
const User = require("./src/models/User").default;
const Membership = require("./src/models/Membership").default;
const Course = require("./src/models/Course").default;
const Certificate = require("./src/models/Certificate").default;

async function run() {
  await connectDB();
  try {
    const allUsers = await User.find().populate("membership").lean();
    console.log("Success! Found users:", allUsers.length);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    mongoose.connection.close();
  }
}
run();
