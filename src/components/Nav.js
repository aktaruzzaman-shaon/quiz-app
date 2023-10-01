import React from 'react';
import classes from "../styles/Nav.module.css"
import logo from '../assets/logo-bg.png'
import Acccount from './Acccount';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to="/" className={classes.brand}>
                        <img src={logo} alt="Logo" />
                        <h3>Quiz APP</h3>
                    </Link>
                </li>
            </ul>
            <Acccount></Acccount>
        </nav>
    );
};

export default Nav;