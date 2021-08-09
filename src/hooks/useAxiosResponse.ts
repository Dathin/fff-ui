import { AxiosResponse } from "axios";
import { useState } from "react";
import { SOMETHING_UNUSUAL } from "../constants/errors";

export interface FieldnameMessage {
    [key: string]: string
}

export interface UseAxiosResponse <REQ, RES> {
    validationError: FieldnameMessage;
    unexpectedError: string | undefined;
    data: RES | undefined;
    execute: (data: REQ) => Promise<void>;
    loading: boolean;
}

export function useAxiosResponse <REQ, RES> (request: (data: REQ) => Promise<AxiosResponse<RES>>): UseAxiosResponse<REQ, RES> {
    const [validationError, setValidationError] = useState<FieldnameMessage>({});
    const [data, setData] = useState<RES | undefined>();
    const [unexpectedError, setUnexpectedError] = useState<string | undefined>();
    const [loading, setLoading] = useState<boolean>(false);

    function startNewCall(){
        setValidationError({});
        setData(undefined);
        setUnexpectedError(undefined);
        setLoading(true);
    }

    async function execute(data: REQ){
        try {
            startNewCall();
            const {data: responseData} = await request(data);
            setData(responseData);
        } catch (err){
            if(err?.response?.status === 422){
                setValidationError(err.response.data)
            } 
            else if (err?.response?.data.message){
                setUnexpectedError(err.response.data.message);
            }
            else {
                setUnexpectedError(SOMETHING_UNUSUAL);
            }
        }
        finally {
            setLoading(false);
        }
    }

    return {
        validationError,
        data,
        unexpectedError,
        execute,
        loading,
    }

}