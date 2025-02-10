
import { Outlet } from "react-router-dom"
import HomeSideBar from "../component/HomeSideBar.ls"
import HomeNavBar from "../component/HomeNavBar"

const HomeMainPage = () => {

    return (
        <div className="font-poppins relative w-full h-dvh bg-[#F5F5F5] overflow-x-hidden">
            <HomeSideBar/>
            <div className="flex flex-col">
                <HomeNavBar/>
                <Outlet/>
            </div>
         
        </div>
    )
}

export default HomeMainPage