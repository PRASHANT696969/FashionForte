import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import { RouterProvider } from 'react-router-dom'; // Import RouterProvider directly
import SignUp from './SignUp';
import MenProduct from './MenProduct';
import WomenProduct from './WomenProduct';
import Cart from './Cart';
import Help from './Help';

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: '/Login', element: <Login /> },
    { path: '/', element: <Browse /> },
    { path: '/SignUp', element: <SignUp /> },
    { path: '/MenProduct/*', element: <MenProduct /> }, // Use a wildcard route for MenProduct
    { path: '/WomenProduct', element: <WomenProduct /> },
    { path: '/Help', element: <Help /> },
    { path: '/Cart', element: <Cart /> },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
