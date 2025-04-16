import { ResponseBodyProps } from "../util/ApiResponseBodyProps"





 export const book_appointment = async (token:string,data:{ doctorId:string, date:string, time:string,appointmentStatus:'booked'|'cancelled' |'resheduled'|'completed'
    appointmentType:'Virtual'|'In-Person', payment:{
        consultationFee:string,cardType:'individual'|'family',vat:string,total:string,paymentReference:string

    }

 }) =>{
  let response = await fetch(`${import.meta.env.VITE_BASE_REST_URL}/user/patient/appointment/book`,{
        method:'post',
        headers:{
            'Content-Type':'application/json',
             "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify(data)
    })

   const result = await response.json() as ResponseBodyProps

    return result
 }
