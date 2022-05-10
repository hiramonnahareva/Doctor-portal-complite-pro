import React from 'react';
import image1 from '../../../assets/images/fluoride.png';
import image2 from '../../../assets/images/cavity.png';
import image3 from '../../../assets/images/whitening.png';
import ServicesInfo from './ServicesInfo';

const ProvideService = () => {
    const servicesInfo = [
       {_id:1, img: image1, title:'Fluoride Treatment', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'},
       {_id:2, img: image2, title:'Cavity Filling', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'},
       {_id:3, img: image3, title:'Teeth Whitening', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'}
    ]
    return (
        <div>
           <div className='my-[66px]'>
           <h5 className='text-secondary text-center font-bold text-xl'>OUR SERVICES</h5>
            <h2 className='text-center text-4xl py-[7px]'>Services We Provide</h2>
           </div>
             <div className='grid grid-cols-1 lg:grid-cols-3 p-5'>
          {
              servicesInfo.map(serviceInfo => <ServicesInfo key={serviceInfo._id} serviceInfo={serviceInfo}></ServicesInfo>)
          }
       </div>
        </div>
    );
};

export default ProvideService;