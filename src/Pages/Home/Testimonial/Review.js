import React from 'react';

const Review = ({patientInfo}) => {
    return (
        <div className='shadow-xl p-10 rounded-lg mx-5 mb-5'>
            <div>{patientInfo.description}</div>
            <div className='flex items-center gap-5 py-5'>
                <div>
                    <img className='border-4 border-secondary rounded-full p-1 w-20' src={patientInfo.img} alt="" />
                </div>
                <div>
                    <h2 className='text-xl font-bold'>{patientInfo.name}</h2>
                    <p>{patientInfo.address}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;