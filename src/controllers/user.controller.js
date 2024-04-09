import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.Model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerUser = async (req, res) => {
  const { fullname, email, username, password } = req.body;
  try {

    if (
      [fullname, email, username, password].some((field) => field?.trim() == "")) {
      throw new ApiError(400, "fields are required")
    }

    const existedUser = User.findOne({
      $or: [{ username }, { email }]
    });

    if (existedUser) {
      throw new ApiError(409, `User with ${email} or ${username} is already exists`)
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files.coverImage[0]?.path;
    if (!avatarLocalPath) {
      throw new ApiError(400, "Avatar file is required");
    }
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)
    if (!avatar) {
      throw new ApiError(400, "Avatar file is required");
    }
    const user = await User.create({
      fullname,
      avatar: avatar.url,
      coverImage: coverImage?.url || "",
      email,
      password,
      username: username.toLowerCase()
    })
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    )
    if (!createdUser) {
      throw new ApiError(500, "something went wrong while creating a user ");
    }

    return res.status(201).json(
      new ApiResponse(200, createdUser, "user registred sucesfully")
    )
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
export default registerUser

// if (!fullname || !email || !username || !password) {
//     throw new ApiError(400, "fields not be empty");
// }