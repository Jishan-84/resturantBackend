import Apperror from "../../error/Apperror.js"
import Table from "../table/table.model.js"
import Booking from "./booking.model.js"

const insertBookingIntoDB = async (data) => {
    const { person } = data
    const findTable = await Table.findOne({ seats: { $lte: person } })
    if (!findTable) {
        throw new Apperror(404, "Table is not found")
    }
    const result = await Booking.create(data)
    return result
}


const getAllBooking = async (query) => {
    const result = await Booking.find(query).populate({ path: "customer", select: "name email" })
    return result
}






const bookingServices = {
    insertBookingIntoDB,
    getAllBooking
}

export default bookingServices