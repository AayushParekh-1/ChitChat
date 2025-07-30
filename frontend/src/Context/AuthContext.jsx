import { createContext,useContext } from 'react'
import { useState } from 'react';


export const AuthContext = createContext();

export const useAuthContext = () =>{
    return useContext(AuthContext)
}

// It wraps your app (or part of it) and provides authentication state to all its children components.Children refers to whatever JSX is nested inside this provider in your app.
export const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('chat-user')) || null)


    return <AuthContext.Provider value={{authUser, setAuthUser}}>
        {children}
        </AuthContext.Provider>;
}



// Creates a global Auth Context (AuthContext) to manage the logged-in user's data.

// Provides authUser and setAuthUser to all components using a provider (AuthContextProvider).

// Loads the user from localStorage on app start to keep them logged in.

// Exports a custom hook (useAuthContext) to easily access auth data in any component.

// ➡️ Purpose: Centralized, persistent login state management in a React app.