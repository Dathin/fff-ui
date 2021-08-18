import { API_ROUTES } from "../constants/apiRoutes";
import { useAxios } from "./useAxios";
import { useAxiosResponse } from "./useAxiosResponse";

export interface SignUpRequest {
    identifier: string;
    password: string;
    webClient: true;
}

export interface SignUpResponse {
    id: string;
    identifier: string;
}

export function useSignUp() {
    const {post} = useAxios();

    const request = async (data?: SignUpRequest) => await post<SignUpResponse, SignUpRequest>(API_ROUTES.USER.SIGN_UP, data);

    return useAxiosResponse(request);
}