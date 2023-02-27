import {Dispatch} from "redux";
import {coinGheckoApi} from "../api/coinGheckoApi";

export interface Item {
    item: {
        id: string;
        coin_id: number;
        name: string;
        symbol: string;
        market_cap_rank: number;
        thumb: string;
        small: string;
        large: string;
        slug: string;
        price_btc: number;
        score: number;
    }
}

const initTrendingState:TrendingType = {
    coins:[]
}

export type TrendingType = {
    coins: Item[]
}


export const trendingReducer = (state = initTrendingState,action:trendingACType)=>{
    switch (action.type) {
        case "GET-TRENDING-COINS":{
            return {...state,coins:[...action.trendingCoins.coins]}
        }
        default:{
            return state
        }
    }
}


export const trendingAC = (trendingCoins:TrendingType) => ({type:'GET-TRENDING-COINS',trendingCoins}as const)

export type trendingACType = ReturnType<typeof trendingAC>


export const trendingTC = () => (dispatch:Dispatch) => {
    coinGheckoApi.getTrending().then((res) => {
        dispatch(trendingAC(res.data))
    })
}