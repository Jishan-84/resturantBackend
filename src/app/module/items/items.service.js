import Item from "./items.model.js"


const insertItemIntoDb = async (data) => {
    const result = await Item.create(data)
    return result
}
const getAllItems = async (query) => {
    const { searchTerm } = query
    let newQuery = { ...query }

    if (searchTerm) {
        newQuery = { title: { '$regex': searchTerm, '$options': 'i' } }
    }
    const result = await Item.find(newQuery).populate({ path: "category", select: "title" })
    return result
}





export const itemServices = {
    insertItemIntoDb,
    getAllItems
}

export default insertItemIntoDb