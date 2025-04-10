

import { Navigate, Outlet } from "react-router-dom"

import HomeSideBar from "../../component/patient/HomeSideBar.ls"
import HomeSideBarMobile from "../../component/patient/HomeSideBarMobile"
import { useSelector } from "react-redux"
import { RootReducer } from "../../../store/initStore"


const HomeMainPage = () => {

    const user = useSelector((state:RootReducer)=>state.user)

   
      if(!user.isAunthenticated ){
        return  <Navigate to={'/'} replace/>
     
      }

      
 
      if( user.data && user.data.role !== "client"){
        return  <Navigate to={'/'} replace/>
      }

    return (
        <div className="font-poppins relative w-full h-dvh bg-[#F5F5F5] flex flex-row  overflow-hidden">
            <HomeSideBarMobile   />
            <div className="w-[25vw] hidden md:block">
            <HomeSideBar />
            
            </div>
            <div className="md:w-[75vw] w-full  grid grid-cols-1 overflow-y-auto">
            <Outlet/>
            </div>
        </div>
    )
}

export default HomeMainPage