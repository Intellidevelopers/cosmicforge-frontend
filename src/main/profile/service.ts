

import { ResponseBodyProps } from "../util/ApiResponseBodyProps"
import { DoctorEditProfileProps } from "./doctor/pages/DoctorEditProfilePage"

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


export  const updateDoctorProfile  = async (data:DoctorEditProfileProps,token:string) => { 


   const response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/user/medics/update-profile`,{
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




export  const getDoctorDeparments = async (token:string) => { 


   const response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/medics/doctor/departments`,{
       method:'get',
      headers:{
       "Authorization":`Bearer ${token}`,
       "Content-Type":'application/json'
      },
     
   })

  const result  = await response.json()  as ResponseBodyProps

  return result
}

export  const getDoctorDeparmentsForLandingPage = async () => { 


   const response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/medics/doctor/departments/all`,{
       method:'get',
      headers:{
       
       "Content-Type":'application/json'
      },
     
   })

  const result  = await response.json()  as ResponseBodyProps

  return result
}


export  const uploadLicense  = async (data:{ fullName: string,
   LicenseNumber: string,
   license: string,
   expiration: string,
   country: string,
   docummentType:string,
   documentId: string,
   documentHoldName: string,
   documentImage: string,
   pictureWithDocument: string,
   doctorImage: string,
   type: "licence" | "certificate";
   photoWithLicence: string},token:string) => { 

      const abortController = new AbortController()

      const signal = abortController.signal
      

      const timeOut = setTimeout(()=>{
         abortController.abort()
      },3*60*1000)

 

      const response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/user/medics/certification/upload`,{
         signal,
          method:'post',
         headers:{
          "Authorization":`Bearer ${token}`,
          "Content-Type":'application/json'
         },
         body:JSON.stringify(data)
      })
   
     const result  = await response.json()  as ResponseBodyProps

     clearTimeout(timeOut)
   
     return result
   
  
}


