import { useState } from "react";
import { createContext, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LOCAL_STORAGE } from "../constants/localStorage";
import { ROUTES } from "../constants/routes";

interface UserProviderProps {
    children: React.ReactNode
}

interface UserContextData {
    isAuthenticated: boolean;
    signIn: (token: string) => void;
    signOut: () => void;
}

const UserContext = createContext({} as UserContextData)

export function UserProvider({children}: UserProviderProps){
    let history = useHistory();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem(LOCAL_STORAGE.TOKEN));

    function signIn(token: string){
        localStorage.setItem(LOCAL_STORAGE.TOKEN, token);
        setIsAuthenticated(true);
        history.push(ROUTES.MAIN);
    }

    function signOut(){
        localStorage.removeItem(LOCAL_STORAGE.TOKEN);
        setIsAuthenticated(false);
        history.push(ROUTES.SIGNIN);
    }
    

    return (
        <UserContext.Provider value={{isAuthenticated, signIn, signOut}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);