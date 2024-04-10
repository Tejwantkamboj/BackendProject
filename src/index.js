import express from 'express';
import appp from './utils/app.js';
import userRoutes from './routes/user.routes.js';
import config from '../config.js';
import dotenv  from 'dotenv'
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config()


const app = express();
appp.use(cors({
    credentials :true
 }));
 app.use(bodyParser.json())
 app.use(express.json({ limit: '16kb' }));
 app.use(express.urlencoded({ extended: true, limit: '16kb' }));
 app.use(express.static('public'));
 app.use(cookieParser());

 
 app.use('/', userRoutes);
// const PORT = process.env.PORT || 3000; 

app.listen(config.PORT, (req, res) => {
  
    console.log(`app is listening at ${config.PORT}`);
});
