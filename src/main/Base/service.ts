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


export const  getUserChats = async (token:string) => {

    const response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/user/chat/all`,{
           method:'get',
          headers:{
            
           "Content-Type":'application/json',
           "Authorization":`Bearer ${token}`
          },
        
       })

      const result  = await response.json()  as ResponseBodyProps
   
      return result
}



export const  getAppointments = async (token:string) => {

    const response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/user/medics/appointments`,{
           method:'get',
          headers:{
            
           "Content-Type":'application/json',
           "Authorization":`Bearer ${token}`
          },
        
       })

      const result  = await response.json()  as ResponseBodyProps
   
      return result
}



export const getWalletBalance = async (token:string) =>{


    const response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/wallet/details`,{
        method:'get',
       headers:{
         
        "Content-Type":'application/json',
        "Authorization":`Bearer ${token}`
       },
     
    })

   const result  = await response.json()  as ResponseBodyProps

   return result

}



export  const getCertificateOrLicence  = async (token:string) => { 
 
 
    const response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/user/medics/certification/all`,{
        method:'get',
       headers:{
        "Authorization":`Bearer ${token}`,
        "Content-Type":'application/json'
       }
    })
 
   const result  = await response.json()  as ResponseBodyProps
 
   return result
 }