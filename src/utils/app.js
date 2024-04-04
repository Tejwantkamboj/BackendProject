import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'

dotenv.config({path :'../../.env'})


const app = express();
app.use(cors({
   
    credentials :true
}));

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

import router from '../routes/user.routes.js';

app.use("/api/v1/ users", router)


export { app }