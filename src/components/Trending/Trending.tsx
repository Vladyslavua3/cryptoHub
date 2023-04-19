import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import { trendingThunks, TrendingType} from "../../store/trendingReducer";
import s from './trending.module.css'
import {TrendItem} from "./TrendItem/TrendItem";
import {AppRootStateType, useAppDispatch} from "../../store/store";



export const Trending = () => {

    const dispatch = useAppDispatch()

    const trendingCoins = useSelector<AppRootStateType,TrendingType>(state => state.trending)

    useEffect(()=>{
        dispatch(trendingThunks.trendingFetch())
    },[])


    return (
        <div className={s.trendWrapper}>
            {trendingCoins.coins.map((e)=> <TrendItem key={e.item.coin_id} item={e.item}/>)}
        </div>
    );
};

