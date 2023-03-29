import {IUser} from "../../models/User";

interface authStateType {
    isAuth: boolean
    user:IUser
    isLoading:boolean
    error:string
}


export enum AuthActionEnum {
    SET_AUTH = "SET_AUTH",
    SET_USER = "SET_USER",
    SET_ERROR = "SET_ERROR",
    SET_IS_LOADING = "SET_IS_LOADING"
}


export interface setAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean
}


export interface setUserAction {
    type: AuthActionEnum.SET_USER;
    payload: IUser
}

export interface setErrorAction {
    type: AuthActionEnum.SET_ERROR;
    payload: string
}

export interface setLoadingAction {
    type: AuthActionEnum.SET_IS_LOADING;
    payload: boolean
}


export type AuthAction = setAuthAction | setUserAction | setErrorAction | setLoadingAction


export const initialState:authStateType = {
    isAuth: false,
    user:{} as IUser,
    isLoading:false,
    error:''
}


export const authReducer = (state: authStateType = initialState, action: AuthAction):authStateType => {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return {...state,isAuth:action.payload,isLoading:false}
        case AuthActionEnum.SET_ERROR:
            return {...state,error:action.payload,isLoading:false}
        case AuthActionEnum.SET_IS_LOADING:
            return {...state,isLoading:action.payload}
        case AuthActionEnum.SET_USER:
            return {...state,user:action.payload}
        default:
            return state
    }
}