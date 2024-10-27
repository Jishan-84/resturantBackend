import { model, Schema } from "mongoose";

const tableSchema = new Schema({
    seats: {
        type: Number,
        required: [true, "table seats is required"]
    }
}, { timestamps: true })


const Table = model("Table", tableSchema)
export default Table