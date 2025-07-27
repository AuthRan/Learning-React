import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    let {userId} = useParams()
  return (
    <div className='text-4xl bg-gray-50 p-4 flex justify-center h-screen'>
      <h1>User : {userId}</h1>
    </div>
  )
}

export default User
