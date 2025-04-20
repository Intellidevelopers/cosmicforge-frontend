
import { /*Navigate,*/ Outlet,} from "react-router-dom"

import DoctorHomeSideBar from "../../component/doctor/DoctorHomeSideBar.ls"
import DoctorHomeSideBarMobile from "../../component/doctor/DoctorHomeSideBarMobile"

//import { useSelector } from "react-redux"
//import { RootReducer } from "../../../store/initStore"


const DoctorHomeMainPage = () => {

  // const user = useSelector((state:RootReducer)=>state.user)


  /*if(!user.isAunthenticated ){
    return  <Navigate to={'/account'}/>
 
  }

  
  if(!user.keepMeSignedIn){
    return  <Navigate to={'/account'}/>
  }

  if( user.data && user.data.role !== "doctor"){
      return  <Navigate to={'/account'}/>
    }*/

     
 
      
      
    


  return (
    <div className="font-poppins  flex relative w-full h-dvh bg-[#F5F5F5] overflow-hidden">
    
  

      <div className=" hidden md:flex w-[25%]">
        <DoctorHomeSideBar />

      </div>



      <div className=" w-full grid grid-cols-1  relative ">

        <div className=" md:hidden">
        <DoctorHomeSideBarMobile />
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default DoctorHomeMainPage