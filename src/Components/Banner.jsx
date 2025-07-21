import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import i1 from '../../public/assets/home/01.jpg'
import i2 from '../../public/assets/home/02.jpg'
import i3 from '../../public/assets/home/03.png'
import i4 from '../../public/assets/home/04.jpg'
import i5 from '../../public/assets/home/05.png'
import i6 from '../../public/assets/home/06.png'


const Banner = () => {
    return (
        <div className=''>
            <Carousel>
                <div className=''>
                    <img src={i4} />
                    
                </div>
                <div>
                    <img src={i2} />
                    
                </div>
                <div>
                    <img src={i3} />
                    
                </div>
                <div>
                    <img src={i1} />
                    
                </div>
                <div>
                    <img src={i5} />
                    
                </div>
                <div>
                    <img src={i6} />
                    
                </div>
            </Carousel>

        </div>
    );
};

export default Banner;