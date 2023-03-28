import {AppRootStateType, useAppDispatch} from "../../store/store";
import {useSelector} from "react-redux";
import {holdersBTCTC, holdersType} from "../../store/holdersReducer";
import {useEffect} from "react";
import s from './Holders.module.css'
import {Holder} from "./Holder/Holder";
import {Login} from "../Login/Login";



interface HoldersType {
    auth:boolean
}


export const Holders = ({auth}:HoldersType) => {

    const dispatch = useAppDispatch()

    const holders = useSelector<AppRootStateType,holdersType>(state => state.holders)


    useEffect(()=>{
        const thunk = holdersBTCTC()
        dispatch(thunk)
    },[])



    if(!holders) return <div>Sorry Coinghecko Api not working now</div>


    return (
        auth ?
        <div className={s.main}>
            {holders.companies.map((e)=>{
                return <Holder name={e.name} symbol={e.symbol} country={e.country} percentage_of_total_supply={e.percentage_of_total_supply} total_current_value_usd={e.total_current_value_usd} total_entry_value_usd={e.total_entry_value_usd} total_holdings={e.total_holdings}/>
            })}
        </div>
            :
            <Login/>
    );
};
