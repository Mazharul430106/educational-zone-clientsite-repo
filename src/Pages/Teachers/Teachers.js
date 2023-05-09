import React from 'react';
import DisplayTeachers from './DisplayTeachers';


const teacthers = [
    {
        "title": "Developer and Lead Instructor",
        "name": "Grover Warner",
        "Img": "https://i.ibb.co/wMXQKLd/08.webp",
        "desc": "Donec justo odio, tempus nec risus et, varius tempor turpis. Praesent quam tellus, interdum vitae mi ut, condimentum tristique nisi. Quisque lobortis leo odio. Nullam eu sapien ullamcorper, eleifend lorem ultricies, commodo ligula. Nunc a mauris congue elit auctor ullamcorpert"
    },
    {
        "title": "Web-developer, UX Architect",
        "name": "Oleta Carroll",
        "Img": "https://i.ibb.co/SfVnQRN/01.webp",
        "desc": "Donec justo odio, tempus nec risus et, varius tempor turpis. Praesent quam tellus, interdum vitae mi ut, condimentum tristique nisi. Quisque lobortis leo odio. Nullam eu sapien ullamcorper, eleifend lorem ultricies, commodo ligula. Nunc a mauris congue elit auctor ullamcorpert"
    },
    {
        "title": "Product&Project Management",
        "name": "Steve Weissnat",
        "Img": "https://i.ibb.co/Jvdv5RK/06.webp",
        "desc": "Donec justo odio, tempus nec risus et, varius tempor turpis. Praesent quam tellus, interdum vitae mi ut, condimentum tristique nisi. Quisque lobortis leo odio. Nullam eu sapien ullamcorper, eleifend lorem ultricies, commodo ligula. Nunc a mauris congue elit auctor ullamcorpert"
    },
    {
        "title": "software-developer",
        "name": "Dejuan Maggio",
        "Img": "https://i.ibb.co/sCJ4bzP/07.webp",
        "desc": "Donec justo odio, tempus nec risus et, varius tempor turpis. Praesent quam tellus, interdum vitae mi ut, condimentum tristique nisi. Quisque lobortis leo odio. Nullam eu sapien ullamcorper, eleifend lorem ultricies, commodo ligula. Nunc a mauris congue elit auctor ullamcorpert"
    },
]


const Teachers = () => {
    return (
        <div className='mt-5 mb-5 px-5'>
            <div className='mb-4'>
                <h1 className='text-center fs-1'>Course Teachers</h1>
            </div>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 '>
                {
                    teacthers.map(teacher => <DisplayTeachers teacher={teacher}></DisplayTeachers>)
                }
            </div>
        </div>

    );
};

export default Teachers;