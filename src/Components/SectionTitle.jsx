import React from 'react';

const SectionTitle = ({subTitle, title}) => {
    return (
        <div className='text-center w-3/12 mx-auto py-10'>
            <h1 className='text-lg text-error'>---{subTitle}---</h1>
            <h1 className='text-3xl uppercase font-semibold border-y-4 p-2'>{title}</h1>
            
        </div>
    );
};

export default SectionTitle;