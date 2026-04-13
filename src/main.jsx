import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Roots from './Router/Roots.jsx'
import Home from './Pages/Home.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children:[
      {
      index : true,
      Component:Home
    }
  ]
  },
  {
    path : "*",
    element: <h1>This is erorafasjdfgasdf</h1>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
