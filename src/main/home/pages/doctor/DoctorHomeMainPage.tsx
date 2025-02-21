
import { Navigate, Outlet } from "react-router-dom"

import DoctorHomeSideBar from "../../component/doctor/DoctorHomeSideBar.ls"
import { useSelector } from "react-redux"
import { RootReducer } from "../../../store/initStore"


const DoctorHomeMainPage = () => {

    const user = useSelector((state:RootReducer)=>state.user)

   
    if(!user.isAunthenticated ){
      return  <Navigate to={'/account'}/>
   
    }

    
    if(!user.keepMeSignedIn){
      return  <Navigate to={'/account'}/>
    }

    if( user.data && user.data.role !== "doctor"){
        return  <Navigate to={'/account'}/>
      }


    return (
        <div className="font-poppins relative w-full h-dvh bg-[#F5F5F5] overflow-x-hidden">
            <DoctorHomeSideBar/>
            <Outlet/>
         
        </div>
    )
}

export default DoctorHomeMainPage