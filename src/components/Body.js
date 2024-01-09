import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import SignUp from './SignUp';
import MenProduct from './MenProduct';
import WomenProduct from './WomenProduct';
import Cart from './Cart';
import Help from './Help';
import Description from './Description';

const Body = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Browse />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MenProduct/*" element={<MenProduct />} />
        <Route path="/WomenProduct" element={<WomenProduct />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Description />} />
      </Routes>
    </Router>
  );
};

export default Body;
