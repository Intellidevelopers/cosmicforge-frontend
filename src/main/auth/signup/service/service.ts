import { ResponseBodyProps } from "../../../util/ApiResponseBodyProps"


 export const sign_up_user = async (data:{}) =>{
  let response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/user/signup`,{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })

   const result = await response.json() as ResponseBodyProps

    return result
 }


 export const resend_otp = async (data:{}) =>{
    let response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/user/resend-otp`,{
          method:'post',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(data)
      })
  
     const result = await response.json() as ResponseBodyProps
  
      return result
   }


   export const validate_otp = async (data:{}) =>{
    let response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/user/validate-otp`,{
          method:'post',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(data)
      })
  
     const result = await response.json() as ResponseBodyProps
  
      return result
   }


   export const complete_registration = async (data:{}) =>{
    let response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/user/complete-registration`,{
          method:'post',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(data)
      })
  
     const result = await response.json() as ResponseBodyProps
  
      return result
   }

   export const sign_up_user_wih_google = async (data:any) =>{
    let response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/auth/google/userRole`,{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
        
    })

   const result = await response.json() as ResponseBodyProps

    return result
   }



