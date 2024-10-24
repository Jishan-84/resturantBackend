import Booking from "./booking.model.js"

const insertBookingIntoDB = async (data) => {
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