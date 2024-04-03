import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config({ path: '../../.env' })


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.LOUDINARY_API_SECRET
});



const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null
    cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    })
    console.log("file uploaded on cloudinary sucessfull", response.url);
    return response;
  } catch (error) {
    console.log("file uploaded on cloudinary UnSucessfull", error);
    fs.unlinkSync(localFilePath);
  }
}

export {uploadOnCloudinary}