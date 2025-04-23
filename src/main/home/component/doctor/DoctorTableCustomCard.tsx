import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updateAppointmentSession } from "../../../store/reducers/userSocketReducer"


interface DoctorTableCustomCard {
    scrollWidth: number,
    patientName: string,
    patientProfile: string,
    appointmentmentTime: string,
    appointmentDate: string,
    patientId: string
    onStartSession: (details: {
        patientName: string,
        patientProfile: string, patientId: string
    }) => void
}


const DoctorTableCustomCard = ({ scrollWidth, appointmentDate, appointmentmentTime, patientName, patientId, patientProfile, }: DoctorTableCustomCard



) => {


    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [toggleStartSesion, setToggleStartSession] = useState<boolean>(false)

    const [patientWhoBookedAppopintmentDetails, setPatientWhoBookedAppopintmentDetails] = useState<{
        doctorImage: string,
        doctorName: string,
        lastMessageTime: string,
        numberOfUnreadMessages: number,
        messageType: string,
        messageRead: boolean,
        message: string | null,
        details: {
            patientId: string
            profilePicture?: string,
            professionalTitle?: string,
            specialization?: string,
            currentClinic?: string,
            department?: string,
            bio?: string,
            pricing?: string,

            workAddress?: string,
            experience?: {

                hospitalName?: string,
                NoOfPatientTreated?: string,
                specializationAndDepartment?: string,
                date?: string
            },
            workTime?: {
                day?: string,
                time?: string
            }



        }
    } | null>(null)

    const getDaySuffice = (day: number) => {
        if (day >= 11 && day <= 13) {
            return 'th';
        }

        switch (day % 10) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    };

    const date = new Date()

    const time = appointmentmentTime?.split('-')[0].charAt(0)

    const secondTime = appointmentmentTime?.split('-')[1].charAt(0)

    const currentHour = date.toLocaleTimeString('en-Us', {
        hour12: true
    }).split(':')[0]







    const monthNumber = date.getDate()

    const dayInWeek = date.toLocaleString('en-Us', {
        weekday: 'long'
    })

    const monthName = date.toLocaleString('en-Us', {
        month: 'long'
    })
    const year = date.getFullYear()


    const customDateString = dayInWeek.concat(' ').concat(monthNumber.toString().concat(getDaySuffice(monthNumber))).concat(' ').concat(monthName).concat('  ').concat(year.toString())



    return <div>
        <div className='w-full inline-flex   
     mb-3 cursor-default md:hover:border md:hover:border-cosmic-primary-color rounded-full justify-evenly'     onClick={() => {


                if ((customDateString === appointmentDate && (time === currentHour || currentHour === secondTime))) {
                    //  onStartSession({ patientName, patientProfile, patientId })

                    setPatientWhoBookedAppopintmentDetails({
                        doctorImage: patientProfile,
                        doctorName: patientName,
                        lastMessageTime: "",
                        numberOfUnreadMessages: 0,
                        messageType: "",
                        messageRead: false,
                        message: '',
                        details: {
                            patientId: patientId,
                            profilePicture: patientProfile,
                            professionalTitle: "",
                            specialization: "",
                            currentClinic: "",
                            department: "",
                            bio: "",
                            pricing: "",

                            workAddress: "",

                        }

                    })
                    setToggleStartSession(true)
                }
            }}>

            <div className=" min-w-[200px]  flex gap-2  m-2 ">
                <img alt='image' className='w-[30px] h-[30px] rounded-full place-items-center justify-center' src={patientProfile} />
                <p className='text-[14px]' >{patientName}</p>
            </div>
            <p className="min-w-[120px]  m-2 ">Female</p>
            <p className="min-w-[120px]   m-2  ">{appointmentDate}</p>
            <p className="min-w-[100px]   m-2  ">{appointmentmentTime}</p>
            {
                (customDateString === appointmentDate && (time === currentHour || currentHour === secondTime)) && <i className="fa fa-dot-circle text-blue-600 animate-pulse mt-3" />
            }




        </div>
        <div className={` ${toggleStartSesion ? 'block' : 'hidden'} `}>
            <p className='font-bold  mt-2'>You are about to start  this appoinment session click continue to start</p>

            <div className='absolute bottom-0  w-full  flex justify-end place-items-end p-2 gap-5 cursor-default'>
                <p className='bg-red-600 p-2 text-white rounded-md mt-8 ' onClick={() => {
                    setToggleStartSession(false)
                }}>cancel</p>
                <p className='bg-cosmic-primary-color p-2 text-white rounded-md' onClick={() => {
                    dispatch(updateAppointmentSession({ appointmentSessionStarted: true }))
                    navigate('/doctor/messages', {
                        state: patientWhoBookedAppopintmentDetails
                    })
                }}>continue</p>
            </div>
            <div>

            </div>
        </div>
        <div className={` h-[1px] border md:w-full`} style={{
            width: `${scrollWidth}px`


        }}></div>
    </div>
}


export default DoctorTableCustomCard