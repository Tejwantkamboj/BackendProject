import { Router } from "express";
import  registerUser  from "../controllers/user.controller.js";
import { upload } from "../middlewere/multer.middlewere.js";


const router = Router();
console.log("upload.fields([{}]) ," , upload )
router.get('/register',registerUser)

// router.get('/register', upload.fields([
//     {
//         name : "avatar",
//         maxCount : 1
//     },
//     {
//         name : "coverImage",
//         maxCount : 1
//     }
// ]), registerUser);


export default router