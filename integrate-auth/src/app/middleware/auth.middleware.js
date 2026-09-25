import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

const authenticate = async(req, res, next) =>{
    try{
     //get Authorization header
     const authHeader = req.header.authorization;
     if(!authHeader){
        return res.status(401).json({
            message: "Authorization header missing"
        })
     }

     // Bearer token extract
     const [scheme, token] = authHeader.split(" ")
       
     if(scheme !== "Bearer" || !token){
        return res.status(401).json({
            message: "Invalid authorization format"
        })
     }
   
       //Access token verify
       const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
       )
 // Token se User ID lekar Database mai user find karna
     const user = await User.findById(decoded.id)
     if(!user){
        return res.status(401).json({
             message: "User not found",
        })
     }

     // user ko req ke ander attach 
     req.user = user
     //next conttroller/middlewere 
     next();

    }
    catch(error){
 return res.status(401).json({
      message: "Invalid or expired access token",
    });
    }
}
export default authenticate;