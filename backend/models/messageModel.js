import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
    // senderId object 
    senderId:{
        // It means that the one who has sent the message via post request his/her id === object id
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    // receiverId object 
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,        
        ref:'User',
        required:true
    },
    // message object 
    message:{
        type:String,
        required: true
    }
},
    {timestamps:true}   //Created at Updated at!
);

export const Message = mongoose.model('Message', messageSchema);

