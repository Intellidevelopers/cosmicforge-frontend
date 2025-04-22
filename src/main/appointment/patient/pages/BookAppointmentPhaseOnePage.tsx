import { useLocation, useNavigate } from "react-router-dom"
import AppointmentCalender from "./AppointmentCalender"
import Loader from "../../../generalComponents/Loader"
import { MutableRefObject, useRef, useState } from "react"

const BookAppointmentPhaseOnePage = () => {

    const navigate = useNavigate()
    const [loading,] = useState<boolean>(false)
    const [errorMesage,setErrorMesage] = useState<string>('')

  
   const bodyRef:MutableRefObject<HTMLDivElement | null> = useRef(null)

    const { state } = useLocation()

    const [appointmentmentDetails, setAppointmentmentDetails] = useState<{ date: string, time: string, appointmentType: 'None' | 'Virtual' | 'In-Person' }>({
        date: '',
        time: state?.workingHour.time,
        appointmentType: 'Virtual'
    })

    



    return <div  ref ={bodyRef} className="relative bg-[#F5F5F5] bg-opacity-50  cursor-default  font-poppins w-full p-5 overflow-x-hidden  h-full  overflow-y-auto"
    >
        <div className=" place-items-center gap-3 hidden md:flex " onClick={() => {
            navigate(-1)
        }}>
            <i className="fa fa-angle-left fa-xl" />
            <p>back</p>
        </div>

        <div className="relative w-full  flex flex-col place-items-center  p-3  ">

            <div className=" relative m-4 h-[200px] w-[200px]    ">
                <img className="w-full h-full     bg-orange-400 rounded-full
  " src={state?.doctorImage} style={{ objectPosition: 'top', objectFit: 'cover' }} />

            </div>

            <div className="mt-2">
                <p>Dr {state?.dooctorName}{state?.doctorName}</p>
                <p className="font-extralight">{state?.department}</p>


            </div>



        </div>

        <p className="font-bold">Select available Date and Time</p>
        <p className="text-center mt-2 text-cosmic-primary-color">Date</p>

        <div className="w-full">
            <AppointmentCalender onDateSelected={(d) => {
                 
                setAppointmentmentDetails({
                    ...appointmentmentDetails,
                    date: d,
                    appointmentType: appointmentmentDetails.appointmentType,
                    time: appointmentmentDetails.time
                })
            }} />
        </div>


        {
            /*
            <div className="w-full mt-8">
            <p className="font-bold ">Appointment Type</p>

            <div className="w-full mt-2">
                <div className="w-full relative p-2 flex border shadow">
                    <p className="">Virtual</p>
                    <input type="checkbox" checked={appointmentmentDetails?.appointmentType === 'Virtual'} className={`absolute top-4 right-8 decoration-cosmic-primary-color`} onChange={() => {
                        setAppointmentmentDetails({
                            ...appointmentmentDetails,
                            date: appointmentmentDetails.date,
                            appointmentType: appointmentmentDetails.appointmentType === 'Virtual' ? 'None' : 'Virtual',
                            time: appointmentmentDetails.time
                        })
                    }} />
                </div>

                <div className="w-full relative p-2 flex  border shadow">
                    <p className="">In-Personal</p>
                    <input type="checkbox" checked={appointmentmentDetails?.appointmentType === 'In-Person'} className={`absolute top-4 right-8 decoration-cosmic-primary-color`}  onChange={() => {
                        setAppointmentmentDetails({
                            ...appointmentmentDetails,
                            date: appointmentmentDetails.date,
                            appointmentType: appointmentmentDetails.appointmentType === 'In-Person' ? 'None' : 'In-Person',
                            time: appointmentmentDetails.time
                        })
                    }} />
                </div>
            </div>
        </div>

            */
        }




        <div className="w-full p-8 flex justify-center">
            <p className="bg-cosmic-primary-color p-2 text-center text-white rounded-md w-[300px]" onClick={() => {
            setErrorMesage('')

           
              const dataComplete =  Object.entries(appointmentmentDetails).every(([,value],)=>{
              
                     return !( value ===  '' || value === 'None')
                })

         
   
                if(!dataComplete){
                    setErrorMesage('please provide all details needed.')
                    if(bodyRef.current){
                       
                        bodyRef.current.scrollBy({top:bodyRef.current.scrollHeight,behavior:'smooth'})
                    }
                    return
                }
                navigate("/patient/appointment/checkout",{
                    state:{
                        appointmentmentDetails,
                        doctorImage:state?.doctorImage, 
                        doctorName: state?.doctorName,
                        doctorSpecialization:state?.doctorSpecialization,
                        department: state?.department,
                        clinic: state?.clinic,
                        address: state?.address,
                        pricing: state?.pricing,
                        bio: state?.bio,
                        title: state?.title,
                        workingHour: state?.workingHour,
                        doctorId:state?.doctorId
                    }
                })
            
            }}>Continue</p>
        </div>


        {
            loading && <div className="w-full m-3 flex justify-center">
                <Loader size="50px" />
            </div>
        }
   
        {
            errorMesage && <div className="w-full m-3 flex justify-center">
                <p className="text-red-600">{errorMesage}</p>
            </div>
        }

    </div>
}


export default BookAppointmentPhaseOnePage