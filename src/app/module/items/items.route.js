import express from "express"
import { isAdmin } from "../../middleware/auth.js"
import itemControllers from "./items.controller.js"

const router = express.Router()

router.post("/items", isAdmin, itemControllers.insertItemIntoDb)
router.get("/items", itemControllers.getAllItems)



const itemRoutes = router

export default itemRoutes