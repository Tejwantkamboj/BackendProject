const mongoose = require('mongoose')
const DB_NAME = require('./../constants').default;
require('dotenv').config()

const uri =process.env.MONGODB_URI;
//console.log("here is uri" ,uri)

const connectDB = async ()=>{
try{
const connectionInstance = await mongoose.connect(`${uri}/${DB_NAME}`);
console.log(`\n MongoDB connected !! DB Host :${connectionInstance.connection.host} `);
}catch(error){
    console.log("mongo db connection error", error);
    process.exit(1);
}

}
connectDB();

module.exports = connectDB