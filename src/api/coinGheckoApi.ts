import axios from "axios";
import {initState} from "../store/coinsReducer";
import {TrendingType} from "../store/trendingReducer";
import {holdersType} from "../store/holdersReducer";


export const coinGheckoApi = {
    getCoins(){
        return axios.get<initState[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    },
    getAllCoins(){
        return axios.get<initState[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    },
    getTrending(){
        return axios.get<TrendingType>('https://api.coingecko.com/api/v3/search/trending')
    },
    getHolders(coin:string){
        return axios.get<holdersType>(`https://api.coingecko.com/api/v3/companies/public_treasury/${coin}`)
    }

}