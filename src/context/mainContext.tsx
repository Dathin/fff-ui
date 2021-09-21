import { useState } from "react";
import { createContext, useContext } from "react";
import { AccountResponse } from "../hooks/useAccounts";

interface MainProviderProps {
    children: React.ReactNode
}

interface MainContextData {
    accounts?: AccountResponse[];
    setAccounts: (accounts?: AccountResponse[]) => void;
    currentAccount?: AccountResponse;
    setCurrentAccount: (currentAccount: AccountResponse) => void
}

const MainContext = createContext({} as MainContextData)

export function MainProvider({children}: MainProviderProps){
    const [accounts, setAccounts] = useState<AccountResponse[]>();
    const [currentAccount, setCurrentAccount] = useState<AccountResponse>();
    return (
        <MainContext.Provider value={{accounts, setAccounts, currentAccount, setCurrentAccount}}>
            {children}
        </MainContext.Provider>
    )
}

export const useMain = () => useContext(MainContext);