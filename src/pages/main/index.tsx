import { useEffect } from "react";
import { useAccounts } from "../../hooks/useAccounts";

export function Main(){
    const {execute, data} = useAccounts();
    useEffect(() => {
        execute();
    }, [])
    console.log(data);
    return null;    
}