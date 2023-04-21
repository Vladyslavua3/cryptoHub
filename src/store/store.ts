import {AnyAction, combineReducers} from "redux";
import {coinsReducer} from "./coinsReducer";
import {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {trendingReducer} from "./trendingReducer";
import {holderReducer} from "./holdersReducer";
import {descriptionReducer} from "./descriptionReducer";
import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "../store/auth/authSlice";


const rootReducer = combineReducers({
    coins:coinsReducer,
    trending:trendingReducer,
    holders:holderReducer,
    description:descriptionReducer,
    auth:authReducer
})


export const store = configureStore({
    reducer:rootReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()



//@ts-ignored
window.store = store