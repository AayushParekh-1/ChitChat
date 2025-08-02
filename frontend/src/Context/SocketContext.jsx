import { createContext,useContext } from 'react';
import {useAuthContext} from './AuthContext'
// import {socket,setSocket} from ''
import { useState,useEffect } from 'react';
import io from 'socket.io-client'

const SocketContext = createContext();

export const useSocketContext = () =>{
    return useContext(SocketContext)
}


export const SocketContextProvider = ({children}) =>{
    const [socket,setSocket] = useState(null);
    const [onlineUser,setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(() =>{
        if(authUser){
            const socket = io("http://localhost:5001",{
                query:{
                    userId: authUser._id,
                }
            });

            setSocket(socket);
            // socket.on() is used to listen to the events. can be used both on client and server side.
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            })
        
        return () => socket.close();
        }
        else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[authUser])

    return(
        <SocketContext.Provider value={{socket, onlineUser}}> 
            {children}
        </SocketContext.Provider>
    )
}

