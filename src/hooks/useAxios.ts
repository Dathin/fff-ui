import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface UseAxios {
    get: <RES>(uri: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<RES>>
    post: <RES, REQ = undefined>(uri: string, data?: REQ, config?: AxiosRequestConfig) => Promise<AxiosResponse<RES>>
}

export function useAxios(): UseAxios{
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080',
    });

    axiosInstance.interceptors.request.use((config) => {
        config.headers = {
            ...config.headers,
            Authorization: localStorage.getItem('token')
        }
        return config;
    });

    const get = async <RES> (uri: string, config?: AxiosRequestConfig): Promise<AxiosResponse<RES>> => await axiosInstance.get<RES>(uri, config);
    const post = async <RES, REQ = undefined> (uri: string, data: REQ, config?: AxiosRequestConfig): Promise<AxiosResponse<RES>> => await axiosInstance.post<RES>(uri, data, config)

    return {
        get,
        post,
    };
}