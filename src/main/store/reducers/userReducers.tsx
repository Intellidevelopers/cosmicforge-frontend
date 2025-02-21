import { createSlice, PayloadAction } from "@reduxjs/toolkit"

   interface UserPropsData {
     role?:string,
     token?:string,
     email?:string,
     fullname?:string,
     lastName?:string
   }


  export interface UserProps {
    isAunthenticated?:boolean,
    success?:boolean,
    failed?:boolean,
    message?:string,
    data?:UserPropsData | null,
    emailValidated?:boolean,
    keepMeSignedIn?:boolean
 }

 const  initialState:UserProps = {
   
    isAunthenticated:false,
    success:false,
    failed:false,
    data: null,
    message:'',
    emailValidated:false,
    keepMeSignedIn:false
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
            state.keepMeSignedIn = action.payload.keepMeSignedIn ?? state.keepMeSignedIn
        }
    }

 })

 export const {authenticateUser} =userSlice.actions


 export default userSlice.reducer