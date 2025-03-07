import React, { /*useEffect*/ } from "react";
import HomeMobileNavBar from "../../../home/component/patient/HomeMobileNavBar";
import HomeNavBar from "../../../home/component/patient/HomeNavBar";
import HomeSideBar from "../../../home/component/patient/HomeSideBar.ls";
import  profileIconTmp from "../../../../assets/icons/home/cosmic-home-profile-pic-temp.svg";
import Summary from "../../../analytics/Components/Summary";
import MobileSummary from "../../../analytics/Components/MobileSummary";
import calenderIcon from "../../../../assets/icons/Calendar.svg";
import healthTIcon from "../../../../assets/icons/Combo Chart.svg";
import folderIcon from "../../../../assets/icons/History Folder.svg";
import docIcon from "../../../../assets/icons/Medical Doctor.svg";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../store/initStore";

const PatientMainPP:React.FC = () => {
    const navigate = useNavigate();
    const user = useSelector((state:RootReducer)=> state.user)
       if(!user.isAunthenticated){
        return <Navigate to={"/patient/account"}/>
       }

      
    return (
        <div className="w-full  relative  h-dvh bg-gray-100 overflow-x-hidden overflow-y-auto flex flex-col cursor-default">
            <HomeSideBar/>
            <HomeMobileNavBar title="My Profile"/> 
            <HomeNavBar title="Profile"/>
            <div className="flex flex-col items-center justify-center pt-[10px] pb-[70px] gap-[10px] p-3  md:ps-[265px]">
                    <div className="bg-white rounded-[5px] w-[100%] md:h-[290px] h-fit shadow-md gap-2 flex md:flex-col flex-row justify-center items-center md:py-3 md:px-3 py-4 shadow-black/10">
                            <img className="md:w-[160px] md:h-[160px] w-[140px] h-[140px] rounded-full" alt="profile-image" src={user.data?.profile?.profilePicture ?? profileIconTmp} />
                            <div className="flex flex-col gap-2 items-center justify-center">
                                <span className="font-bold text-[18px]">{user.data?.fullName }   {user.data?.lastName} </span>
                                <span className="text-[15px]">{user.data?.email}</span>
                                <button onClick={()=>{navigate("/patient/profile/edit-profile")}} className="h-[30px] text-[15px] w-[120px] rounded-[5px] hover:bg-[#272EA7]/70 bg-[#272EA7] cursor-pointer text-white">Edit Profile</button>
                            </div>
                            
                    </div>

                    <div className="bg-white rounded-[5px] w-[100%] md:h-[180px] h-fit shadow-md flex flex-row justify-center items-center md:py-2 md:px-2 py-4 shadow-black/10">
                        <div className="h-[60%] w-[15%] md:flex hidden flex-col justify-center items-center">
                            <img className="w-[60%] h-[60%] rounded-full" alt="profile-image" src={user.data?.profile?.profilePicture ?? profileIconTmp} />
                        </div>
                        <div className="w-[85%] h-[100%] md:pl-[20px] md:border-l-[1px] flex flex-col justify-center items-center md:border-l-gray-300">
                            <div className="flex w-[100%] md:items-start gap-1 h-[48%] items-center flex-col justify-center">
                                <span className="font-bold text-[17px">{user.data?.profile?.vitalSigns.gender  && user.data?.profile?.vitalSigns.gender === 'male' ? 'Mr':'Mrs'} {user.data?.fullName }   {user.data?.lastName}</span>
                                <span className="text-[14px]">{user.data?.email}</span>
                                <span className="text-[14px]">{user.data?.profile?.homeAddress?? 'nil'}</span>
                            </div>
                            <div className="flex flex-row w-[100%] md:h-[48%] h-fit justify-between flex-wrap items-center">
                                <div className="w-fit flex flex-col gap-3 p-3 md:text-left text-center">
                                    <span className="text-[14px] font-bold text-gray-500">Sex</span>
                                    <span className="text-[14px] font-bold">{user.data?.profile?.vitalSigns.gender}</span>
                                </div>
                                <div className="w-fit flex flex-col gap-3 p-3 md:text-left text-center">
                                    <span className="text-[14px] font-bold text-gray-500">Age</span>
                                    <span className="text-[14px] font-bold">{user.data?.profile?.vitalSigns.dateOfBirth?user.data?.profile?.vitalSigns.dateOfBirth.toString().split(" ")[4] :'nill'}</span>
                                </div>
                                <div className="w-fit flex flex-col gap-3 p-3 md:text-left text-center">
                                    <span className="text-[14px] font-bold text-gray-500">Blood Group</span>
                                    <span className="text-[14px] font-bold">O+</span>
                                </div>
                                <div className="w-fit flex flex-col gap-3 p-3 md:text-left text-center">
                                    <span className="text-[14px] font-bold text-gray-500">Genotype</span>
                                    <span className="text-[14px] font-bold">AS</span>
                                </div>
                                <div className="w-fit flex flex-col gap-3 p-3 md:text-left text-center">
                                    <span className="text-[14px] font-bold text-gray-500">Height</span>
                                    <span className="text-[14px] font-bold">{user.data?.profile?.vitalSigns.height?? 'nil'}</span>
                                </div>
                                <div className="w-fit flex flex-col gap-3 p-3 md:text-left text-center">
                                    <span className="text-[14px] font-bold text-gray-500">Weight</span>
                                    <span className="text-[14px] font-bold">{user.data?.profile?.vitalSigns.weight?? 'nil'}</span>
                                </div>
                                <div className="w-fit flex flex-col gap-3 p-3 md:text-left text-center">
                                    <span className="text-[14px] font-bold text-gray-500">Allergies</span>
                                    <span className="text-[14px] font-bold">Nil</span>
                                </div>
                            </div>
                        </div>  
                    </div>

                    <div className="bg-white rounded-[5px] w-[100%] h-fit shadow-md gap-2 flex flex-col p-3 shadow-black/10">
                        <span className="text-[15px]">Home Adress</span>
                        <span className="font-bold text-[15px]">{user.data?.profile?.homeAddress??'nil'}</span>
                        <span className="text-[15px]">Work Adress</span>
                        <span className="font-bold text-[15px]">{user.data?.profile?.workAddress?? 'nil'}</span> 
                    </div>

                    {/* these are chart summaries for both the mobile and desktop, the mobile only shows on mobile as well as the desktop with desktop screen */}
                    <Summary/>
                    <MobileSummary/>

                    <div className="flex flex-col gap-2 w-[100%] mt-[10px]">
                        <button className="bg-white hover:bg-gray-100 w-[100%] h-[60px] shadow-md flex p-2 flex-row justify-start items-center shadow-black/10">
                            <div className="w-fit flex flex-row justify-center items-center h-[100%]">
                                <img className="w-[50px] h-[50px] rounded-full" alt="profile-image" src={folderIcon} />
                            </div> 
                            <div className="border-l-[2px] pl-[5px] border-l-gray-300 flex flex-row items-center justify-start h-[100%]">
                                <span className="font-bold">Medical History</span>
                            </div>
                        </button>

                        <button className="bg-white hover:bg-gray-100 w-[100%] h-[60px] shadow-md flex p-2 flex-row justify-start items-center shadow-black/10">
                            <div className="w-fit flex flex-row justify-center items-center h-[100%]">
                                <img className="w-[50px] h-[50px] rounded-full" alt="profile-image" src={healthTIcon} />
                            </div> 
                            <div className="border-l-[2px] pl-[5px] border-l-gray-300 flex flex-row items-center justify-start h-[100%]">
                                <span className="font-bold">Health Tracking</span>
                            </div>
                        </button>

                        <button className="bg-white hover:bg-gray-100 w-[100%] h-[60px] shadow-md flex p-2 flex-row justify-start items-center shadow-black/10">
                            <div className="w-fit flex flex-row justify-center items-center h-[100%]">
                                <img className="w-[50px] h-[50px] rounded-full" alt="profile-image" src={calenderIcon} />
                            </div> 
                            <div className="border-l-[2px] pl-[5px] border-l-gray-300 flex flex-row items-center justify-start h-[100%]">
                                <span className="font-bold">Appointments</span>
                            </div>
                        </button>

                        <button className="bg-white hover:bg-gray-100 w-[100%] h-[60px] shadow-md flex p-2 flex-row justify-start items-center shadow-black/10">
                            <div className="w-fit flex flex-row justify-center items-center h-[100%]">
                                <img className="w-[50px] h-[50px] rounded-full" alt="profile-image" src={docIcon} />
                            </div> 
                            <div className="border-l-[2px] pl-[5px] border-l-gray-300 flex flex-row items-center justify-start h-[100%]">
                                <span className="font-bold">Doctors</span>
                            </div>
                        </button>
                    </div>


            </div>
        </div>
    )
}

export default PatientMainPP;