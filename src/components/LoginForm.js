import React, { useState } from 'react';
import TextInput from './TextInput';
import Button from './Button';
import Form from './Form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LoginForm = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');

    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('')
            setLoading(true)
            await login(email, password)
            navigate("/")
        } catch (err) {
            console.log(err.message)
            setLoading(false)
            setError("Failed to login")
        }
    }

    return (
        <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
            <TextInput
                type="text"
                placeholder="Enter email"
                required
                icon="alternate_email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
            />

            <TextInput type="password" placeholder="Enter password" icon="lock" value={password} onChange={(e) => setpassword(e.target.value)} />

            <Button type="submit" disabled={loading}>
                <span>Submit Now</span>
            </Button>

            {error && <p className='error'>{error}</p>}

            <div className="info">
                Don't have an account? <a href="signup.html">Signup</a> instead.
            </div>
        </Form>
    );
};

export default LoginForm;