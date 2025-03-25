import React from 'react'

const AddTask = ({ setAddTaskDiv }) => {
    return <div className='bg-white rounded px-4 py-4 w-[40%]'>
        <h1 className='text-center font-semibold text-x1'>AddTask</h1>
        <hr className='mb-4 mt-2' />
        <form className='flex flex-col gap-4'>
            <input type="text" className='border px-2 py-1 rounded border-zinc-300 outline-none'
                placeholder='Title'
                name='title'
            />
            <div className='flex items-center justify-between gap-4'>
                <div className='w-full'>
                    <h1 className='mb-2'>Select Priority</h1>
                    <select name="priority" id="" className='border px-2 py-1 rounded border-zinc-300 outline-none w-full'>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div className='w-full'>
                    <h1 className='mb-2'>Select Status</h1>
                    <select name="status" id="" className='border px-2 py-1 rounded border-zinc-300 outline-none w-full'>
                        <option value="yettostart">Yet To Start</option>
                        <option value="inprogress">In Progress</option>
                        <option value="completed">Competed</option>
                    </select>
                </div>

            </div>
            <textarea name="description" placeholder='Description'
                className='border px-2 py-1 rounded border-zinc-300 outline-none h-[25vh]'>

            </textarea>
            <div className='flex items-center justify-between gap-4'>
                <button className='w-full bg-blue-800 py-2 text-white hover:bg-blue-700 transition-all duration-300 rounded'>
                    AddTask
                </button>
                <button className='w-full border border-black bg-blue-800 py-2 hover:bg-zinc-100 transition-all duration-300 rounded ' onClick={() => setAddTaskDiv('hidden')} >
                    Cancel
                </button>
            </div>
        </form >
    </div >

}

export default AddTask