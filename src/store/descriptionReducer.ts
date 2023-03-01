
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
    }
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


export const getDescriptionCoinAC = (coin:initDesState) =>({type:'GET-DESCRIPTION-COINS',coin} as const)

export type getDescriptionCoinACType = ReturnType<typeof getDescriptionCoinAC>



export const fetchDescriptionTC = (id:string) => (dispatch:Dispatch) => {
    coinGheckoApi.getDescription(id).then((res) => {
        dispatch(getDescriptionCoinAC(res.data))
    })
}