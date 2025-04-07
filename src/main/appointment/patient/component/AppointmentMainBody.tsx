import { Outlet } from "react-router-dom"
import HomeMobileNavBar from "../../../home/component/patient/HomeMobileNavBar"
import HomeNavBar from "../../../home/component/patient/HomeNavBar"
import HomeSideBar from "../../../home/component/patient/HomeSideBar.ls"
import HomeSideBarMobile from "../../../home/component/patient/HomeSideBarMobile"

const AppointmentMainBody = () => {

    return <div className=" w-full  relative  h-dvh    overflow-hidden  flex ">
        <div className="w-[25vw]">
        <HomeSideBar />
        <HomeSideBarMobile />

       
        </div>


        <div className=" w-[80vw] overflow-y-auto">
        <HomeNavBar title="Book Appointment" />
        <HomeMobileNavBar title="Book Appointment" />

            <Outlet />
        </div>

    </div>
}


export default AppointmentMainBody