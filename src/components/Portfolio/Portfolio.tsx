import React from 'react';
import {Login} from "../Login/Login";

interface PortfolioType {
    auth:boolean
}


export const Portfolio = ({auth}:PortfolioType) => {
    return (
         auth  ? <div>Portfolio</div> : <Login />
    );
};
