import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connecDB from './database/index.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));
app.use(express.json({ limit: '16kb' })); 
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
 app.use(express.static('public')); 
app.use(cookieParser());

const PORT = process.env.PORT || 3000; 

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`app is listening at ${PORT}`);
});
