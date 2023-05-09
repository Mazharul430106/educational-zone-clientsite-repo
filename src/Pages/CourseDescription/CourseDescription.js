import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseDescription = ({ course }) => {
    const { title, picture, _id, details, price } = course;
    return (
        <div className="col mt-5">
            <div className="card">
                <img src={picture} style={{ height: '200px' }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title"><Link className='text-black text-decoration-none' to={`/checkout/${_id}`}>{title}</Link> </h6>
                    <p>{details.length > 50 ? <>{details.slice(0, 100)} <Link >Read More</Link>  </> : { details }}</p>
                    <p> <strong>Price : $</strong>{price} Tk</p>
                    <Link className='mx-auto' to=''>
                        <Button className='px-3'>Sign up for a course</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDescription;