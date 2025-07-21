import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Menu from '../Components/Menu';
import Featured from '../Components/Featured';
import Reviews from '../Components/Reviews';
import { Helmet } from 'react-helmet';

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Epicurean Eats</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Menu></Menu>
            <Featured></Featured>
            <Reviews></Reviews>
        </div>
    );
};

export default HomePage;