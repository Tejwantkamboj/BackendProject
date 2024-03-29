import { connect } from 'mongoose';
import DB_NAME from './../constants.js';
import dotenv from 'dotenv';

dotenv.config()

const uri =process.env.MONGODB_URI;
//console.log("here is uri" ,uri)

const connectDB = async ()=>{
try{
const connectionInstance = await connect(`${uri}/${DB_NAME}`);
console.log(`\n MongoDB connected !! DB Host :${connectionInstance.connection.host} `);
}catch(error){
    console.log("mongo db connection error", error);
    process.exit(1);
}

}
connectDB();

export default connectDB