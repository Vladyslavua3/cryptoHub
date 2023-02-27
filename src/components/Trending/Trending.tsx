import React, {useEffect} from 'react';
import {AppRootStateType, useAppDispatch} from "../../store/store";
import {useSelector} from "react-redux";
import {trendingTC, TrendingType} from "../../store/trendingReducer";
import s from './trending.module.css'



export const Trending = () => {

    const dispatch = useAppDispatch()

    const trendingCoins = useSelector<AppRootStateType,TrendingType>(state => state.trending)

    useEffect(()=>{
        const thunk = trendingTC()
        dispatch(thunk)
    },[])

  console.log(trendingCoins)

    return (
        <div>
            {trendingCoins.coins.map((e)=> <div className={s.trend} key={e.item.coin_id}>{e.item.name}</div>)}
        </div>
    );
};

