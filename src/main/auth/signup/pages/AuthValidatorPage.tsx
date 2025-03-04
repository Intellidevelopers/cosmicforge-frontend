import { Navigate, useNavigate } from "react-router-dom"
import { store } from "../../../store/initStore"
import { ResponseBodyProps } from "../../../util/ApiResponseBodyProps"
import { authenticateUser } from "../../../store/reducers/userReducers"

const AuthValidatorPage = ()=>{

    const authToken = store.getState().user.userAuthToken
    const navigate = useNavigate()


    if(!authToken){
        return <Navigate to={"/patient/account"} replace/>
    }

    fetch(`${import.meta.env.VITE_BASE_REST_URL}/auth/google/validate-user`,{
        method:'post',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            token:authToken
        })
    }).then(r=>{
        return r.json()
    }).then((result)=>{
       const res = result as ResponseBodyProps
       
       if(res.status === 200){
         store.dispatch(authenticateUser({data:res.data.userDetails,userAuthToken:''}))
           switch(res.data.userDetails.role){

            case 'client':{

                 if(res.data.newAccount){
                    navigate('/patient/profile/setup',{replace:true})
                    return
                 }
                navigate('/patient/home',{replace:true})
                return
            }

            case 'doctor':{

            }
           }
        

         return
       }

       navigate('/patient/account',{replace:true})
    }).catch(_=>{
        navigate('/patient/account',{replace:true})
    })
}


export default AuthValidatorPage