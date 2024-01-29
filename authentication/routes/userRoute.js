import express from "express";
import { signup,login, logout } from "../controller/userController.js";

const route = express.Router();

route.get("/",(req,res)=>{
    res.json("hello")
})

route.post("/signup",signup)
route.post("/login",login)
route.post("/logout", logout)

export default route;