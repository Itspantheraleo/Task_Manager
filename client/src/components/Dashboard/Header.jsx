import React from 'react'
import { IoLogOutOutline } from "react-icons/io5"
import axios from 'axios'
import { useNavigate } from "react-router-dom"


const Header = ({ setAddTaskDiv }) => {
    const navigate = useNavigate()

    const logout = async () => {
        try {
            const res = await axios.post("http://localhost:3000/api/v1/logout", {}, { withCredentials: true })
            alert(res.data.messege)
            localStorage.clear("userLoggedIn")
            navigate('/login')
        } catch (error) {
            console.log('error')
        }
    }
    return (
        <div className='flex px-12 py-4 items-center justify-between border-n'>
            <div>
                <h1 className='text-2xl text-blue-800 font-semibold'>Task-Manager</h1>
            </div>
            <div className='flex gap-8 '>
                <button className='hover:text-blue-800 transition-all duration-300 ' onClick={() => {
                    console.log("Button Clicked! Calling setAddTaskDiv...");
                    setAddTaskDiv('block')
                }}>
                    Add Task
                </button>
                <button className='hover:text-red-600 transition-all duration-300 '
                    onClick={logout}
                >
                    <IoLogOutOutline />
                </button>
            </div>
        </div>

    )
}

export default Header