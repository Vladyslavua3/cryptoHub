import React from 'react';
import s from './Nav.module.css'
import {Link, NavLink} from "react-router-dom";
export const Nav = () => {
    return (
        <div>
            <nav className={s.nav}>
                <ul className={s.navList}>
                    <Link to={"/"}><li>Main</li> </Link>
                    <Link to={"/allCrypto"}><li>Crypto Rank</li></Link>
                    <Link to={"/news"}><li>News</li></Link>
                    <Link to={"/portfolio"}><li>Portfolio</li></Link>
                </ul>
            </nav>
        </div>
    );
};
