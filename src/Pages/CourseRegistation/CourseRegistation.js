import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const CourseRegistation = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const singleCourse = useLoaderData();
    // console.log(singleCourse)

    const { register, handleSubmit } = useForm();
    const courseRegisterForm = (data) => {
        console.log(data);

        fetch('http://localhost:5000/courses', {
            method: 'post',
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                   toast.success('Booking Successfully') 
                }
                console.log(data);
            })

    }


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

                <Form onSubmit={handleSubmit(courseRegisterForm)}>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Title </Form.Label>
                        <Form.Control type="text" {...register('courseTitle', { required: true })} name='courseTitle' defaultValue={singleCourse?.title} readOnly placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Price </Form.Label>
                        <Form.Control type="text" {...register('price', { required: true })} name='price' defaultValue={singleCourse?.price} readOnly placeholder="Enter price" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Duration </Form.Label>
                        <Form.Control type="text" {...register('duration', { required: true })} name='duration' defaultValue={singleCourse?.duration} readOnly placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Name </Form.Label>
                        <Form.Control type="text" {...register('name', { required: true })} name='name' defaultValue={user?.displayName} readOnly placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" {...register('email', { required: true })} name='email' defaultValue={user?.email} readOnly placeholder="Enter email" />
                    </Form.Group>
                    <Button variant="info" className='text-white w-100 fw-semibold' type="submit">
                        Course Booking
                    </Button>
                </Form>

            </div>
        </div>
    );
};

export default CourseRegistation;