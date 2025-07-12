
import { User } from '../models/userModel.js';

export const getUsersForSidebar = async (req,res) => {
    try {
            const loggedInUserId = req.user._id
            const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password")     //This line is basically telling that find all user that is there in the database except the one which is loggedin
            // The select("-password") part is used to exclude the password field from the returned user
            return res.status(200).json(filteredUsers);

    } catch (error) {
        res.send(500).json({"error":"Internal Server Error"})
        console.Error("error in the userController",error.message)  
    }
}