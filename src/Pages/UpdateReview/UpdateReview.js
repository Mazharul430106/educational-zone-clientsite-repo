import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const UpdateReview = () => {
    const { user } = useContext(AuthContext);
    const singleReview = useLoaderData();
    // console.log(singleReview)
    const { register, handleSubmit } = useForm();

    const handleUpdateReview = (data, e) => {
        fetch(`http://localhost:5000/reviews/${singleReview._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if(data.acknowledged){
                    toast.success('Review Update Successfully');
                }

                e.target.reset();
            })
    }

    return (
        <div className='px-5'>
            <div className='mt-5'>
                <h2>Leave a Comment</h2>
                <Form onSubmit={handleSubmit(handleUpdateReview)}>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 g-2 '>
                        <div>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" {...register('name', { required: true })} name='name' defaultValue={user?.displayName} readOnly placeholder="Enter email" />
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" {...register('email', { required: true })} name='email' defaultValue={user?.email} readOnly placeholder="Enter email" />
                            </Form.Group>
                        </div>
                    </div>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Course Title</Form.Label>
                        <Form.Control type="text" {...register('title', { required: true })} name='title' defaultValue={singleReview?.title} readOnly placeholder="Enter title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Message</Form.Label>
                        <textarea maxLength={80} minLength={20} {...register('message', { required: true })} name='message' defaultValue={singleReview?.message} class="form-control" id="exampleFormControlTextarea1" placeholder='Type Your Message' rows="8"></textarea>
                    </Form.Group>

                    <Button variant="info" className='text-white fw-semibold' type="submit" style={{
                        width: '100%',
                        maxWidth: '200px'
                    }} >
                        Update Review
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default UpdateReview;