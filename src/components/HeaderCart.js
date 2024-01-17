import React from 'react';

const HeaderCart = ({ itemCount }) => {
  return (
    <div className='text-center m-auto w-2/3'>
      <h2 className='text-2xl font-serif font-bold uppercase'> WELCOME TO Shopping Cart</h2>
      <p>
        You have <span className='font-semibold'>{itemCount}</span> item(s) in the Shopping cart!
      </p>
    </div>
  );
};

export default HeaderCart;
