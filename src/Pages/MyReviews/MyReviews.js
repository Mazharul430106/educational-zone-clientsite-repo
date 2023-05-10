import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';


const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    console.log(reviews)

    useEffect(() => {
        fetch(`https://educanal-server-site-assignment.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])




    return (
        <div className='mt-5 px-5'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>User Name</th>
                        <th>Review</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review => <>

                            <tr>
                                <td>{review?.title}</td>
                                <td>{review?.name}</td>
                                <td>{review?.message}</td>
                                <td className=''>
                                    <Button variant='info text-white'>Update</Button>
                                    <Button variant='info' className='text-white' style={{
                                        marginLeft: '15px'
                                    }}>Delete</Button>
                                </td>
                            </tr>

                        </>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyReviews;