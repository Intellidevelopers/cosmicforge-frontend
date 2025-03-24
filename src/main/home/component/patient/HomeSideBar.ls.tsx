import logo from "../../../../assets/logo/logo_comsic_splash.svg";
import profileIconTmp from "../../../../assets/icons/home/cosmic-home-profile-pic-temp.svg";
import homeIcon from "../../../../assets/icons/home/cosmic-home-active.svg";
import calenderIcon from "../../../../assets/icons/home/cosmic-home-calander.svg";
import appointmentIcon from "../../../../assets/icons/home/cosmic-shop-medium.svg";
import messageIcon from "../../../../assets/icons/cosmic-chat.svg";
import analyticsIcon from "../../../../assets/icons/home/cosmic-home-analytics.svg";
import firstAidIcon from "../../../../assets/icons/cosmic-profile.svg";
import logOutIcon from "../../../../assets/icons/cosmic-logout.svg";
import useGetActiveRoute from "../../hook/patient/useGetActiveRoute";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "../../../store/reducers/userReducers";
import { RootReducer } from "../../../store/initStore";

const HomeSideBar = () => {
  const { activeRoutePath, setActiveRoutePath } = useGetActiveRoute()
  const navigate = useNavigate()
  const user = useSelector((state:RootReducer)=>state.user)

  const dispatch = useDispatch()
  return (
    <div className=" w-[250px] h-screen bg-home-slidder-color shadow-md shadow-black/20 fixed left-0  p-4 z-50 hidden md:flex cursor-default">
      <div className="w-full ">
        <img alt="logo" className="h-[50px] w-[60%] mx-auto" src={logo} />
        <div className="user-profile-container w-full flex flex-col gap-4  justify-center place-items-center mt-2 ">
          <div className=" w-[100px] h-[100px] rounded-full bg-gray-500">
            <img className="h-[100px] w-[100px] rounded-full" alt="profile-image" src={user.data?.profile?.profilePicture ??profileIconTmp} />
          </div>
          <p className={`${activeRoutePath.isProfileActive && 'underline decoration-cosmic-primary-color' }  font-extralight text-cosmic-primary-color hover:underline hover:decoration-cosmic-primary-color `} onClick={() => {
             navigate('/patient/profile')
          }}>
            Edit Profile
          </p>

          <div className="nav-bar-links-container  w-full flex flex-col items-center gap-2">
            <div className={`w-full flex justify-start transition-all duration-200 ease-out pl-[15%]  place-items-center gap-4 ${(activeRoutePath.isHomeActive) ? 'opacity-100 pl-[15%]  text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-gray-400 shadow-md font-semibold' : 'opacity-50'} text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:cursor-pointer rounded-md pl-[15%]  hover:shadow-gray-400 hover:shadow-md p-1`} onClick={() => {
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: true,
                isRunDiagnosisActive: false,
                isMessageActive: false,
                isBookAppoinmentActive: false,
                isAnalyticsActive: false,
                isFirstAidActive: false,
                isChatBotActive: false,
                isFindASpecialistActive: false,
                isCalenderActive: false,
                isProfileActive:false
              })
              navigate('/patient/home')
            }}   >
              <img className={"h-[25px] w-[25px]"} alt="home" src={homeIcon} />
              <p className=" text-[15.5px]">Home</p>
            </div>

            <div className={`w-full flex justify-start transition-all duration-200 ease-out  place-items-center gap-4 ${(activeRoutePath.isRunDiagnosisActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-gray-400 shadow-md font-semibold pl-[15%] ' : 'opacity-50'} pl-[15%]  text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:cursor-pointer rounded-md  hover:shadow-gray-400 hover:shadow-md p-1`} onClick={() => {
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: false,
                isRunDiagnosisActive: true,
                isMessageActive: false,
                isBookAppoinmentActive: false,
                isAnalyticsActive: false,
                isFirstAidActive: false,
                isChatBotActive: false,
                isFindASpecialistActive: false,
                isCalenderActive: false,
                isProfileActive:false
              })
              navigate('/patient/run-diagnosis')
            }}>
              <img className={"h-[25px] w-[25px]"} alt="diagnosis" src={calenderIcon} />
              <p className=" text-[15.5px]">Run Diagnosis</p>
            </div>

            <div className={`w-full flex justify-start transition-all duration-200 ease-out  place-items-center gap-4 ${(activeRoutePath.isMessageActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-gray-400 shadow-md font-semibold pl-[15%] ' : 'opacity-50'} pl-[15%]  text-cosmic-color-lightBlue   hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:cursor-pointer rounded-md  hover:shadow-gray-400 hover:shadow-md p-1`} onClick={() => {
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: false,
                isRunDiagnosisActive: false,
                isMessageActive: true,
                isBookAppoinmentActive: false,
                isAnalyticsActive: false,
                isFirstAidActive: false,
                isChatBotActive: false,
                isFindASpecialistActive: false,
                isCalenderActive: false,
                isProfileActive:false
              })
              navigate('/patient/messages')
            }}>

              <img className={"h-[25px] w-[25px]"} alt="messages" src={messageIcon} />
              <p className=" text-[15.5px]">Messages</p>
            </div>



            <div className={`w-full flex justify-start transition-all duration-200 ease-out  place-items-center gap-4 ${(activeRoutePath.isBookAppoinmentActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-gray-400 shadow-md font-semibold pl-[15%] ' : 'opacity-50'} pl-[15%]  text-cosmic-color-lightBlue   hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:cursor-pointer rounded-md  hover:shadow-gray-400 hover:shadow-md p-1`} onClick={() => {
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: false,
                isRunDiagnosisActive: false,
                isMessageActive: false,
                isBookAppoinmentActive: true,
                isAnalyticsActive: false,
                isFirstAidActive: false,
                isChatBotActive: false,
                isFindASpecialistActive: false,
                isCalenderActive: false,
                isProfileActive:false
              })
            }}>
              <img className={"h-[25px] w-[25px]"} alt="home" src={appointmentIcon} />
              <p className=" text-[15.5px]">Book Appointment</p>
            </div>

            <div className={`w-full flex justify-start transition-all duration-200 ease-out  place-items-center gap-4 ${(activeRoutePath.isAnalyticsActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-gray-400 shadow-md font-semibold pl-[15%] ' : 'opacity-50'} pl-[15%]  text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:cursor-pointer rounded-md  hover:shadow-gray-400 hover:shadow-md p-1`} onClick={() => {
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: false,
                isRunDiagnosisActive: false,
                isMessageActive: false,
                isBookAppoinmentActive: false,
                isAnalyticsActive: true,
                isFirstAidActive: false,
                isChatBotActive: false,
                isFindASpecialistActive: false,
                isCalenderActive: false,
                isProfileActive:false
              })

              navigate('/patient/analytics')
            }}>
              <img className={"h-[25px] w-[25px]"} alt="home" src={analyticsIcon} />
              <p className=" text-[15.5px]">Analytics</p>
            </div>

            <div className={`w-full flex justify-start transition-all duration-200 ease-out  place-items-center gap-4 ${(activeRoutePath.isFirstAidActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-gray-400 shadow-md font-semibold pl-[15%] ' : 'opacity-50'} pl-[15%]  text-cosmic-color-lightBlue   hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:cursor-pointer rounded-md  hover:shadow-gray-400 hover:shadow-md p-1`} onClick={() => {
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: false,
                isRunDiagnosisActive: false,
                isMessageActive: false,
                isBookAppoinmentActive: false,
                isAnalyticsActive: false,
                isFirstAidActive: true,
                isChatBotActive: false,
                isFindASpecialistActive: false,
                isCalenderActive: false,
                isProfileActive:false
              })
              navigate('/patient/first-aid')
            }}>
              <img className={"h-[25px] w-[25px]"} alt="home" src={firstAidIcon} />
              <p className=" text-[15.5px]">First Aid</p>
            </div>

            <div className={`w-full flex justify-start transition-all duration-200 ease-out  place-items-center gap-4 ${(activeRoutePath.isChatBotActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-gray-400 shadow-md font-semibold pl-[15%] ' : 'opacity-50'} pl-[15%]  text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:cursor-pointer rounded-md  hover:shadow-gray-400 hover:shadow-md p-1`} onClick={() => {
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: false,
                isRunDiagnosisActive: false,
                isMessageActive: false,
                isBookAppoinmentActive: false,
                isAnalyticsActive: false,
                isFirstAidActive: false,
                isChatBotActive: true,
                isFindASpecialistActive: false,
                isCalenderActive: false,
                isProfileActive:false
              })
              navigate('/patient/shop')
            }}>
              <img className={"h-[25px] w-[25px]"} alt="home" src={calenderIcon} />
              <p className=" text-[15.5px]">Chat bot</p>
            </div>

            <div className={`w-full flex justify-start transition-all duration-200 ease-out  place-items-center gap-4 ${(activeRoutePath.isFindASpecialistActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-gray-400 shadow-md font-semibold pl-[15%] ' : 'opacity-50'} pl-[15%]  text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:cursor-pointer rounded-md  hover:shadow-gray-400 hover:shadow-md p-1`} onClick={() => {
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: false,
                isRunDiagnosisActive: false,
                isMessageActive: false,
                isBookAppoinmentActive: false,
                isAnalyticsActive: false,
                isFirstAidActive: false,
                isChatBotActive: false,
                isFindASpecialistActive: true,
                isCalenderActive: false,
                isProfileActive:false
              })
              navigate('/patient/find-a-specialist')
            }}>
              <img className={"h-[25px] w-[25px]"} alt="home" src={calenderIcon} />
              <p className=" text-[15.5px]">Find A Specialist</p>
            </div>

            <div className={`w-full flex justify-start transition-all duration-200 ease-out  place-items-center gap-4 ${(activeRoutePath.isCalenderActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-gray-400 shadow-md font-semibold pl-[15%] ' : 'opacity-50'} pl-[15%]  text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:cursor-pointer rounded-md  hover:shadow-gray-400 hover:shadow-md p-1`} onClick={() => {
              setActiveRoutePath({
                ...activeRoutePath,
                isHomeActive: false,
                isRunDiagnosisActive: false,
                isMessageActive: false,
                isBookAppoinmentActive: false,
                isAnalyticsActive: false,
                isFirstAidActive: false,
                isChatBotActive: false,
                isFindASpecialistActive: false,
                isCalenderActive: true,
                isProfileActive:false
              })
              navigate('/patient/calendar')
            }}>
              <img className={"h-[25px] w-[25px]"} alt="home" src={calenderIcon} />
              <p className=" text-[15.5px]" onClick={()=>{
                
              }}>Calendar</p>
            </div>

            <div className="w-full pl-[15%] flex justify-start transition-all duration-200 ease-out text-cosmic-color-warning-color  hover:underline ">
              <img className={"h-[25px] w-[25px]"} alt="home" src={logOutIcon} />
              <p className=" text-[15.5px]" onClick={() => {
                dispatch(authenticateUser({ isAunthenticated: false, data: {}, emailValidated: false, keepMeSignedIn: false }))
              //  navigate('/patient/account')
              }} >Log out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSideBar;
