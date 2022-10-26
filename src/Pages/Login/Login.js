import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from "react";
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {

    const { loginUser, providerLogin } = useContext(AuthContext);
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleSubmitFormLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
                navigate(from, { replace: true });
                
            })
            .catch(error => {
                console.error('error', error);
                
            })
    }

    const handleSignInGoogle = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log('error', error);
            })
    }

    const handleSignInFacebook = () => {
        providerLogin(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log('error', error);
            })
    }

    return (
        <Container className='w-25 border p-3 pb-4 mt-5 rounded'>
            <Form onSubmit={handleSubmitFormLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit" className='w-100 mt-3'>
                    Login
                </Button>
            </Form>
            <Button onClick={handleSignInFacebook} variant="secondary" className='w-100 mt-2 mb-2'> <FaFacebook></FaFacebook> Login With Facebook</Button>
            <Button onClick={handleSignInGoogle} variant="success" className='w-100 mb-2'> <FaGoogle></FaGoogle> Login With Google</Button>
            <Link to='/register'>Please Register</Link>
        </Container>
    );
};

export default Login;
