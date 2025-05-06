import { createSlice, PayloadAction } from "@reduxjs/toolkit"


 export interface DoctorAppointmentInterface {


    appointments:[{
        _id?:string,
        appointmentDate
        : string
        appointmentStatus
        :string
        appointmentTime
        :string
        appointmentType
        :string
        medicalPersonelID
        :{
            fullName:string,
            lastName:string,
            _id:string

        } | null
        patientID
        :{
            fullName:string,
            lastName:string,
            _id:string

        } | null,

        patientDetails:{
            profilePicture:string,
            vitalSigns:{
                gender:string
            }
        },
        medicalPersonelDetails:{
            profilePicture:string | undefined ,
            department:string,
            currentClinic:string,
            specializationTitle:string,
            workAddress:string
        },
        payment
        : {
            cardFee
            :number
            cardType
            : string
            consultationFee
            :string
            paymentReference
            :string
            paymentStatus
            :string 
            total
            :number
            vat
            :string
        },


paymentStatus?:string

        
       
    }] | null,
   
totalAppointments:number






 }




 const  initialState:DoctorAppointmentInterface= {
    
    appointments: null,
    totalAppointments:0
    
  }
 
 
  const appointmentSlice = createSlice({
     name:"appointments",
     initialState,
     reducers:{
         updateAppointments(state,action:PayloadAction<DoctorAppointmentInterface>){
             state.appointments = action.payload.appointments ?? state.appointments!!
             state.totalAppointments = action.payload.totalAppointments ?? state.totalAppointments
             
           
         }
     }
 
  })
 
  export const {updateAppointments} =appointmentSlice.actions
 
 
  export default appointmentSlice.reducer