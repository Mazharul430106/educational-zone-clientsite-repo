import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData,Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';

const CheckOutPage = () => {
    const courseDetails = useLoaderData();
    const { details, picture, title, id } = courseDetails;
    return (
        <Container>
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={picture} className="img-fluid h-100 rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className='d-flex align-items-center justify-content-between'>
                                <h5 className="card-title">{title}</h5>
                                <FaDownload></FaDownload>
                            </div>

                            <p>{details}</p>
                            <div className='text-center'>
                                <Link  className='border-0 text-decoration-none bg-secondary p-2 rounded ps-3 pe-3 text-white' to={`/checkInfo/${id}`}>Get Premium Access</Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CheckOutPage;