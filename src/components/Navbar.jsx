import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className='bg-purple-500 p-5 shadow-md'>
            <div className='container mx-auto flex justify-between'>
                <h1 className='text-2xl font-bold text-white'>Logo</h1>
                <div className='text-white flex items-center space-x-2 font-bold'>
                    <NavLink className={(navData) => navData.isActive ? 'text-gray-100 border-b' : '' } to="/">Home</NavLink>
                    <NavLink className={(navData) => navData.isActive ? 'text-gray-100 border-b' : '' } to="/create" >Create</NavLink>
                </div>
            </div>
        </nav>
    </div>
  )
}
