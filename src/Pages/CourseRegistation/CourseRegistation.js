import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider';

const CourseRegistation = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    const singleCourse = useLoaderData();
    console.log(singleCourse)

    return (
        <div>
            <h1 className='text-center my-5'>{singleCourse.title}</h1>

            <div className='shadow-lg' style={{
                width: '100%',
                maxWidth: '450px',
                margin: '50px auto',
                padding: '15px 20px',
                paddingBottom: '20px',
                borderRadius: '4px'
            }}>

                <Form>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Title </Form.Label>
                        <Form.Control type="text" defaultValue={singleCourse?.title} readOnly placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Price </Form.Label>
                        <Form.Control type="text" defaultValue={singleCourse?.price} readOnly placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Duration </Form.Label>
                        <Form.Control type="text" defaultValue={singleCourse?.duration} readOnly placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Name </Form.Label>
                        <Form.Control type="text" defaultValue={user?.displayName} readOnly placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" defaultValue={user?.email} readOnly placeholder="Enter email" />
                    </Form.Group>
                    <Button variant="info" className='text-white w-100' type="submit">
                        Course Sign Up
                    </Button>
                </Form>

            </div>
        </div>
    );
};

export default CourseRegistation;