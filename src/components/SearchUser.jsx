import React from 'react'
import user from "../assets/image/usrrrr.png"

function SearchUser() {
  return (
    <div className='max-w-[1240px] mx-auto mt-5'>
        <div className='grid place-content-center'>
            <img src={user} alt="user" className='my-5 w-[100px] h-[100px]'/>
        </div>

        <div className='grid place-content-center'>
            <h1 className='text-3xl md:text-4xl font-mono font-bold'>Search Github User</h1>
        </div>
    </div>
  )
}

export default SearchUser