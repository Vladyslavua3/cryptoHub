import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {coinsReducer, getAllCoinsACType, getCoinsACType, setErrorCoinType} from "./coinsReducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {trendingACType, trendingReducer} from "./trendingReducer";
import {holderReducer, holdersACType} from "./holdersReducer";
import {descriptionReducer, getDescriptionCoinACType} from "./descriptionReducer";
import {AuthAction, authReducer} from "./auth";


const rootReducer = combineReducers({
    coins:coinsReducer,
    trending:trendingReducer,
    holders:holderReducer,
    description:descriptionReducer,
    auth:authReducer
})

export type allActionType = getAllCoinsACType
    | getCoinsACType
    | trendingACType
    | holdersACType
    | getDescriptionCoinACType
    | AuthAction
    | setErrorCoinType


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, allActionType>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()



//@ts-ignored
window.store = store