import React, { Children } from 'react';
import Nav from './Nav';
import classes from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <Nav></Nav>
            <main className={classes.main}>
                <div className={classes.container}>
                    {children}
                </div>
            </main>
        </>
    );
};

export default Layout;