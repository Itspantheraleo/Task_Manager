import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return(
    <div className='flex h-screen flex-col items-center justify-center' >
        <div className='w-[60vw] md:w-[50vw] lg:w-[30vw]'>
            <h1 className='text-3xl font-bold text-center mb-1 text-blue-800'>
                TASK_REMINDER
            </h1>
            <h2 className='text-center font-semibold text-zinc-900'>Register With Task_reminder</h2>

        </div>
        <div className='w-[60vw] md:w-[50vw] lg:w-[30vw] mt-4'>
            <form className='flex flex-col gap-4'>
            <input type="text" required placeholder='username' className='border rounded px-4 py-1 border-zinc-400 w-[100%] outline none '
            name='username'/>
            <input type="email" required placeholder='email' className='border rounded px-4 py-1 border-zinc-400 w-[100%] outline none '
            name='email'/>
            <input type="password" required placeholder='password' className='border rounded px-4 py-1 border-zinc-400 w-[100%] outline none '
            name='password'/>

            <button className='bg-blue-800 font-semibold by-2 rounded  text-white hover:bg-blue-700 transition-all duration-300 '>Register</button>
            <p className='text-center font-semibold text-gray-900 '> 
                Already have an account? <Link to ='/login'>Login</Link>
            </p>
            </form>
        </div>
    </div>
  )
}

export default Register