import express from 'express';
import appp from './utils/app.js';
import userRoutes from './routes/user.routes.js';
import config from '../config.js';
import dotenv  from 'dotenv';
dotenv.config()


const app = express();
 app.use('/', userRoutes);



// const PORT = process.env.PORT || 3000; 

app.listen(config.PORT, (req, res) => {
  
    console.log(`app is listening at ${config.PORT}`);
});
