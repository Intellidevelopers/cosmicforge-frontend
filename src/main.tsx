import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { persistore, store } from "./main/store/initStore";

import AddCard from "./main/shopScreens/pages/addCard.tsx";
import AiChatbot from "./main/chatbot/pages/runDiagnosis.tsx";
import AmbulanceEnRoute from "./main/firstAid/pages/ambulanceEnRoute.tsx";
import AppointmentInfoPage from "./main/PatientCalender/pages/AppointmentInfoPage";
import AppointmentMainPage from "./main/appointment/patient/pages/AppointmentMainPage";
import AppointmentReminder from "./main/alerts/pages/appointmentReminder.tsx";
import AuthValidatorPage from "./main/auth/signup/pages/AuthValidatorPage";
import BookAppointmentPhaseOnePage from "./main/appointment/patient/pages/BookAppointmentPhaseOnePage";
import CancelAppointment from "./main/alerts/pages/cancelAppointment.tsx";
import CancelledAppointment from "./main/PatientCalender/pages/CancelledAppointment";
import CardPayment from "./main/shopScreens/pages/cardPayment.tsx";
import CartPage from "./main/shopScreens/pages/cartPage.tsx";
import CategoryPage from "./main/shopScreens/pages/categoryPage.tsx";
import CertificationUpload from "./main/profile/doctor/pages/certificationUpload.tsx";
import Certifications from "./main/profile/doctor/pages/certifications.tsx";
import ChatPage from "./main/home/pages/chat/ChatPage";
import Chatbot from "./main/chatbot/pages/chatbot.tsx";
import CheckOutPage from "./main/shopScreens/pages/checkOutPage.tsx";
import CheckoutPage from "./main/appointment/patient/pages/CheckoutPage";
import ComingSoon from "./main/analytics/pages/ComingSoon";
import ComingSoonPage from "./main/onboarding/pages/ComingSoonPage";
import ConfirmWithdrawal from "./main/earnings-withdrawal/pages/confirmWithdrawal.tsx";
import DepartmentOverview from "./main/onboarding/pages/DepartmentOverview.tsx";
import DepartmentsPage from "./main/onboarding/pages/DepartmentsPage.tsx";
import DetailsPage from "./main/shopScreens/pages/detailsPage.tsx";
import DoctorAppointmentPage from "./main/home/pages/doctor/DoctorAppointmentPage.tsx";
import DoctorBioPage from "./main/appointment/patient/pages/DoctorBioPage";
import DoctorCalendar from "./main/home/pages/doctor/DoctorCalendar.tsx";
import DoctorEditProfilePage from "./main/profile/doctor/pages/DoctorEditProfilePage.tsx";
import DoctorHome from "./main/home/pages/doctor/DoctorHome";
import DoctorHomeMainPage from "./main/home/pages/doctor/DoctorHomeMainPage";
import DoctorMainChatPage from "./main/home/pages/chat/doctor/DoctorMainChatPage.tsx";
import DoctorMobileChatPage from "./main/home/pages/chat/doctor/DoctorMobileChatPage.tsx";
import DoctorProfile from "./main/profile/doctor/pages/doctorProfile.tsx";
import DoctorSubscribe from "./main/subscription/pages/doctorSubscribe.tsx";
import DoctorTable from "./main/home/pages/doctor/DoctorTable.tsx";
import Earnings from "./main/earnings-withdrawal/pages/earnings.tsx";
import EditPatientPP from "./main/profile/patient/pages/editPatientPP.tsx";
import EnterNewPassword from "./main/auth/reset/pages/EnterNewPassword";
import Faqs from "./main/profile/doctor/pages/faqs.tsx";
import Favorites from "./main/favorites/pages/favorites";
import FeatureIncoming from "./main/generalComponents/featureIncoming.tsx";
import FindASpecialist from "./main/home/pages/patient/FindASpecialist";
import FindASpecialistCardPage from "./main/home/pages/patient/FindASpecalistCardPage";
import FindAnAmbulance from "./main/firstAid/pages/findAnAmbulance.tsx";
import FindSpecialistViewPage from "./main/home/pages/patient/FindSpecialistViewPage";
import FirstAid1 from "./main/firstAid/pages/firstAid1";
import FirstAidSteps from "./main/firstAid/pages/firstAidSteps.tsx";
import HomeMainPage from "./main/home/pages/patient/HomeMainPage";
import HomePage from "./main/home/pages/patient/HomePage";
import HospitalAvailability from "./main/firstAid/pages/hospitalAvailability.tsx";
import LandingPage from "./main/onboarding/pages/LandingPage";
import LiscenceUpload from "./main/profile/doctor/pages/liscenceUpload.tsx";
import LoginPage from "./main/auth/login/pages/LoginPage";
import FeaturesPage from "./main/features/pages/index.tsx";
import PharmacyFeature from "./main/features/pages/pharmacy.tsx";
import LaboratoryFeature from "./main/features/pages/laboratory.tsx";
import FirstAidFeature from "./main/features/pages/first_aid.tsx";
import HealthEduFeature from "./main/features/pages/health_edu.tsx";
import VRFeature from "./main/features/pages/vr.tsx";
import TherapyFeature from "./main/features/pages/therapy.tsx";

import UnifiedHealthCare from "./main/features/pages/unified_healthcare_hub.tsx";
import UserCentricDesign from "./main/features/pages/user_centric_design.tsx";
import AIPoweredTools from "./main/features/pages/ai_powered.tsx";
import SimplifiedProcess from "./main/features/pages/simplified_process.tsx";
import MainChatPage from "./main/home/pages/chat/MainChatPage";
import MainRouterPage from "./main/Base/MainRouterPage.tsx";
import MissedAppointment from "./main/alerts/pages/missedAppointment.tsx";
import NoCertificates from "./main/alerts/pages/noCertificates.tsx";
import NoLiscenceAlert from "./main/alerts/pages/noLiscenceAlert.tsx";
import PastAppointment from "./main/PatientCalender/pages/PastAppointment";
import PatientAnalytics from "./main/analytics/pages/PatientAnalytics";
import PatientCalendarPage from "./main/PatientCalender/pages/PatientCalendarPage";
import PatientCalenderMainPage from "./main/PatientCalender/pages/PatientCalenderMainPage";
import PatientMainPP from "./main/profile/patient/pages/patientMainPP.tsx";
import PatientSubscribe from "./main/subscription/pages/patientSubscribe.tsx";
import PaymentComplete from "./main/shopScreens/pages/paymentComplete.tsx";
import PaymentReceipt from "./main/profile/patient/pages/payment-receipt.tsx";
import { PersistGate } from "redux-persist/integration/react";
import PricingPage from "./main/pricing/components/index.tsx";
import ProfileCompletePage from "./main/profileSetup/pages/ProfileCompletePage.tsx";
import ProfileSetup from "./main/profileSetup/pages/profileSetup";
import { Provider } from "react-redux";
import RegSuccess from "./main/auth/signup/pages/RegSuccess";
import RescheduleAppointment from "./main/alerts/pages/rescheduleAppointment.tsx";
import RescheduleDecline from "./main/alerts/pages/rescheduleDecline.tsx";
import ResetLogins from "./main/auth/reset/pages/ResetLogins";
import ResetSuccess from "./main/auth/reset/pages/ResetSuccess";
import RolePage from "./main/onboarding/pages/RolePage";
import SelectCase from "./main/firstAid/pages/selectCase.tsx";
import SelectLanguage from "./main/profile/doctor/pages/selectLanguage.tsx";
import Shop from "./main/shopScreens/pages/shop.tsx";
import SignUp1 from "./main/auth/signup/pages/SignUp1";
import SignUp2 from "./main/auth/signup/pages/Signup2";
import SignUpMain from "./main/auth/signup/pages/SignUpMain";
import SosPage from "./main/firstAid/pages/sosPage.tsx";
import TransactionHistory from "./main/profile/patient/pages/transactionHistory.tsx";
import UpcomingAppointmentPage from "./main/PatientCalender/pages/UpcomingAppointmentPage";
import UploadCertificateDetails from "./main/profile/doctor/pages/uploadCertificateDetails.tsx";
import UploadLiscenceDetails from "./main/profile/doctor/pages/uploadLiscenceDetails.tsx";
import UploadSuccessful from "./main/alerts/pages/uploadSuccessful.tsx";
import UserMessagesPage from "./main/home/pages/chat/UserMessagesPage";
import VerifyPayment from "./main/shopScreens/pages/verifyPayment.tsx";
import VirtualConsultPage from "./main/home/pages/VideoAndVoiceCall/VirtualConsultPage";
import VoiceAndVideoContainerPage from "./main/home/pages/chat/doctor/VoiceAndVideoContainerPage.tsx";
import VoiceCallPage from "./main/home/pages/chat/doctor/VoiceCallPage.tsx";
import Withdrawal from "./main/earnings-withdrawal/pages/withdrawal.tsx";
import WithdrawalReceipt from "./main/earnings-withdrawal/pages/withdrawalReceipt.tsx";
import WithdrawalSubmitted from "./main/earnings-withdrawal/pages/withdrawalSubmitted.tsx";
import WithdrawalSuccessful from "./main/alerts/pages/withdrawalSuccessful.tsx";
import { createRoot } from "react-dom/client";

