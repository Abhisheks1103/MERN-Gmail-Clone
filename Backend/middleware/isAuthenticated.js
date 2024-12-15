import jwt from "jsonwebtoken"

const isAutheticated = async (req,resizeBy,next)=>{
    try {
        const token = req.cookies.token;
        console.log(token);

        if(!token){
            return res.status(401).json({message:"User not authenticated"})
        }

        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if(!decode){
            res.status(401).json({message:"Invalid token"})
        }
         req.id = decode.userId;
         next();

    } catch (error) {
        console.log(error)
    }
}