import { API_ROUTES } from "../constants/apiRoutes";
import { useAxios } from "./useAxios";
import { useAxiosResponse } from "./useAxiosResponse";


export interface CreateAccountRequest {
    name: string;
}

export interface CreateAccountResponse {
    id: string;
    name: string;
}

export function useCreateAccount() {
    const {post} = useAxios();

    const request = async (data?: CreateAccountRequest) => await post<CreateAccountResponse, CreateAccountRequest>(API_ROUTES.ACCOUNT.CREATE, data);

    return useAxiosResponse(request);
}