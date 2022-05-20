import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/Loading.js/Loading';
import UsersRow from './UsersRow';

const Users = () => {
    const {data: users, isLoading, refetch} = useQuery('users', () => fetch('http://localhost:5000/users' , {
        method: 'GET',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    
    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div>
            <h2>All users{users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map(user => <UsersRow key={user._id} user={user} refetch={refetch}></UsersRow>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;