import { itemServices } from "./items.service.js"

const insertItemIntoDb = async (req, res, next) => {
    try {
        const result = await itemServices.insertItemIntoDb(req.body)
        res.status(200).json({
            message: "item added successfull",
            success: true,
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const getAllItems = async (req, res, next) => {
    try {
        const result = await itemServices.getAllItems(req.query)
        res.status(200).json({
            message: "items retrieved successfull",
            success: true,
            data: result
        })
    } catch (error) {
        next(error)
    }
}




const itemControllers = {
    insertItemIntoDb,
    getAllItems
}


export default itemControllers