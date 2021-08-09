import { API_ROUTES } from "../constants/apiRoutes";
import { useAxios } from "./useAxios";
import { UseAxiosResponse, useAxiosResponse } from "./useAxiosResponse";

export interface SignUpRequest {
    identifier: string;
    password: string;
}

export interface SignUpResponse {
    id: string;
    identifier: string;
}

export function useSignUp(): UseAxiosResponse<SignUpRequest, SignUpResponse> {
    const {post} = useAxios();

    const request = async (data: SignUpRequest) => await post<SignUpRequest, SignUpResponse>(API_ROUTES.USER.SIGN_UP, data);

    const { execute, data, unexpectedError, validationError, loading } = useAxiosResponse<SignUpRequest, SignUpResponse>(request);

    return {
        execute,
        data,
        unexpectedError,
        validationError,
        loading
    };
    
}