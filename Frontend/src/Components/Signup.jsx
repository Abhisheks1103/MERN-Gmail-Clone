import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div className='flex items-center justify-center w-screen mt-10'>
        <form action='' className='flex flex-col gap-3 bg-white p-4 w-[20%]'>
            <h1 className='font-bold text-2xl uppercase my-2'>SignUp</h1>
            <input type='text' placeholder='Name ' className='border border-gray-400 rounded-md px-2 py-1'/>
            <input type='email' placeholder='Email ' className='border border-gray-400 rounded-md px-2 py-1'/>
            <input type='password' placeholder='Paasword ' className='border border-gray-400 rounded-md px-2 py-1'/>
            <button type='submit' className='bg-gray-800 p-2 text-white my-2 rounded-md'>Signup</button>
            <p>Already have an account <Link to={"/LogIn"} className='text-blue-600'>LogIn</Link></p>
        </form>
    </div>
  )
}

export default Signup