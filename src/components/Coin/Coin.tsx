import React, {useEffect} from 'react';
import {initState} from "../../store/coinsReducer";
import s from './Coin.module.css'
import {useAppDispatch} from "../../store/store";
import {fetchDescriptionTC} from "../../store/descriptionReducer";
import {NavLink} from "react-router-dom";


interface CoinsType extends initState{
}



export const Coin = (props:CoinsType) => {


    return (
        <NavLink to={'/' + props.id} style={{textDecoration:"none",color:"whitesmoke"}} onClick={()=>console.log(props.id)} >
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
        </NavLink>
    );
};
