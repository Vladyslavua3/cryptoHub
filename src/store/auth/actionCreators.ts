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
            setTimeout(async ()=>{
                const response = await axios.get<IUser[]>('./users.json')
                const mockUser = response.data.find(user => user.username === username && user.password === password)
                if(mockUser){
                    localStorage.setItem('auth','true')
                    localStorage.setItem('username', mockUser.username)
                    dispatch(AuthActionCreators.setIsAuth(true))
                    dispatch(AuthActionCreators.setUser(mockUser))
                }else{
                    dispatch(AuthActionCreators.setError("Wrong password or email"))
                }
                dispatch(AuthActionCreators.setIsLoading(false))
            },1000)

        }catch (e) {
            dispatch(AuthActionCreators.setError("Something gone wrong"))
        }
    },
    logOut:() => async (dispatch:Dispatch) =>{

            localStorage.removeItem('auth')
            localStorage.removeItem('username')
            dispatch(AuthActionCreators.setUser({} as IUser))
            dispatch(AuthActionCreators.setIsAuth(false))

    }

}