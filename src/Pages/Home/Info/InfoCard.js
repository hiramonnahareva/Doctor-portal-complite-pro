import React from 'react';


const InfoCard = ({img , color, cardTitle, cardInfo}) => {
    return (
        <div className={`card lg:card-side shadow-xl ${color} text-white flex gap-5 p-5 rounded-lg`}>
  <figure><img src={img} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{cardTitle}</h2>
    <p>{cardInfo}</p>
  </div>
</div>
    );
};

export default InfoCard;