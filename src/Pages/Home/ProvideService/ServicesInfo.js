import React from 'react';

const ServicesInfo = ({serviceInfo}) => {
    return (
      <div className="card w-[96%] bg-base-100 shadow-xl m-5">
      <figure className="px-10 pt-10">
        <img src={serviceInfo.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{serviceInfo.title}</h2>
        <p>{serviceInfo.description}</p>
      </div>
    </div>
    
    );
};

export default ServicesInfo;