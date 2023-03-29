import {IUser} from "../../models/User";
import {AuthActionEnum, setAuthAction, setErrorAction, setLoadingAction, setUserAction} from "./index";
import {Dispatch} from "redux";
import axios from "axios";


export const AuthActionCreators = {
    setUser: (user: IUser): setUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (isAuth: boolean): setAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: isAuth}),
    setError: (error: string): setErrorAction => ({type: AuthActionEnum.SET_ERROR, payload: error}),
    setIsLoading: (isLoading: boolean): setLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload: isLoading}),
    login:(username:string,password:string) => async (dispatch:Dispatch) =>{
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            const mockUsers = await axios.get('./users.json')
            console.log(mockUsers)
        }catch (e) {
            dispatch(AuthActionCreators.setError("Something gone wrong"))
        }
    },
    logOut:() => async (dispatch:Dispatch) =>{
        try {

        }catch (e) {

        }
    }

}