import axios from "axios";
import {initState} from "../store/coinsReducer";
import {TrendingType} from "../store/trendingReducer";
import {holdersType} from "../store/holdersReducer";


const instance = axios.create({
    baseURL:'https://api.coingecko.com/api/v3/'
})



export const coinGheckoApi = {
    getCoins(){
        return instance.get<initState[]>('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    },
    getAllCoins(){
        return instance.get<initState[]>('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    },
    getTrending(){
        return instance.get<TrendingType>('search/trending')
    },
    getHolders(coin:string){
        return instance.get<holdersType>(`companies/public_treasury/${coin}`)
    },
    getDescription(id:string){
        return instance.get(`coins/${id}?sparkline=true`)
    }
}