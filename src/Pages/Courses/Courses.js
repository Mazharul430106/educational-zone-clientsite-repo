import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseDescription from '../CourseDescription/CourseDescription';
import { Link } from 'react-router-dom';

const Courses = () => {
    const allCourses = useLoaderData();

    return (
        <Container>
            <div className='row'>
                <div className='col-lg-3'>
                   <h5><Link className='text-decoration-none text-black' to='/checkout/1'>Web Design</Link></h5>
                   <h5><Link className='text-decoration-none text-black' to='/checkout/2'>Web Development</Link></h5>
                   <h5><Link className='text-decoration-none text-black' to='/checkout/3'>Grapich Design</Link></h5>
                   <h5><Link className='text-decoration-none text-black' to='/checkout/4'>Desitial Marketing</Link></h5>
                   <h5><Link className='text-decoration-none text-black' to='/checkout/5'>Software Development</Link></h5>
                   <h5><Link className='text-decoration-none text-black' to='/checkout/6'>Ux Ui Design</Link></h5>
                </div>
                <div className='col-lg-9'>
                    <div className='row row-cols-1 row-cols-lg-3 g-4 mb-3'>
                        {
                            allCourses.map(course => <CourseDescription key={course.id} course={course}></CourseDescription>)
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Courses;