import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex flex-row justify-around items-center w-full z-50'>
      <Link to="/">
        <img
          className="h-52 w-max -ml-24 -mt-9 cursor-pointer"
          src="./imgs/logo.png"
          alt="logo not loaded"
        />
      </Link>
      <input type="text" placeholder='SEARCH' className='text-center items-start p-1 rounded-md w-64 border border-black hover:border-zinc-600' />
      <div className="flex-row gap-7 flex text-right text-black font-serif">
        <Link to="/Login" className="hover:scale-x-110 cursor-pointer transition-all">LOG IN</Link>
        <Link to="/Help" className="hover:scale-x-110 cursor-pointer transition-all">HELP</Link>
        <Link to="/Cart" className="hover:scale-x-110 cursor-pointer transition-all">SHOPPING BAG (0)</Link>
      </div>
    </div>
  );
};

export default Navbar;
