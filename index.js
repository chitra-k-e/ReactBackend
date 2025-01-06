import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import  BodyParser  from "body-parser";
import Router from './routes/userRoute.js';
import cors from 'cors';
// import Router from "router";
const app = express();
app.use(cors());
app.use(BodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database Connected")
    app.listen(PORT,()=>{
        console.log(`Port NO: ${PORT}`);
    });
}).catch((error)=>{
    console.log(error);
})
app.use('/api/user',Router)




// app.get('/',(req,res)=>{
//     console.log("Hello World");
//     res.send("Hello World")
// })
// let router = express.Router();
// router.get('/',(req,res)=>{
//     res.send("Hello World");
// })
// app.use('/user',Router);