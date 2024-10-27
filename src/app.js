import express from "express";
import globalErrorhandler from "./app/middleware/globalErrorhandler.js";
import itemRoutes from "./app/module/items/items.route.js";
import userRoutes from "./app/module/user/user.route.js";
import categoryRoutes from "./app/module/category/category.route.js";
import bookingRoutes from "./app/module/booking/booking.route.js";
import tableRoutes from "./app/module/table/table.route.js";
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("server is running...");
});
// const moduleRotues  =  [{
//   path:"/api",
//   route:userRoutes
// }]
// moduleRotues.map(route => app.use(route.path,route.route))

app.use("/api", userRoutes);
app.use("/api", itemRoutes);
app.use("/api", categoryRoutes);
app.use("/api", bookingRoutes);
app.use("/api", tableRoutes);
app.use(globalErrorhandler);
export default app;
