import logo from "../../../../assets/logo/logo_comsic_splash.svg";
import homeIcon from "../../../../assets/icons/home/cosmic-home-active.svg";
import calenderIcon from "../../../../assets/icons/home/cosmic-home-calander.svg";

import messageIcon from "../../../../assets/icons/cosmic-chat.svg";
import analyticsIcon from "../../../../assets/icons/home/cosmic-home-analytics.svg";

import logOutIcon from "../../../../assets/icons/cosmic-logout.svg";

import { useNavigate } from "react-router-dom";
import useGetDoctorActiveNavbarRoute from "../../hook/doctor/useGetDoctorActiveNavbarRoute";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../../store/initStore";
import { authenticateUser } from "../../../store/reducers/userReducers";
import defaultProfile from '../../../../assets/icons/defaultProfile.jpg'

const DoctorHomeSideBar = () => {
  const {activeRoutePath,setActiveRoutePath} = useGetDoctorActiveNavbarRoute()
const navigate = useNavigate()

const dispatch = useDispatch()

const user = useSelector((state:RootReducer)=>state.user)
  
  return (
    <div className="   h-dvh bg-home-slidder-color shadow-md shadow-black  overflow-y-auto  p-4 z-50 cursor-default">
      
      <div className="w-full mt-6 ">
        <img alt="logo" src={logo} />
        <div className="user-profile-container w-full flex flex-col gap-4  justify-center place-items-center mt-2 ">
          <div className=" w-[80px] h-[80px] rounded-full bg-gray-500 mt-1">
            <img alt="profile-image " className="w-[100%] h-[100%] rounded-full" src={user.data?.profile?.profilePicture ??defaultProfile} />
          </div>
          <p>ID:<span className="text-sm font-light">{user.data?.profile?.userCosmicID}</span></p>
          <p>Dr {user.data?.fullName}</p>
          <p className={`font-extralight text-cosmic-primary-color ${(activeRoutePath.isEditProfileActive) && 'underline'}`} onClick={()=>{
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: false,
                isMessageActive: false,
                isAppoinmentsActive:false,
                isAnalyticsActive: false,
                isProfileActive:false,
                isEditProfileActive:true
              })
              navigate('/doctor/edit-profile')
            }} >
            Edit Profile
          </p>

          <div className="nav-bar-links-container w-full flex flex-col justify-center place-items-center gap-5">
            
            <div className={`w-full flex justify-start min-h-10 ps-[16%] ms-5  place-items-center gap-4 ${(activeRoutePath.isHomeActive) ? 'opacity-50 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black    shadow-sm font-semibold':'opacity-50'} text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active  rounded-md  hover:shadow-black hover:shadow-sm hover:font-semibold`} onClick={()=>{
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: true,
                isMessageActive: false,
                isAppoinmentsActive:false,
                isAnalyticsActive: false,
                isProfileActive:false,
                isEditProfileActive:false
              })
              navigate('/doctor/dashboard')
            }}   >
              <img alt="home" src={homeIcon} />
              <p className="">Dashboard</p>
            </div>

            <div className={`w-full flex justify-start hover:shadow-md ps-[16%]   ms-5 min-h-10  place-items-center gap-4 ${(activeRoutePath.isAppoinmentsActive) ?'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-sm font-semibold':'opacity-50'} text-cosmic-color-lightBlue  hover:opacity-50 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active  rounded-md  hover:shadow-black hover:shadow-sm hover:font-semibold`} onClick={()=>{
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: false,
                isMessageActive: false,
                isAppoinmentsActive:true,
                isAnalyticsActive: false,
                isProfileActive:false,
                isEditProfileActive:false
              })
              navigate('/doctor/appointments')
            }}>
              <img alt="appointment" src={calenderIcon} />
              <p>Appointments</p>
            </div>

            <div className={`w-full flex justify-start ps-[16%] ms-5 min-h-10  place-items-center gap-4 ${(activeRoutePath.isMessageActive) ?'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-sm font-semibold':'opacity-50'} text-cosmic-color-lightBlue   hover:opacity-50 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active  rounded-md  hover:shadow-black hover:shadow-sm hover:font-semibold`} onClick={()=>{
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: false,
                isMessageActive: true,
                isAppoinmentsActive:false,
                isAnalyticsActive: false,
                isProfileActive:false,
                isEditProfileActive:false
              })

              navigate('/doctor/messages')
            }}>
              <img alt="message" src={messageIcon} />
              <p>Messages</p>
            </div>

           

            <div className={`w-full flex ps-[16%] justify-start min-h-10  ms-5  place-items-center gap-4 ${(activeRoutePath.isAnalyticsActive) ?'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-sm font-semibold':'opacity-50'} text-cosmic-color-lightBlue  hover:opacity-50 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active  rounded-md  hover:shadow-black hover:shadow-sm  hover:font-semibold`} onClick={()=>{
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: false,
                isMessageActive: false,
                isAppoinmentsActive:false,
                isAnalyticsActive: true,
                isProfileActive:false,
                isEditProfileActive:false
              })
            }}>
              <img alt="analytics" src={analyticsIcon} />
              <p>Analytics</p>
            </div>

          

  
            <div className={`w-full flex ps-[16%] justify-start ms-5 min-h-10  place-items-center gap-4 ${(activeRoutePath.isProfileActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-sm font-semibold':'opacity-50'} text-cosmic-color-lightBlue  hover:opacity-50 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active  rounded-md  hover:shadow-black hover:shadow-sm hover:font-semibold`} onClick={()=>{
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: false,
                isMessageActive: false,
                isAppoinmentsActive:false,
                isAnalyticsActive: false,
                isProfileActive:true,
                isEditProfileActive:false
              })
              navigate('/doctor/settings')
            }}>
              <img alt="home" src={calenderIcon} />
              <p>Profile</p>
            </div>

            <div className="w-full flex justify-start ps-[16%] mt-3  ms-5 text-cosmic-color-warning-color  hover:underline ">
            <img alt="home" src={logOutIcon} />

              <p onClick={()=>{
                 dispatch(authenticateUser({ isAunthenticated: false, data: {}, emailValidated: false, keepMeSignedIn: false }))
                                navigate('/')
              }}>Log out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorHomeSideBar;
