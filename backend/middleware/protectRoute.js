import  jwt  from 'jsonwebtoken';
import {User} from '../models/userModel.js'

export const protectRoute = async (req,res,next) =>{
    try {
        // If the user is logged in, the token should be there.
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorized-No token provided!"})
        }
        // Decode the token to get userId
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({error:"Unauthorised-Invalid Token!"})
        }
        // Find the user from DB and remove password field
        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(404).json({ error: "User not found!"})
        }
        // Attach the user to the request object
        req.user = user

        next()

        

    } catch (error) {
        console.error("Error in protectRoute middleware!", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}
