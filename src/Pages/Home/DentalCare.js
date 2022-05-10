import React from 'react';
import image from '../../assets/images/treatment.png'
import Button from '../Shared/Button';

const DentalCare = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-x-[102px] gap-y-[37px] pb-[174px]">
                <img className="w-55 lg:w-96 rounded-lg shadow-2xl" src={image} />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button>get started</Button>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;