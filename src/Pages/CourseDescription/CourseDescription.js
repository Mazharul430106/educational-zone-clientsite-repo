import React from 'react';
import {Link} from 'react-router-dom';

const CourseDescription = ({course}) => {
    const { title, picture,id } = course;
    return (
        <div className="col">
            <div className="card">
                <img src={picture} style={{ height: '200px' }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title"><Link className='text-black' to={`/checkout/${id}`}>{title}</Link> </h6>
                </div>
            </div>
        </div>
    );
};

export default CourseDescription;