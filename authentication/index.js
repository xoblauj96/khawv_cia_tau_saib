import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import route from "./routes/userRoute.js"

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{

 console.log("DB connected successfully");

 app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
 });

}).catch(err => console.log(err));

app.use("/api/users",route)
