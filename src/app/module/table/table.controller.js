import tableServices from "./table.service.js"

const insertTableIntoDb = async (req, res, next) => {
    try {
        const result = await tableServices.insertTableIntoDb(req.body)
        res.status(200).json({
            message: "table added successfull",
            success: true,
            data: result
        })
    } catch (error) {
        next(error)
    }
}



const tableController = {
    insertTableIntoDb
}


export default tableController