import { Router } from "express";
import getUser from "../controllers/user.Get.js";
import registerUser from "../controllers/user.controller.js";
import { upload } from "../middlewere/multer.middlewere.js";


const router = Router();

router.post('/register', registerUser)
router.get('/getUser', getUser)
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