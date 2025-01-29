import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './main/onboarding/pages/LandingPage'
import Onboard from './main/onboarding/pages/Onboarding'
import RolePage from './main/onboarding/pages/RolePage'




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
    path:'/selectRole',
    element:<RolePage/>
  }
])




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>

 
   
  </StrictMode>,
)
