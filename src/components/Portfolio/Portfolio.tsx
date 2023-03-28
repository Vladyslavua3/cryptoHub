import React from 'react';
import {Login} from "../Login/Login";

interface PortfolioType {
    isAuth:boolean
}


export const Portfolio = ({isAuth}: PortfolioType) => {
    return (
        isAuth ?
            <div>Portfolio</div> : <Login/>
    );
};
