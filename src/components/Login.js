import React from 'react'
import Header from './Header';


const Login = () => {
  return (
    <>
     <Header/>
  <img 
  className='z-10 absolute top-0 '
   src="./imgs/login_FF.jpg" alt="img not found"  />
   
     <form className='absolute text z-50 w-1/2 flex flex-col mx-44 gap-16'>
     <h1 className='text-[17px] font-serif '>LOG INTO YOUR ACCOUNT</h1>
        <input type=" text" placeholder='Email address' className='p-2  w-[400px] bg-transparent border-b-4 ' />
            
        <input type=" password" placeholder='Password' className='p-2 m-2 w-[400px] bg-transparent border-b-4' />
        <button className='  w-[400px] font-serif border-2 p-2 hover:bg-white '>LOG IN</button>
        <p className='text-[13px] font-sans my-[-45px] '> Have you forgotten your password?</p>
     </form>

     <div className='absolute z-40 left-[45%] space-y-6'>
      <h2 className='text-[17px] font-serif'>NEED AN ACCOUNT?</h2>
      <button className=' w-[250px] font-serif border-2 p-1 hover:bg-white'>REGISTER</button>

     </div>
    </>
  )
}

export default Login;