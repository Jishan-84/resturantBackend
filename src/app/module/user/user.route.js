import express from "express"
import userController from "./user.controller.js"
import { isAdmin } from "../../middleware/auth.js"
const router = express.Router()
router.get("/users/profile", userController.myProfile)
router.post("/users/login", userController.login)
router.post("/users", userController.signup)
router.get("/users/:id", isAdmin, userController.getSingleUser)




// get all user -> find()
// update user  -> findbyandupdate()
// delete user   -> findbyidanddelete()


const userRoutes = router

export default userRoutes