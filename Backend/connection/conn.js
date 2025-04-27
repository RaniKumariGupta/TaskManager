const mongoose = require('mongoose');

const conn = async () => {
    try {
        await mongoose.connect(
            `${process.env.MONGO_URI}`
        );
        console.log("connected to database successfully")
    } catch (error) {
        console.log("connection fail")
    }
};
conn();
