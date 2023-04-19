import {coinGheckoApi} from "../api/coinGheckoApi";
import {createSlice} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "../utils/create-app-async-thunk";

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


export type TrendingType = {
    coins: Item[]
}


const initTrendingState:TrendingType = {
    coins:[]
}

const trendingFetch = createAppAsyncThunk<{ trending: TrendingType }, void>
('trending/fetchTrending', async (_, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI
    try {
        const res = await coinGheckoApi.getTrending()
        const trending = res.data
        return {trending}
    } catch (e) {
        return rejectWithValue(null)
    }


})

const slice = createSlice({
    name:'trending',
    initialState:initTrendingState,
    reducers:{},
    extraReducers:builder => {
        builder.addCase(trendingFetch.fulfilled,(state, action)=>{
            state.coins = action.payload.trending.coins
        })
    }
})

export const trendingReducer = slice.reducer
export const trendingThunks = {trendingFetch}


// export const trendingReducer = (state = initTrendingState,action:trendingACType)=>{
//     switch (action.type) {
//         case "GET-TRENDING-COINS":{
//             return {...state,coins:[...action.trendingCoins.coins]}
//         }
//         default:{
//             return state
//         }
//     }
// }


// export const trendingAC = (trendingCoins:TrendingType) => ({type:'GET-TRENDING-COINS',trendingCoins}as const)
//
// export type trendingACType = ReturnType<typeof trendingAC>


// export const trendingTC = () => (dispatch:Dispatch) => {
//     coinGheckoApi.getTrending().then((res) => {
//         dispatch(trendingAC(res.data))
//     })
// }