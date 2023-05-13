import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import Table from 'react-bootstrap/Table';

const MyCourses = () => {
    const { user } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`https://educanal-server-site-assignment.vercel.app/courses?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div className='px-5 mt-5'>

            <div>
                <h1 className='text-center mb-5'>Booking Courses</h1>
            </div>


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        courses.map(course => <>
                            <tr>
                                <td>{course?.courseTitle}</td>
                                <td>{course?.name}</td>
                                <td>{course?.email}</td>
                                <td>{course?.price} Tk</td>
                            </tr>

                        </>)
                    }

                </tbody>
            </Table>


        </div>
    );
};

export default MyCourses;