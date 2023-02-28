import React from 'react';
import s from './Nav.module.css'
import {Link} from "react-router-dom";
export const Nav = () => {
    return (
        <div>
            <nav className={s.nav}>
                <div className={s.navList}>
                    <Link to={"/"}>Main</Link>
                    <Link to={"/allCrypto"}>Crypto Rank</Link>
                    <Link to={"/trending"}>Trending</Link>
                    <Link to={"/holders"}>Holders</Link>
                    <Link to={"/news"}>News</Link>
                    <Link to={"/portfolio"}>Portfolio</Link>
                </div>
            </nav>
        </div>
    );
};
