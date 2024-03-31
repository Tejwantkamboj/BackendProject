import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './database/index.js';
dotenv.config({path :'./env'})


const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));
app.use(express.json({ limit: '16kb' })); // Use express.json() instead of json()
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
 app.use(express.static('public')); 
app.use(cookieParser());

const PORT = process.env.PORT || 3000; 

console.log("ACCESS_TOKEN_EXPIRY", process.env.ACCESS_TOKEN_EXPIRY)
console.log("process.env.ACCESS_TOKEN_SECRET", process.env.ACCESS_TOKEN_SECRET)
console.log("process.env.REFRESH_TOKEN_SECRE", process.env.REFRESH_TOKEN_SECRET)
console.log("Aprocess.env.ACCESS_TOKEN_EXPIRY",process.env.ACCESS_TOKEN_EXPIRY)


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`app is listening at ${PORT}`);
});
