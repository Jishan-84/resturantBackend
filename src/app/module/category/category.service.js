// insert category

import Category from "./category.model.js"


const insertCategoryIntoDb = async (data) => {
    const result = await Category.create(data)
    return result
}





const categoryServices = {
    insertCategoryIntoDb
}


export default categoryServices