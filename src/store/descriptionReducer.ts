import {Dispatch} from "redux";
import {coinGheckoApi} from "../api/coinGheckoApi";


export type initDesState = {
    id: string,
    symbol:string,
    name: string,
    description:{
        en:string
    }
    image:{
        large:string
    }
    error:string
}


const initialDesState:initDesState = {
    id: '',
    symbol:'',
    name: '',
    description:{
        en:''
    },
    image:{
        large:''
    },
    error:''
}



export const descriptionReducer = (state:initDesState = initialDesState ,action:getDescriptionCoinACType):initDesState => {
    switch (action.type) {
        case "GET-DESCRIPTION-COINS":{
            return {
                ...state,
                id:action.coin.id,
                symbol:action.coin.symbol,
                name:action.coin.name,
                description:{
                    ...action.coin.description
                },
                image:{...action.coin.image}
            }
        }
        default:
            return state
    }
}


export const getDescriptionCoinAC = (coin:initDesState) =>({type:"GET-DESCRIPTION-COINS",coin} as const)

export type getDescriptionCoinACType = ReturnType<typeof getDescriptionCoinAC>


export const setErrorDes = (error:string) => ({type:"SET_DES_ERROR",payload:error} as const)

export type setErrorDesType = ReturnType<typeof setErrorDes>



export const fetchDescriptionTC = (id:string) => async (dispatch:Dispatch) => {
    try {
        const fetchData = await coinGheckoApi.getDescription(id)
        dispatch(getDescriptionCoinAC(fetchData.data))
    }
        catch (e) {

        }

}