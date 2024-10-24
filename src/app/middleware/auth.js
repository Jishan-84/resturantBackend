import jwt from "jsonwebtoken"
import User from "../module/user/user.model.js"
import Apperror from "../error/Apperror.js"
export const isAdmin = async (req, res, next) => {
    const token = req.headers.authorization
    const decode = jwt.verify(token, "restaurant123")
    //    step -1
    const isUserExist = await User.findById(decode?.userId)
    if (!isUserExist) {
        throw new Apperror(400, "user not exist")
    }

    if (decode?.role !== "admin") {
        throw new Apperror(401, "you are not authorized")
    }


    next()
}


// isCustomer
export const isCustomer = async (req, res, next) => {
    const token = req.headers.authorization
    const decode = jwt.verify(token, "restaurant123")

    //    step -1
    const isUserExist = await User.findById(decode?.userId)
    if (!isUserExist) {
        throw new Apperror(400, "user not exist")
    }

    if (decode?.role !== "customer") {
        throw new Apperror(401, "you are not authorized")
    }

    req.user = decode
    next()
}
