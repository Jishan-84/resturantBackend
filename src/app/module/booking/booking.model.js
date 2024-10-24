import { model, Schema } from "mongoose";

const bookingSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "customer is required"]
    },
    date: {
        type: String,
        required: [true, "date is required"]
    },
    time: {
        type: String,
        required: [true, "date is required"]
    },
    person: {
        type: Number,
        max: 10,
        required: [true, "date is required"]
    },
}, { timestamps: true })



const Booking = model("Booking", bookingSchema)
export default Booking