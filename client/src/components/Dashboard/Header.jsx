import React from 'react'
import { IoLogOutOutline } from "react-icons/io5"

const Header = ({ setAddTaskDiv }) => {
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
                <button className='hover:text-red-600 transition-all duration-300 '>
                    <IoLogOutOutline />
                </button>
            </div>
        </div>

    )
}

export default Header