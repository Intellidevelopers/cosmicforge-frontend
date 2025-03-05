import {  useEffect } from "react"
import {  Outlet, useLocation, useNavigate } from "react-router-dom"
import { validateUserSession } from "./service"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../store/initStore"
import { authenticateUser } from "../store/reducers/userReducers"




const MainRouterPage = () =>{
    const navigate = useNavigate()
    const user = useSelector((state:RootReducer)=>state.user)
    const dispatch = useDispatch()
 const {pathname} = useLocation()
   const path = pathname.split('/')[2]
    
     useEffect(()=>{
        /* setTimeout(()=>{
         // navigate("/patient/calendar")
         },5000)*/
    
         switch(path){
      case 'home':
        case 'calendar':
            case 'profile':
                case 'first-aid':
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
              
                dispatch(authenticateUser({isAunthenticated:false,data:{},keepMeSignedIn:false,message:"sessionExpired"}))
               
                navigate("/patient/account",{
                    replace:true,
                  
                })
            }
        })()


         }
        
          
        
 
      },[])
 
   
      
      return <Outlet/>

   
}





export default MainRouterPage