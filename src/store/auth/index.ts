import {IUser} from "../../models/User";

interface authStateType {
    isAuth: boolean
    user:IUser
    isLoading:boolean
    error:string
}


export enum AuthActionEnum {
    SET_AUTH = "SET_AUTH"
}


export interface setAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean
}


export const initialState:authStateType = {
    isAuth: false,
    user:{
        username:'',
        password:''
    },
    isLoading:false,
    error:''
}


export const authReducer = (state: authStateType = initialState, action: setAuthAction):authStateType => {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return {...state,isAuth:action.payload}
        default:
            return state
    }
}