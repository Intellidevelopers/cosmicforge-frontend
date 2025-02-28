

import { Navigate, Outlet } from "react-router-dom"

import HomeSideBar from "../../component/patient/HomeSideBar.ls"
import HomeSideBarMobile from "../../component/patient/HomeSideBarMobile"
import { useSelector } from "react-redux"
import { RootReducer } from "../../../store/initStore"


const HomeMainPage = () => {

    const user = useSelector((state:RootReducer)=>state.user)

   
      if(!user.isAunthenticated ){
        return  <Navigate to={'/patient/account'} replace/>
     
      }

      
 
      if( user.data && user.data.role !== "client"){
        return  <Navigate to={'/patient/account'} replace/>
      }

    return (
        <div className="font-poppins relative w-full h-dvh bg-[#F5F5F5] overflow-x-hidden">
            <HomeSideBar />
            <HomeSideBarMobile   />
            <Outlet/>
        </div>
    )
}

export default HomeMainPage