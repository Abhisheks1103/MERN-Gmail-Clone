import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Paasword:{
        type:String,
        required:true
    },
    Profilephoto:{
        type:String,
        required:true
    }

},{timestamps});
export const user = mongoose.model("user" , userSchema)