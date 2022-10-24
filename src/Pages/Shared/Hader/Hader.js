import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Logo from '../../../assets/Logo/Logo.png';

const Hader = () => {
    return (
        <Navbar bg="secondary" expand="lg">
            <Container> 
                <Image src={Logo} style={{height: '50px', marginRight: '10px' }} ></Image>
                <Navbar.Brand className='text-white' href="#home">Educational Zone</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
                        <Nav.Link href="#home" className='text-white'>Courses</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>Blog</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>Faq</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>Register</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Hader;