import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDb.js";
import cookieParser from "cookie-parser";
import cors from "cors"; 
import userRoute from "./routes/user.routes.js"

dotenv.config({})
connectDB();
const PORT = 8080;
const app = express();

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());


const corsOptions = {
    origin:"http://localhost:5173/",
    Credential:true
}

app.use(cors(corsOptions))

//routes
app.use("/api/v1/user", userRoute);



app.listen(PORT , ()=>{
    console.log("Server  is created")
})
