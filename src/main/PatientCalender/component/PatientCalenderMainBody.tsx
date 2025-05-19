import { Outlet, useNavigate } from "react-router-dom"
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar"
import HomeNavBar from "../../home/component/patient/HomeNavBar"
import HomeSideBar from "../../home/component/patient/HomeSideBar.ls"
import HomeSideBarMobile from "../../home/component/patient/HomeSideBarMobile"
import useGetCalendarActiveState from "../hook/useGetCalendarActiveState"
import newAppointmentIcon from '../../../assets/icons/new-appoinment-icon.svg'
import { useState } from "react"

const PatientCalendarMainBody = () => {

    const navigate = useNavigate()

    const { activeState, setActiveState } = useGetCalendarActiveState()

    const [searchText,setSearchText] = useState<string>('')

    return <div className="w-full font-poppins flex h-dvh overflow-hidden">

        <div className="w-[25vw] hidden md:block">
            <HomeSideBar />
            <HomeSideBarMobile />
        </div>



        <div className=" w-full md:w-[75vw] overflow-y-auto">

            <HomeNavBar title="Calendar" onSearchFired={(path,searchText)=>{

           if(path === "Calendar" && searchText ){
           
                setSearchText(searchText)
           }

            }} />
            <HomeMobileNavBar title="Calendar" onSearchFired={()=>{

            }}/>
            <div className="m-6 flex justify-end  ">


                <div className="w-fit bg-cosmic-primary-color flex px-8 rounded-md">
                    <img className="" src={newAppointmentIcon} />
                    <p className=" w-fit p-2 rounded-md text-white" onClick={() => {
                        navigate('/patient/find-a-specialist')
                    }}>New</p>
                </div>


            </div>

            <div className="w-full md:m-6 flex cursor-default justify-center gap-2 p-1">

                <p className={`${activeState.calendar ? 'bg-cosmic-primary-color text-white' : 'border text-black'} p-2 w-[150px] xs:text-[14px] text-center  rounded-md `} onClick={() => {
                    setActiveState({
                        ...activeState,
                        calendar: true,
                        upcoming: false,
                        cancelled: false,
                        past: false

                    })
                    navigate("/patient/calendar")
                }}>Calender</p>
                <p className={`${activeState.upcoming ? 'bg-cosmic-primary-color text-white' : 'border text-black'} p-2 w-[150px] xs:text-[14px] text-center  rounded-md `} onClick={() => {
                    setActiveState({
                        ...activeState,
                        calendar: false,
                        upcoming: true,
                        cancelled: false,
                        past: false
                    })
                    navigate("/patient/calendar/upcoming")
                }}>Upcoming</p>
                <p className={`${activeState.past ? 'bg-cosmic-primary-color text-white' : 'border text-black'} p-2 w-[150px] xs:text-[14px] text-center  rounded-md `} onClick={() => {
                    setActiveState({
                        ...activeState,
                        calendar: false,
                        upcoming: false,
                        cancelled: false,
                        past: true
                    })
                    navigate("/patient/calendar/past")
                }}>Past</p>
                <p className={`${activeState.cancelled ? 'bg-cosmic-primary-color text-white' : 'border text-black'} p-2 w-[150px] xs:text-[14px] text-center  rounded-md `} onClick={() => {
                    setActiveState({
                        ...activeState,
                        calendar: false,
                        upcoming: false,
                        cancelled: true,
                        past: false
                    })
                    navigate("/patient/calendar/cancelled")
                }}>Cancelled</p>
            </div>

            <Outlet context={{searchText}} />
        </div>

    </div>
}


export default PatientCalendarMainBody