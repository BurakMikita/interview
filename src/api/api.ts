import axios from "axios";
import {UserType} from "../Types/types";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "fe43f864-7186-466f-88ee-13b781ec408f"
    }
});


export enum resultCodesEnum  {
    Success = 0,
    Error=1,
}
export enum resultCodesForCapctha {
    CaptchaIsRequired= 10
}

export type  GetItemsType = {
    items: Array<UserType>
    totalCount:number
    error:string | null
}
export type APIResponseType<D = {}, RC = resultCodesEnum > = {
    data: D
    messages: Array<string>
    resultCode: RC
}