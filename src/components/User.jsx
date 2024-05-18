import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/Context'

function User() {
  const {users, setusers} = useContext(UserContext);
  // console.log(x)

  return (
    <div className='w-full flex  flex-col items-center'>
      <h1 className="text-2xl font-semibold my-7 underline">Users List</h1>
      <div className="flex flex-col">
        {users.map((item, index) => (<Link to={`/user/${item.id}`} key={index} className='m-1 bg-red-400 rounded py-1 px-3 text-white text-2xl font-semibold'>{item.username}</Link>))}
      </div>
    </div>
  )
}

export default User