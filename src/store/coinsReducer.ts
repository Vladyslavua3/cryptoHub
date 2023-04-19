import {coinGheckoApi} from "../api/coinGheckoApi";
import {createSlice} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "../utils/create-app-async-thunk";

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



const fetchCoins = createAppAsyncThunk<{coins:initState[]},void>
('coins/fetchCoins', async (_,thunkAPI) => {

    const {dispatch, rejectWithValue} = thunkAPI

    try {
        const fetchData = await coinGheckoApi.getCoins()
        const coins = fetchData.data
        return {coins}
    }
    catch (e) {
        dispatch(coinsActions.setErrorCoin('Sorry Api is free that why sometimes it broken'))
        return rejectWithValue(null)
    }
})


const fetchAllCoins = createAppAsyncThunk<{coins:initState[]},void>
('coins/fetchAllCoins',async (_,thunkAPI) => {

    const {dispatch, rejectWithValue} = thunkAPI

    try {
        const fetchData = await coinGheckoApi.getAllCoins()

        const coins = fetchData.data

        return {coins}
    }
    catch (e) {
        dispatch(coinsActions.setErrorCoin('Sorry Api is free that why sometimes it broken'))
        return rejectWithValue(null)
    }

})


const slice = createSlice({
    name:'coins',
    initialState:initialState,
    reducers:{
        setErrorCoin:(state, action) => {
            state = action.payload.error
        }
    },
    extraReducers:builder => {
        builder.addCase(fetchCoins.fulfilled,(state, action)=>{
            return state = action.payload.coins
        })
            .addCase(fetchAllCoins.fulfilled,(state,action)=>{
                return state = action.payload.coins
            })
    }
})



export const coinsReducer = slice.reducer
export const coinsActions = slice.actions
export const coinsThunks = {fetchCoins,fetchAllCoins}







