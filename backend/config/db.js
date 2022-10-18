require('dotenv').config();

const mongooes = require('mongoose');

const connectDB = async () => {
    try {
        await mongooes.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUniFiedTopology: true
        });
        console.log("mongoDB connect success!");
    } catch (error) {
        console.error("Mongo connection fail!!");
        process.exit(1)
    }
}

module.exports = connectDB;