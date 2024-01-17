import React from 'react';

const CartIteam = ({ product }) => {
  return (
    <div className="text-center ">
      <h2 className="font-serif  text-2xl mt-4 font-extralight mb-7">Your Products</h2>
      {product && (
        <div className="flex flex-row justify-evenly items-center  border-dashed border-2 ">
          <img  src={product.ProductImg} alt={product.ProductName} className=" className=' h-46 w-44 mb-4'" />
          <p className='text-3xl text-gray-600 hover:scale-x-110 cursor-pointer transition-all font-serif'>{product.ProductName}</p>
          <p className="font-serif font-bold text-xl">${product.ProductPrice}</p>
          <p className="font-serif  border bg-black text-white p-3 hover:scale-x-110 cursor-pointer">Continue</p>

          {/* Add more details as needed */}
        </div>
      )}  
    </div>
  );
};

export default CartIteam;
