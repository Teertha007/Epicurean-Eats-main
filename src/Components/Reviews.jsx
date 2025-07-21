import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';



// import required modules
import { Navigation } from "swiper";
import SectionTitle from './SectionTitle';

const Reviews = () => {

    let [review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className='container mx-auto text-center'>
            <SectionTitle subTitle={'What Our Clients Say'} title={'Reviews'}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

              <div className='text-center '>
                
                      {
                        review.map(item => <SwiperSlide key={item._id} className='space-y-4'>
                            <div className='flex justify-center'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={item.rating}
                                readOnly
                            />
                            </div>
                            <div className='flex justify-center'>
                                <FaQuoteLeft className='text-7xl'></FaQuoteLeft>
                            </div>
                            <p>{item.details}</p>
                            <h1 className='uppercase text-error text-3xl '>{item.name}</h1>
                        </SwiperSlide>)
                    }
                
              </div>
            </Swiper>
        </div>
    );
};

export default Reviews;