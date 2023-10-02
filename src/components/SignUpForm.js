import React, { useState } from 'react';
import { Link, useHistory, useNavigate } from 'react-router-dom';
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
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');

    const { signUp } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        //pass validationa
        if (password !== Confirmpassword) {
            return setError("Password don't match")
        }
        try {
            setError('')
            setLoading(true)
            await signUp(email, password, username)
            navigate("/")
        } catch (err) {
            console.log(err)
            setLoading(false)
            setError("Failed to create an account")
        }
    }

    return (
        <Form style={{ height: "500px" }} onSubmit={handleSubmit}>

            <TextInput type="text" required placeholder="Enter name" icon="person" value={username} onChange={(e) => setUsername(e.target.value)}></TextInput>

            <TextInput type="text" required placeholder="Enter email" icon="alternate_email" value={email} onChange={(e) => setemail(e.target.value)}></TextInput>

            <TextInput type="password" required placeholder="Enter password" icon="lock" value={password} onChange={(e) => setpassword(e.target.value)}></TextInput>

            <TextInput type="password" required placeholder="Confirm password" icon="lock_clock" value={Confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}></TextInput>

            <Checkbox text="I agree to the terms and condition" required value={agree} onChange={(e) => setAgree(e.target.value)}></Checkbox>

            <Button type="submit" disabled={loading}><span>Submit Now</span></Button>
            {error && <p className='error'>{error}</p>}

            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>

        </Form>
    );
};

export default SignUpForm;