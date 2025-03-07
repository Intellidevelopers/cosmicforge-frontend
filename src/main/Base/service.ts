import { ResponseBodyProps } from "../util/ApiResponseBodyProps"


export const  validateUserSession = async (data:{isKeepMeSignedIn:boolean,token:string}) => {

    const response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/validate-user-session`,{
           method:'post',
          headers:{
            
           "Content-Type":'application/json'
          },
          body:JSON.stringify(data)
       })

      const result  = await response.json()  as ResponseBodyProps
   
      return result
}