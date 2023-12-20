import { createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'
import SignUp from './SignUp'
import MenProduct from './MenProduct'

const Body = () => {

    const appRouter = createBrowserRouter([
            {
                path: "/Login",
                element : <Login/>,
            },
            {
                path: "/",
                element : <Browse/>,
            },
            {
              path: "/SignUp",
              element : <SignUp/>,
            },
            {
              path: "/MenProduct",
              element : <MenProduct/>,
            }
    ])

  return (
    <div>
        <RouterProvider router = {appRouter } />
    </div>
  )
}

export default Body