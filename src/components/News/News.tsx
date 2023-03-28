import React from 'react';
import {Login} from "../Login/Login";


interface NewsType {
    auth:boolean
}

export const News = ({auth}: NewsType) => {
    return (
        auth ?
            <div>
                Coming Soon...
            </div>
            :
            <Login/>
    );
};

