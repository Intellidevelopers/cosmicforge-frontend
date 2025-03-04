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
import ProfileSetup from './main/profileSetup/pages/profileSetup'
import { Provider } from 'react-redux'
import { persistore, store } from './main/store/initStore'
import { PersistGate } from 'redux-persist/integration/react'


import SignUp2 from './main/auth/signup/pages/Signup2';
import RegSuccess from './main/auth/signup/pages/RegSuccess';
import ResetLogins from './main/auth/reset/pages/ResetLogins';
import LoginPage from './main/auth/login/pages/LoginPage';
import EnterNewPassword from './main/auth/reset/pages/EnterNewPassword';
import ResetSuccess from './main/auth/reset/pages/ResetSuccess';
import ComingSoonPage from './main/onboarding/pages/ComingSoonPage'
import PatientAnalytics from './main/analytics/pages/PatientAnalytics'
import ComingSoon from './main/analytics/pages/ComingSoon'
import AppointmentMainPage from './main/appointment/patient/pages/AppointmentMainPage'
import DoctorBioPage from './main/appointment/patient/pages/DoctorBioPage'
import BookAppointmentPhaseOnePage from './main/appointment/patient/pages/BookAppointmentPhaseOnePage'
import CheckoutPage from './main/appointment/patient/pages/CheckoutPage'
import PatientCalenderMainPage from './main/PatientCalender/pages/PatientCalenderMainPage'
import PatientCalendarPage from './main/PatientCalender/pages/PatientCalendarPage'
import UpcomingAppointmentPage from './main/PatientCalender/pages/UpcomingAppointmentPage'
import PastAppointment from './main/PatientCalender/pages/PastAppointment'
import CancelledAppointment from './main/PatientCalender/pages/CancelledAppointment'
import AuthValidatorPage from './main/auth/signup/pages/AuthValidatorPage'
import FirstAid1 from './main/firstAid/pages/firstAid1'
import SelectCase from './main/firstAid/pages/selectCase.tsx';
import FirstAidSteps from './main/firstAid/pages/firstAidSteps.tsx'
import SosPage from './main/firstAid/pages/sosPage.tsx'
import FindAnAmbulance from './main/firstAid/pages/findAnAmbulance.tsx'
import AmbulanceEnRoute from './main/firstAid/pages/ambulanceEnRoute.tsx'
import HospitalAvailability from './main/firstAid/pages/hospitalAvailability.tsx'
import Chatbot from './main/chatbot/pages/chatbot.tsx'



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
      path:'patient/home',
      element:<HomePage/>
    },
    {
      path:'/patient',
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
      path:'chatbot',
      element:<Chatbot/>
    },
    {
      path:'favorites',
      element:<Favorites/>
    },
    {
      path:'first-aid',
      element:<FirstAid1/>,
    },
    {
      path:'first-aid/find-an-ambulance',
      element:<FindAnAmbulance/>,
    },
    {
      path:'first-aid/ambulance-en-route',
      element:<AmbulanceEnRoute/>,
    },
    {
      path:'first-aid/hospital-availability',
      element:<HospitalAvailability/>,
    },
    {
      path:'first-aid/sos',
      element:<SosPage/>
    },
    {
      path:'first-aid/:case',
      element:<SelectCase/>,
      // children:[
      // ]
    },
    {
      path:'first-aid/:case/:person',
      element:<FirstAidSteps/>
    },
    {
      path:'first-aid',
      element:<FirstAid1/>,
    },
    {
      path:'first-aid/find-an-ambulance',
      element:<FindAnAmbulance/>,
    },
    {
      path:'first-aid/ambulance-en-route',
      element:<AmbulanceEnRoute/>,
    },
    {
      path:'first-aid/hospital-availability',
      element:<HospitalAvailability/>,
    },
    {
      path:'first-aid/sos',
      element:<SosPage/>
    },
    {
      path:'first-aid/:case',
      element:<SelectCase/>,
      // children:[
      // ]
    },
    {
      path:'first-aid/:case/:person',
      element:<FirstAidSteps/>
    },

    {
      path:'/patient',
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
  path:'/coming-soon',
  element:<ComingSoonPage/>
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
    path:'/patient/account',
   element:<SignUpMain/>
  },
  {
    path:'/patient/account/signup/verify-email',
   element:<SignUp1/>
  },
  {
    path:'/patient/profile/setup',
   element:<ProfileSetup/>
  },

    {path:'/patient/account/signup/enter-personal-info',
   element:<SignUp2/>
  },
  {
    path:'/patient/account/signup/registration-success',
   element:<RegSuccess/>
  },
  {
    path:'/patient/account/password-reset',
   element:<ResetLogins/>
  },
  {
    path:'/patient/account/password-reset/new-password',
   element:<EnterNewPassword/>
  },
  {
    path:'/patient/account/password-reset/success',
   element:<ResetSuccess/>
  },
  {
    path:'/auth',
    element:<AuthValidatorPage/>
  },
  {
    path:'/account/login',
   element:<LoginPage/>
  },


  
  {
    path:'/patient/analytics',
   element:<PatientAnalytics/>
  },
  {
    path:'/patient/analytics-coming-soon',
   element:<ComingSoon/>
  },


  {
    path:'/patient/appointment',
    element:<AppointmentMainPage/>,
    children:[
{
  path:'bio',
  element:<DoctorBioPage/>
},
{
  path:'book',
  element:<BookAppointmentPhaseOnePage/>
}
,
{
  path:'book',
  element:<BookAppointmentPhaseOnePage/>
},
{
  path:'checkout',
  element:<CheckoutPage/>
}
    ]
  }
,
  
  {
    path:'/patient/calendar',
    element:<PatientCalenderMainPage/>,
    children:[
{
  path:'',
  element:<PatientCalendarPage/>
},
{
  path:'upcoming',
  element:<UpcomingAppointmentPage/>
}
,
{
  path:'past',
  element:<PastAppointment/>
},
{
  path:'cancelled',
  element:<CancelledAppointment/>
}
    ]
  }
])




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistore}>
      <RouterProvider router={router}/>
      </PersistGate>
   
    </Provider>
    

 
   
  </StrictMode>,
)
