import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSechema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: function(email){
                const emailRegx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
                return emailRegx.test(email);
            },
            message: "Email format is invalid"
        }
    },
    password:{
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: function(password){
               return password.length >= 8;
            },
            message: "Password must be at least 8ch long"
        }
    },

    confirmPassword:{
        type: String,
        required: true,
        validate:{
            validator: function(confirmPassword){
               return confirmPassword === this.password;
            },
            message: "Password not match"
        }
    }
})


userSechema.pre("save", async function(next){
    const user = this;
    if(!user.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt)
        user.password = hashedPassword;
        console.log("user::::> ",user);
        next();
    } catch (error) {
        console.error(error); 
    }
})  

userSechema.pre("save", async function(next){
    if(this.isModified("password")){
        this.confirmPassword = undefined;
    }
    console.log("uuuuu: ",this);
    next();
})
export default mongoose.model("user",userSechema);