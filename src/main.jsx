import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import About from './components/About';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <h3>This is Home component</h3>
            },
            {
                path: '/books',
                element: <h3>This is books component</h3> 
            },
            {
                path: '/about', 
                element: <About></About>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
