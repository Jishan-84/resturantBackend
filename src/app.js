import express from "express"
import userRoutes from "./app/module/user/user.route.js"
import itemRoutes from "./app/module/items/items.route.js"
const app = express()

const errorHandler = (err, req, res, next) => {
    const message = err?.message || "something went wrong"
    const statusCode = err?.status || 500
    res.json({
        message: message,
        success: false
    })
    next()
}


app.use(express.json())
app.get('/', (req, res) => {
    res.send('server is running...')
})

app.use("/api", userRoutes)
app.use("/api", itemRoutes)
app.use(errorHandler)
export default app