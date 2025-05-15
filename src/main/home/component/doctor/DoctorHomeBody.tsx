import DoctorHomeNavBar from "./DoctorHomeNavBar";
import menuIcon from "../../../../assets/icons/cosmic-menu-icon.svg";
import appointmentIcon from "../../../../assets/icons/cosmic-doctor-appointment-icon.svg";
import totalPatientsIcon from "../../../../assets/icons/cosmic-doctor-total-patients-icon.svg";
import totalEarningsIcon from "../../../../assets/icons/cosmic-doctor-earnings-icon.svg";
import DoctorChartGraph from "./DoctorChartGrap";
import DoctorNavBarHome from "./DoctorNavBarMobile";
import DoctorTotalEarningGraph from "./DoctorTotalEarningGraph";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../../store/initStore";
import DoctorTable from "../../pages/doctor/DoctorTable";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateAppointmentSession } from "../../../store/reducers/userSocketReducer";

//import DoctorTable from "../../pages/doctor/DoctorTable";




const DoctorHomeBody = () => {


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

  const [appointmentId, setAppointmentId] = useState('')


  const appointments = useSelector((state: RootReducer) => state.appointments)

  const doctorWallet = useSelector((state: RootReducer) => state.doctorWallet)


  const formatAmout = (amount: number) => {
    if (amount) {
      amount = amount / 100
      return new Intl.NumberFormat().format(amount)
    }

    return 0
  }



  return (

    <div className="w-full h-full  overflow-y-auto  ">

      <DoctorHomeNavBar title="Dashboard" />
      <DoctorNavBarHome title="Dashboard" />


      <div className="  w-full h-dvh  ">

        <div className="w-full grid   grid-cols-6 md:p-4 md:gap-8">

          <div className=" bg-cosmic-primary-color col-span-2 min-h-fit md:h-[120px] w-full rounded-md">

            <div className="w-full flex justify-end p-2">
              <img src={menuIcon} />
            </div>

            <div className="w-full flex flex-wrap justify-center text-white gap-4">
              <div className="w-fit bg-white rounded-full p-1 ms-8">
                <img alt="appointment" src={appointmentIcon} />
              </div>
              <div>
                <p className="font-light mt-1">Appointments</p>
                <p className="font-bold">{appointments.totalAppointments ?? 0}</p>
              </div>
            </div>
          </div>

          <div className=" bg-cosmic-color-yellow-color  col-span-2 min-h-fit md:h-[120px]  w-full  rounded-md">
            <div className="w-full flex justify-end p-2">
              <img src={menuIcon} />
            </div>

            <div className="w-full flex flex-wrap justify-center text-white gap-4">

              <div className="w-fit bg-white rounded-full p-1 ms-8">

                <img alt="appointment" src={totalPatientsIcon} />
              </div>

              <div>

                <p className="font-light mt-1">Total Patients</p>

                <p className="font-bold">{appointments.totalAppointments ?? 0}</p>
              </div>
            </div>


          </div>

          <div className=" bg-cosmic-color-green-color min-h-fit md:h-[120px] w-full rounded-md col-span-2 ">

            <div className="w-full flex justify-end p-2">

              <img src={menuIcon} />

            </div>

            <div className="w-full flex flex-wrap place-items-center justify-center text-white gap-4">

              <div className="w-fit bg-white rounded-full p-1 ms-8">

                <img alt="appointment" src={totalEarningsIcon} />

              </div>

              <div>

                <p className="font-light mt-1">Total Earnings</p>

                <p className="font-bold">₦ {doctorWallet.wallet?.amount ? formatAmout(doctorWallet.wallet?.amount!!) : 0}</p>

              </div>
            </div>

          </div>

        </div>

        <div className="w-full grid grid-cols-5 gap-2 p-2">
          <div className="col-span-5 md:col-span-3">
            <DoctorChartGraph />

          </div>
          <div className="col-span-5 md:col-span-2">
            <DoctorTotalEarningGraph />
          </div>
        </div>


        <div className="p-2 h-[400px]  overflow-x-hidden overflow-y-auto  ">
          <div className={` ${(appointments.appointments && appointments.totalAppointments > 0) ? 'hidden' : 'block'} w-full h-full flex justify-center place-items-center`}>
            <p>No appointment yet</p>
          </div>
          {
            appointments.appointments && appointments.totalAppointments > 0 && <DoctorTable onAppointmentClicked={(data: any, appointmentId: string) => {
              setPatientWhoBookedAppopintmentDetails(data)
              setAppointmentId(appointmentId)
              setToggleStartSession(true)

            }} />
          }
        </div>

      </div>




      <div className={`${toggleStartSesion ? 'block' : 'hidden'}  z-[1000] absolute bottom-0 w-full p-3  flex bg-white bg-opacity-80`}>
        <p className='font-bold max-w-[50%]  mt-2'>You are about to start  this appoinment session click continue to start</p>

        <div className='absolute bottom-0 w-full right-8   flex justify-end place-items-end p-2 gap-5 cursor-default'>
          <p className='bg-red-600 p-2 text-white rounded-md mt-8 ' onClick={() => {
             setToggleStartSession(false)
          }}>cancel</p>
          <p className='bg-cosmic-primary-color p-2 text-white rounded-md' onClick={() => {

            if (appointmentIcon && patientWhoBookedAppopintmentDetails) {
              dispatch(updateAppointmentSession({ appointmentSessionStarted: true }))


              userSocket.socket?.emit('appointmentSessionStarted', {

                doctorID: user.data?._id, patientID: patientWhoBookedAppopintmentDetails?.details.patientId, startTime: Date.now(), caller: 'doctor', appointmentId


              })
              navigate('/doctor/messages', {
                state: patientWhoBookedAppopintmentDetails
              })
            }
          }}>continue</p>
        </div>
        <div>

        </div>
      </div>

    </div>
  );
};

export default DoctorHomeBody;
