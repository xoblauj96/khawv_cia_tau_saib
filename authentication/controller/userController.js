import User from "../model/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signup = async (req,res)=>{
    try {
        const userData = new User(req.body);
        const {email} = userData;
        const existUser = await User.findOne({email});
        if(existUser){
            res.status(400).json({message: "User already exist"});
        }
        const saveUser = await userData.save()
        res.status(200).json(saveUser)
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Interal server error "+error})
    }
}
 
export const login = async (req, res) =>{
    console.log("login:: ",req.body);
    try {
        const {email, password} = req.body;
        const userExist = await User.findOne({email})
        if(!userExist) return res.status(400).json({message: "User not exist"});

        const isValidPassword = await bcrypt.compare(password,userExist.password);
        if(!isValidPassword) return res.status(401).json({message:"email or password invalid"})

        const tokenExist = req.cookies.token
        console.log("cookie: ",tokenExist);
        if(tokenExist) return res.status(400).json({message:"Already login"})

        const token = jwt.sign({userId: userExist._id}, process.env.SECRET_KEY, {expiresIn: "1h"})
        res.cookie("token",token, {httponly: true, maxAge: 3600000})
        res.status(200).json({token: token,  message: "Login successfully"});
    } catch (error) {
        console.log(error) 
        res.status(500).json({error: error})
    }
}

export const logout = async (req, res) =>{
    try {
        const tokenExist = req.cookies.token;
        if(!tokenExist) return res.status(400).json({message:"Login Required"})

        res.clearCookie("token");
        res.status(200).json({message: "Logout successfully"})
    } catch (error) {
        res.status(500).json({error: error})
    }
}