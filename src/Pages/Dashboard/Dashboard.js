import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../../Hooks/UseAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = UseAdmin(user)
    return (
        <div className="drawer drawer-mobile">
  <input id="sidebar-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col mt-10 items-center">
    {/* <!-- Page content here --> */}
         <h2 className='text-primary text-3xl font-semibold'>Dashboard</h2>
         <Outlet/>
  </div> 
  <div className="drawer-side">
    <label htmlFor="sidebar-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>My Appoinments</Link></li>
      <li><Link to='/dashboard/review'>My Reviews</Link></li>
      <li><Link to='/dashboard/history'>My History</Link></li>
      {
        admin && <li><Link to='/dashboard/users'>All Users</Link></li>
      }
    </ul>
  
  </div>
</div>
    //     <div className="drawer">
    //     <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    //     <div className="drawer-content">
    //       {/* <!-- Page content here --> */}
    //       <Outlet/>
    //       <h2>dashboard</h2>
    //       <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
    //     </div> 
    //     <div className="drawer-side">
    //       <label htmlFor="my-drawer" className="drawer-overlay"></label>
    //       <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
    //         {/* <!-- Sidebar content here --> */}
    //         <li><a>Sidebar Item 1</a></li>
    //         <li><a>Sidebar Item 2</a></li>
            
    //       </ul>
    //     </div>
    //   </div>
    );
};

export default Dashboard;