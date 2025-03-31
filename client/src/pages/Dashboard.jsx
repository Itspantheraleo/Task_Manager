import React, { useState, useEffect } from 'react';
import Header from '../components/Dashboard/Header';
import AddTask from '../components/Dashboard/AddTask';
import StackTitle from '../components/Dashboard/StackTitle';
import YetToStart from '../components/Dashboard/YetToStart';
import InProgress from '../components/Dashboard/InProgress';
import Completed from '../components/Dashboard/Completed';
import axios from 'axios';
import EditTask from '../components/Dashboard/EditTask';

const Dashboard = () => {
    const [AddTaskDiv, setAddTaskDiv] = useState('hidden');
    const [Tasks, setTasks] = useState([]);
    const [EditTaskDiv, setEditTaskDiv] = useState('hidden')
    const [EditTaskId, setEditTaskId] = useState()

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/v1/userDetails", { withCredentials: true });

                //console.log("API Response:", res.data); // ✅ Debugging API Response

                if (res.data && Array.isArray(res.data.tasks)) {
                    setTasks(res.data.tasks);
                } else {
                    console.error("Unexpected API Response Structure:", res.data);
                }
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        fetchUserDetails();
        if (window.sessionStorage.getItem('EditTaskId')) {
            setEditTaskDiv('block')
            setEditTaskId(window.sessionStorage.getItem('editTaskId'))
        }
    }, [AddTaskDiv]); // ✅ Fetch data only once

    return (
        <div className="w-full relative">
            <div className="bg-white">
                <Header setAddTaskDiv={setAddTaskDiv} />
            </div>
            <div className="px-12 py-4 flex gap-12 bg-zinc-100 min-h-[89vh] max-h-auto">
                <div className="w-1/3">
                    <StackTitle title={"Yet To Start"} />
                    <div className="pt-2">
                        {Tasks.length > 0 && <YetToStart task={Tasks[0]?.yetToStart || []} />}
                    </div>
                </div>
                <div className="w-1/3">
                    <StackTitle title={"In Progress"} />
                    <div className="pt-2">
                        {Tasks.length > 1 && <InProgress task={Tasks[1]?.inProgress || []} />}
                    </div>
                </div>
                <div className="w-1/3">
                    <StackTitle title={"Completed"} />
                    <div className="pt-2">
                        {Tasks.length > 2 && <Completed task={Tasks[2]?.completed || []} />}
                    </div>
                </div>
            </div>

            {/* Overlay for Adding Task */}
            <div className={`w-full ${AddTaskDiv} h-screen bg-zinc-800 opacity-70`}></div>
            <div className={`w-full ${AddTaskDiv} h-screen fixed top-0 left-0 flex items-center justify-center`}>
                <AddTask setAddTaskDiv={setAddTaskDiv} />
            </div>
            <div className={`w-full ${EditTaskDiv} h-screen bg-zinc-800 opacity-70`}></div>
            <div className={`w-full ${EditTaskDiv} h-screen fixed top-0 left-0 flex items-center justify-center`}>
                <EditTask EditTaskId={EditTaskId} setEditTaskDiv={setEditTaskDiv} />
            </div>
        </div>
    );
};

export default Dashboard;
