import React from 'react';
import Illustration from "../Illustration";

import SignUpForm from '../SignUpForm';

const SignUp = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration></Illustration>
                <SignUpForm></SignUpForm>
            </div>
        </>
    );
};

export default SignUp;