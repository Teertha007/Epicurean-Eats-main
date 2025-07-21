import React from 'react';
import SectionTitle from './SectionTitle';

const Cover = ({img, title, subTitle}) => {
    return (
        <div>
               <div className="hero bg-fixed h-[500px]" style={{ backgroundImage: `url("${img}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=' w-[800px]'>
                        {/* <SectionTitle subTitle={'Check it Out'} title={'from our menu'}></SectionTitle> */}

                        <div className='mb-5 bg-black bg-opacity-50 py-20 w-full space-y-5  '>
                           
                           
                                <p className='text-3xl  font-semibold  '>{title}</p>
                                <p>{subTitle}</p>
                                
                           
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Cover;