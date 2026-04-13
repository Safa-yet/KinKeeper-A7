import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Roots from './Router/Roots.jsx'
import Home from './Pages/Home Page/Home.jsx'
import Timeline from './Pages/Timeline Page/Timeline.jsx'
import Stats from './Pages/Stats Page/Stats.jsx'
import UserDetails from './Components/User Details/UserDetails.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children:[
      {
      index : true,
      Component:Home
    },
    {
      path : '/timeline',
      Component: Timeline
    },
    {
      path : '/stats',
      Component : Stats
    },
    {
      path: '/user/:id',
      Component : UserDetails
    }
  ]
  },
  // {
  //   path : "*",
  //   element: <h1>This is erorafasjdfgasdf</h1>
  // }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
