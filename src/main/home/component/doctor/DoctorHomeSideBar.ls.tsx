import logo from "../../../../assets/logo/logo_comsic_splash.svg";
import profileIconTmp from "../../../../assets/images/cosmic-doctor-profile.svg";
import homeIcon from "../../../../assets/icons/home/cosmic-home-active.svg";
import calenderIcon from "../../../../assets/icons/home/cosmic-home-calander.svg";

import messageIcon from "../../../../assets/icons/cosmic-chat.svg";
import analyticsIcon from "../../../../assets/icons/home/cosmic-home-analytics.svg";

import logOutIcon from "../../../../assets/icons/cosmic-logout.svg";
import useGetActiveRoute from "../../hook/patient/useGetActiveRoute";
import { useNavigate } from "react-router-dom";

const DoctorHomeSideBar = () => {
  const {activeRoutePath,setActiveRoutePath} = useGetActiveRoute()
const navigate = useNavigate()
  
  return (
    <div className="  w-[294px] h-full bg-home-slidder-color shadow-md shadow-black absolute left-0   p-4 z-50 hidden md:flex cursor-default">
      <div className="w-full mt-8 ">
        <img alt="logo" src={logo} />
        <div className="user-profile-container w-full flex flex-col gap-4  justify-center place-items-center mt-2 ">
          <div className=" w-[100px] h-[100px] rounded-full bg-gray-500 mt-4">
            <img alt="profile-image" src={profileIconTmp} />
          </div>
          <p>Dr Olawale</p>
          <p className="font-extralight text-cosmic-primary-color">
            Edit Profile
          </p>

          <div className="nav-bar-links-container w-full flex flex-col justify-center place-items-center gap-8">
            <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isHomeActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold':'opacity-50'} text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={()=>{
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: true,
                isRunDiagnosisActive:false,
                isMessageActive: false,
                isBookAppoinmentActive:false,
                isAnalyticsActive: false,
                isFirstAidActive: false,
                isChatBotActive: false,
                isFindASpecialistActive:false,
                isCalenderActive:false
              })
              navigate('/home')
            }}   >
              <img alt="home" src={homeIcon} />
              <p className="">Dashboard</p>
            </div>

            <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isRunDiagnosisActive) ?'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold':'opacity-50'} text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={()=>{
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: false,
                isRunDiagnosisActive:true,
                isMessageActive: false,
                isBookAppoinmentActive:false,
                isAnalyticsActive: false,
                isFirstAidActive: false,
                isChatBotActive: false,
                isFindASpecialistActive:false,
                isCalenderActive:false
              })
            }}>
              <img alt="appointment" src={calenderIcon} />
              <p>Appointments</p>
            </div>

            <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isMessageActive) ?'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold':'opacity-50'} text-cosmic-color-lightBlue   hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={()=>{
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: false,
                isRunDiagnosisActive:false,
                isMessageActive: true,
                isBookAppoinmentActive:false,
                isAnalyticsActive: false,
                isFirstAidActive: false,
                isChatBotActive: false,
                isFindASpecialistActive:false,
                isCalenderActive:false
              })
            }}>
              <img alt="home" src={messageIcon} />
              <p>Messages</p>
            </div>

           

            <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isAnalyticsActive) ?'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold':'opacity-50'} text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={()=>{
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: false,
                isRunDiagnosisActive:false,
                isMessageActive: false,
                isBookAppoinmentActive:false,
                isAnalyticsActive: true,
                isFirstAidActive: false,
                isChatBotActive: false,
                isFindASpecialistActive:false,
                isCalenderActive:false
              })
            }}>
              <img alt="home" src={analyticsIcon} />
              <p>Analytics</p>
            </div>

          

  
            <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isCalenderActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold':'opacity-50'} text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={()=>{
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: false,
                isRunDiagnosisActive:false,
                isMessageActive: false,
                isBookAppoinmentActive:false,
                isAnalyticsActive: false,
                isFirstAidActive: false,
                isChatBotActive: false,
                isFindASpecialistActive:false,
                isCalenderActive:true
              })
            }}>
              <img alt="home" src={calenderIcon} />
              <p>Profile</p>
            </div>

            <div className="w-full flex justify-start ms-5 text-cosmic-color-warning-color  hover:underline ">
            <img alt="home" src={logOutIcon} />
              <p>Log out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorHomeSideBar;
