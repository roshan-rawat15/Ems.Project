import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        
        <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-500 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <h2 className='text-4xl font-bold text-white'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl mt-1 font-medium text-white'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-green-500 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <h2 className='text-4xl font-bold text-white'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl mt-1 font-medium text-white'>Completed Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-500 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <h2 className='text-4xl text-black font-bold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl mt-1 text-black font-medium'>Accepted Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-red-500 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <h2 className='text-4xl font-bold text-white'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl mt-1 font-medium text-white'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers;
