import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import userRouter from "./routes/users.js"

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/", userRouter)

app.get("/", (req, res) => {
    res.send("Hell world");
})
app.all("*", (req, res) => {
    res.send("that route does not exist...!")
})

app.listen(port, () => {
    console.log(`Server is listening athttp://localhost:${port}`)
})