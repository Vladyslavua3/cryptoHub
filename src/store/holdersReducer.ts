import {Dispatch} from "redux";
import {coinGheckoApi} from "../api/coinGheckoApi";


export type holdersType = {
    total_holdings: number,
    total_value_usd: number,
    market_cap_dominance: number,
    companies: companiesType[]
}

export type companiesType = {
    name: string,
    symbol: string,
    country: string,
    total_holdings: number,
    total_entry_value_usd: number,
    total_current_value_usd: number,
    percentage_of_total_supply: number
}

const initHoldersState:holdersType = {
    total_holdings:0,
    total_value_usd:0,
    market_cap_dominance:0,
    companies:[]
}

export const holderReducer = (state = initHoldersState,action:holdersACType)=>{
    switch (action.type) {
        case "GET-HOLDERS-COMPANIES":{
            return {...state,
                total_holdings:action.holders.total_holdings,
                total_value_usd:action.holders.total_value_usd,
                market_cap_dominance:action.holders.market_cap_dominance,
                companies:[...action.holders.companies]
            }
        }
        default:{
            return state
        }
    }
}


export const holdersAC = (holders:holdersType) => ({type:'GET-HOLDERS-COMPANIES',holders}as const)

export type holdersACType = ReturnType<typeof holdersAC>



export const holdersBTCTC = () => (dispatch:Dispatch) => {
    coinGheckoApi.getHolders('bitcoin').then((res) => {
        dispatch(holdersAC(res.data))
    })
}


export const holdersETHTC = () => (dispatch:Dispatch) => {
    coinGheckoApi.getHolders('ethereum').then((res) => {
        dispatch(holdersAC(res.data))
    })
}