import React from 'react';
import {Outlet} from 'react-router-dom';
import Hader from '../Pages/Shared/Hader/Hader';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Hader></Hader>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;