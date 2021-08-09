import { API_ROUTES } from "../constants/apiRoutes";
import { useAxios } from "./useAxios";
import { UseAxiosResponse, useAxiosResponse } from "./useAxiosResponse";

export interface SignInRequest {
    identifier: string;
    password: string;
}

export interface SignInResponse {
    token: string;
}

export function useSignIn(): UseAxiosResponse<SignInRequest, SignInResponse> {
    const {post} = useAxios();

    const request = async (data: SignInRequest) => await post<SignInRequest, SignInResponse>(API_ROUTES.USER.SIGN_IN, data);

    const { execute, data, unexpectedError, validationError, loading } = useAxiosResponse<SignInRequest, SignInResponse>(request);

    return {
        execute,
        data,
        unexpectedError,
        validationError,
        loading
    };
    
}