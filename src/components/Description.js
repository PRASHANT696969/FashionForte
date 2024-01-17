
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Products } from './Products';
import Navbar from './Navbar';
import Footer from './Footer';

const Description = () => {
  const { productId } = useParams();
  const navigate = useNavigate(); // Import the useNavigate hook
  const product = Products.find((product) => product.Id.toString() === productId);

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className='flex justify-center items-center h-screen'>
          <div>Product not found</div>
        </div>
        <Footer />
      </div>
    );
  }

  const addToCart = () => {
    navigate('/cart', { state: { product } }); // Pass product as state
  };

  return (
    <div>
      <Navbar /> 
      <div className='flex gap-64 self-center m-auto w-3/4'>
        <div>
          <img className='w-96' src={product.ProductImg} alt={product.ProductName} />
        </div>
        <div className='font-bold my-24 space-y-9'>
          <h1 className='text-5xl text-gray-600 hover:scale-x-110 cursor-pointer transition-all font-serif'>{product.ProductName}</h1>
          <p className='text-xl font-normal font-sans'>{`Price: $${product.ProductPrice}`}</p>
          <button
            onClick={addToCart}
            className='border text-xl font-serif hover:scale-x-110 cursor-pointer transition-all border-gray-400 rounded-md px-4 py-1 hover:bg-gray-300 hover:scale-105 hover:animate-bounce animate-pulse '
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Description;
