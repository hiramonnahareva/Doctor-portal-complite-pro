import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppoinments = () => {

    const [appoinments, setAppoinments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(()=> {
        if(user){
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
              method: 'GET',
              headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
              }
            })
            .then (res => {
              if(res.status === 401 || res.status === 403){
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/')
              }
            
            return  res.json();
            })
            .then(data => setAppoinments(data))
        }
    },[user])
    return (
        <div className="overflow-x-auto lg:w-full w-96 px-2">
           
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
           {
               appoinments.map((appoinment, index) => 
                <tr key={index}>
                <th>{index + 1}</th>
                <td>{appoinment.patientName}</td>
                <td>{appoinment.date}</td>
                <td>{appoinment.slot}</td>
                <td>{appoinment.treatment}</td>
              </tr>
                )
           }
          </tbody>
        </table>
      
      </div>
    );
};

export default MyAppoinments;