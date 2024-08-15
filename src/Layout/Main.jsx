import React from 'react';
import Navbar from '../Utilis/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Utilis/Footer';

const Main = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;