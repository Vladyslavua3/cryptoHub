import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {coinsReducer, getAllCoinsACType, getCoinsACType} from "./coinsReducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {trendingACType, trendingReducer} from "./trendingReducer";
import {holderReducer, holdersACType} from "./holdersReducer";
import {descriptionReducer, getDescriptionCoinACType} from "./descriptionReducer";


const rootReducer = combineReducers({
    coins:coinsReducer,
    trending:trendingReducer,
    holders:holderReducer,
    description:descriptionReducer
})

export type allActionType = getAllCoinsACType | getCoinsACType | trendingACType | holdersACType | getDescriptionCoinACType


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, allActionType>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()



//@ts-ignored
window.store = store