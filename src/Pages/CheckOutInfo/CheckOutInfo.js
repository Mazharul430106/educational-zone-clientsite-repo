import React from 'react';
import { Container } from 'react-bootstrap';

import { useLoaderData } from 'react-router-dom';

const CheckOutInfo = () => {
    const checkInfo = useLoaderData();
    const {title, id, price} = checkInfo;

    return (
        <Container>
            <h2>Id : {id}</h2>
            <h2>Display Name : {title}</h2>
            <h3>Price : {price} Tk</h3>
        </Container>
    );
};

export default CheckOutInfo;