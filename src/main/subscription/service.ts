import { ResponseBodyProps } from "../util/ApiResponseBodyProps"

 export const  updateSubscriptionPlan = async (token:string,referenceID:string,plan:string) => {

    const response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/user/subscription/update`,{
           method:'post',
          headers:{
            
           "Content-Type":'application/json',
           "Authorization":`Bearer ${token}`,
           
          },
          body:JSON.stringify({referenceID,plan})
        
       })

      const result  = await response.json()  as ResponseBodyProps
   
      return result
}