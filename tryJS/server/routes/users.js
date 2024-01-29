import express, { Router } from "express";
import { getUsers, createUser,getUser,deleteUser, updateUser } from "../controllers/users.js"

const rounter = express.Router();

rounter.get("/users", getUsers);
rounter.post("/user", createUser);
rounter.get("/user/:id", getUser);
rounter.delete("/user/:id", deleteUser);
rounter.put("/user/:id", updateUser);


export default rounter;
