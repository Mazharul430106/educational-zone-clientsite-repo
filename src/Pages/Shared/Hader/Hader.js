import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Logo from '../../../assets/Logo/Logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { FaUser } from "react-icons/fa";

const Hader = () => {
    const { user, logOutUser } = useContext(AuthContext);
    // console.log(user);

    // const [darkMode, setDarkMode] = useState(false);

    const handleLogout = () => {
        logOutUser()
            .then(() => { })
            .catch(error => {
                console.error('error', error);
            })
    }

    return (
        <Navbar bg="secondary" expand="lg" className='px-5'>
            <Image src={Logo} style={{ height: '50px', marginRight: '10px' }} ></Image>
            <Navbar.Brand className='text-white'>
                <Nav.Link>
                    <Link className='text-white text-decoration-none fs-4' to='/'>Educational Zone</Link>
                </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className='text-white'>
                        <Link className='text-white text-decoration-none fs-5' to='/courses' >Courses</Link>
                    </Nav.Link>
                    <Nav.Link className='text-white'>
                        <Link className='text-white text-decoration-none fs-5' to='/blog'>Blog</Link>
                    </Nav.Link>
                    <Nav.Link className='text-white'>
                        <Link className='text-white text-decoration-none fs-5' to='/faq' >Faq</Link>
                    </Nav.Link>
                    <Nav.Link className='text-white'>
                        <Link className='text-white text-decoration-none fs-5' to='/myReviews' >My Reviews</Link>
                    </Nav.Link>
                    <Nav.Link className='text-white'>
                        <Link className='text-white text-decoration-none fs-5' to='/myCourses' >My Courses</Link>
                    </Nav.Link>
                    {
                        user?.uid ?
                            <>
                                <Nav.Link>
                                    <Link onClick={handleLogout} className='text-white text-decoration-none fs-5'>Logout</Link>
                                </Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link className='text-white'>
                                    <Link className='text-white text-decoration-none fs-5' to='/register'>Register</Link>
                                </Nav.Link>
                                <Nav.Link className='text-white'>
                                    <Link className='text-white text-decoration-none fs-5' to='/login'>Login</Link>
                                </Nav.Link>
                            </>
                    }

                    <Nav.Link>
                        {
                            user?.photoURL ?
                                <>
                                    <Image title={user?.displayName} src={user?.photoURL} style={{ height: '30px', width: '30px' }} roundedCircle >

                                    </Image>
                                </>
                                :
                                <>
                                    <FaUser className='text-white'></FaUser>
                                </>
                        }
                    </Nav.Link>

                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
};

export default Hader;