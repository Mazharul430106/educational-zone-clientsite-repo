import React from 'react';


const CoursesDetails = ({ course }) => {
    const { title, picture } = course;
    return (
        <div className="col">
            <div className="card">
                <img src={picture} style={{height: '300px'}} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails;