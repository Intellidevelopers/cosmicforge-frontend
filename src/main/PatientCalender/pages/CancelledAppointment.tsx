import { useSelector } from "react-redux"
import CustomPatientAppointmentCard from "../component/CustomPatientAppointmentCard"
import { RootReducer } from "../../store/initStore"


const CancelledAppointment = () => {

  const appointments = useSelector((state:RootReducer)=>state.appointments.appointments)

  const user = useSelector((state:RootReducer)=>state.user)

    return <div className="w-full p-3 ">
      <p className="font-bold ">Cancelled Appointment</p>
      <div className="mt-4 w-full flex flex-col gap-4">
       
       {
        appointments && appointments.map((appoinment,i)=>(
          <CustomPatientAppointmentCard key={i} docImage={appoinment.medicalPersonelDetails.profilePicture!!} userName={user.data?.lastName?.concat(user.data.fullName!!)!!} dateInFull={appoinment.appointmentDate.concat(appoinment.appointmentTime)!!} paymentStatus={appoinment.paymentStatus!!}/>
        ))
       }

       
      </div>
    </div>
}


export default CancelledAppointment