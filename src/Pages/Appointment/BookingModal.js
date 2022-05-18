import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
    const [user, loading, error] = useAuthState(auth);
    const {_id, name, slots } = treatment;
    const formatteddDate = format(date, 'PP' );
    const formSubmit = event => {
        console.log(formatteddDate)
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot, name);
       const booking = {
           treatmentId: _id ,
           treatment: name,
           date: formatteddDate,
           slot,
           patient: user.email,
           patientName: user.displayName,
           phone: event.target.phone.value,
        }
        fetch(`http://localhost:5000/booking?patient=${user.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
        if(data.success){
            toast.success(`Appointment is set, ${formatteddDate} at ${slot}`)

        }
        else{
            console.log(data)
            toast.error(`Already have an Appointment on ${data.booking?.date} at ${data.booking.slot}`)
        }
        refetch();
        setTreatment(null)
    })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={formSubmit}>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs my-2" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                           {
                             slots && slots.map((slot, index) =><option key={index} value={slot}>{slot}</option>)
                           }
                        </select>
                        <input type="text" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs my-2" />
                        <input type="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs my-2" />
                        <input type="number" name='phone' placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" />
                        <input type="submit" value='submit' className="input text-center text-xl text-white bg-accent w-full max-w-xs my-2" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;