import { Outlet } from "react-router-dom"
import HomeMobileNavBar from "../../../home/component/patient/HomeMobileNavBar"
import HomeNavBar from "../../../home/component/patient/HomeNavBar"
import HomeSideBar from "../../../home/component/patient/HomeSideBar.ls"
import HomeSideBarMobile from "../../../home/component/patient/HomeSideBarMobile"

const AppointmentMainBody = () => {

    return <div className=" w-full  relative  h-dvh overflow-x-hidden    overflow-y-auto flex flex-col">
        <HomeSideBar />
        <HomeSideBarMobile />

        <HomeNavBar title="Book Appointment" />
        <HomeMobileNavBar title="Book Appointment" />


        <div className=" md:ps-[250px] ">

            <Outlet />
        </div>

    </div>
}


export default AppointmentMainBody