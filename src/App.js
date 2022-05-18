import './App.css';
import Navber from './Pages/Shared/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import About from './Pages/About';
import AppoinmentPage from './Pages/Appointment/AppoinmentPage';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { Toaster } from 'react-hot-toast';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppoinments from './Pages/Dashboard/MyAppoinments';
import MyReviews from './Pages/Dashboard/MyReviews';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequirAdmin';
function App() {
  return (
    <div className="w- mx-auto lg:px-20 md:20px">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/reviews' element={<SignUp></SignUp>}></Route>
        <Route path='/appoinment' element={
          <RequireAuth>
            <AppoinmentPage />
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard>
            </Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppoinments></MyAppoinments>}></Route>
          <Route path='review' element={<MyReviews></MyReviews>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
