import React from 'react';
import {Login} from "../Login/Login";


interface NewsType {
    isAuth:boolean
}

export const News = ({isAuth}: NewsType) => {
    return (
        isAuth ?
            <div>
                Coming Soon...
            </div>
            :
            <Login/>
    );
};

