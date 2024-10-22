import { model, Schema } from "mongoose";

const itemSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "category is required"]
    },
    description: {
        type: String,
        required: [true, "description is required"]
    },
    image: {
        type: String,
        default: "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg"
    },
    price: {
        type: Number,
        required: [true, "price is required"]
    }
})



const Item = model("Item", itemSchema)

export default Item