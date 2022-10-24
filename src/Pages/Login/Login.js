import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from "react";
import {AuthContext} from '../../Contexts/AuthProvider';

const Login = () => {

    const {loginUser} = useContext(AuthContext);

    const handleSubmitFormLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        loginUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=> {
            console.error('error',error);
        })
    }

    return (
        <Container>
            <Form onSubmit={handleSubmitFormLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            
        </Container>
    );
};

export default Login;