import React from 'react';

const AvailableInfo = ({service, setTreatment}) => {
    const {name, slots} = service;
   
    return (
        <div className='bg-white rounded-2xl shadow-lg py-11 m-4'>
           <h3 className='text-3xl text-secondary font-semibold my-5'>{name}</h3>
           <p>{
               slots.length > 0 ? <span>{slots[0]}</span>:
               <span className='text-red-500 text-sm'>No Slot Available</span>
               }</p>
               <p>{slots.length} {slots.length> 1 ? 'spaces' : 'space'} Available</p>

            {/* <h4 className='text-xl font-semibold my-5'>8:00 AM - 9:00 AM</h4>
            <p className='text-xl font-semibold my-5'>10 SPACES AVAILABLE</p> */}
            <label htmlFor="booking-modal" 
            disabled={slots.length === 0}
            onClick={()=>setTreatment(service)}
             className='btn btn-secondary uppercase text-white font-bold my-4'>book appoinment</label>
           </div>
    );
};

export default AvailableInfo;