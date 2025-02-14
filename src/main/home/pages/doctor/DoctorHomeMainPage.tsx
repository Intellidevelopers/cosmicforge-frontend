
import { Outlet } from "react-router-dom"

import DoctorHomeSideBar from "../../component/doctor/DoctorHomeSideBar.ls"


const DoctorHomeMainPage = () => {

    return (
        <div className="font-poppins relative w-full h-dvh bg-[#F5F5F5] overflow-x-hidden">
            <DoctorHomeSideBar/>
            <Outlet/>
         
        </div>
    )
}

export default DoctorHomeMainPage