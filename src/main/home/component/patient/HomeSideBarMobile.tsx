import logo from "../../../../assets/logo/logo_comsic_splash.svg";
import homeIcon from "../../../../assets/icons/home/cosmic-home-active.svg";
import calenderIcon from "../../../../assets/icons/home/cosmic-home-calander.svg";
import appointmentIcon from "../../../../assets/icons/home/cosmic-shop-medium.svg";
import messageIcon from "../../../../assets/icons/cosmic-chat.svg";
import analyticsIcon from "../../../../assets/icons/home/cosmic-home-analytics.svg";
import firstAidIcon from "../../../../assets/icons/cosmic-profile.svg";
import logOutIcon from "../../../../assets/icons/cosmic-logout.svg";
import useGetActiveRoute from "../../hook/patient/useGetActiveRoute";
import { useNavigate } from "react-router-dom";
import { MutableRefObject, useRef } from "react";
import useGetSideBarMobileAnimation, { closeSideBar } from "../../hook/patient/useGetSideBarMobileAnimation";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../../store/initStore";
import { authenticateUser } from "../../../store/reducers/userReducers";




const HomeSideBarMobile = () => {

  const { activeRoutePath, setActiveRoutePath } = useGetActiveRoute()

  const navigate = useNavigate()

  const sideBarRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

  useGetSideBarMobileAnimation(sideBarRef)


  const user = useSelector((state: RootReducer) => state.user)

  const dispatch = useDispatch()






  return (
    <div ref={sideBarRef} className="hidden md:hidden w-[60%] h-dvh overflow-y-auto bg-home-slidder-color shadow-md shadow-black absolute left-0  p-4 z-[200]  cursor-default ">

      <div className="w-full ">

        <i className="fa fa-times fa-xl absolute right-1 p-2 " aria-hidden="true" onClick={() => {
          closeSideBar()
        }}></i>

        <img className="mt-2" alt="logo" src={logo} />
        <div className="user-profile-container w-full flex flex-col gap-1  justify-center place-items-center mt-2 ">
          <div className=" w-[100px] h-[100px]  rounded-full bg-gray-500">

            <img className="w-[100px] h-[100px] rounded-full" alt="profile-image" src={user.data?.profile?.profilePicture ?? '/'} />
          </div>
          <p className={`${activeRoutePath.isProfileActive && 'underline decoration-cosmic-primary-color'}  font-extralight text-cosmic-primary-color hover:underline hover:decoration-cosmic-primary-color `} onClick={() => {

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
              isCalenderActive: false,
              isProfileActive: true,
              isSettingsActive:false
            })

            navigate('/patient/profile')
            closeSideBar()
          }}>
            Edit Profile
          </p>

          <div className="nav-bar-links-container  w-full flex flex-col justify-center place-items-center gap-4">

            <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isHomeActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold' : 'opacity-50'} text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={() => {
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
                isSettingsActive:false
              })
              closeSideBar()
              navigate('/patient/home')
            }}   >
              <img alt="home" src={homeIcon} />
              <p className="">Home</p>
            </div>

            <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isRunDiagnosisActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold' : 'opacity-50'} text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={() => {
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
                isProfileActive: false,
                isSettingsActive:false
              })

              navigate('/patient/run-diagnosis')
              closeSideBar()
            }}>
              <img alt="home" src={calenderIcon} />
              <p className="">Run Diagnosis</p>
            </div>

            <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isMessageActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold' : 'opacity-50'} text-cosmic-color-lightBlue   hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={() => {
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
                isProfileActive: false,
                isSettingsActive:false
              })

              navigate('/patient/messages')
              closeSideBar()
            }}>
              <img alt="message icon" src={messageIcon} />
              <p className="">Messages</p>
            </div>

            <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isBookAppoinmentActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold' : 'opacity-50'} text-cosmic-color-lightBlue   hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={() => {
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
                isProfileActive: false,
                isSettingsActive:false
              })

              navigate('/patient/shop')
              closeSideBar()
            }}>
              <img alt="appointment icon" src={appointmentIcon} />
              <p className="">Shop</p>
            </div>

            <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isAnalyticsActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold' : 'opacity-50'} text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={() => {
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
                isProfileActive: false,
                isSettingsActive:false
              })
              navigate('/patient/analytics')
              closeSideBar()
            }}>
              <img alt="home" src={analyticsIcon} />
              <p className="">Analytics</p>
            </div>

            <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isFirstAidActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold' : 'opacity-50'} text-cosmic-color-lightBlue   hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={() => {
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
                isProfileActive: false,
                isSettingsActive:false
              })
              closeSideBar()
              navigate('/patient/first-aid')
            }}>
              <img alt="first aid icon" src={firstAidIcon} />
              <p className="">First Aid</p>
            </div>

            <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isChatBotActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold' : 'opacity-50'} text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={() => {
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
                isProfileActive: false,
                isSettingsActive:false
              })
              closeSideBar()
              navigate('/patient/chatbot')
            }}>
              <img alt="home" src={calenderIcon} />
              <p className="">Chat bot</p>
            </div>

            <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isFindASpecialistActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold' : 'opacity-50'} text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={() => {
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
                isProfileActive: false,
                isSettingsActive:false
              })
              closeSideBar()
              navigate('/patient/find-a-specialist')
            }}>
              <img alt="home" src={calenderIcon} />
              <p className="">Find A Specialist</p>
            </div>

            <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isCalenderActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold' : 'opacity-50'} text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={() => {
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
                isProfileActive: false,
                isSettingsActive:false
              })
              navigate('/patient/calendar')
              closeSideBar()
            }}>
              <img alt="home" src={calenderIcon} />
              <p className="">Calendar</p>
            </div>


            <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isSettingsActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold' : 'opacity-50'} text-cosmic-color-lightBlue   hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={() => {
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
                isCalenderActive: false,
                isProfileActive: false,
                isSettingsActive:true
              })
              closeSideBar()
              navigate('/patient/settings')
            }}>
              <img alt="first aid icon" src={firstAidIcon} />
              <p className="">Settings</p>
            </div>

            <div className="w-full flex justify-start ms-5 text-cosmic-color-warning-color  hover:underline ">
              <img alt="home" src={logOutIcon} />
              <p className="" onClick={() => {

                 navigate('/')
                const timerId = setTimeout(() => {
                  dispatch(authenticateUser({ isAunthenticated: false, data: {}, emailValidated: false, keepMeSignedIn: false }))
                  clearTimeout(timerId)
                }, 3000)
              }}>Log out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default HomeSideBarMobile;
