

import { Outlet } from "react-router-dom"

import HomeSideBar from "../../component/patient/HomeSideBar.ls"
import HomeSideBarMobile from "../../component/patient/HomeSideBarMobile"


const HomeMainPage = () => {



    return (
        <div className="font-poppins relative w-full h-dvh bg-[#F5F5F5] overflow-x-hidden">
            <HomeSideBar />
            <HomeSideBarMobile   />
            <Outlet/>
        </div>
    )
}

export default HomeMainPage