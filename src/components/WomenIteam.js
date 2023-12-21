import React from 'react'
import { WProducts } from "./Wproducts"

const WomenIteam = () => {
  return (
    <div className='grid grid-cols-3 text-center m-auto gap-14 w-2/3 '>
      {WProducts.map((product) => (
        <div key={product.Id} className='bg-gray-100 p-4 transform cursor-pointer transition-all gap-2 duration-300 hover:scale-105 hover:bg-gray-200 hover:shadow-md'>
          <img src={product.ProductImg} alt={product.ProductName} />
          <p className=' mt-3 font-serif font-semibold '>{product.ProductName}</p>
          <p className=' mt-1 font-light '>{product.ProductPrice}</p>
          <button className='mt-1 border font-serif border-gray-200 rounded-lg hover:bg-gray-300 hover:scale-105 px-3' >ADD TO CART</button>
        </div>
      ))}
    </div>
  );
}

export default WomenIteam