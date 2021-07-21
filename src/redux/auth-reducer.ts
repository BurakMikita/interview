import {resultCodesEnum, resultCodesForCapctha} from "../api/api";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";




let initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false as false | boolean,
    captchaUrl:null as null | string
};




const authReducer = (state = initialState, action:ActionsTypes):initialStateType => {
    switch (action.type) {
        case 'SN/auth/SET_USER_DATA':
        case 'SN/auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const actions = {
    setAuthUserData : (userId: number | null, email: string | null, login:string | null, isAuth:boolean) => ({
        type: 'SN/auth/SET_USER_DATA', payload:
            {userId, email, login, isAuth}
    }) as const,
    getCaptchaUrlSuccess : (captchaUrl:string) => ({
        type: 'SN/auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
    }) as const

}

export const getAuthUserData = ():ThunkType => async (dispatch) => {
    let meData = await authAPI.me();
    if (meData.resultCode === resultCodesEnum.Success) {
        let {id, login, email} = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const login = (email:string, password:string, rememberMe:boolean, captcha:string):ThunkType => async (dispatch) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === resultCodesEnum.Success) {
        // success, get auth data
        dispatch(getAuthUserData())
    } else {
        if (loginData.resultCode === resultCodesForCapctha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl());
        }
    }}
export const getCaptchaUrl = ():ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}



export const logout = ():ThunkType => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
    }


export default authReducer;

export type  initialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>