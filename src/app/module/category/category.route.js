import express from "express"
import categoryController from "./category.controller.js"
import { isAdmin } from "../../middleware/auth.js"

const router = express.Router()

router.post("/category", isAdmin, categoryController.insertCategoryIntoDb)
// home task -->
// get all categories
// get single category
// update category(admin)
// delete category(admin)


const categoryRoutes = router

export default categoryRoutes