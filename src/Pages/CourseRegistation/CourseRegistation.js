import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const CourseRegistation = () => {

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
                        <Form.Label>Name </Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Button variant="info" className='text-white' type="submit">
                        Register
                    </Button>
                </Form>

            </div>

        </div>
    );
};

export default CourseRegistation;