import React from 'react';
import {Link} from 'react-router-dom';
import { Container } from 'react-bootstrap';

const TramsAndConditions = () => {
    return (
        <div>
            <Container>
                <h3>Please Folow The Trams And Conditions</h3>
                <Link to='/register' className='text-info'>Please Register</Link>
            </Container>   
        </div>
    );
};

export default TramsAndConditions;