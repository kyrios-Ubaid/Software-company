import React, { useEffect, useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Login from './Login';
import Validation from '../SignupValidation'; 
import axios from 'axios';

function Signup() {

  const [values, setValues] =useState({
    name: '',
    email: '',
    password:''
  })
  const navigate = useNavigate();
  const [errors, setErrors] =useState ({})
  const handleInput = (event) =>{
      setValues(prev => ({...prev, [event.target.name]: event.target.value}));
  }
  const handleSubmit =(event) => {
      event.preventDefault();
      setErrors(Validation(values));
    if (errors.name === "" && errors.email === "" && errors.password === "") {
        axios.post('http://localhost:81/signup',values)
        .then((res) => {
          navigate('/');
        })
        .catch((err) => console.log(err));
      
      }
    }
  

  return (
    <>
    <div className='bg-zinc-200 h-screen flex justify-center items-center '>
        {/* FORM */}
        <div className='bg-white rounded-lg shadow-lg shadow-black/30 h-4/5  pl-10 w-[350px] flex flex-col justify-center'>
            <form className='space-y-2' action="" onSubmit={handleSubmit}>
            <div>
                <p className='font-semibold text-2xl tracking-wide'>SignUp</p>
            </div>
            <div className='mr-5'>
                <p className=' text-zinc-600 font-semibold'>Name</p>
                <input 
                onChange={handleInput} 
                className='outline-none h-10 px-5 border border-sw w-full' 
                name='name'
                type="text" 
                placeholder='Name' />
                {errors.name && <span className='text-red-600'>{errors.name}</span>}
            </div>
            <div className='mr-5'>
                <p className=' text-zinc-600 font-semibold'>Email</p>
                <input 
                onChange={handleInput} 
                className='outline-none h-10 px-5 border border-sw w-full' 
                name='email'
                type="text" 
                placeholder='Email' />
                {errors.email && <span className='text-red-600'>{errors.email}</span>}
            </div>
            <div className='mr-5'>
            <p className=' text-zinc-600 font-semibold'>Password</p>
                <input
                onChange={handleInput} 
                className='outline-none h-10 px-5 border border-sw w-full' 
                name='password'
                type="password" 
                placeholder='Password' />
                {errors.password && <span className='text-red-600'>{errors.password}</span>}
            </div>
         
            <div className='mr-5'>
                <button type='submit' className='bg-red-400 h-10 rounded-full hover:bg-red-500 duration-300 w-full text-white font-semibold' >Signup</button>
             </div>
            <p className='flex justify-center font-bold'>OR</p>
            <div>
                <p className='text-zinc-500'>Already have Account? <span className='text-black font-bold underline underline-offset-4'> <Link to="/">Login</Link></span></p>
                </div>
            </form>
        </div>
    </div></>
  )
};

export default Signup