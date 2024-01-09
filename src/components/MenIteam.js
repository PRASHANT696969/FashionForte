// MenIteam.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Products } from "./Products";
import Description from './Description';

const MenIteam = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    navigate(`/product/${product.Id}`); // Use a dynamic route for each product
  };

  return (
    <div className='grid grid-cols-3 text-center m-auto gap-14 w-2/3'>
      {Products.map((product) => (
        <div
          key={product.Id}
          onClick={() => handleProductClick(product)}
          className='bg-gray-100 p-4 transform cursor-pointer transition-all gap-2 duration-300 hover:scale-105 hover:bg-gray-200 hover:shadow-md'
        >
          <img src={product.ProductImg} alt={product.ProductName} />
          <p className='mt-3 font-serif font-semibold'>{product.ProductName}</p>
          <p className='mt-1 font-light'>{product.ProductPrice}</p>
          <button className='mt-1 border font-serif border-gray-200 rounded-lg hover:bg-gray-300 hover:scale-105 px-3'>
            ADD TO CART
          </button>
        </div>
      ))}
      {selectedProduct && <Description product={selectedProduct} />}
    </div>
  );
};

export default MenIteam;
