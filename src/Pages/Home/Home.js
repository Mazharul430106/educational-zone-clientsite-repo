import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from "react-router-dom";
import CoursesDetails from '../CoursesDetails/CoursesDetails';
import Teachers from '../Teachers/Teachers';
import CarouselSlider from '../../Components/CarouselSlider/CarouselSlider';


const Home = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);

    return (

        <div>

            <CarouselSlider></CarouselSlider>

            <div className='services-section px-5'>
                <div>
                    <h1 className='text-center pt-2 pb-3'>Our Popular Courses</h1>
                </div>

                <div className='row row-cols-1 row-cols-lg-3 g-4 mb-3'>
                    {
                        allCourses.map(course => <CoursesDetails key={course.id} course={course}></CoursesDetails>)
                    }
                </div>
            </div>

            <Teachers></Teachers>
        </div>


    );
};

export default Home;