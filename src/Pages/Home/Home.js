import React from 'react';
import Appoinment from './Appoinment';
import Banner from './Banner';
import DentalCare from './DentalCare';
import Info from './Info/Info';
import ProvideService from './ProvideService/ProvideService';
import Contact from './Contact';
import Testimonial from './Testimonial/Testimonial';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div className='lg:px-16'>
            <Banner></Banner>
            <Info></Info>
            <ProvideService></ProvideService>
            <DentalCare></DentalCare>
            <Appoinment></Appoinment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;