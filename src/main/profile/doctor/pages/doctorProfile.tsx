import DoctorHomeNavBar from "../../../home/component/doctor/DoctorHomeNavBar"
import DoctorNavBarMobile from "../../../home/component/doctor/DoctorNavBarMobile"
import qrCode from '../../../../assets/images/qr-code.png'
import calender from '../../../../assets/images/Calendar.png'
import users from '../../../../assets/images/Users.png'

import wallet from '../../../../assets/images/Coin Wallet.png'
import patientIcon from '../../../../assets/images/patientsIcon.png'
import appointmentIcon from '../../../../assets/images/appointmentsIcon.png'
import certification from '../../../../assets/images/smallCert.png'




import { useSelector } from "react-redux"
import { RootReducer } from "../../../store/initStore"
import { Navigate, useNavigate } from "react-router-dom"



const DoctorProfile = () => {

  const navigate = useNavigate()



  const user = useSelector((state: RootReducer) => state.user)

  const appointment = useSelector((state: RootReducer) => state.appointments)

  const doctorWallet = useSelector((state: RootReducer) => state.doctorWallet)

  // const navigate = useNavigate()

  if (!user.isAunthenticated) {

    return <Navigate to={'/'} />
  }


  const formatAmout = (amount: number) => {
    if (amount) {
      amount = amount / 100
      return new Intl.NumberFormat().format(amount)
    }

    return 0
  }


  return (
    <div className="overflow-y-scroll">
      <DoctorHomeNavBar title="My Profile" />
      <DoctorNavBarMobile title="My Profile" />
      <div className="justify-center items-center flex flex-col ">

        <div className=" hidden md:flex w-full m-5 ps-8 pt-4  place-items-center gap-2 cursor-default hover:text-cosmic-primary-color" onClick={() => {

          navigate(-1)
        }}>
          <i className="fa fa-angle-left fa-2xl " />
          <p>Go Back</p>
        </div>
        {/* INFO SECTION */}

        <div className="flex bg-white  flex-col items-center justify-center  rounded-lg p-10 m-6 shadow-lg w-[90%]">

          <img src={qrCode} alt='qrcode' className="w-8 self-end" />

          <div className="w-full  flex flex-col justify-center items-center mt-4 gap-6">


            <div className="overflow-hidden flex justify-center items-center rounded-[50%] w-[150px] h-[150px]">
              <img src={user.data?.profile?.profilePicture ?? '/'} alt="Doctor" className=" h-full  object-cover" />
            </div>


            <div className="flex justify-center items-center flex-col">
              <p className="font-extrabold text-cosmic-primary-color">{user.data?.lastName?.concat(' ').concat(user.data.fullName!!)}</p>
              <p className="text-sm">{user.data?.profile?.department}</p>
              {
                /*<div className="flex justify-center items-center w-full gap-1">
                <img src={locationImg} alt="Location" className="w-4 h-4" />
                <p>Lagos, Nigeria</p>
              </div>*/ }
            </div>
            <div className="w-full  flex flex-col justify-center items-center gap-10">


              <div className="w-[100%] flex gap-5 md:gap-20 justify-center items-center mt-5">

                <div className="flex flex-col justify-center items-center">
                  <img src={calender} alt="calender" className="w-8 h-8" />
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-bold">{appointment.totalAppointments ?? 0}</p>
                    <p className="text-sm">Appointments</p>
                  </div>

                </div>
                <div className="flex flex-col justify-center items-center">
                  <img src={users} alt="users" className="w-8 h-8" />
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-bold">{appointment.totalAppointments ?? 0}</p>
                    <p className="text-sm">Patients</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img src={wallet} alt="wallet" className="w-8 h-8" />
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-bold">N{doctorWallet.wallet?.amount ? formatAmout(doctorWallet.wallet?.amount!!) : 0}</p>
                    <p className="text-sm">Earnings</p>
                  </div>
                </div>
              </div>
              <button type="button" className="bg-cosmic-primary-color text-white font-bold rounded-md p-2 w-[150px]" onClick={() => {
                navigate('/doctor/edit-profile')
              }}>Edit Profile</button>
            </div>
          </div>
        </div>

        

        {/* SETINGS SECTION */}
        <div className="flex w-full flex-col justify-center items-center h-full mb-8">
          <div className="flex-col w-[90%] h-full flex">
            <div className="flex items-center justify-start rounded-md shadow-lg p-2">
              <img src={patientIcon} alt="Patients" className="w-12 h-12 border-r-2 p-2" />
              <p className="font-bold p-2">Patients</p>
            </div>
            <div className="flex items-center justify-start rounded-md shadow-lg p-2" onClick={() => {
              navigate('/doctor/appointments')
            }}>
              <img src={appointmentIcon} alt="Appointments" className="w-12 h-12 border-r-2 p-2" />
              <p className="font-bold p-2">Appointments</p>
            </div>
            <div className="flex items-center justify-start rounded-md shadow-lg p-2" onClick={() => { navigate('/doctor/certifications') }}>
              <img src={certification} alt="Certifications" className="w-12 h-12 border-r-2 p-2" />
              <p className="font-bold p-2">Certifications</p>
            </div>
          </div>
          <div className="flex-col w-[90%] h-full flex">
           


           
          </div>

        </div>
      </div>
    </div>
  )
}

export default DoctorProfile