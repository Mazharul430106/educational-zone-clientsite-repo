import React from 'react';
import { Container } from 'react-bootstrap';
import {useLoaderData} from "react-router-dom";
import CoursesDetails from '../CoursesDetails/CoursesDetails';


const Home = () => {
    const allCourses = useLoaderData();
    // console.log(allCourses);

    return (
            <Container>

                <div className='row row-cols-1 row-cols-lg-3 g-4 mb-3'> 
                    {
                        allCourses.map(course=> <CoursesDetails key={course.id} course={course}></CoursesDetails>)
                    }
                </div>
                
            </Container>
        
    );
};

export default Home;