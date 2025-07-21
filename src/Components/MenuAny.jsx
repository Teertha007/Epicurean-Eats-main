import React from 'react';
import { Link } from 'react-router-dom';
import MenuList from './MenuList';

const MenuAny = ({ item ,title}) => {

    return (
        <div className='container mx-auto my-10'>
            <div className='grid lg:grid-cols-2 gap-5'>
                {
                    item.map(item =><MenuList title={title} key={item._id} item={item}></MenuList> )
                }
            </div>
            <div className='flex justify-center'>
                <Link to={`/order/${title}`}><button className='btn btn-outline border-x-0 border-t-0 border-b-4'>Order your favorite food</button></Link>
            </div>
           


        </div>
    );
};

export default MenuAny;