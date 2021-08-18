import { API_ROUTES } from "../constants/apiRoutes";
import { useAxios } from "./useAxios";
import { useAxiosResponse } from "./useAxiosResponse";


export interface AccountsResponse {
    id: number;
    name: string;
}

export function useAccounts() {
    const {get} = useAxios();

    const request = async () => await get<AccountsResponse[]>(API_ROUTES.ACCOUNT.LIST);

    return useAxiosResponse(request);
}