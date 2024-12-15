
import { user } from "./models/user.model.js" 
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req,res)=>{
    try{
        const {fullname,email,paasword} = req.body;
        if(!fullname || !email|| !paasword) return res.status(400).json({message:"All fields are required", sucess:false});

        const user = await user.findOne({email});

        if(user) return res.status(400).json({message:"User aleready exists with this email", sucess:false})
           
            const hasedPaasword = await bcrypt.hash(paasword , 10);
            const profilephoto = `https://avatar.iran.liara.run/public/boy`;
            await user.create({
                fullname,
                email,
                paasword:hasedPaasword,
                profilephoto
            });

            return res.status(201).json({
                message:"Account created successfully", 
                sucess:true});
                
    }catch(error){
         console.log(error)
    }
}

export const Login = async(req,res)=>{
    try {
        const {email, paasword} = req.body;
        if(!fullname || !email|| !paasword) return res.status(400).json({message:"All fields are required", sucess:false});

        const user = await user.findOne({email})
        if(!user) return res.status(401).json({message:"Incorrect email or Paasword",sucess:false})
        const isPaasword = await bcrypt.compare(paasword, user.paasword);
        if(!paasword) return res.status(401).json({message:"Incorrect email or Paasword", sucess:false})
        
        const tokenData = {
            userId:user._id
        }
        const token = await  jwt.sign(tokenData, process.env.SECRET_KEY, {expiresIn:'1d'})
        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000, httpOnly:true, samesite:'strict'}).json({
            message:`${user.fullname} logged in succesfully`,
            user
        })  
    } catch (error) {
        console.log(error)
    }
}