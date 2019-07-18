
import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import usersRouter from './src/routes/users';
import detenv from 'dotenv';
import mongoose from './src/db/mongo';




class Server {

    app;
    constructor() {
        // initialize the express
        this.app = express();
        this.config();
        this.routes();
    }

    config() {

        this.app.use(logger('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cookieParser());
        this.app.use(express.static(path.join(__dirname, 'public')));
        

    }

    routes() {
        this.app.use('/v1/', usersRouter);
    }
}




export default new Server().app;
