import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './main/onboarding/pages/LandingPage'

import HomeMainPage from './main/home/pages/HomeMainPage'
import HomePage from './main/home/pages/HomePage'

import SignUpMain from './main/auth/signup/pages/SignUpMain'
import RolePage from './main/onboarding/pages/RolePage';
import SignUp1 from './main/auth/signup/pages/SignUp1'




const router = createBrowserRouter([
  {
     path:'/',
    element:<LandingPage/>
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
 },
{
    path:'/selectRole',
    element:<RolePage/>
  },
  {
    path:'/signup',
   element:<SignUpMain/>
  },
  {
    path:'/signup/verifyEmail',
   element:<SignUp1/>
  },
])




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>

 
   
  </StrictMode>,
)
