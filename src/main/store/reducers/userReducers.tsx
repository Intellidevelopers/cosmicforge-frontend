import { createSlice, PayloadAction } from "@reduxjs/toolkit"


  export interface UserProps {
    isAunthenticated?:boolean,
    success?:boolean,
    failed?:boolean,
    message?:string,
    data?:{} | null,
    emailValidated?:boolean
 }

 const  initialState:UserProps = {
   
    isAunthenticated:false,
    success:false,
    failed:false,
    data: null,
    message:'',
    emailValidated:false
 }


 const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        authenticateUser(state,action:PayloadAction<UserProps>){
            state.isAunthenticated = action.payload.isAunthenticated ?? state.isAunthenticated,
            state.failed = action.payload.failed ?? state.failed
            state.message = action.payload.message ?? state.message,
            state.success = action.payload.success ?? state.success,
            state.data = action.payload.data ?? state.data
            state.emailValidated = action.payload.emailValidated ?? state.emailValidated
        }
    }

 })

 export const {authenticateUser} =userSlice.actions


 export default userSlice.reducer