import React from 'react';
import OrderBg from '../../public/assets/shop/banner2.jpg'
import Cover from '../Components/Cover';
import MenuCard from '../Components/MenuCard';
import UseMenu from '../Hooks/UseMenu';

const OrderPage = () => {

  

    return (
        <div>
            <Cover img={OrderBg} title={'Our shop'} subTitle={'Would You like to try a dish?'}></Cover>
            <MenuCard></MenuCard>
            
        </div>
    );
};

export default OrderPage;