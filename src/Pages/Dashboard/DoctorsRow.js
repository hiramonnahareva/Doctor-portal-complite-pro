import React from 'react';
import toast from 'react-hot-toast';

const DoctorsRow = ({ doctor, index, refetch, setDeleteingDoctor }) => {
    const { img, name, specialty, email } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} alt='avatar' />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><label onClick={() => setDeleteingDoctor(doctor)} htmlFor="my-modal" className="btn btn-xs btn-error">Delete</label></td>

        </tr>

    );
};

export default DoctorsRow;