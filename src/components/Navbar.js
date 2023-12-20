import React from 'react'

const Navbar = () => {
  return <div className=' flex flex-row justify-around items-center   w-full z-50'>
  <img
    className="h-52  w-max -ml-32 -mt-9  cursor-pointer"
    src="./imgs/logo.png"
    alt="logo not loaded"
  />
  <input type="text" placeholder='SEARCH' className='text-center items-start p-1 rounded-md w-64 border  border-black hover:border-zinc-600' />
  <div className="flex-row gap-7 flex text-right text-black font-serif">
    <p className="hover:scale-x-110 cursor-pointer transition-all">LOG IN</p>
    <p className="hover:scale-x-110 cursor-pointer transition-all">HELP</p>
    <p className="hover:scale-x-110 cursor-pointer transition-all">SHOPPING BAG (0)</p>
  </div>
</div>

}

export default Navbar