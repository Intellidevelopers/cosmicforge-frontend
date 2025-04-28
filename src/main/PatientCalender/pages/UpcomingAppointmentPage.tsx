import { useSelector } from "react-redux"
import { RootReducer } from "../../store/initStore"
import CustomPatientAppointmentCard from "../component/CustomPatientAppointmentCard"

  const UpcomingAppointmentPage = () =>{

    let appointments = useSelector((state:RootReducer)=>state.appointments.appointments)

     if(appointments && appointments.length>0){
       appointments  = appointments.filter((appointment)=>{
       return appointment.appointmentStatus === "booked"
       }) as [{
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
            profilePicture:string
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

        
       
    }] | null
     }

  const user = useSelector((state:RootReducer)=>state.user)
  
    return <div className="w-full p-3 ">
      <p className="font-bold ">Upcoming Appointment</p>
      <div className="mt-4 w-full flex flex-col gap-4">
      
         
      {
        appointments && appointments.map((appoinment,i)=>(
          <CustomPatientAppointmentCard key={i} docImage={appoinment.medicalPersonelDetails.profilePicture!!} userName={user.data?.lastName?.concat(user.data.fullName!!)!!} dateInFull={appoinment.appointmentDate.concat(",").concat(appoinment.appointmentTime)!!} paymentStatus={appoinment.paymentStatus!!}/>
        ))
       }
      </div>
    </div>
  }


  export default UpcomingAppointmentPage