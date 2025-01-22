import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold text-emerald-500'>
          user 👋
        </span>
      </h1>
      <button 
        onClick={logOutUser} 
        className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 active:scale-95'>
        Log Out
      </button>
    </div>
  )
}

export default Header;
