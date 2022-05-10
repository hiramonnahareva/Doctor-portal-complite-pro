import React from 'react';
import icon from '../../../assets/icons/quote.svg';

const Quote = () => {
    return (
        <div className='flex px-10 py-20 justify-between items-center'>
           <div>
           <h4 className='text-secondary font-bold text-xl py-5'>Testimonial</h4>
            <h2 className='text-4xl'>What Our Patients Says</h2>
           </div>
           <div>
               <img className='lg:w-48 w-24' src={icon} alt="" />
           </div>
        </div>
    );
};

export default Quote;