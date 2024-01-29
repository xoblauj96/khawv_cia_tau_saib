import express from 'express';
import { Request,Response } from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import axios from 'axios';
import mongoose from 'mongoose';
import router from 'router';

const url:string = "https://jsonplaceholder.typicode.com/posts"
const app = express();

let arr: Array<any> = new Array()
app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080,()=>{
    console.log(`Server running on http://localhost:${8080}`);
});


// app.get("/", async (req: Request, res: Response)=>{
//     const data = await axios.get(url);
//     console.log("data:: ",typeof(data))
//     res.send("<i><b style='color:red'>helloworld</b></i>");
// })

// app.get("/data",  (req: Request, res: Response)=>{
//     // try {
//         axios.get(url).then(r=>{
//             console.log(r.data);
//             arr = r.data;
//           let aa=  arr.filter(a=>{
         
//            if (a.userId == 9){
//             return a;
//            }
//           }); 
//           console.log("aa:::: ",aa);
//           console.log("length aa:::: ",aa.length);
//          },e=>{
//             console.log("+++++++++++++++> ",e);
            
//          })
//         res.send("<i><b style='color:red'>helloworldeeeeee</b></i>");
//     // } catch (error) {
//     //     console.error('Error fetching data:', error.message || error);
//     // }
// })

const MONGO_URL="mongodb+srv://sorlor99:I2KMF15zye6jRY2J@cluster0.c56c5mb.mongodb.net/authentication?retryWrites=true&w=majority"

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error',(error: Error)=>console.log(error));

app.use('/',router())

