import categoryServices from "./category.service.js"

const insertCategoryIntoDb = async (req, res, next) => {
    try {
        const result = await categoryServices.insertCategoryIntoDb(req.body)
        res.status(200).json({
            message: "category created successfull",
            success: true,
            data: result
        })
    } catch (error) {
        next(error)
    }
}


const categoryController = {
    insertCategoryIntoDb
}

export default categoryController