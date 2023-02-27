import {AppRootStateType, useAppDispatch} from "../../store/store";
import {useSelector} from "react-redux";
import {holdersBTCTC, holdersType} from "../../store/holdersReducer";
import {useEffect} from "react";
import s from './Holders.module.css'

export const Holders = () => {

    const dispatch = useAppDispatch()

    const holders = useSelector<AppRootStateType,holdersType>(state => state.holders)


    useEffect(()=>{
        const thunk = holdersBTCTC()
        dispatch(thunk)
    },[])

    return (
        <div className={s.main}>
            {holders.companies.map((e)=>{
                return <div>
                    <div>{e.name}</div>
                    <div>{e.percentage_of_total_supply}</div>
                    <div>{e.total_holdings}</div>
                </div>
            })}
        </div>
    );
};
