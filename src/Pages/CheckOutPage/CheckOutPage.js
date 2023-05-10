import React, { useContext } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider';

const CheckOutPage = () => {
    const { user } = useContext(AuthContext);
    const courseDetails = useLoaderData();
    const { details, picture, title, _id, duration, price } = courseDetails;
    // console.log(courseDetails)
    return (
        <div className='px-5 mt-5'>

            <div className="card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={picture} className="img-fluid h-100 max-h-[350px] rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className='d-flex align-items-center justify-content-between'>
                                <h4 className="card-title">{title}</h4>
                                <FaDownload></FaDownload>
                            </div>

                            <p>{details}</p>
                            <p>
                                <span className='fw-bold text-info'>Price:</span> {price} Tk
                            </p>

                            <p>
                                <span className='fw-bold text-info'>Duration:</span> {duration} Month
                            </p>
                            <div className=' text-center mb-4 mt-5'>
                                <Button variant='info' style={{
                                    width: '100%',
                                    maxWidth: '200px',
                                    padding: '8px 0'
                                }} >
                                    <Link className='text-decoration-none text-white fw-semibold' to={`/courseRegister/${_id}`}>Get Premium Access</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Review section */}
            <div className='mt-5'>
                <h2>Leave a Comment</h2>
                <Form>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 g-2 '>
                        <div>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" defaultValue={user?.email} readOnly placeholder="Enter email" />
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="email" defaultValue={user?.displayName} readOnly placeholder="Enter email" />
                            </Form.Group>
                        </div>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Message</Form.Label>
                        <textarea name='message' class="form-control" id="exampleFormControlTextarea1" placeholder='Type Your Message' rows="8"></textarea>
                    </Form.Group>

                    <Button variant="info" className='text-white fw-semibold' type="submit" style={{
                        width: '100%',
                        maxWidth: '200px'
                    }} >
                        Add Review
                    </Button>
                </Form>



            </div>


        </div>

    );
};

export default CheckOutPage;