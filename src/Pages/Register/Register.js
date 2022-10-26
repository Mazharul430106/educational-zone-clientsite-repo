import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {

    const { createUser , updateUserProfile} = useContext(AuthContext);
    const [acepte, setAcepte] = useState(false);
    const [success, setSuccess] = useState('');

    const handleSubmitFormRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.Url.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photoUrl,email,password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setSuccess('Registration Succesfull.');
                handleUpdateUserProfile(name,photoUrl);
            })
            .catch(error => {
                console.error('error', error);
            })
    }

    const handleUpdateUserProfile = (name, photoUrl)=>{
        const profile = {
            displayName: name,
            photoURL: photoUrl
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error=> {
            console.log('error',error);
        })
    }

    const handleChecked = (event) => {
        setAcepte(event.target.checked);
    }

    return (
        <Container className='w-25 border p-5 mt-5 rounded'>
            <Form onSubmit={handleSubmitFormRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo_URL</Form.Label>
                    <Form.Control type="text" name='Url' placeholder="Enter Url" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                
                <Form.Group>
                    <Form.Text className="text-success">
                       {success}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={handleChecked} label={<>Acepte <Link to='/trams'>Trams And Conditions</Link> </>} />
                </Form.Group>

                <Button className='w-100' variant="primary" type="submit" disabled={!acepte}>
                    Register
                </Button>
            </Form>
        </Container>
    );
};

export default Register;