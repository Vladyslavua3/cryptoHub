import React from 'react';
import {companiesType} from "../../../store/holdersReducer";

import s from './Holder.module.css'
import {numbers} from "../../../utils/Numbers";



export const Holder = ({name, symbol,
                           country,
                           total_holdings,
                           total_entry_value_usd,
                           total_current_value_usd,
                           percentage_of_total_supply}:companiesType) => {
    return (
        <div className={s.wrapper}>
            <h1>{name}</h1>
            <div>
                <div>{country}</div>
                <div>Holdings BTC:{total_holdings}</div>
                <div>{symbol}</div>
            </div>
            <div>
                <div>How Much Spend:{numbers(total_entry_value_usd)}</div>
                <div>How Now Got:{numbers(total_current_value_usd)}</div>
                <div>Percent of total supply:{percentage_of_total_supply}</div>
            </div>
        </div>
    );
};

