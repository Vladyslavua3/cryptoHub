import React from 'react';
import {initState} from "../../store/coinsReducer";
import s from './Coin.module.css'


interface CoinsType extends initState{
}


export const Coin = (props:CoinsType) => {
    return (
        <ul className={s.wrapper}>
            <li>#{props.market_cap_rank}</li>
            <li><img src={props.image} alt={'image'}/></li>
            <li>{props.name}</li>
            <li>{props.symbol}</li>
            <li>{props.current_price}$</li>
            <li className={props.price_change_percentage_24h < 0 ? s.red : s.green}>{props.price_change_percentage_24h.toFixed(2)}%</li>
            <li>{props.low_24h}$</li>
            <li>{props.high_24h}$</li>
            <li>{props.market_cap}$</li>
        </ul>
    );
};
