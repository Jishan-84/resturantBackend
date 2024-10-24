import bookingServices from "./booking.service.js"

const insertBookingIntoDB = async (req, res, next) => {
    const data = { ...req.body }
    data["customer"] = req.user.userId
    try {
        const result = await bookingServices.insertBookingIntoDB(data)
        res.status(200).json({
            message: "booking inserted  successfull",
            success: true,
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const getAllBooking = async (req, res, next) => {

    try {
        const result = await bookingServices.getAllBooking(req.query)
        res.status(200).json({
            message: "booking retrieved  successfull",
            success: true,
            data: result
        })
    } catch (error) {
        next(error)
    }
}
const bookingController = {
    insertBookingIntoDB,
    getAllBooking
}

export default bookingController