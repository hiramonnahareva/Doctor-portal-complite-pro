import React from 'react';
import image from '../../assets/images/chair.png'
import Button from '../Shared/Button';

const Banner = () => {
    return (
        <div className="hero min-h-screen lg:bg-[url('assets/images/bg.png')] mb-20">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <img src={image} className="w-54 lg:w-96 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button>get started</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;