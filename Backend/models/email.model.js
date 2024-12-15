import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
    to:{
        type:String,
        required:true
    },
    Subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }

},{timestamps});
export const email = mongoose.model("email" , emailSchema)