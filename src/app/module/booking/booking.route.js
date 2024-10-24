import { Router } from "express"
import { isAdmin, isCustomer } from "../../middleware/auth.js"
import bookingController from "./booking.controller.js"

const router = Router()

router.post("/booking", isCustomer, bookingController.insertBookingIntoDB)
router.get("/booking", isAdmin, bookingController.getAllBooking)

// get my booking ->customer
// update booking ->admin,customer
// delete booking ->admin
// get single booking ->admin,customer
const bookingRoutes = router

export default bookingRoutes