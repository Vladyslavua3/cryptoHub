import React from 'react';

import s from './TrendItem.module.css'
import {Item, TrendingType} from "../../../store/trendingReducer";




export const TrendItem = ({item}:Item) => {
    return (
        <div className={s.wrapper}>
            <div>
                <img src={item.small} alt={'image'}/>
                <div>{item.name}</div>
                <div>Market rank : {item.market_cap_rank}</div>
            </div>
            <div>
                <div>Symbol : {item.symbol}</div>
                <div>Price in BTC : {item.price_btc.toFixed(10)}</div>
            </div>
        </div>
    );
};

