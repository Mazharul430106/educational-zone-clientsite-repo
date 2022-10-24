import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Logo from '../../../assets/Logo/Logo.png';
import {Link} from 'react-router-dom';

const Hader = () => {
    return (
        <Navbar bg="secondary" expand="lg">
            <Container> 
                <Image src={Logo} style={{height: '50px', marginRight: '10px' }} ></Image>
                <Navbar.Brand className='text-white' href="#home">Educational Zone</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='text-white'>
                            <Link className='text-white text-decoration-none' to='/home'>Home</Link>
                        </Nav.Link>
                        <Nav.Link className='text-white'>
                            <Link className='text-white text-decoration-none' to='/courses' >Courses</Link>  
                        </Nav.Link>
                        <Nav.Link className='text-white'>
                            <Link className='text-white text-decoration-none' to='/blog'>Blog</Link>
                        </Nav.Link>
                        <Nav.Link className='text-white'>
                            <Link className='text-white text-decoration-none' to='/faq' >Faq</Link>
                        </Nav.Link>
                        <Nav.Link className='text-white'>
                            <Link className='text-white text-decoration-none' to='/register'>Register</Link>
                        </Nav.Link>
                        <Nav.Link className='text-white'>
                            <Link className='text-white text-decoration-none' to='/login'>Login</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Hader;