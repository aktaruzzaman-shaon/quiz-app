import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextInput from './TextInput';
import Checkbox from './Checkbox';
import Button from './Button';
import Form from './Form';
import { useAuth } from '../contexts/AuthContext';


const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [Confirmpassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState('');

    const { signUp } = useAuth();

    return (
        <Form style={{ height: "500px" }}>

            <TextInput type="text" placeholder="Enter name" icon="person" value={username} onChange={(e) => setUsername(e.target.value)}></TextInput>

            <TextInput type="text" placeholder="Enter email" icon="alternate_email" value={email} onChange={(e) => setemail(e.target.value)}></TextInput>

            <TextInput type="password" placeholder="Enter password" icon="lock" value={password} onChange={(e) => setpassword(e.target.value)}></TextInput>
            
            <TextInput type="password" placeholder="Confirm password" icon="lock_clock" value={Confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}></TextInput>

            <Checkbox text="I agree to the terms and condition" value={agree} onChange={(e)=>setAgree(e.target.value)}></Checkbox>

            <Button><span>Submit Now</span></Button>

            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>

        </Form>
    );
};

export default SignUpForm;