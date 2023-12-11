import React from 'react'


const Login = () => {
  return (
    <>
    <div className='overflow-x-hidden '> 

    
  <img 
  className='z-20 absolute top-0 overflow-x-hidden h-full w-[100%]'
   src="./imgs/Login_page.jpg" alt="img not found"  />
   
     <form className='absolute text z-30 w-1/2 flex flex-col   gap-14 left-1/3 top-[9rem] ml-[22rem] '>
     <h1 className='text-[17px]  font-serif mt-[3rem]'>LOG INTO YOUR ACCOUNT</h1>
     <div className=''>
        <input type=" text" placeholder='Email address' className='p-2  rounded w-[350px]  border-b-4 top-' />
            
        <input type=" password" placeholder='Password' className='p-2  rounded w-[350px] bg-transparent border-b-4 mt-[2rem] flex' />
        <button className=' rounded-lg bg-black text-white w-[350px] font-serif border-2 p-2 hover:bg-yellow-500 mt-[4rem] '>LOG IN</button>
        </div>
        
        <div className=' cursor-pointer flex flex-row font-serif mt-[-3rem] gap-5 font-semibold text-sm tracking-wide'>
         <p className='hover:text-orange-500'>Forgot Password?</p>
         <p className='hover:text-orange-500'>Reset Password?</p>
         </div>

         <div className='font-serif  flex flex-row gap-24   w-[23rem] p-2 mt-[0.7rem]' >
         <h2 className='uppercase '>Need An Account ? </h2>
          <button className='  font-bold hover:text-orange-500'> REGISTER</button>
         </div>
     </form>
     </div>
      
    </>
  )
}

export default Login;