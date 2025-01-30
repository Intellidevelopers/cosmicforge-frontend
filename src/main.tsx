import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './main/onboarding/pages/LandingPage'
import Onboard from './main/onboarding/pages/Onboarding'
import HomeMainPage from './main/home/pages/HomeMainPage'
import HomePage from './main/home/pages/HomePage'





const router = createBrowserRouter([
  {
     path:'/',
    element:<LandingPage/>
  },
  {
    path:'/onboard',
   element:<Onboard/>
 },
 {
  path:'/',
  element:<HomeMainPage/>,
  children:[
    {
      path:'home',
      element:<HomePage/>
    }
  ]
 }


 

])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>

 
   
  </StrictMode>,
)
