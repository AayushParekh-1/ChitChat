import  {Conversation}  from '../models/conversationModel.js';
import {Message} from '../models/messageModel.js';
import { getReceiverSocketId,io } from '../socket/socket.js';

export const sendMessage = async (req,res) =>{
    try {
        const { message } = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({ 
            participants: {$all: [senderId,receiverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,

        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        // This will run in parallel and save the message to db.. at the same time!  
        await Promise.all([conversation.save(), newMessage.save()]);

                // SOCKET IO Functianolaity will be here!

        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            // this is the command that basically allows the send the events to the specific Clients.
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }

        res.status(201).json(newMessage)
    } catch (error) {
        res.status(500).json({error:"Internal Server Error !"})
        console.error(`Error at messageController`, error.message);
        
    }
}

export const getMessages = async(req,res) =>{
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]},
        }).populate("messages");

        if (!conversation) return res.status(200).json([]);

        const messages = conversation.messages;
        res.status(200).json(messages)

    } catch (error) {
        console.error("Error in messageController in getMessage",error.message)
        res.send(401).json({
            error:"Error in getting the messages!"
        })
    }
}