import { useEffect } from "react";
import { CreateAccount } from "../../components/createAccount";
import { FeatureFlagSelector } from "../../components/featureFlagSelector";
import { useMain } from "../../context/mainContext";
import { useAccounts } from "../../hooks/useAccounts";

export function Main(){
    const { accounts, setAccounts } = useMain();
    const {execute, data} = useAccounts();
    useEffect(() => {
        execute();
    }, [])

    useEffect(() => {
        setAccounts(data);
    }, [data, setAccounts])

    return (
        <>
        {accounts?.length ? <FeatureFlagSelector /> : <CreateAccount />}
        </>
    );    
}