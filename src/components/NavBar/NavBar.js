import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navbar.module.css';

export default function NavBar() {
    return (
        <header className={s.navbar}>
            <div>
                <h3 className={s.movie}>M<img id="logofilm" src="/film.png" width="30" height="30" className="d-inline-block align-top" alt="" />vie app</h3>
            </div>
            <nav>
                <ul className={s.list}>
                    <li className={s["list-item"]}>
                        <NavLink exact to="/" className={s.home}>Home</NavLink>
                        <NavLink to="/favs" >Favorites</NavLink>
                        <a href="https://www.linkedin.com/in/yulianacastrodiaz/" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin-circled--v1.png" alt="icon-linkedin"/>
                        </a>
                        <a className={s.github} href="https://github.com/yulianacastrodiaz" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/windows/32/ffffff/github.png" alt="icon-github"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}