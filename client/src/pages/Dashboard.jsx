import React, { useState } from 'react'
import Header from '../components/Dashboard/Header'
import AddTask from '../components/Dashboard/AddTask'


const Dashboard = () => {
    const [AddTaskDiv, setAddTaskDiv] = useState('hidden')
    console.log("Dashboard: setAddTaskDiv function", setAddTaskDiv);
    return (
        <div className='w-full relative'>
            <div className="bg-white">
                <Header setAddTaskDiv={setAddTaskDiv} />
            </div>
            {/*----------------------------------------------*/}

            <div className={`w-full ${AddTaskDiv} h-screen bg-zinc-800 opacity-70`}></div>
            <div className={`w-full ${AddTaskDiv} h-screen fixed top-0 left-0 flex items-center justify-center`}><AddTask /></div>
        </div>

    )
}

export default Dashboard