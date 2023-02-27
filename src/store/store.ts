import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {allActionType, coinsReducer, getCoinsACType} from "./coinsReducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


const rootReducer = combineReducers({
    coins:coinsReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, allActionType>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()



//@ts-ignored
window.store = store