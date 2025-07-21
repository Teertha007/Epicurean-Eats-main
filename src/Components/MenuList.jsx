import React from 'react';
import { Link } from 'react-router-dom';

const MenuList = ({ item, title }) => {
    return (
        <div className='container mx-auto'>
            <div key={item._id} className='shadow-md rounded-md p-4'>
                <div className='flex'>
                    <div className='w-[90px]'>
                        <img style={{ borderRadius: ' 0 200px 200px 200px' }} src={item.image} alt="" />
                    </div>
                    <div>
                        <h1 className='font-semibold'>{item.name}-----------</h1>
                        <p>{item.recipe}</p>
                    </div>
                    <div>
                        <h1 className='text-error'>${item.price}</h1>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default MenuList;