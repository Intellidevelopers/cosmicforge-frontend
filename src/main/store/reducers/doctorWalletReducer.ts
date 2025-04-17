import { createSlice, PayloadAction } from "@reduxjs/toolkit"


 export interface DoctorWalletProps {

 wallet:{

    amount:number,
    currency:string
 } | null






 }




 const  initialState:DoctorWalletProps= {
    
   wallet:null
    
  }
 
 
  const appointmentSlice = createSlice({
     name:"doctorWallet",
     initialState,
     reducers:{
         updateDoctorWallet(state,action:PayloadAction<DoctorWalletProps>){
             state.wallet = action.payload.wallet ?? state.wallet!!
           
             
           
         }
     }
 
  })
 
  export const {updateDoctorWallet} =appointmentSlice.actions
 
 
  export default appointmentSlice.reducer