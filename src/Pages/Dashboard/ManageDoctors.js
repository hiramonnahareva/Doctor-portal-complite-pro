import React, { useState } from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/Loading.js/Loading';
import DeleteComfirm from './DeleteComfirm';
import DoctorsRow from './DoctorsRow';

const ManageDoctors = () => {
  const [deletingDoctor, setDeleteingDoctor] = useState(null)
    const {data: doctors, isLoading, refetch} = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if(isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div>
            <h2 className='text-2xl'>Manage Doctors</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Index</th>
        <th>Avater</th>
        <th>Name</th>
        <th>Specialty</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      {
          doctors.map((doctor, index) => <DoctorsRow
           key={doctor._id}
           doctor={doctor}
           index={index}
           refetch={refetch}
           setDeleteingDoctor = {setDeleteingDoctor}
           >
          </DoctorsRow>
    )
      }
    </tbody>
  </table>
</div>
{
          deletingDoctor && <DeleteComfirm 
          deletingDoctor={deletingDoctor}
            refetch={refetch}
            setDeleteingDoctor = {setDeleteingDoctor}
            ></DeleteComfirm>
        }
        </div>
    );
};

export default ManageDoctors;