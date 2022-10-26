import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Logo from '../../../assets/Logo/Logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { FaUser } from "react-icons/fa";

const Hader = () => {
    const { user, logOutUser } = useContext(AuthContext);
    console.log(user);

    const handleLogout = () => {
        logOutUser()
            .then(() => { })
            .catch(error => {
                console.error('error', error);
            })
    }

    return (
        <Navbar bg="secondary" expand="lg" className='mb-3' >
            <Container>
                <Image src={Logo} style={{ height: '50px', marginRight: '10px' }} ></Image>
                <Navbar.Brand className='text-white' href="#home">Educational Zone</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='text-white'>
                            <Link className='text-white text-decoration-none' to='/courses' >Courses</Link>
                        </Nav.Link>
                        <Nav.Link className='text-white'>
                            <Link className='text-white text-decoration-none' to='/blog'>Blog</Link>
                        </Nav.Link>
                        <Nav.Link className='text-white'>
                            <Link className='text-white text-decoration-none' to='/faq' >FAQ</Link>
                        </Nav.Link>

                        {
                            user?.uid ?
                                <>
                                    <Nav.Link className='text-white'>
                                        {user?.displayName}
                                    </Nav.Link>

                                    <Nav.Link>
                                        <Link onClick={handleLogout} className='text-white text-decoration-none'>Logout</Link>
                                    </Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link className='text-white'>
                                        <Link className='text-white text-decoration-none' to='/register'>Register</Link>
                                    </Nav.Link>
                                    <Nav.Link className='text-white'>
                                        <Link className='text-white text-decoration-none' to='/login'>Login</Link>
                                    </Nav.Link>
                                </>
                        }

                        <Nav.Link>
                           
                            {
                                user?.photoURL ?
                                <>
                                    <Image src={user?.photoURL} style={{height:'30px'}} roundedCircle > 
                                    
                                    </Image>
                                </>
                                : 
                                <>
                                    <FaUser></FaUser>
                                </>
                            }

                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Hader;