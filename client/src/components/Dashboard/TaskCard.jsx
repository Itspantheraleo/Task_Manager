import React from 'react'

const TaskCard = ({ data }) => {
    return (
        <button className='bg-white rounded px-4 w-[100%] py-2 hover:shadow transition-all duration-300 '>
            <div className='flex items-center justify-between'>
                <h1 className='' >{data.title}</h1>
                <div className='text-sm text-green-500 bg-green-100 px-2 rounded-full'>
                    <p>{data.priority}</p>
                </div>
            </div>
            <hr className='my-2' />
            <p className='text-sm text-zinc-500 text-start'>
                {data.description}
            </p>
        </button>
    )
}

export default TaskCard