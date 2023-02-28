import React, {useEffect} from 'react';
import {AppRootStateType, useAppDispatch} from "../../store/store";
import {useSelector} from "react-redux";
import {trendingTC, TrendingType} from "../../store/trendingReducer";
import s from './trending.module.css'
import {TrendItem} from "./TrendItem/TrendItem";



export const Trending = () => {

    const dispatch = useAppDispatch()

    const trendingCoins = useSelector<AppRootStateType,TrendingType>(state => state.trending)

    useEffect(()=>{
        const thunk = trendingTC()
        dispatch(thunk)
    },[])

  console.log(trendingCoins)

    return (
        <div className={s.trendWrapper}>
            {trendingCoins.coins.map((e)=> <TrendItem item={e.item}/>)}
        </div>
    );
};

