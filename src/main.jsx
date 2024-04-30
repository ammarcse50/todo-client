import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Components/pages/Auth/AuthProvider.jsx';
import Login from './Components/pages/Auth/Login.jsx';
import Layout from './Components/Layout/Layout.jsx';
import Register from './Components/pages/Auth/Register.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[

      {
        path: '/',
        element:<App></App>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
     
    </AuthProvider>
    
  </React.StrictMode>,
)
