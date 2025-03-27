import React from 'react'

const TaskCard = ({ items }) => {
    return (
        <button className='bg-white rounded px-4 w-[100%] py-2 hover:shadow transition-all duration-300 '>
            <div className='flex items-center justify-between'>
                <h1 className='' >Task Title</h1>
                <div className='text-sm text-green-500 bg-green-100 px-2 rounded-full'>
                    <p>low</p>
                </div>
            </div>
            <hr className='my-2' />
            <p className='text-sm text-zinc-500 text-start'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde sapiente odio
                minus eveniet porro delectus similique quisquam, nemo, natus in veniam minima
                nisi possimus molestias iusto perspiciatis dignissimos dolorum temporibus.
            </p>
        </button>
    )
}

export default TaskCard