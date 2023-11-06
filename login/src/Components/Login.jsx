import React, { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Signup from './Signup';
import Validation from '../LoginValidation'; 
import axios from 'axios';


function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    };

    useEffect(() => {
        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:81/login', values)
                .then((res) => {
                    if (res.data === "Success") {
                        navigate('/home');
                    } else {
                        alert("No record existed");
                    }
                })
                .catch((err) => console.log(err));
        }
    }, [errors, values, navigate]);

  return (
    <>
    <div className='bg-zinc-200 h-screen flex justify-center items-center '>
        {/* FORM */}
        <div className='bg-white rounded-lg shadow-lg shadow-black/30 h-4/5  pl-10 w-[350px] flex flex-col justify-center'>
            <form className='space-y-2' action="" onSubmit={handleSubmit}>
            <div>
                <p className='font-semibold text-2xl tracking-wide'>LOGIN</p>
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
            <div className='flex gap-5 mt-1'>
                <input type="checkbox" />
                <p>Remember Me ?</p>

            </div>
            <div className='mr-5'>
                <button type='submit' className='bg-red-400 h-10 rounded-full hover:bg-red-500 duration-300 w-full text-white font-semibold' >LOGIN</button>
                <p className='text-end hover:text-red-700 duration-300'>Forgot Password?</p>
            </div>
            <p className='flex justify-center font-bold'>OR</p>
            <div>
                <p className='text-zinc-500'>Need an Account? <span className='text-black font-bold underline underline-offset-4'> <Link to="Signup">SignUp</Link></span></p>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login 