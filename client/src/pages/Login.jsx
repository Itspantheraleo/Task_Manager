import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Login = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState({ email: '', password: '' }) // Changed "Values" to "values" (camelCase)

    const change = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const login = async (e) => { // Changed function name to lowercase "login"
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/api/v1/login", values, {
                withCredentials: true
            })
            localStorage.setItem("userLoggedIn", 'yes')
            navigate('/dashboard')
        } catch (error) {
            alert(error.response?.data?.error || "Login failed")
        }
    }

    return (
        <div className='flex h-screen flex-col items-center justify-center' >
            <div className='w-[60vw] md:w-[50vw] lg:w-[30vw]'>
                <h1 className='text-3xl font-bold text-center mb-1 text-blue-800'>
                    TASK_REMINDER
                </h1>
                <h2 className='text-center font-semibold text-zinc-900'>Login With Task_reminder</h2>
            </div>
            <div className='w-[60vw] md:w-[50vw] lg:w-[30vw] mt-4'>
                <form className='flex flex-col gap-4' onSubmit={login}>
                    <input type="email" required placeholder='Email' className='border rounded px-4 py-1 border-zinc-400 w-[100%] outline-none'
                        name='email'
                        value={values.email}
                        onChange={change}
                    />

                    <input type="password" required placeholder='Password' className='border rounded px-4 py-1 border-zinc-400 w-[100%] outline-none'
                        name='password'
                        value={values.password}
                        onChange={change} />

                    {/* Fixed the onClick issue */}
                    <button type="submit" className='bg-blue-800 font-semibold py-2 rounded text-white hover:bg-blue-700 transition-all duration-300'>Login</button>

                    <p className='text-center font-semibold text-gray-900 '>
                        Don't have an account? <Link to='/register' className="text-blue-600">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
