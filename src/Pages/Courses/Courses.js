import React from 'react';
import {useLoaderData} from 'react-router-dom';

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            {
                allCourses.map(course => console.log(course))
            }
        </div>
    );
};

export default Courses;