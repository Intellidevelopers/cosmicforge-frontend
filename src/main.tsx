import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './main/onboarding/pages/LandingPage'

import HomeMainPage from './main/home/pages/patient/HomeMainPage'
import HomePage from './main/home/pages/patient/HomePage'

import SignUpMain from './main/auth/signup/pages/SignUpMain'
import RolePage from './main/onboarding/pages/RolePage';
import SignUp1 from './main/auth/signup/pages/SignUp1'
//import FindASpecialist from './main/home/pages/FindASpecialist'
import Favorites from './main/favorites/pages/favorites'
import FindASpecialist from './main/home/pages/patient/FindASpecialist'
import DoctorHomeMainPage from './main/home/pages/doctor/DoctorHomeMainPage'
import DoctorHome from './main/home/pages/doctor/DoctorHome'
import FindASpecialistCardPage from './main/home/pages/patient/FindASpecalistCardPage'
import FindSpecialistViewPage from './main/home/pages/patient/FindSpecialistViewPage'
import VirtualConsultPage from './main/home/pages/VideoAndVoiceCall/VirtualConsultPage'
import MainChatPage from './main/home/pages/chat/MainChatPage'
import UserMessagesPage from './main/home/pages/chat/UserMessagesPage'
import SignUp2 from './main/auth/signup/pages/Signup2';
import RegSuccess from './main/auth/signup/pages/RegSuccess';
import ResetLogins from './main/auth/reset/pages/ResetLogins'
import LoginPage from './main/auth/login/pages/LoginPage'
import EnterNewPassword from './main/auth/reset/pages/EnterNewPassword'
import ResetSuccess from './main/auth/reset/pages/ResetSuccess'


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
    },
    {
      path:'/',
      element:<FindASpecialist/>,
      children:[
        {
          path:'find-a-specialist',
          element:<FindASpecialistCardPage/>
        },
        {
          path:'find-a-specialist/view',
          element:<FindSpecialistViewPage/>
        },
        {
          path:'find-a-specialist/consult',
          element:<VirtualConsultPage/>
        },

       
      ]
    },
    {
      path:'favorites',
      element:<Favorites/>
    },
    {
      path:'/',
      element:<MainChatPage/>,
      children:[
        {
          path:'messages',
          element:<UserMessagesPage/>
        }
      ]
      
    }
  
  ]
 },
 {
  path:'/doctor',
  element:<DoctorHomeMainPage/>,
  children:[
    {
      path:'home',
      element:<DoctorHome/>
    },
  ]
 },

{
    path:'/selectRole',
    element:<RolePage/>
  },
  {
    path:'/account',
   element:<SignUpMain/>
  },
  {
    path:'/account/signup/verify-email',
   element:<SignUp1/>
  },
  {
    path:'/account/signup/enter-personal-info',
   element:<SignUp2/>
  },
  {
    path:'/account/signup/registration-success',
   element:<RegSuccess/>
  },
  {
    path:'/account/password-reset',
   element:<ResetLogins/>
  },
  {
    path:'/account/password-reset/new-password',
   element:<ResetLogins/>
  },
  {
    path:'/account/password-reset/success',
   element:<ResetSuccess/>
  },
  {
    path:'/account/login',
   element:<LoginPage/>
  },
])




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>

 
   
  </StrictMode>,
)
