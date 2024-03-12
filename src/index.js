const express = require('express');
const ideex = require('./database/index')

require('dotenv').config();



const app = express();
const PORT = process.env.PORT;



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT , ()=>{
    console.log(`app is listning at ${PORT}`)
})