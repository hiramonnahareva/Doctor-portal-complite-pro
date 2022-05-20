import React from 'react';
import toast from 'react-hot-toast';

const UsersRow = ({user, refetch}) => {
    const {email, role} = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Filed to make an admin');
            }
            return res.json()
        })
        .then(data => {
            console.log(data);
           if(data.modifiedCount > 0){
               refetch();
            toast.success(`successfully made an admin`);
           }
        })
    }
    return (
        <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-sm">make admin</button>}</td>
        <td><button className="btn btn-sm">Remove user</button></td>
      </tr>
    );
};

export default UsersRow;