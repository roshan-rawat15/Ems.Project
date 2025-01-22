import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-gray-900 min-h-screen p-6 text-white">
      <div className="bg-red-500 mb-4 py-3 px-6 flex justify-between rounded shadow-lg">
        <h2 className="text-lg font-semibold w-1/5">Employee Name</h2>
        <h3 className="text-lg font-semibold w-1/5">New Task</h3>
        <h5 className="text-lg font-semibold w-1/5">Active Task</h5>
        <h5 className="text-lg font-semibold w-1/5">Completed</h5>
        <h5 className="text-lg font-semibold w-1/5">Failed</h5>
      </div>
      <div>
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="border-2 border-teal-500 mb-3 py-3 px-6 flex justify-between rounded bg-gray-800 shadow"
          >
            <h2 className="text-lg font-medium w-1/5">{elem.firstName}</h2>
            <h3 className="text-lg font-medium w-1/5 text-blue-400">
              {elem.taskCounts.newTask}
            </h3>
            <h5 className="text-lg font-medium w-1/5 text-yellow-400">
              {elem.taskCounts.active}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-green-400">
              {elem.taskCounts.completed}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-red-600">
              {elem.taskCounts.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
