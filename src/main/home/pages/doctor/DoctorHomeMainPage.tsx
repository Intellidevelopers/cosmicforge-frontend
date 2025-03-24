
import { /*Navigate,*/ Outlet,} from "react-router-dom"

import DoctorHomeSideBar from "../../component/doctor/DoctorHomeSideBar.ls"
import DoctorHomeSideBarMobile from "../../component/doctor/DoctorHomeSideBarMobile"
import {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../../store/initStore"
import { updateRingTone, updateUserCallingData } from "../../../store/reducers/userSocketReducer"
import NewCallUIPage from "../chat/NewCallUIPage"
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

     
 
       const userSocketCon =  useSelector((state:RootReducer)=>state.socket)
      
       const dispatch = useDispatch()
      
    
    

    

     const [isNewCall,setNewCall] = useState<boolean>(false)

     const [userCallingDetails,setUserCallingDetails] = useState<{
      name:string,
      profilePicture:string
    }>()

       useEffect(()=>{
        
          if(userSocketCon.connected && userSocketCon.socket){
          
            userSocketCon.socket.on('incoming-call',(data:{caller:{_id:string}, userCallingDetails:{
              name:string,
              profilePicture:string
            }})=>{

                  dispatch(updateRingTone({startPlayingRingTone:true,socket:null}))
                dispatch(updateUserCallingData({remoteUserId:data.caller._id,socket:null,remoteCallerDetails:data.userCallingDetails}))
                setUserCallingDetails(data.userCallingDetails)
                setNewCall(true)
              //  navigate('/doctor/appointment/voice-call')
            })
          }
       },[userSocketCon])


  return (
    <div className="font-poppins  flex relative w-full h-dvh bg-[#F5F5F5] overflow-hidden">
     {
      isNewCall &&  <NewCallUIPage  userCallingDetails={userCallingDetails!!} newCall={isNewCall} onDecline={()=>{
        
        setNewCall(false)
     }} onAnswer={async()=>{
       console.log('answered.')
        
       setNewCall(false)
       
     }}/>
     }


      <div className=" hidden md:flex w-[25%]">
        <DoctorHomeSideBar />

      </div>



      <div className=" w-full grid grid-cols-1  relative ">
        <div className="block md:hidden">
          <DoctorHomeSideBarMobile />
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default DoctorHomeMainPage