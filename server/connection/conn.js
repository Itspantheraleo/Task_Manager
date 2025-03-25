const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const conn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            user: process.env.DB_USER,
            pass: process.env.DB_PASS,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
        process.exit(1); // Exit if connection fails
    }
};

conn();
