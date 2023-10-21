import React from 'react'
import {Link} from 'react-router-dom';
import Signup from './Signup';
function login() {
  return (
    <>
    <div className='bg-zinc-200 h-screen flex justify-center items-center '>
        {/* FORM */}
        <div className='bg-white rounded-lg shadow-lg shadow-black/30 h-96 pl-10 w-[350px] flex flex-col justify-center'>
            <form className='space-y-2' action="">
            <div>
                <p className='font-semibold text-2xl tracking-wide'>LOGIN</p>
            </div>
            <div className='mr-5'>
                <p className=' text-zinc-600 font-semibold'>Email</p>
                <input className='outline-none h-10 px-5 border border-sw w-full' type="text" placeholder='Email' required/>
            </div>
            <div className='mr-5'>
            <p className=' text-zinc-600 font-semibold'>Password</p>
                <input className='outline-none h-10 px-5 border border-sw w-full' type="password" placeholder='Password' required/>
            
            </div>
            <div className='flex gap-5 mt-1'>
                <input type="checkbox" />
                <p>Remember Me ?</p>

            </div>
            <div className='mr-5'>
                <button className='bg-red-400 h-10 rounded-full hover:bg-red-500 duration-300 w-full text-white font-semibold' >LOGIN</button>
                <p className='text-end hover:text-red-600 duration-300'>Forgot Password?</p>
            </div>
            <p className='flex justify-center font-bold'>OR</p>
            <div>
                <p className='text-zinc-500'>Need an Account? <span className='text-black font-bold underline underline-offset-4'> <Link to="/Signup">SignUp</Link></span></p>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default login