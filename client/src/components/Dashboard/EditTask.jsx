import React, { useState, useEffect } from "react";
import axios from "axios";
const EditTask = ({ setEditTaskDiv, EditTaskId }) => {

    const [Values, setValues] = useState({
        title: "",
        description: "",
        priority: "low",
        status: "yetToStart",
    });

    const change = (e) => {
        const { name, value } = e.target;
        setValues({ ...Values, [name]: value });
    };
    //console.log(EditTaskId)
    useEffect(() => {
        if (!EditTaskId || EditTaskId === "hidden") return; // ✅ Prevent fetching if ID is invalid

        const fetchTask = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/v1/getTask/${EditTaskId}`, {
                    withCredentials: true
                });
                console.log("Fetched Task:", res.data.taskDetails); // Debugging log
                setValues(res.data.taskDetails);
            } catch (error) {
                console.error("Error fetching task:", error);
            }
        };

        fetchTask();
    }, [EditTaskId]);  // ✅ Run only when EditTaskId changes


    const editTask = async (e, id) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:3000/api/v1/editTask/${id}`, Values, { withCredentials: true });

            alert(res.data.success);
            window.sessionStorage.clear('editTaskId')
            setEditTaskDiv('hidden')
            window.location.reload()
        } catch (error) {
            console.error(error)
            alert(error.response.data.error);
        }
    };

    const deleteTask = async (e, id) => {
        e.preventDefault();
        try {
            const res = await axios.delete(`http://localhost:3000/api/v1/deleteTask/${id}`, { withCredentials: true });

            alert(res.data.success);
            window.sessionStorage.clear('editTaskId')
            setEditTaskDiv('hidden')
            window.location.reload()
        } catch (error) {
            console.error(error)
            alert(error.response.data.error);
        }
    };
    return <div className="bg-white rounded px-4 py-4 w-[40%]">
        <h1 className="text-center font-semibold text-xl">Edit Task</h1>
        <hr className="mb-4 mt-2" />
        <form className="flex flex-col gap-4">
            <input
                type="text"
                className="border px-2 py-1 rounded border-zinc-300 outline-none"
                placeholder="Title"
                name="title"
                value={Values.title}
                onChange={change}
            />
            <div className="flex items-center justify-between gap-4">
                <div className="w-full">
                    <h1 className="mb-2">Select Priority</h1>
                    <select name="priority" className="border px-2 py-1 rounded border-zinc-300 outline-none w-full"
                        onChange={change}
                        value={Values.priority}
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div className="w-full">
                    <h1 className="mb-2">Select Status</h1>
                    <select name="status" className="border px-2 py-1 rounded border-zinc-300 outline-none w-full"
                        onChange={change}
                        value={Values.status}
                    >
                        <option value="yetToStart">Yet To Start</option>
                        <option value="inProgress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
            </div>
            <textarea
                name="description"
                placeholder="Description"
                className="border px-2 py-1 rounded border-zinc-300 outline-none h-[25vh]"
                value={Values.description}
                onChange={change}
            />
            <div className="flex items-center justify-between gap-4">
                <button
                    className="w-full bg-blue-800 py-2 text-white hover:bg-blue-700 transition-all duration-300 rounded"
                    onClick={(e) => editTask(e, Values._id)}
                >
                    Edit Task{" "}
                </button>
                <button
                    className="w-full border border-red-600 text-red-600 py-2 hover:bg-red-100 transition-all duration-300 rounded"
                    onClick={(e) => deleteTask(e, Values._id)}                >
                    Delete Task
                </button>
                <button
                    className="w-full border border-black py-2 hover:bg-zinc-100 transition-all duration-300 rounded"
                    onClick={(event) => {
                        event.preventDefault()
                        window.sessionStorage.clear('EditTaskId')
                        setEditTaskDiv("hidden")
                    }
                    }
                >
                    Cancel
                </button>
            </div>
        </form>
    </div>
}

export default EditTask