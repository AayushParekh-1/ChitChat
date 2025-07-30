import { createContext,useContext } from 'react';
import {useAuthContext} from './AuthContext'
// import {socket,setSocket} from ''
import { useState,useEffect } from 'react';
import io from 'socket.io-client'

export const SocketContext = createContext();

export const useSocketContext = () =>{
    return useContext(SocketContext)
}

export const SocketContextProvider = ({children}) =>{
    const [socket,setSocket] = useState(null);
    const [onlineUser,setOnlineUser] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(() =>{
        if(authUser){
            const socket = io("http://localhost:5000");

            setSocket(socket)
        
        return () => socket.close();
        }
        else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[])

    return(
        <SocketContext.Provider value={{socket, onlineUser}}> 
            {children}
        </SocketContext.Provider>
    )
}

