import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react'

import DoctorTableCustomCard from '../../component/doctor/DoctorTableCustomCard'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../store/initStore'



enum AppointmentsTypes {
  upcomming = "Upcomming Appointments",
  past = "Past Appointments",
  cancelled = "Cancalled Appointments"
}

const DoctorTable = () => {




  const [scrollWidth, setScrollWidth] = useState<number>(200)
  const scrollRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const [appointmentTypeSelected, setAppoinmentTypeSelected] = useState<'upcomming' | 'past' | 'cancelled'>('upcomming')
  const [activeAppointment, setActiveAppointment] = useState<string>(AppointmentsTypes.upcomming)



  const appoinmentsState = useSelector((state: RootReducer) => state.appointments.appointments)

  const [appoinments, setAppointments] = useState<[{
    _id?:string,
    appointmentDate
    : string
    appointmentStatus
    : string
    appointmentTime
    : string
    appointmentType
    : string
    medicalPersonelID
    : {
      fullName: string,
      lastName: string,
      _id: string

    } | null
    patientID
    : {
      fullName: string,
      lastName: string,
      _id: string

    } | null,

    patientDetails: {
      profilePicture: string,
      vitalSigns:{
        gender:string
      }
    },
    medicalPersonelDetails: {
      profilePicture: string | undefined,
      department: string,
      currentClinic: string,
      specializationTitle: string,
      workAddress: string
    },
    payment
    : {
      cardFee
      : number
      cardType
      : string
      consultationFee
      : string
      paymentReference
      : string
      paymentStatus
      : string
      total
      : number
      vat
      : string
    },


  }] | null>(null)

 

  useEffect(() => {


    window.addEventListener('resize', () => {
      setScrollWidth(scrollRef.current?.scrollWidth!!)

    })


    if (scrollRef) {
      

      scrollRef.current?.addEventListener('scroll', () => {

        // setScrollWidth(scrollRef.current?.scrollWidth!!)
      })
      setScrollWidth(scrollRef.current?.scrollWidth!!)
      // alert(window.innerWidth)
    }

    return () => {
      window.removeEventListener('resize', () => { })
    }
  }, [window])


  useMemo(()=>{

    if(appoinmentsState){
      const bookedAppointment = appoinmentsState.filter(appointment=>{
        return appointment.appointmentStatus === 'booked'
      })

      setAppointments(bookedAppointment as [{
        _id?:string,
        appointmentDate
        : string
        appointmentStatus
        : string
        appointmentTime
        : string
        appointmentType
        : string
        medicalPersonelID
        : {
          fullName: string,
          lastName: string,
          _id: string

        } | null
        patientID
        : {
          fullName: string,
          lastName: string,
          _id: string

        } | null,

        patientDetails: {
          profilePicture: string,
          vitalSigns:{
            gender:string
          }
        },
        medicalPersonelDetails: {
          profilePicture: string | undefined,
          department: string,
          currentClinic: string,
          specializationTitle: string,
          workAddress: string
        },
        payment
        : {
          cardFee
          : number
          cardType
          : string
          consultationFee
          : string
          paymentReference
          : string
          paymentStatus
          : string
          total
          : number
          vat
          : string
        },


      }] | null)
    }

  },[appoinmentsState])

  return <div className="w-full  overflow-y-auto bg-white rounded-md relative">



    <div className='p-10 absolute  top-[10%] md:top-[30%] w-full z-[1000] flex justify-center' >
      
    {
      /**
       * <div className={` ${ toggleStartSesion? 'block':'hidden'}    h-[200px] w-[600px] bg-white shadow-black shadow-lg rounded-md relative`}>

    <p className='font-bold text-center mt-20'>You are about to start  this appoinment session click continue to start</p>

    <div className='absolute bottom-0  w-full  flex justify-end place-items-end p-2 gap-5 cursor-default'>
      <p className='bg-red-600 p-2 text-white rounded-md' onClick={()=>{
        setToggleStartSession(false)
      }}>cancel</p>
      <p className='bg-cosmic-primary-color p-2 text-white rounded-md' onClick={()=>{

       
      }}>continue</p>
    </div>
    </div>
       */
    }


    </div>

    <div className="grid grid-cols-6 p-4 sticky top-0 bg-white z-[100]">

      <div className="w-full col-span-4 md:col-span-5">

        <p className="font-bold">{activeAppointment}</p>
      </div>

      <div className="w-full col-span-2 md:col-span-1 text-end">
        <select className='border rounded-md' value={appointmentTypeSelected} onChange={(e) => {
          setAppoinmentTypeSelected(e.target.value!! as 'upcomming' | 'past' | 'cancelled')
          const type = e.target.value!! as 'upcomming' | 'past' | 'cancelled'
          setActiveAppointment(AppointmentsTypes[type as keyof typeof AppointmentsTypes])

          if (type === 'upcomming' && appoinmentsState) {
            const filteredArray = appoinmentsState.filter((appoinment) => {
              return appoinment.appointmentStatus === 'booked'
            })
            if (filteredArray.length > 0)
              setAppointments(filteredArray as [{
                appointmentDate
                : string
                appointmentStatus
                : string
                appointmentTime
                : string
                appointmentType
                : string
                medicalPersonelID
                : {
                  fullName: string,
                  lastName: string,
                  _id: string

                } | null
                patientID
                : {
                  fullName: string,
                  lastName: string,
                  _id: string

                } | null,

                patientDetails: {
                  profilePicture: string,
                  vitalSigns:{
                    gender:string
                  }
                },
                medicalPersonelDetails: {
                  profilePicture: string | undefined,
                  department: string,
                  currentClinic: string,
                  specializationTitle: string,
                  workAddress: string
                },
                payment
                : {
                  cardFee
                  : number
                  cardType
                  : string
                  consultationFee
                  : string
                  paymentReference
                  : string
                  paymentStatus
                  : string
                  total
                  : number
                  vat
                  : string
                },


              }] | null)
            else setAppointments(null)

            return
          }


          if (type === 'past' && appoinmentsState) {
            const filteredArray = appoinmentsState.filter((appoinment) => {
              return appoinment.appointmentStatus === 'completed'
            })

            if (filteredArray.length > 0)
              setAppointments(filteredArray as [{
                appointmentDate
                : string
                appointmentStatus
                : string
                appointmentTime
                : string
                appointmentType
                : string
                medicalPersonelID
                : {
                  fullName: string,
                  lastName: string,
                  _id: string

                } | null
                patientID
                : {
                  fullName: string,
                  lastName: string,
                  _id: string

                } | null,

                patientDetails: {
                  profilePicture: string,
                  vitalSigns:{
                    gender:string
                  }
                },
                medicalPersonelDetails: {
                  profilePicture: string | undefined,
                  department: string,
                  currentClinic: string,
                  specializationTitle: string,
                  workAddress: string
                },
                payment
                : {
                  cardFee
                  : number
                  cardType
                  : string
                  consultationFee
                  : string
                  paymentReference
                  : string
                  paymentStatus
                  : string
                  total
                  : number
                  vat
                  : string
                },


              }] | null)

            else setAppointments(null)

            return
          }



          if (type === 'cancelled' && appoinmentsState) {
            const filteredArray = appoinmentsState.filter((appoinment) => {
              return appoinment.appointmentStatus === 'cancelled'
            })
            if (filteredArray.length > 0)
              setAppointments(filteredArray as [{
                appointmentDate
                : string
                appointmentStatus
                : string
                appointmentTime
                : string
                appointmentType
                : string
                medicalPersonelID
                : {
                  fullName: string,
                  lastName: string,
                  _id: string

                } | null
                patientID
                : {
                  fullName: string,
                  lastName: string,
                  _id: string

                } | null,

                patientDetails: {
                  profilePicture: string,
                  vitalSigns:{
                    gender:string
                  }
                },
                medicalPersonelDetails: {
                  profilePicture: string | undefined,
                  department: string,
                  currentClinic: string,
                  specializationTitle: string,
                  workAddress: string
                },
                payment
                : {
                  cardFee
                  : number
                  cardType
                  : string
                  consultationFee
                  : string
                  paymentReference
                  : string
                  paymentStatus
                  : string
                  total
                  : number
                  vat
                  : string
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
        appoinments && appoinments.length <=0  && <div className='w-full flex justify-center mt-6'> <p>No appointment yet</p>  </div>
      }


      {
        appoinments && appoinments.length>0  && appoinments.map((appointment, index) => (
          <DoctorTableCustomCard appointmentId={appointment._id!!} gender={appointment?.patientDetails?.vitalSigns?.gender} appointmentDate={appointment.appointmentDate} appointmentmentTime={appointment.appointmentTime} patientName={appointment.patientID?.lastName.concat(' ').concat(appointment.patientID.fullName)!!} patientProfile={appointment.patientDetails.profilePicture} key={index} scrollWidth={scrollWidth} patientId={appointment.patientID?._id!!} onStartSession={() => {
          //  alert(details.patientName)

         
          }} />
        ))
      }










    </div>






  </div>
}


export default DoctorTable