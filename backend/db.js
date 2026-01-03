const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/?directConnection=true";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Optional: exit process on failure
    }
};

module.exports = connectToMongo;
