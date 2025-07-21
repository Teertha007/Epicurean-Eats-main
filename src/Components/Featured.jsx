import React from 'react';
import bg from '../../public/assets/home/featured.jpg'
import SectionTitle from './SectionTitle';

const Featured = () => {
    return (
        <div className='my-20'>
            <div className="hero bg-fixed min-h-screen" style={{ backgroundImage: `url("../../public/assets/home/featured.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="w-full h-full  text-neutral-content">
                    <div className=' '>
                        <SectionTitle subTitle={'Check it Out'} title={'from our menu'}></SectionTitle>

                        <div className='flex justify-center items-center gap-5 mx-24'>
                            <div className='w-1/2'>
                                <img src={bg} alt="" />
                            </div>
                            <div className='w-1/2 space-y-2'>
                                <p>Oct 14, 1999</p>
                                <p>Where Can I Get Some?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia saepe similique quidem, atque ipsum rem unde facilis consequuntur aperiam fugiat, hic iure iste quod, illum tempore labore sint! Accusamus commodi, assumenda enim possimus culpa dolore sapiente voluptatum esse iste provident sunt aliquam ipsam qui reiciendis atque, iusto aspernatur.</p>
                                <button className='btn btn-outline text-white'>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Featured;