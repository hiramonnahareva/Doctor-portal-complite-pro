import React from 'react';
import Quote from './Quote';
import patient1 from '../../../assets/images/people1.png';
import patient2 from '../../../assets/images/people2.png';
import patient3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {_id: 1, img: patient1, description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.', name: 'Winson Herry', address: 'California'},
        {_id: 2, img: patient2, description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.', name: 'Winson json', address: 'California'},
        {_id: 3, img: patient3, description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.', name: 'Winson Herry', address: 'California'},
    ]
    return (
        <div>
            <Quote></Quote>
           <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1">
           {
                reviews.map(patientInfo => <Review key={patientInfo._id} patientInfo={patientInfo}></Review>)
            }
           </div>
        </div>
    );
};

export default Testimonial;