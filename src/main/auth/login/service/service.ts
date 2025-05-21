import { ResponseBodyProps } from "../../../util/ApiResponseBodyProps"


   export const login_user = async (data:{}) =>{
    let response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/user/login`,{
          method:'post',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(data)
      })
  
     const result = await response.json() as ResponseBodyProps
  
      return result
   }


    export const manage_password = async (token:string,data:{newPassword:string}) =>{
    
        let response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/user/manage-password`,{
          method:'post',
          headers:{
             "Authorization":`Bearer ${token}`,
              'Content-Type':'application/json'
          },
          body:JSON.stringify(data)
      })
  
       
     const result = await response.json() as ResponseBodyProps
  
      return result
   }