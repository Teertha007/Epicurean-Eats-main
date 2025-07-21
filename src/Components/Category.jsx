import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import s1 from '../../public/assets/home/slide1.jpg'
import s2 from '../../public/assets/home/slide2.jpg'
import s3 from '../../public/assets/home/slide3.jpg'
import s4 from '../../public/assets/home/slide4.jpg'
import s5 from '../../public/assets/home/slide5.jpg'
import SectionTitle from './SectionTitle';


const Category = () => {
    return (
        <div className='container mx-auto '> 
             <SectionTitle subTitle={'From 10 AM to 11 PM'} title={'order online'}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                // centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={s1} alt="" />
                    <p className='text-center text-3xl text-white shadow-xl -mt-10'>Salad</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={s2} alt="" />
                    <p className='text-center text-3xl text-white shadow-xl -mt-10'>Pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={s3} alt="" />
                    <p className='text-center text-3xl text-white shadow-xl -mt-10'>Soup</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={s4} alt="" />
                    <p className='text-center text-3xl text-white shadow-xl -mt-10'>Desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={s5} alt="" />
                    <p className='text-center text-3xl text-white shadow-xl -mt-10'>Salad</p>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;