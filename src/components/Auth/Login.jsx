import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <div className="bg-gray-800 shadow-lg rounded-xl p-8 sm:p-12 max-w-sm w-full border border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-300 mb-6">
          Login to Your Account
        </h2>
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full outline-none bg-gray-700 border border-gray-600 text-gray-200 font-medium text-base py-3 px-4 rounded-full placeholder:text-gray-400 focus:border-indigo-500 transition-all duration-300 ease-in-out"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full outline-none bg-gray-700 border border-gray-600 text-gray-200 font-medium text-base py-3 px-4 rounded-full mt-4 placeholder:text-gray-400 focus:border-indigo-500 transition-all duration-300 ease-in-out"
            type="password"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="mt-6 w-full text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-700 hover:from-indigo-600 hover:to-purple-800 text-base py-3 rounded-full shadow-md transition-transform transform hover:scale-105 focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
