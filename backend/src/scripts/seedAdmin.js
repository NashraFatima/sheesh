require("dotenv").config();

const mongoose = require("mongoose");
const Admin = require("../models/Admin");

mongoose.connect(process.env.MONGO_URI);

const seedAdmin = async () => {
  try {
    const existingAdmin = await Admin.findOne({
      email: "admin@sheesh.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit();
    }

    const admin = await Admin.create({
      name: "Super Admin",
      email: "admin@sheesh.com",
      password: "admin123",
      role: "super-admin",
    });

    console.log("Admin created successfully");
    console.log(admin);

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedAdmin();