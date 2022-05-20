import React from 'react';
import toast from 'react-hot-toast';

const DeleteComfirm = ({deletingDoctor, refetch, setDeleteingDoctor}) => {
    const {name, email} = deletingDoctor;
    const handleDelete = () => {
        fetch (`http://localhost:5000/doctor/${email}`,{
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
        .then(res => res.json())
        .then(data => {
           
           if(data.deletedCount){
            toast.success(`Doctor ${name} is deleted.`)
            setDeleteingDoctor(null)
            refetch();
            // console.log(data);
           }
           else{
           }
        })
    }
    return (
        <div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Are you sure you want to delete ${name} !</h3>
            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div className="modal-action">
              <td><button onClick={() => handleDelete()} className="btn btn-xs btn-error">delete</button></td>
              <label for="my-modal" className="btn btn-xs">cancle</label>
            </div>
          </div>
        </div>
        </div>
    );
};

export default DeleteComfirm;