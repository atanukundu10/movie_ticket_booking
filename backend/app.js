import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import bookingsRouter from "./routes/booking-routes.js";

dotenv.config()
const app = express()
app.use(express.json())

app.use("/user", userRouter)
app.use("/admin", adminRouter)
app.use("/movie", movieRouter)
app.use("/booking", bookingsRouter)

mongoose.set('strictQuery', true);

mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.6w0kc1s.mongodb.net/?retryWrites=true&w=majority`)
.then(() =>
app.listen(5000, () =>
  console.log("Connected To Database And Server is running")
)
)
.catch((e) => console.log(e));  
