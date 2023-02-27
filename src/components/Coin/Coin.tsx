import React from 'react';
import {initState} from "../../store/coinsReducer";


interface CoinsType extends initState{
}


export const Coin = (props:CoinsType) => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.market_cap_rank}</div>
            <img src={props.image} alt={'image'}/>
            <div>{props.symbol}</div>
            <div>{props.price_change_percentage_24h}</div>
            <div>{props.total_volume}</div>
        </div>
    );
};
