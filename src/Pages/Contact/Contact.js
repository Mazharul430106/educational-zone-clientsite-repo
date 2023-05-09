import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Contact = () => {

    
    return (
        <div className='px-5 pb-4'>
            <div>
                <h1 className='text-center pb-3 mb-3 mt-4'>Contact us</h1>
            </div>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 g-5'>
                <div>
                    <iframe className='w-100 h-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.86600718633!2d90.25446958979383!3d23.780863186788824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1683638576375!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <Form >
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 g-2'>
                            <div>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Frist Name</Form.Label>
                                    <Form.Control type="text" name='fastName' className='p-2' placeholder="Enter fast name" />
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name='lastName' className='p-2' placeholder="Enter your last name" />
                                </Form.Group>
                            </div>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email'  className='p-2' placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className=''>Message</Form.Label>
                            <textarea name='message' class="form-control" id="exampleFormControlTextarea1" placeholder='Type Your Message' rows="8"></textarea>
                        </Form.Group>

                        <Button variant="" type="submit" className='w-100 p-2 bg-info text-white' >
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;