import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='border mt-5 bg-black text-white p-5'>
            <div className='row row-cols-1 row-cols-md-4 row-cols-lg-4'>
                <div>
                    <div>
                        <div>

                            <h3>Educational Zone</h3>
                        </div>
                        <p>Curabitur non libero at lorem finibus lobortis. Ut auctor egestas pretium. Proin nunc ligula, venenatis tempor</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-center gap-2 py-3 pb-5'>
                        <Link style={{
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            background: 'white',
                            color:'black'
                        }}>
                            <FaFacebookF className=''></FaFacebookF>
                        </Link>

                        <Link style={{
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            background: 'white',
                            color:'black'
                        }}>
                            <FaYoutube className=''></FaYoutube>
                        </Link>
                        <Link style={{
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            background: 'white',
                            color:'black'
                        }}>
                            <FaLinkedinIn></FaLinkedinIn>
                        </Link>
                        <Link style={{
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            background: 'white',
                            color:'black'
                        }}>
                            <FaTwitter className=''></FaTwitter>
                        </Link>
                    </div>

                </div>
                <div>
                    <h3>Informations</h3>
                    <Link to='' className='text-decoration-none d-block text-black text-white pb-1'>About This Project</Link>
                    <Link to='' className='text-decoration-none d-block text-black text-white pb-1'>Contact Us</Link>
                    <Link to='' className='text-decoration-none d-block text-black text-white pb-1'>All Courses</Link>
                    <Link to='' className='text-decoration-none d-block text-black text-white pb-1'>From the Blog</Link>
                    <Link to='' className='text-decoration-none d-block text-black text-white pb-1 mb-3'>Faq</Link>
                </div>
                <div>
                    <h3 className=''>Popular Courses</h3>
                    <Link className='text-decoration-none d-block text-black text-white pb-1'>Web Design</Link>
                    <Link className='text-decoration-none d-block text-black text-white pb-1'>Web Development</Link>
                    <Link className='text-decoration-none d-block text-black text-white pb-1'>Web Graphic Design & Development</Link>
                    <Link className='text-decoration-none d-block text-black text-white pb-1'>Degital Marketaing</Link>
                    <Link className='text-decoration-none d-block text-black text-white pb-1'>Software Development</Link>
                    <Link className='text-decoration-none d-block text-black text-white pb-1 mb-3'>UX UI Design</Link>
                </div>
                <div>
                    <h3>Contact</h3>
                    <div>
                        <Link className='text-decoration-none text-white d-block pb-1'>Address : Mirpur 10 House - 312 </Link>
                        <Link className='text-decoration-none text-white d-block pb-1'>Email : educationalZone@gmail.com</Link>
                        <Link className='text-decoration-none text-white d-block pb-1'>Phone : +91 555 668 986</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;