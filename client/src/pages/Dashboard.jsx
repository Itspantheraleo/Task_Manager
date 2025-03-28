import React, { useState, useEffect } from 'react'
import Header from '../components/Dashboard/Header'
import AddTask from '../components/Dashboard/AddTask'
import StackTitle from '../components/Dashboard/StackTitle'
import YetToStart from '../components/Dashboard/YetToStart'
import InProgress from '../components/Dashboard/InProgress'
import Completed from '../components/Dashboard/Completed'
import axios from 'axios'


const Dashboard = () => {


    const [AddTaskDiv, setAddTaskDiv] = useState('hidden')
    const [Tasks, setTasks] = useState()
    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:3000/api/v1/userDetails"
                    , {
                        withCredentials: true
                    })
                setTasks(res.data.tasks)
            } catch (error) {

            }
        }
        fetchUserDetails()
    }, [])
    //console.log(Tasks)

    return (
        <div className='w-full relative'>
            <div className="bg-white">
                <Header setAddTaskDiv={setAddTaskDiv} />
            </div>
            <div className='px-12 py-4 flex gap-12 bg0zinc-100 min-h[89vh] max-h-auto'>
                <div className='w-1/3 '>
                    <StackTitle title={"Yet To Start"} />
                    <div className='pt-2 '>
                        {Tasks && <YetToStart task={Tasks[0].YetToStart} />}
                    </div>
                </div>
                <div className='w-1/3 '>
                    <StackTitle title={"InProgress"} />
                    <div className='pt-2 '>
                        {Tasks && <InProgress task={Tasks[1].YetToStart} />}

                    </div>
                </div>
                <div className='w-1/3 '>
                    <StackTitle title={"Completed"} />
                    <div className='pt-2 '>
                        {Tasks && <Completed task={Tasks[2].YetToStart} />}
                    </div>
                </div>
            </div>
            {/*----------------------------------------------*/}

            <div className={`w-full ${AddTaskDiv} h-screen bg-zinc-800 opacity-70`}></div>
            <div className={`w-full ${AddTaskDiv} h-screen fixed top-0 left-0 flex items-center justify-center`}><AddTask setAddTaskDiv={setAddTaskDiv} /></div>
        </div>

    )
}

export default Dashboard