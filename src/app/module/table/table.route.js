import express from "express"
import tableController from "./table.controller.js"

const router = express.Router()


router.post("/table", tableController.insertTableIntoDb)

const tableRoutes = router

export default tableRoutes