import Item from "./items.model.js"


const insertItemIntoDb = async (data) => {
    const result = await Item.create(data)
    return result
}
const getAllItems = async (query) => {
    const result = await Item.find(query).populate({ path: "category", select: "title" })
    return result
}





export const itemServices = {
    insertItemIntoDb,
    getAllItems
}

export default insertItemIntoDb