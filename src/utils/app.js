import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import connectDB from '../database/index.js';


dotenv.config({path :'../../.env'})


const appp = express();

appp.use(cors({
   credentials :true
}));

appp.use(express.json({ limit: '16kb' }));
appp.use(express.urlencoded({ extended: true, limit: '16kb' }));
appp.use(express.static('public'));
appp.use(cookieParser());



export default appp