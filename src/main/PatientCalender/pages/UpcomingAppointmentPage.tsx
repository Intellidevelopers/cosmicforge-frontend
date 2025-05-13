import { useSelector } from "react-redux"
import { RootReducer } from "../../store/initStore"
import CustomPatientAppointmentCard from "../component/CustomPatientAppointmentCard"
import { useOutletContext } from "react-router-dom"
import { useMemo, useState } from "react"

  const UpcomingAppointmentPage = () =>{


    const data:{searchText:string} = useOutletContext()


   

    let appointments = useSelector((state:RootReducer)=>state.appointments.appointments)

    const [upcomingAppointment,setUpcomingAppointment] = useState< [{
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

      
     
  }] | null>(null)

  const [upcomingAppointmentCache,setUpcomingAppointmentCache] = useState< [{
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

    
   
}] | null>(null)

    
useMemo(()=>{
  if(data.searchText && upcomingAppointmentCache){

    
    const filter = upcomingAppointmentCache.filter(appointment=>{

      return new RegExp(`^${data.searchText?.toLocaleLowerCase()}`).test(appointment.medicalPersonelDetails.department.toLocaleLowerCase()!!)
    
    })

    if(filter.length>0){
      setUpcomingAppointment(filter as [{
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
   
        
       
    }] | null)
    }
  
  }
},[data])

useMemo(()=>{
  if(appointments && appointments.length>0){

   const  appointmentFiltered  = appointments.filter((appointment)=>{
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

     
    
 }] | null

setUpcomingAppointment(appointmentFiltered)

setUpcomingAppointmentCache(appointmentFiltered)

  }
},[appointments])

  const user = useSelector((state:RootReducer)=>state.user)
  
    return <div className="w-full p-3 ">
      <p className="font-bold ">Upcoming Appointment</p>
      <div className="mt-4 w-full flex flex-col gap-4">
      
         
      {
       upcomingAppointment &&  upcomingAppointment.map((appoinment,i)=>(
          <CustomPatientAppointmentCard key={i} docImage={appoinment.medicalPersonelDetails.profilePicture!!} userName={user.data?.lastName?.concat(user.data.fullName!!)!!} dateInFull={appoinment.appointmentDate.concat(",").concat(appoinment.appointmentTime)!!} paymentStatus={appoinment.paymentStatus!!}/>
        ))
       }
      </div>
    </div>
  }


  export default UpcomingAppointmentPage