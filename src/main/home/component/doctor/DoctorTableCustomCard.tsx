import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updateAppointmentSession } from "../../../store/reducers/userSocketReducer"
import { RootReducer } from "../../../store/initStore"


interface DoctorTableCustomCard {
    scrollWidth: number,
    patientName: string,
    patientProfile: string,
    appointmentmentTime: string,
    appointmentDate: string,
    patientId: string,
    appointmentId: string,
    gender: string,
    onStartSession: (details: {
        patientName: string,
        patientProfile: string, patientId: string
    }) => void
}





const DoctorTableCustomCard = ({ scrollWidth, appointmentDate, appointmentmentTime, patientName, patientId, patientProfile, gender, appointmentId }: DoctorTableCustomCard



) => {

    const userSocket = useSelector((state: RootReducer) => state.socket)

    const user = useSelector((state: RootReducer) => state.user)

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




        }
    } | null>(null)



    const date = new Date()

    const appoinmentStartTime = appointmentmentTime?.split('-')[0]

    const appoinmentEndTime = appointmentmentTime?.split('-')[1]


    const appoinmentDay = appointmentDate?.split(' ')[1].replace(/[a-z]/g, '')

    const appoinmentMonth = appointmentDate.split(' ')[2]


    const currentMonth = date.toLocaleDateString('en-Us', {
        month: 'short'
    })

    const currentTime = date.toLocaleTimeString('en-Us', {
        timeStyle: 'short'
    })

    const dayInWeek = date.toLocaleString('en-Us', {
        day: 'numeric'
    })







    // alert(dayInWeek ===appoinmentDay )











    return <div>
        <div className='w-full inline-flex   
     mb-3 cursor-default md:hover:border md:hover:border-cosmic-primary-color rounded-full justify-evenly'     onClick={() => {


                if (currentMonth === appoinmentMonth && dayInWeek === appoinmentDay && (appoinmentStartTime.trim().toLowerCase().replace(' ', '') === currentTime.trim().toLowerCase() || Number(currentTime.split(':')[0]) < Number(appoinmentEndTime.split(':')[0]))) {
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

                        }

                    })
                    setToggleStartSession(true)
                }
            }}>

            <div className=" min-w-[200px]  flex gap-2  m-2 ">
                <img alt='image' className='w-[30px] h-[30px] rounded-full place-items-center justify-center' src={patientProfile} />
                <p className='text-[14px]' >{patientName}</p>
            </div>
            <p className="min-w-[120px]  m-2 ">{gender}</p>
            <p className="min-w-[120px]   m-2  ">{appointmentDate}</p>
            <p className="min-w-[100px]   m-2  ">{appointmentmentTime}</p>
            {
                (currentMonth === appoinmentMonth && currentMonth === appoinmentMonth && dayInWeek === appoinmentDay && (appoinmentStartTime.trim().toLowerCase().replace(' ', '') === currentTime.trim().toLowerCase() || Number(currentTime.split(':')[0]) < Number(appoinmentEndTime.split(':')[0]))) && <i className="fa fa-dot-circle text-blue-600 animate-pulse mt-3" />
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


                    userSocket.socket?.emit('appointmentSessionStarted', {

                        doctorID: user.data?._id, patientID: patientId, startTime: Date.now(), caller: 'doctor', appointmentId


                    })
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