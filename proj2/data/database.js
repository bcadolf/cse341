const dotenv = require('dotenv');
dotenv.config();

const {MongoClient} = require('mongodb');

let database;

const initDB = async () => {
    if (database) {
        console.log('db is initalized');
        return database;
    }
    try {
        const client = await MongoClient.connect(process.env.MONGODB_URL);
        database = client.db('renewableEnergy');
        console.log('database intialized');
        return database;
    } catch (err) {
        console.error('Error initializing the database:', err);
        throw err;
    }
};

const getDatabase = () => {
    if (!database) {
        throw Error('Database not initalized');
    }
    return database;
};

module.exports = {
    initDB,
    getDatabase
};