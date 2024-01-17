import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CartIteam from './CartIteam';
import HeaderCart from './HeaderCart';
import { useLocation } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();
  const product = location.state?.product; // Access product from location state

  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    // Update the item count when a product is added to the cart
    if (product) {
      setItemCount((prevCount) => prevCount +1 );
    }
  }, [product]);

  return (
    <div>
      <Navbar />
      <HeaderCart itemCount={itemCount} /> {/* Pass the itemCount as a prop to HeaderCart */}
      <CartIteam product={product} /> {/* Pass the product as a prop to CartIteam */}
    </div>
  );
};

export default Cart;
