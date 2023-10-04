import React, { Fragment } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Route, useNavigate, redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    return currentUser ? (
        <Route {...rest}>{(props) => <Component {...props}></Component>}</Route>
    ) : (

        <Fragment>
            {navigate("/")}
        </Fragment>

    );
};

export default PrivateRoute;