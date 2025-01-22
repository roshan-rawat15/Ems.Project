import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-white text-sm px-4 py-1 rounded-full'>{data.category}</h3>
        <h4 className='text-sm text-gray-200'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold text-white'>{data.taskTitle}</h2>
      <p className='text-sm mt-2 text-gray-300'>
        {data.taskDescription}
      </p>
      <div className='mt-6'>
        <button className='w-full bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium py-2 px-4 text-xs shadow-md transition-all duration-300'>
          Failed
        </button>
      </div>
    </div>
  )
}

export default FailedTask;
