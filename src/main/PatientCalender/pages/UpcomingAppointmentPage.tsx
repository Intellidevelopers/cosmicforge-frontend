import CustomPatientAppointmentCard from "../component/CustomPatientAppointmentCard"

  const UpcomingAppointmentPage = () =>{
    return <div className="w-full p-3 ">
      <p className="font-bold ">Upcoming Appointment</p>
      <div className="mt-4 w-full flex flex-col gap-4">
        <CustomPatientAppointmentCard/>
        <CustomPatientAppointmentCard/>
        <CustomPatientAppointmentCard/>
      </div>
    </div>
  }


  export default UpcomingAppointmentPage