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

        <div className='grid place-content-center mt-3'>
          <input  type="text" placeholder='Enter Github User Name' className='bg-[#e3ebe3] rounded-lg border-4 p-2 w-[280px] md:w-[400px]'/>
        </div>


       
        {/* <div className='flex justify-center mt-5'>
          <div className='h-[200px] w-[160px] bg-slate-500 grid place-content-center'>
              <img src={user} alt="" srcset="" />
          </div>
          <div className=' h-[200px] w-[400px] bg-slate-900'></div>
        </div> */}

    </div>
  )
}

export default SearchUser