import express from 'express';
import dotenv from 'dotenv'
import registerUser from './controllers/user.controller.js';

dotenv.config()

const app = express();
app.get('/', registerUser)


const PORT = process.env.PORT || 3000; 

app.listen(4444, () => {
    console.log(`app is listening at ${PORT}`);
});
