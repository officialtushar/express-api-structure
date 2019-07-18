import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();
import cred from '../config/const';

class MongooseDatabase {

    database;
    constructor() {
        this.connection();

        mongoose.connection.on('connected', () => {
            console.log('Mongodb connected');
        })
        mongoose.connection.on('disconnected', () => {
            console.log('Mongodb disconnected');
        })

        return mongoose;
    }

    connection() {
        mongoose.connect(cred.mongodb.url, { useNewUrlParser: true })
    }
}

export default new MongooseDatabase();




