import { createSlice, PayloadAction } from "@reduxjs/toolkit"

   export interface SubscriptionProps {
       userSubcription:{
        planName:string,

        generalSubscriptionDetails:[{
            name:string,
            message:string,
            price:string,
            duration:string,
            offers:string[],
            commission:number | undefined
        }]|null
        

       }|null


    }
   

 

 const  initialState:SubscriptionProps= {
   userSubcription:null,
  
 }


 const subscriptionSlice = createSlice({
    name:"subscription",
    initialState,
    reducers:{
        cacheSubscription(state,action:PayloadAction<SubscriptionProps>){
            state.userSubcription = action.payload.userSubcription?? state.userSubcription
           
            
          
        }
    }

 })

 export const {cacheSubscription} =subscriptionSlice .actions


 export default subscriptionSlice.reducer