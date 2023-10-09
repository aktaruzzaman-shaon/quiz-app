import React, { Fragment, useDebugValue, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!currentUser) {
            navigate("/login")
            return
        }
    }, [])

    return children;
};

export default PrivateRoute;