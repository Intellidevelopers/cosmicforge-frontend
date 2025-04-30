
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

  export  interface DoctorCertificateAndLicenceProps {
        licence:{  fullName: '',
            institution: '',
            licenseNo: '',
            licenseImage: '',
            date: '',
            type: "licence",
            photoWithLicence: ''} | null,

            certification: {  fullName: '',
                institution:string,
                certificateNo: string;
                certificateImage?: string;
                date:string,
                type: "licence",
                } | null
    }


 const  initialState:DoctorCertificateAndLicenceProps= {
   licence:null,
   certification:null
 }


 const doctorCertificateAndLicenceSlice = createSlice({
    name:"doctorCertificateAndLicence",
    initialState,
    reducers:{
        cacheDoctorCertificateAndLicence(state,action:PayloadAction<DoctorCertificateAndLicenceProps>){
            state.licence = action.payload.licence?? state.licence!!
            state.certification =action.payload.certification ?? state.certification
            
          
        }
    }

 })

 export const {cacheDoctorCertificateAndLicence} =doctorCertificateAndLicenceSlice.actions


 export default doctorCertificateAndLicenceSlice.reducer