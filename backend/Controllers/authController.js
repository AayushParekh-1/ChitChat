import { User } from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateTokens.js';


// This the logic behind how the signin will work!
export const signin = async (req,res) =>{
try {
    const {fullName, userName, password, confirmPassword, gender} = req.body

    if(password !== confirmPassword){
        return res.status(400).json({"message":"Passwords don't match"}) 
    }
    //checking in the db for the existing userName
    const user = await User.findOne({userName})
    if(user){
        res.status(400).json({error:"Username Already Exists"})
    }

    // Hasshing Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

    // creating a New User
    const newUser = new User({
        fullName,
        userName,
        password:hashedPassword ,
        gender,
        profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
    })

    if(newUser){
        console.log(newUser._id)
         console.log(res)
        // generating JWT Tokens here! 
         generateTokenAndSetCookie(newUser._id, res)


    await newUser.save()  //Saving the newUser to the DB

    res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
    })
}
else{
    res.status(400).json({error:"Invalid user data!"})
}

} catch (error) {
    res.status(500)
    console.error("Error while signingin", error)
    console.log(req.body)
}
}


// This the logic behind how the Login will work!
export const    login = async(req,res) =>{
try {
    const {userName, password} = req.body
    const user = await User.findOne({userName})   //find if the user exists!
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")   ///verify whether the password is correct by bcrypt.compare!

    //if the login credentials are incorrect go with these things!
    if(!user || !isPasswordCorrect){
        return res.status(400).json({error:"Invalid Login details!"})
    }
    //Setting Cookies by generating the token when a user logs in!
    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        userName: user.userName,
        profilePic: user.profilePic,
    })

} 

catch (error) {
    res.status(500)
    console.error("There is an error in login controller!", error)
}

}

// This the logic behind how the Logout will work!
export const logout = async(req,res) =>{
try {
res.cookie("jwt", "", {maxAge:0})
res.status(200).json({message:"Logged Out Successfully!"})
}
catch (error) {
    res.status(500)
    console.error("There is an error in logout controller!", error)
}

}