import { useAxios } from "./useAxios";
import { UseAxiosResponse, useAxiosResponse } from "./useAxiosResponse";

export interface LoginRequest {
    account: string;
    name: string;
    password: string;
}

export interface LoginResponse {
    token: string;
}

export function useLogin(): UseAxiosResponse<LoginRequest, LoginResponse> {
    const {post} = useAxios();

    const request = async (data: LoginRequest) => await post<LoginRequest, LoginResponse>('user/login', data);

    const { execute, data, unexpectedError, validationError, loading } = useAxiosResponse<LoginRequest, LoginResponse>(request);

    return {
        execute,
        data,
        unexpectedError,
        validationError,
        loading
    };
    
}