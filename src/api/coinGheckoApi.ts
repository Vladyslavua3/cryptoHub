import axios, {AxiosResponse} from "axios";
import {initState} from "../store/coinsReducer";


export const coinGheckoApi = {
    getCoins(){
        return axios.get<initState[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    },
    getAllCoins(){
        return axios.get<initState[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    }
}