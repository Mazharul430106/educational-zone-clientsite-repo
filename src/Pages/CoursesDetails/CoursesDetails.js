import React from 'react';
import { Link } from 'react-router-dom';

const CoursesDetails = ({ course }) => {
    const { title, picture, price, details, _id } = course;
    return (
        <div className="col">
            <div className="card">
                <img className="card-img-top" alt="..." src={picture} style={{ height: '300px' }} />
                <div className="card-body">
                    <h5 className="card-title"><Link to={`/checkout/${_id}`} className='text-black text-decoration-none'>{title}</Link></h5>
                    <p className='card-text'>
                        {details.length > 50 ? <>{details.slice(0, 100) } <Link to={`/checkout/${_id}`}> read more</Link></> : <>{details}</>  }
                    </p>
                    <p>
                       <span className='fw-bold'>Price:</span> {price} Tk
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails;