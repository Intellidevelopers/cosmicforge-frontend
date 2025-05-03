import { ResponseBodyProps } from "../util/ApiResponseBodyProps"



export  const getBanks = async (token:string) => { 


   const response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/wallet/banks`,{
       method:'get',
      headers:{
       "Authorization":`Bearer ${token}`,
       "Content-Type":'application/json'
      },
     
   })

  const result  = await response.json()  as ResponseBodyProps

  return result
}


export  const verifyAccount = async (token:string,accountNumber:string,bankCode:string) => { 
   
       const response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/wallet/verifyAccount?account_number=${accountNumber}&bank_code=${bankCode}`,{
           method:'get',
          headers:{
           "Authorization":`Bearer ${token}`,
           "Content-Type":'application/json'
          },
         
       })
    
      const result  = await response.json()  as ResponseBodyProps
    
      return result
    }


    export  const withdrawBalance = async (token:string,type:string,name:string,account_number:string,bank_code:string,currency:string,amount:string) => { 
      
          const response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/wallet/withdraw`,{
              method:'POST',
             headers:{
              "Authorization":`Bearer ${token}`,
              "Content-Type":'application/json'
             },
            body:JSON.stringify({type,name,account_number,bank_code,currency,amount})
          })
       
         const result  = await response.json()  as ResponseBodyProps
       
         return result
       }