import React from 'react';

import { useLoaderData } from 'react-router-dom';

const CheckOutInfo = () => {
    const checkInfo = useLoaderData();
    const {title, id} = checkInfo;

    return (
        <div>
            <h2>Id : {id}</h2>
            <h1>Display Name : {title}</h1>
        </div>
    );
};

export default CheckOutInfo;