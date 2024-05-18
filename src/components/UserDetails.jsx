import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetails() {
  const{id} = useParams();
  const { users } = useContext(UserContext);
  // console.log(users[id])
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)} className='p-7 font-bold text-red-600'>Go Back</button>
      <h1 className="text-4xl font-semibold uppercase flex justify-center mt-7">{users[id].username}</h1>
      <h1 className="text-xl text-black/70 font-semibold uppercase flex justify-center my-1 tracking-widest">{users[id].city}</h1>
    </div>
  )
}

export default UserDetails