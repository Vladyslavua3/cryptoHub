import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../store/store";
import {fetchAllCoinsTC, initState} from "../../store/coinsReducer";
import {Coin} from "../Coin/Coin";
import s from './CryptoRank.module.css'

export const CryptoRank = () => {

    const [search,setSearch] = useState('')

    const dispatch = useAppDispatch()

    const allCoins = useSelector<AppRootStateType,initState[]>(state => state.coins)


    useEffect(()=> {
        const thunk = fetchAllCoinsTC()
        dispatch(thunk)
    },[])


    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
      setSearch(e.currentTarget.value)
    }

    const filteredCoin = allCoins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))



    return (
        <div className={s.wrapper}>
            <form>
                <input type={"search"} placeholder={'Search'}
                onChange={handleChange} value={search}/>
            </form>
            {filteredCoin.map((e) => <Coin key={e.id}
                                    id={e.id}
                                    symbol={e.symbol}
                                    name={e.name}
                                    image={e.image}
                                    current_price={e.current_price}
                                    market_cap={e.market_cap}
                                    market_cap_rank={e.market_cap_rank}
                                    total_volume={e.total_volume}
                                    high_24h={e.high_24h}
                                    low_24h={e.low_24h}
                                    price_change_percentage_24h={e.price_change_percentage_24h}/>)
            }
        </div>
    );
};

