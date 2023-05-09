
import React from 'react';
import { Link } from 'react-router-dom';

const DisplayTeachers = ({ teacher }) => {
    const { name, title, Img, desc, } = teacher;
    return (
        <div className='col'>
            <div class="card" >
                <Link to=''>
                    <img src={Img} class="card-img-top" alt="..." />
                </Link>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{title}</p>

                </div>
            </div>
        </div>
    )
};

export default DisplayTeachers;