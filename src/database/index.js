import { connect } from 'mongoose';
import DB_NAME from './../constants.js';
import config from '../../config.js';


const connectDB = async ()=>{
try{
const connectionInstance = await connect(`${config.MONGODB_URI}/${DB_NAME}`);
console.log(`\n MongoDB connected !! DB Host :${connectionInstance.connection.host} `);
}catch(error){
    console.log("mongo db connection error", error);
    process.exit(1);
}

}
connectDB();

export default connectDB