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