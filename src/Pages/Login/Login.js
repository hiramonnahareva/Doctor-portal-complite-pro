import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import LoadingSpinner from '../Shared/Loading.js/Loading';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const {register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading,error,] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser);
    let signinError;
    useEffect(()=> {
      if (token) {
        navigate(from, { replace: true });        
      }
    }, [token, from,  navigate]);
  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password);
    }
    if (gError || error) {
        signinError = <p><small className='text-red-600'>{error?.message || gError?.message}</small></p>
      }
      if (gLoading || loading) {
        return <LoadingSpinner></LoadingSpinner>;
      }
      
    return (
        <div className='flex justify-center h-screen items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
  <h2 className='text-center text-3xl font-thing'>Login</h2>
 <form onSubmit={handleSubmit(onSubmit)}>
 <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Your Email</span>
  </label>
  <input 
  type="email"
   placeholder="Your Email"
    className="input input-bordered w-full max-w-xs"
    {...register("email", { 
        required: {
            value: true,
            message: 'Email is Required'
        },
        pattern: {
        value: /\S+@\S+\.\S+/,
        message: 'Provide a Valid Email'
      }
     })} 
     />
  <label className="label">
  {errors.email?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
  </label>
</div>
  <div className="form-control w-full max-w-xs">
  <label className="label">
  <span className="label-text">Your Password</span>
  </label>
  <input 
  type="password" 
  placeholder="password" 
  className="input input-bordered w-full max-w-xs" 
  {...register("password", { 
      required: {
          value: true,
          message: 'Password is Required'
      },
      minLength: {
      value: 6,
      message: 'Must be 6 characters'
    } })} 
  />
  <label className="label">
  {errors.password?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type === 'minLength' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
   
  </label>
</div>
    <div className="card-actions justify-end">
        {signinError}
        <input type="submit" value="login" className="btn btn-accent max-w-xs text-white w-full" />
    </div>
 </form>
 <p><small>New to Doctors Portal? <Link className='text-secondary' to='/signup'>create new account</Link></small></p>
 <div className="flex flex-col w-full border-opacity-50">
  <div className="divider">OR</div>
</div>
 <button onClick={()=> signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
  </div>
</div>
        </div>

    );
};

export default Login;