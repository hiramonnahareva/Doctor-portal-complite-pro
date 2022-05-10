import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import location from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';




const Info = () => {
    const info ={
       color1: 'bg-gradient-to-r from-secondary to-primary' ,
       color2: 'bg-accent',
       color3: 'bg-gradient-to-r from-secondary to-primary' ,
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-5'>
            <InfoCard img={clock} cardTitle={'Opening Hours'} cardInfo={'Lorem Ipsum is simply dummy text of the pri'} color={info.color1}></InfoCard>
            <InfoCard img={location} cardTitle={'Visit our location'} cardInfo={'Brooklyn, NY 10036, United States'} color={info.color2}></InfoCard>
            <InfoCard img={phone} cardTitle={'Contact us now'} cardInfo={'+000 123 456789'} color={info.color3}></InfoCard>
        </div>
    );
};

export default Info;