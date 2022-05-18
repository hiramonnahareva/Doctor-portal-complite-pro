import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import AvailableInfo from './AvailableInfo';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/Loading.js/Loading';


const Available = ({ date }) => {
    const formatedDate = format(date, 'pp');
    const [treatment, setTreatment] = useState([]);
    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () =>
        fetch(`http://localhost:5000/available?date=${formatedDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='text-center'>
            <h2 className='text-4xl text-secondary py-[57px]'>Available Appointments on {format(date, 'PP')}.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map(service => <AvailableInfo key={service._id} service={service} setTreatment={setTreatment}></AvailableInfo>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}

            ></BookingModal>}
        </div>
    );
};

export default Available;