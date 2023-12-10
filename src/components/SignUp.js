import React from 'react'
import Header from './Header'

const SignUp = () => {
  return (
    <>
     <Header/>
  <img 
  className='z-10 absolute top-0 '
   src="./imgs/login_FF.jpg" alt="img not found"  />
   
     <form className='absolute text z-50 w-1/2 flex flex-col mx-44 gap-5'>
     <h1 className='text-[17px] font-serif mt-[-10px] mb-[2rem]'>PERSONAL DETAIL</h1>
        <input type=" text" placeholder='Email address' className='p-2 m-2 w-[400px] bg-transparent border-b-4 ' />
            
        <input type=" password" placeholder='Password' className='p-2 m-2 w-[400px] bg-transparent border-b-4' />
        <input type=" text" placeholder='Name' className='p-2 m-2 w-[400px] bg-transparent border-b-4' />
        <input type=" number" placeholder='TelePhone' className='p-2 m-2 w-[400px] bg-transparent border-b-4' />
        <p>we will send you an SMS to verify your phone number</p>
        <button className=' w-[400px] font-serif border-2 p-1 mt-7 hover:bg-white'>CREATE ACCOUNT</button>
        
     </form>

    </>
  )
}

export default SignUp