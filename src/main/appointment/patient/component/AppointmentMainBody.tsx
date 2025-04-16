import { Outlet } from "react-router-dom"
import HomeMobileNavBar from "../../../home/component/patient/HomeMobileNavBar"
import HomeNavBar from "../../../home/component/patient/HomeNavBar"
import HomeSideBar from "../../../home/component/patient/HomeSideBar.ls"
import HomeSideBarMobile from "../../../home/component/patient/HomeSideBarMobile"

const AppointmentMainBody = () => {

    return <div className=" w-full  relative  h-dvh    overflow-hidden  flex ">
        <div className=" ">
        <div className="hidden md:block w-[25vw]">
        <HomeSideBar />
        </div>
        <HomeSideBarMobile />

       
        </div>


        <div className=" w-full md:w-[80vw] overflow-hidden h-full pb-10">
        <HomeNavBar title="Book Appointment" />
        <HomeMobileNavBar title="Book Appointment" />

            <Outlet />
        </div>

    </div>
}


export default AppointmentMainBody