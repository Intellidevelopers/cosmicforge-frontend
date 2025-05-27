import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface PatientUserProfileProps{
 
   profilePicture?:string,
   mobileNo?:string,
   workAddress?:string,
  homeAddress?:string ,

   vitalSigns?:{
   bloodPressure?:string,
   bodyTemperature?:string,
   homeAddress?:string,
   oxygenSaturation?:string,
   weight?:string,
   height?:string,
   profileType?: 'personal' | 'family',
   gender?:'male' | 'female',
   dateOfBirth?:string
  },
 
  //doctor ptofile

  fullName?: string,
  lastName?:string,
  userCosmicID?:string,
  professionalTitle?: string,
  specialization?: string,
  currentClinic?: string,
  department?: string,
  bio?: string,
  pricing?: string,
  currency?: 'NGN' | 'USD' |  undefined,
  experience?: {
      hospitalName?: string,
      NoOfPatientTreated?: string,
      specializationAndDepartment?: string,
      date?: string
  },
  workTime?: {
      day?: string,
      time?: string
  },

   
}

   interface UserPropsData {
    _id?:string,
     role?:string,
     token?:string,
     email?:string,
     fullName?:string,
     lastName?:string,
     profile?:PatientUserProfileProps
   }


  export interface UserProps {
    isAunthenticated?:boolean,
    success?:boolean,
    failed?:boolean,
    message?:string,
    data?:UserPropsData | null,
    emailValidated?:boolean,
    keepMeSignedIn?:boolean,
    userAuthToken?:string
 }

 const  initialState:UserProps = {
   
    isAunthenticated:false,
    success:false,
    failed:false,
    data: null,
    message:'',
    emailValidated:false,
    keepMeSignedIn:false,
    userAuthToken:''
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
            state.userAuthToken = action.payload.userAuthToken ?? state.userAuthToken
        }
    }

 })

 export const {authenticateUser} =userSlice.actions


 export default userSlice.reducer