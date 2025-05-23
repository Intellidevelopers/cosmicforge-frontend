import { createSlice, PayloadAction } from "@reduxjs/toolkit"

   export interface SubscriptionProps {
       userSubcription ?:{
        planName:string,

        generalSubscriptionDetails:[{
            name:string,
            message:string,
            price:string,
            duration:string,
            offers:string[],
            commission:number | undefined,
            usdPrice:string
        }]|null
        

       }|null


       currentCurrencyMode: 'USD' | 'NGN'


    }
   

 

 const  initialState:SubscriptionProps= {
   userSubcription:null,
   currentCurrencyMode:'NGN'
  
 }


 const subscriptionSlice = createSlice({
    name:"subscription",
    initialState,
    reducers:{
        cacheSubscription(state,action:PayloadAction<SubscriptionProps>){
            state.userSubcription = action.payload.userSubcription?? state.userSubcription
           
            
          
        },

         updateCurrencyMode(state,action:PayloadAction<SubscriptionProps>){
            state.currentCurrencyMode = action.payload.currentCurrencyMode?? state.currentCurrencyMode
           
            
          
        }



    }

 })

 export const {cacheSubscription,updateCurrencyMode} =subscriptionSlice .actions


 export default subscriptionSlice.reducer