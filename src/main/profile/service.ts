

import { ResponseBodyProps } from "../util/ApiResponseBodyProps"

interface PatientProfileUpdateProps {
 email:string | undefined,
    mobileNo:string | undefined,
  homeAddress:string | undefined,
  workAddress:string | undefined,
  profilePicture :string | undefined,
  
 }


 export  const updatePatientProfile  = async (data:PatientProfileUpdateProps,token:string) => { 


    const response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/user/patient/update-profile`,{
        method:'put',
       headers:{
        "Authorization":`Bearer ${token}`,
        "Content-Type":'application/json'
       },
       body:JSON.stringify(data)
    })

   const result  = await response.json()  as ResponseBodyProps

   return result
}