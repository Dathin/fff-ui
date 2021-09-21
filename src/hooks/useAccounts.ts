import { API_ROUTES } from "../constants/apiRoutes";
import { useAxios } from "./useAxios";
import { useAxiosResponse } from "./useAxiosResponse";


export interface AccountResponse {
    id: number;
    name: string;
}

export function useAccounts() {
    const {get} = useAxios();

    const request = async () => await get<AccountResponse[]>(API_ROUTES.ACCOUNT.LIST);

    return useAxiosResponse(request);
}