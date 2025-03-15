import {  useEffect } from "react"
import {  Outlet, useLocation, useNavigate } from "react-router-dom"
import { validateUserSession } from "./service"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../store/initStore"
import { authenticateUser } from "../store/reducers/userReducers"
import io from 'socket.io-client'
import { connectSocket } from "../store/reducers/userSocketReducer"
import { cacheDiagnosis } from "../store/reducers/diagnosisReducer"



const MainRouterPage = () => {
    const navigate = useNavigate()
    const user = useSelector((state:RootReducer)=>state.user)
    const userSocket = useSelector((state:RootReducer)=>state.socket)
    const dispatch = useDispatch()
 const {pathname} = useLocation()
   const path = pathname.split('/')[2]
    
     useEffect(()=>{
        /* setTimeout(()=>{
         // navigate("/patient/calendar")
         },5000)*/
    
         switch(path){
      case 'homem':
        
        (async()=>{
            try {
                
               
                const result = await validateUserSession({isKeepMeSignedIn:user.keepMeSignedIn!!,token:user.data?.token!!})
               
                if(result.status === 200){
                    if(result.token){
                     dispatch(authenticateUser({data:{
                        ...user.data,
                        token:result.token
                     }}))
                    }
                    return
                }
                dispatch(authenticateUser({isAunthenticated:false,data:{},keepMeSignedIn:false,message:"sessionExpired"}))
                navigate("/patient/account",{
                    replace:true,
                    
                })
              
            } catch (error) {
              
                //dispatch(authenticateUser({isAunthenticated:false,data:{},keepMeSignedIn:false,message:"sessionExpired"}))
               
                navigate("/patient/account",{
                    replace:true,
                  
                })
            }
        })()


         }
        
         if(user.isAunthenticated &&  !userSocket.connected){
            const socket = io(`${import.meta.env.VITE_BASE_Socket_URL}`,{
                auth:{
                    token:user.data?.token
                }
            })

            socket.on('connect',()=>{
                
                dispatch(connectSocket({connected:true,socket}))
            })

            socket.on('all-diagnosis',(data:any)=>{
               
           dispatch(cacheDiagnosis({diagnosisChat:data}))
            })

            socket.on('disconnect',()=>{
                dispatch(connectSocket({connected:false,socket:null}))
            })
            

            socket.on('connect_error',(_:any)=>{
                //alert(e)
            })
         }
          
        
 
      },[])
 
   
      
      return <Outlet/>

   
}





export default MainRouterPage