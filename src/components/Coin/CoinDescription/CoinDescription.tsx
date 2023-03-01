import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {fetchDescriptionTC, initDesState} from "../../../store/descriptionReducer";
import {AppRootStateType, useAppDispatch} from "../../../store/store";
import {useParams} from "react-router-dom";

export const CoinDescription = () => {

    const dispatch = useAppDispatch()

    const {id} = useParams()

    const coin = useSelector<AppRootStateType, initDesState>(state => state.description)

    if(id)
    useEffect(() => {
        const thunk = fetchDescriptionTC(id)
        dispatch(thunk)
        console.log(coin.id)
    }, [])


    return (
        <div>
            {coin.id}
            <div>{coin.description.en}</div>
            <img src={coin.image.large} alt={'ava'}/>
            <div>{coin.name}</div>
            <div>{coin.symbol}</div>
        </div>
    );
};

