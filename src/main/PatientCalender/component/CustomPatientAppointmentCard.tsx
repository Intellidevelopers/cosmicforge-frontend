import { useNavigate } from "react-router-dom"


interface CustomPatientAppointmentProps {

    docImage: string,
    dateInFull: string,
    userName: string,
    paymentStatus:string
}

const CustomPatientAppointmentCard = ({ docImage, dateInFull, userName,paymentStatus }: CustomPatientAppointmentProps) => {

     const navigate = useNavigate()

    return <div className="w-full  p-3 flex gap-2 relative bg-white rounded-md shadow shadow-black"  onClick={()=>{
          navigate('/patient/calendar/appointment-info',{
              state:{
                docImage,
                dateInFull,
                userName,
                paymentStatus
              }
          })
    }}>
        <img className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full' alt='card-profile' src={docImage} />
        <div className='w-full flex flex-col gap-1 relative'>
            <p className="w-full text-[14px] md:text-[16px] font-bold">{userName}{"  has an Appointment"}</p>

            <p className='text-justify mt-2 text-[14px] md:text-[16px] font-extralight'>{dateInFull.replace(','," ")}</p>

        </div>
    </div>


}



export default CustomPatientAppointmentCard