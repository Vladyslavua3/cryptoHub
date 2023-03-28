import React from 'react';
import s from './Nav.module.css'
import {Link} from "react-router-dom";


export const Nav = () => {
    return (
        <div>
            <nav className={s.nav}>
                <div className={s.navList}>
                    <Link to={"/cryptoHub"}>Main</Link>
                    <Link to={"/cryptoHub/allCrypto"}>Crypto Rank</Link>
                    <Link to={"/cryptoHub/trending"}>Trending</Link>
                    <Link to={"/cryptoHub/holders"}>Holders</Link>
                    <Link to={"/cryptoHub/news"}>News</Link>
                    <Link to={"/cryptoHub/portfolio"}>Portfolio</Link>
                </div>
            </nav>
        </div>
    );
};
