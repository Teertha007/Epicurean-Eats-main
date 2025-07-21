import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Home = () => {

    let location = useLocation();

    let hide = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
           { hide || <Navbar></Navbar>}
            <Outlet></Outlet>
          {hide ||   <Footer></Footer>}
            
        </div>
    );
};

export default Home;