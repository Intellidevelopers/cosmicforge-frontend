import logo from "../../../../assets/logo/logo_comsic_splash.svg";
import homeIcon from "../../../../assets/icons/home/cosmic-home-active.svg";
import calenderIcon from "../../../../assets/icons/home/cosmic-home-calander.svg";

import messageIcon from "../../../../assets/icons/cosmic-chat.svg";
import analyticsIcon from "../../../../assets/icons/home/cosmic-home-analytics.svg";

import logOutIcon from "../../../../assets/icons/cosmic-logout.svg";

import { useNavigate } from "react-router-dom";
import useGetDoctorActiveNavbarRoute from "../../hook/doctor/useGetDoctorActiveNavbarRoute";
import { MutableRefObject, useRef } from "react";
import useGetSideBarMobileAnimation, { closeSideBar } from "../../hook/patient/useGetSideBarMobileAnimation";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../../store/initStore";
import { authenticateUser } from "../../../store/reducers/userReducers";

const DoctorHomeSideBarMobile = () => {

    const { activeRoutePath, setActiveRoutePath } = useGetDoctorActiveNavbarRoute()
    const navigate = useNavigate()
    const sideBarRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
    useGetSideBarMobileAnimation(sideBarRef)

    const dispatch = useDispatch()

    const user = useSelector((state: RootReducer) => state.user)

    return (
        <div ref={sideBarRef} className="hidden  w-[60%] absolute h-dvh overflow-y-auto bg-home-slidder-color shadow-md shadow-black   p-4 z-[300] cursor-default">
            <div className="w-full mt-4 ">

                <div className="w-full ">

                    <i className="fa fa-times fa-xl absolute right-1 p-2 " aria-hidden="true" onClick={() => {
                        closeSideBar()
                    }}></i>
                </div>

                <img alt="logo" src={logo} />
                <div className="user-profile-container w-full flex flex-col gap-4  justify-center place-items-center mt-2 ">
                    <div className=" w-[80px] h-[80px] rounded-full bg-gray-500 mt-4">
                        <img alt="profile-image" className="h-[100%] w-[100%] rounded-full" src={user.data?.profile?.profilePicture ?? '/'} />
                    </div>
                    <p>Dr {user.data?.fullName}</p>

                    <p className={`font-extralight text-cosmic-primary-color ${(activeRoutePath.isEditProfileActive) && 'underline'}`} onClick={() => {
                        setActiveRoutePath({
                            ...activeRoutePath,
                            isHomeActive: false,
                            isMessageActive: false,
                            isAppoinmentsActive: false,
                            isAnalyticsActive: false,
                            isProfileActive: false,
                            isEditProfileActive: true
                        })
                        navigate('/doctor/edit-profile')
                        closeSideBar()
                    }} >
                        Edit Profile
                    </p>

                    <div className="nav-bar-links-container w-full flex flex-col justify-center place-items-center gap-5">
                        <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isHomeActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold' : 'opacity-50'} text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={() => {
                            setActiveRoutePath({
                                ...activeRoutePath,
                                isHomeActive: true,
                                isMessageActive: false,
                                isAppoinmentsActive: false,
                                isAnalyticsActive: false,
                                isProfileActive: false,
                                isEditProfileActive: false
                            })
                            closeSideBar()
                            navigate('/doctor/home')
                        }}   >
                            <img alt="home" src={homeIcon} />
                            <p className="">Dashboard</p>
                        </div>

                        <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isAppoinmentsActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold' : 'opacity-50'} text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={() => {
                            setActiveRoutePath({
                                ...activeRoutePath,
                                isHomeActive: false,
                                isMessageActive: false,
                                isAppoinmentsActive: true,
                                isAnalyticsActive: false,
                                isProfileActive: false,
                                isEditProfileActive: false
                            })
                            closeSideBar()
                            navigate('/doctor/appointments')
                        }}>
                            <img alt="appointment" src={calenderIcon} />
                            <p>Appointments</p>
                        </div>

                        <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isMessageActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold' : 'opacity-50'} text-cosmic-color-lightBlue   hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={() => {
                            setActiveRoutePath({
                                ...activeRoutePath,
                                isHomeActive: false,
                                isMessageActive: true,
                                isAppoinmentsActive: false,
                                isAnalyticsActive: false,
                                isProfileActive: false,
                                isEditProfileActive: false
                            })
                            closeSideBar()

                            navigate('/doctor/messages')
                        }}>
                            <img alt="message" src={messageIcon} />
                            <p>Messages</p>
                        </div>



                        <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isAnalyticsActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold' : 'opacity-50'} text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={() => {
                            setActiveRoutePath({
                                ...activeRoutePath,
                                isHomeActive: false,
                                isMessageActive: false,
                                isAppoinmentsActive: false,
                                isAnalyticsActive: true,
                                isProfileActive: false,
                                isEditProfileActive: false
                            })
                        }}>
                            <img alt="analytics" src={analyticsIcon} />
                            <p>Analytics</p>
                        </div>




                        <div className={`w-full flex justify-start ms-5  place-items-center gap-4 ${(activeRoutePath.isProfileActive) ? 'opacity-100 text-cosmic-primary-color  bg-cosmic-color-nav-active p-1 rounded-md  shadow-black shadow-lg font-semibold' : 'opacity-50'} text-cosmic-color-lightBlue  hover:opacity-100 hover:text-cosmic-primary-color  hover:bg-cosmic-color-nav-active hover:p-1 rounded-md  hover:shadow-black hover:shadow-lg hover:font-semibold`} onClick={() => {
                            setActiveRoutePath({
                                ...activeRoutePath,
                                isHomeActive: false,
                                isMessageActive: false,
                                isAppoinmentsActive: false,
                                isAnalyticsActive: false,
                                isProfileActive: true,
                                isEditProfileActive: false
                            })
                            navigate('/doctor/profile')
                        }}>
                            <img alt="home" src={calenderIcon} />
                            <p>Profile</p>
                        </div>

                        <div className="w-full flex justify-start ms-5 text-cosmic-color-warning-color  hover:underline ">
                            <img alt="home" src={logOutIcon} />
                            <p onClick={() => {
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




export default DoctorHomeSideBarMobile