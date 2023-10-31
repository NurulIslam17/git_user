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


      <div className='flex flex-wrap justify justify-evenly'>
        <div className='md:w-[50%]'>
          <div className='grid place-content-center'>
              <img src={user} alt="" srcset="" />
          </div>
          <div className=''>
            <p className='p-5 font-mono text-justify text-2xl md:text-xl'>Hi!, Welcome to <span className='font-bold'>Nurul</span> 's Github Profile. He is currently living in <span className='font-bold'> Dhaka</span>. He is working with <span className='font-bold'>Green University</span>. He is active github user since <span className='font-bold'>12/33/33</span>. His Total public repo is 23.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchUser