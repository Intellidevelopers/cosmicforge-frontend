import { MutableRefObject, useEffect, useRef, useState } from 'react'

import DoctorTableCustomCard from '../../component/doctor/DoctorTableCustomCard'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../store/initStore'


enum AppointmentsTypes {
  upcomming = "Upcomming Appointments",
  past = "Past Appointments",
  cancelled = "Cancalled Appointments"
}

const DoctorTable = () => {

    const [scrollWidth,setScrollWidth] = useState<number>(200)
  const scrollRef:MutableRefObject<HTMLDivElement | null> = useRef(null)
  const [appointmentTypeSelected,setAppoinmentTypeSelected] = useState<'upcomming'|'past'| 'cancelled'>('upcomming')
  const [activeAppointment,setActiveAppointment] = useState<string>(AppointmentsTypes.upcomming)

  

    const appoinmentsState = useSelector((state:RootReducer)=>state.appointments.appointments)

    const [appoinments,setAppointments] = useState(appoinmentsState)

  useEffect(()=>{
     
  
    window.addEventListener('resize',()=>{
      setScrollWidth(scrollRef.current?.scrollWidth!!)
    
    })
     if(scrollRef){
        scrollRef.current?.addEventListener('scroll',()=>{
            
          // setScrollWidth(scrollRef.current?.scrollWidth!!)
        })
        setScrollWidth(scrollRef.current?.scrollWidth!!)
       // alert(window.innerWidth)
     }

     return () =>{
      window.removeEventListener('resize',()=>{})
     }
  },[window])



    return <div className="w-full  overflow-y-auto bg-white rounded-md relative">

        <div className="grid grid-cols-6 p-4 sticky top-0 bg-white z-[100]">

            <div className="w-full col-span-4 md:col-span-5">

            <p className="font-bold">{activeAppointment}</p>
            </div>

            <div className="w-full col-span-2 md:col-span-1 text-end">
               <select className='border rounded-md' value={appointmentTypeSelected} onChange={(e)=>{
                setAppoinmentTypeSelected(e.target.value!! as 'upcomming'|'past'| 'cancelled')
                const type = e.target.value!! as 'upcomming'|'past'| 'cancelled' 
                setActiveAppointment(AppointmentsTypes[ type as keyof typeof AppointmentsTypes])
                   
                if(type === 'upcomming' && appoinmentsState ){
                 const filteredArray =   appoinmentsState.filter((appoinment)=>{
                      return appoinment.appointmentStatus === 'booked'
                    })
                    if(filteredArray.length>0)
                    setAppointments(filteredArray as [{
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
                      
                     
                  }] | null)
                  else setAppointments(null)

                  return
                }


                if(type === 'past' && appoinmentsState ){
                  const filteredArray =   appoinmentsState.filter((appoinment)=>{
                       return appoinment.appointmentStatus === 'completed'
                     })
 
                       if(filteredArray.length>0)
                     setAppointments(filteredArray as [{
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
                      
                     
                  }] | null)

                   else setAppointments(null)

                   return
                 }
                


                 if(type === 'cancelled' && appoinmentsState ){
                  const filteredArray =   appoinmentsState.filter((appoinment)=>{
                       return appoinment.appointmentStatus === 'cancelled'
                     })
     if(filteredArray.length>0)
                     setAppointments(filteredArray as [{
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
                      
                     
                  }] | null)
                   else setAppointments(null)

                   return
                 }
 
 

               }}>
               <option className="text-end">upcomming</option>
               <option className="text-end">cancelled</option>
               <option className="text-end">past</option>
               </select>
            </div>


        </div>

      <div ref={scrollRef} className=' w-full overflow-x-auto '>


      <div className='w-full inline-flex   
     mb-3 cursor-default  rounded-full justify-evenly ms-4'>
          
            <div className=" min-w-[200px]  flex gap-2  m-2 ">
                  <p className='text-[14px]' >Name</p>
            </div>
            <p className="min-w-[260px]  m-2 ">Gender</p>
            <p className="min-w-[120px]   m-2  ">Date</p>
            <p className="min-w-[100px]   m-2  ">Time</p>
          
           


        </div>

        {
          !appoinments && <div className='w-full flex justify-center mt-6'> <p>No appointment yet</p>  </div>
        }

        
        {
            appoinments  && appoinments.length   && appoinments.length>0 && appoinments.map((appointment,index)=>(
                <DoctorTableCustomCard appointmentDate={appointment.appointmentDate} appointmentmentTime={appointment.appointmentTime} patientName={appointment.patientID?.lastName.concat(' ').concat(appointment.patientID.lastName)!!} patientProfile={appointment.patientDetails.profilePicture} key={index} scrollWidth={scrollWidth} />
            ))
        }

            

         


       
           


      </div>

           

      

       
    </div>
}


export default DoctorTable