// import FindASpecialist from './main/home/pages/FindASpecialist'
import AboutUs from "./main/onboarding/pages/AboutUs.tsx";
import PrivacyPolicy from "./main/onboarding/pages/PrivacyPolicy.tsx";
import TermsAndConditions from "./main/onboarding/pages/TermsAndConditions.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRouterPage />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/features",
        element: <FeaturesPage />,
      },

      {
        path: "/features/user_centric_design",
        element: <UserCentricDesign />,
      },

      {
        path: "/features/unified_healthcare_hub",
        element: <UnifiedHealthCare />,
      },

      {
        path: "/features/ai_powered",
        element: <AIPoweredTools />,
      },

      {
        path: "/features/simplified_process",
        element: <SimplifiedProcess />,
      },

      {
        path: "/features/pharmacy",
        element: <PharmacyFeature />,
      },

      {
        path: "/features/laboratory",
        element: <LaboratoryFeature />,
      },
      {
        path: "/features/first_aid",
        element: <FirstAidFeature />,
      },

      {
        path: "/features/health_edu",
        element: <HealthEduFeature />,
      },

      {
        path: "/features/vr",
        element: <VRFeature />,
      },

      {
        path: "/features/therapy",
        element: <TherapyFeature />,
      },

      {
        path: "/feature-unavailable",
        element: <FeatureIncoming />,
      },
      {
        path: "/verify-payment",
        element: <VerifyPayment />,
      },
      //Alerts screens here
      {
        path: "/alerts/upload-successful",
        element: <UploadSuccessful />,
      },
      {
        path: "/alerts/no-liscence",
        element: <NoLiscenceAlert />,
      },
      {
        path: "/alerts/no-certificate",
        element: <NoCertificates />,
      },
      {
        path: "/alerts/withdrawal-success",
        element: <WithdrawalSuccessful />,
      },
      {
        path: "/alerts/missed-appointment",
        element: <MissedAppointment />,
      },
      {
        path: "/alerts/reschedule-appointment",
        element: <RescheduleAppointment />,
      },
      {
        path: "/alerts/declined-reschedule",
        element: <RescheduleDecline />,
      },
      {
        path: "/alerts/appointment-time",
        element: <AppointmentReminder />,
      },
      {
        path: "/alerts/cancel-appointment",
        element: <CancelAppointment />,
      },
      {
        path: "patient",
        element: <HomeMainPage />,
        children: [
          {
            path: "home",
            element: <HomePage />,
          },

          {
            path: "/patient/",
            element: <FindASpecialist />,
            children: [
              {
                path: "find-a-specialist",
                element: <FindASpecialistCardPage />,
              },
              {
                path: "find-a-specialist/view",
                element: <FindSpecialistViewPage />,
              },
              {
                path: "find-a-specialist/consult",
                element: <VirtualConsultPage />,
              },
            ],
          },
          {
            path: "favorites",
            element: <Favorites />,
          },
          {
            path: "/patient/first-aid",
            element: <FirstAid1 />,
          },
          {
            path: "/patient/first-aid/find-an-ambulance",
            element: <FindAnAmbulance />,
          },
          {
            path: "/patient/first-aid/ambulance-en-route",
            element: <AmbulanceEnRoute />,
          },
          {
            path: "/patient/first-aid/hospital-availability",
            element: <HospitalAvailability />,
          },
          {
            path: "/patient/first-aid/sos",
            element: <SosPage />,
          },
          {
            path: "/patient/first-aid/:case",
            element: <SelectCase />,
            // children:[
            // ]
          },
          {
            path: "/patient/first-aid/:case/:person",
            element: <FirstAidSteps />,
          },
          {
            path: "/patient/chatbot",
            element: <Chatbot />,
          },
          {
            path: "/patient/run-diagnosis",
            element: <AiChatbot />,
          },
          {
            path: "/patient/shop",
            element: <Shop />,
          },
          {
            path: "/patient/shop/:category",
            element: <CategoryPage />,
          },
          {
            path: "/patient/shop/products/:product",
            element: <DetailsPage />,
          },
          {
            path: "/patient/shop/cart",
            element: <CartPage />,
          },
          {
            path: "/patient/shop/card-payment",
            element: <CardPayment />,
          },
          {
            path: "/patient/shop/add-card",
            element: <AddCard />,
          },
          {
            path: "/patient/shop/checkout",
            element: <CheckOutPage />,
          },
          {
            path: "/patient/shop/payment-complete",
            element: <PaymentComplete />,
          },
          {
            path: "/patient/subscription",
            element: <PatientSubscribe />,
          },
          {
            path: "transaction-history",
            element: <TransactionHistory />,
          },

          {
            path: "/patient/messages",
            element: <MainChatPage />,
            children: [
              {
                path: "",
                element: <UserMessagesPage />,
              },
              {
                path: "messages/chat",
                element: <ChatPage />,
              },
            ],
          },
        ],
      },

      {
        path: "/patient/payment-receipt",
        element: <PaymentReceipt />,
      },

      // Pricing
      {
        path: "pricing",
        element: <PricingPage />,
      },
      {
        path: "departments",
        element: <DepartmentsPage />,
      },
      {
        path: "department/overview",
        element: <DepartmentOverview />,
      },
      {
        path: "patient",
        element: <HomeMainPage />,
        children: [
          {
            path: "home",
            element: <HomePage />,
          },

          {
            path: "/patient/",
            element: <FindASpecialist />,
            children: [
              {
                path: "find-a-specialist",
                element: <FindASpecialistCardPage />,
              },
              {
                path: "find-a-specialist/view",
                element: <FindSpecialistViewPage />,
              },
              {
                path: "find-a-specialist/consult",
                element: <VirtualConsultPage />,
              },
            ],
          },
          {
            path: "favorites",
            element: <Favorites />,
          },

          {
            path: "/patient/first-aid",
            element: <FirstAid1 />,
          },
          {
            path: "/patient/first-aid/find-an-ambulance",
            element: <FindAnAmbulance />,
          },
          {
            path: "/patient/first-aid/ambulance-en-route",
            element: <AmbulanceEnRoute />,
          },
          {
            path: "/patient/first-aid/hospital-availability",
            element: <HospitalAvailability />,
          },
          {
            path: "/patient/first-aid/sos",
            element: <SosPage />,
          },
          {
            path: "/patient/first-aid/:case",
            element: <SelectCase />,
            // children:[
            // ]
          },
          {
            path: "/patient/first-aid/:case/:person",
            element: <FirstAidSteps />,
          },
          {
            path: "/patient/chatbot",
            element: <Chatbot />,
          },
          {
            path: "/patient/run-diagnosis",
            element: <AiChatbot />,
          },

          {
            path: "/patient",
            element: <MainChatPage />,
            children: [
              {
                path: "messages",
                element: <UserMessagesPage />,
              },
              {
                path: "messages/chat",
                element: <ChatPage />,
              },
            ],
          },
        ],
      },
      {
        path: "/coming-soon",
        element: <ComingSoonPage />,
      },

      {
        path: "/profile/complete",
        element: <ProfileCompletePage />,
      },

      {
        path: "/selectRole",
        element: <RolePage />,
      },
      {
        path: "/patient/profile",
        element: <PatientMainPP />,
      },
      {
        path: "/patient/profile/edit-profile",
        element: <EditPatientPP />,
      },
      {
        path: "/account",
        element: <SignUpMain />,
      },
      {
        path: "/account/signup/verify-email",
        element: <SignUp1 />,
      },
      {
        path: "/patient/profile/setup",
        element: <ProfileSetup />,
      },

      {
        path: "/account/signup/enter-personal-info",
        element: <SignUp2 />,
      },
      {
        path: "/account/signup/registration-success",
        element: <RegSuccess />,
      },
      {
        path: "/account/password-reset",
        element: <ResetLogins />,
      },
      {
        path: "/account/password-reset/new-password",
        element: <EnterNewPassword />,
      },
      {
        path: "/account/password-reset/success",
        element: <ResetSuccess />,
      },
      {
        path: "/auth",
        element: <AuthValidatorPage />,
      },
      {
        path: "/account/login",
        element: <LoginPage />,
      },

      {
        path: "/patient/analytics",
        element: <PatientAnalytics />,
      },
      {
        path: "/patient/analytics-coming-soon",
        element: <ComingSoon />,
      },

      {
        path: "/patient/appointment",
        element: <AppointmentMainPage />,
        children: [
          {
            path: "bio",
            element: <DoctorBioPage />,
          },
          {
            path: "book",
            element: <BookAppointmentPhaseOnePage />,
          },
          {
            path: "checkout",
            element: <CheckoutPage />,
          },
        ],
      },
      {
        path: "/patient/calendar/appointment-info",
        element: <AppointmentInfoPage />,
      },

      {
        path: "/patient/calendar",
        element: <PatientCalenderMainPage />,
        children: [
          {
            path: "",
            element: <PatientCalendarPage />,
          },
          {
            path: "upcoming",
            element: <UpcomingAppointmentPage />,
          },
          {
            path: "past",
            element: <PastAppointment />,
          },
          {
            path: "cancelled",
            element: <CancelledAppointment />,
          },
        ],
      },

      //please all doctor routes should be here

      {
        path: "/doctor",
        element: <DoctorHomeMainPage />,
        children: [
          {
            path: "home",
            element: <DoctorHome />,
          },
          {
            path: "/doctor/subscription",
            element: <DoctorSubscribe />,
          },

          {
            path: "/doctor/profile",
            element: <DoctorProfile />,
          },
        ],
      },

      {
        path: "/doctor/appointment",
        element: <VoiceAndVideoContainerPage />,
        children: [
          {
            path: "voice-call",
            element: <VoiceCallPage />,
          },
        ],
      },

      {
        path: "/doctor/appointments/",
        element: <DoctorAppointmentPage />,
        children: [
          {
            path: "",
            element: <DoctorTable />,
          },
          {
            path: "calendar",
            element: <DoctorCalendar />,
          },
        ],
      },
      {
        path: "/doctor/messages",
        element: <DoctorMainChatPage />,
      },
      {
        path: "/doctor/messages/chat",
        element: <DoctorMobileChatPage />,
      },

      {
        path: "/doctor/edit-profile",
        element: <DoctorEditProfilePage />,
      },

      {
        path: "/doctor/withdrawal-receipt",
        element: <WithdrawalReceipt />,
      },
      {
        path: "/doctor/withdrawal-submitted",
        element: <WithdrawalSubmitted />,
      },
      {
        path: "/doctor/confirm-withdrawal",
        element: <ConfirmWithdrawal />,
      },
      {
        path: "/doctor/withdrawal",
        element: <Withdrawal />,
      },
      {
        path: "/doctor/earnings",
        element: <Earnings />,
      },

      {
        path: "/doctor/certifications",
        element: <Certifications />,
      },
      {
        path: "/doctor/certification-upload",
        element: <CertificationUpload />,
      },
      {
        path: "/doctor/liscence-upload",
        element: <LiscenceUpload />,
      },
      {
        path: "/doctor/certificate-details-upload",
        element: <UploadCertificateDetails />,
      },
      {
        path: "/doctor/liscence-details-upload",
        element: <UploadLiscenceDetails />,
      },
      {
        path: "/doctor/faqs",
        element: <Faqs />,
      },
      {
        path: "/doctor/select-language",
        element: <SelectLanguage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistore}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
