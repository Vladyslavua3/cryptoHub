import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {coinsReducer, getAllCoinsACType, getCoinsACType} from "./coinsReducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {trendingACType, trendingReducer} from "./trendingReducer";
import {holderReducer, holdersACType} from "./holdersReducer";


const rootReducer = combineReducers({
    coins:coinsReducer,
    trending:trendingReducer,
    holders:holderReducer
})

export type allActionType = getAllCoinsACType | getCoinsACType | trendingACType | holdersACType


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, allActionType>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()



//@ts-ignored
window.store = store