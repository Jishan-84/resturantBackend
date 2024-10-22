import { model, Schema } from "mongoose";

const categorySchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    }
}, { timestamps: true })


const Category = model("Category", categorySchema)
export default Category