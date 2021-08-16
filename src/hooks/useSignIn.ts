import { API_ROUTES } from "../constants/apiRoutes";
import { useAxios } from "./useAxios";
import { useAxiosResponse } from "./useAxiosResponse";

export interface SignInRequest {
    identifier: string;
    password: string;
    webClient: true;
}

export interface SignInResponse {
    token: string;
}

export function useSignIn() {
    const {post} = useAxios();

    const request = async (data: SignInRequest) => await post<SignInRequest, SignInResponse>(API_ROUTES.USER.SIGN_IN, data);

    return useAxiosResponse(request);
}