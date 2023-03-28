import React, {useEffect} from 'react';
import s from './Main.module.css'
import {Coin} from "../Coin/Coin";
import {fetchCoinsTC, initState} from "../../store/coinsReducer";
import {AppRootStateType, useAppDispatch} from "../../store/store";
import {useSelector} from "react-redux";


export const Main = () => {

    const dispatch = useAppDispatch()

    const coins = useSelector<AppRootStateType,initState[]>(state => state.coins)


    useEffect(()=>{
           const thunk = fetchCoinsTC()
           dispatch(thunk)
    },[])


    return (
        <div className={s.main}>
            <h1>Top 10 Crypto</h1>
            {!coins && <div>Sorry , this because i use free Api</div>}
            {coins.map((e) => <Coin key={e.id}
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
