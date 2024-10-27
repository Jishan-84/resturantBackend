import Table from "./table.model.js"

const insertTableIntoDb = async (data) => {
    const result = await Table.create(data)
    return result
}

const getAllTables = async (query) => {
    const result = await Table.find(query)
    return result
}

const tableServices = {
    insertTableIntoDb,
    getAllTables
}

export default tableServices