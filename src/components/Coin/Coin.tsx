import React from 'react';
import {initState} from "../../store/coinsReducer";
import s from './Coin.module.css'
import {NavLink} from "react-router-dom";
import {numbers} from "../../utils/Numbers";


interface CoinsType extends initState{
}



export const Coin = (props:CoinsType) => {

    if(props.error) return <h1>Error</h1>

    return (
        <NavLink to={'/' + props.id} style={{textDecoration:"none",color:"whitesmoke"}}>
            <div className={s.coinRow}>
                <p>{props.market_cap_rank}</p>
                <div className={s.imgSymbol}>
                    <img src={props.image} alt={''}/>
                    <p>{props.symbol.toUpperCase()}</p>
                </div>
                <p>${props.current_price.toLocaleString()}</p>
                <p className={s.hideMobile}>{props.price_change_percentage_24h.toFixed(2)}</p>
                <p className={s.hideMobile}>${props.total_volume.toLocaleString()}</p>
                <p className='hide-mobile'>${props.market_cap.toLocaleString()}</p>
            </div>

        </NavLink>
    );
};
