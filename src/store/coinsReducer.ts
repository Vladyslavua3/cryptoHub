import {Dispatch} from "redux";
import {coinGheckoApi} from "../api/coinGheckoApi";
import {allActionType} from "./store";

export type initState = {
        id: string,
        symbol:string,
        name: string,
        image:string,
        current_price: number,
        market_cap: number,
        market_cap_rank: number,
        total_volume: number,
        high_24h: number,
        low_24h: number,
        price_change_percentage_24h:number,
        error:string
}


const initialState:initState[] = []



export const coinsReducer = (state:initState[] = initialState ,action:allActionType) => {
       switch (action.type) {
           case "GET-COINS":
               return [...action.coins]
           case "GET-ALL-COINS":{
               return [...action.coins]
           }
           default:
               return state
       }
}


export const getCoinsAC = (coins:initState[]) =>({type:'GET-COINS',coins} as const)

export const getAllCoinsAC = (coins:initState[]) =>({type:'GET-ALL-COINS',coins} as const)


export type getCoinsACType = ReturnType<typeof getCoinsAC>
export type getAllCoinsACType = ReturnType<typeof getAllCoinsAC>



export const fetchCoinsTC = () => async (dispatch:Dispatch) => {
    try {
        const fetchData = await coinGheckoApi.getCoins()
        dispatch(getCoinsAC(fetchData.data))
    }
        catch (e) {
            dispatch(setErrorCoin('Sorry Api is free that why sometimes it broken'))
        }
}

export const fetchAllCoinsTC = () => async (dispatch:Dispatch) => {
    try {
        const fetchData = await coinGheckoApi.getAllCoins()
        dispatch(getCoinsAC(fetchData.data))
    }
    catch (e) {
        dispatch(setErrorCoin('Sorry Api is free that why sometimes it broken'))
    }

}


export const setErrorCoin = (error:string) => ({type:"SET_COIN_ERROR",payload:error} as const)

export type setErrorCoinType = ReturnType<typeof setErrorCoin>

