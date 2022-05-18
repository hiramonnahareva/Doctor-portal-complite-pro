import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appoinment from '../../assets/images/appointment.png';
import Button from '../Shared/Button';



const Appoinment = () => {
    return (
        <div style={{
            background: `url(${appoinment})`
        }} className="lg:flex md:block justify-center items-center lg:px-20 lg:h-[429px] p-5">
            <div className="flex-1">
                <img className="lg:mt-[-20%] lg:flex md:block hidden" src={doctor} alt='appoinment' />
                </div>
                <div className='flex-1'>
                    <h4 className='text-secondary text-xl font-bold mb-5'>Appoinment</h4>
                    <div className='text-white'>
                    <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <Button>get started</Button>
                    </div>
                </div>
            </div>
    );
};

export default Appoinment;