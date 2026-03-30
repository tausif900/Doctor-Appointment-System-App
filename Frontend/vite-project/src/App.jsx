import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Common/Layout'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Registration from './Pages/Registration'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Registration />
      }
    ]
  }
])


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
