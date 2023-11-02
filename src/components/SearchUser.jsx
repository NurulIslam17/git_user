import React, { useState } from 'react';
import user from "../assets/image/usrrrr.png";
import UserInfo from './UserInfo';

function SearchUser() {
  const [userName, setUserName] = useState('');

  const nameChange = (event) =>{
    setUserName(event.target.value);

  }
  return (
    <div className='max-w-[1240px] mx-auto mt-5'>
        <div className='grid place-content-center'>
            <img src={user} alt="user" className='my-5 w-[100px] h-[100px]'/>
        </div>

        <div className='grid place-content-center'>
            <h1 className='text-3xl md:text-4xl font-mono font-bold'>Search Github User</h1>
        </div>

        <div className='grid place-content-center mt-3'>
          <input  type="text" placeholder='Enter Github User Name' onChange={nameChange} className='bg-[#e3ebe3] rounded-lg border-4 p-2 w-[280px] md:w-[400px]'/>
        </div>
        
        { userName ? 
          <UserInfo userName = {userName} /> :
          <p className='text-center mt-2 text-2xl font-serif'>Search Your Profile</p>
        }
    </div>
  )
}

export default SearchUser