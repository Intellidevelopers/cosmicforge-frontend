import DoctorHomeNavBar from "../../../home/component/doctor/DoctorHomeNavBar"
import DoctorNavBarMobile from "../../../home/component/doctor/DoctorNavBarMobile"
import qrCode from '../../../../assets/images/qr-code.png'
import calender from '../../../../assets/images/Calendar.png'
import users from '../../../../assets/images/Users.png'
import bell from '../../../../assets/icons/Bell.png'
import wallet from '../../../../assets/images/Coin Wallet.png'
import patientIcon from '../../../../assets/images/patientsIcon.png'
import appointmentIcon from '../../../../assets/images/appointmentsIcon.png'
import certification from '../../../../assets/images/smallCert.png'
import deleteIcon from '../../../../assets/images/deleteIconAccount.png'
import { settings } from "../utils/settings"


import { useState } from "react"
import { useSelector } from "react-redux"
import { RootReducer } from "../../../store/initStore"
import { Navigate, useNavigate } from "react-router-dom"



const DoctorProfile = () => {

  const navigate = useNavigate()

  const [toggleNotifs, setToggleNotifs] = useState(false)

  const user = useSelector((state:RootReducer)=>state.user)

  const appointment = useSelector((state:RootReducer)=>state.appointments)

  const doctorWallet= useSelector((state:RootReducer)=>state.doctorWallet)

  // const navigate = useNavigate()

   if(!user.isAunthenticated){
        
      return  <Navigate to={'/'} />
   }


   const formatAmout = (amount:number)=>{
    if(amount){
      amount = amount/100
     return new Intl.NumberFormat().format(amount)
    }
 
    return 0
  }
 

  return (
    <div className="overflow-y-scroll">
      <DoctorHomeNavBar title="My Profile" />
      <DoctorNavBarMobile title="My Profile" />
      <div className="justify-center items-center flex flex-col ">
        {/* INFO SECTION */}

        <div className="flex flex-col items-center justify-center  rounded-lg p-4 m-4 shadow-lg md:w-fit">
          <img src={qrCode} alt='qrcode' className="w-8 self-end" />
          <div className="flex flex-col justify-center items-center">
            <div className="overflow-hidden flex justify-center items-center rounded-[50%] w-[150px] h-[150px]">
              <img src={user.data?.profile?.profilePicture??'/'} alt="Doctor" className=" h-full  object-cover" />
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
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="flex gap-8 justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <img src={calender} alt="calender" className="w-8 h-8" />
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-bold">{appointment.totalAppointments??0}</p>
                    <p className="text-sm">Appointments</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img src={users} alt="users" className="w-8 h-8" />
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-bold">{appointment.totalAppointments??0}</p>
                    <p className="text-sm">Patients</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img src={wallet} alt="wallet" className="w-8 h-8" />
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-bold">N{ doctorWallet.wallet?.amount?formatAmout(doctorWallet.wallet?.amount!!):0}</p>
                    <p className="text-sm">Earnings</p>
                  </div>
                </div>
              </div>
              <button type="button" className="bg-cosmic-primary-color text-white font-bold rounded-md p-2 w-[150px]" onClick={()=>{
                navigate('/doctor/edit-profile')
              }}>Edit Profile</button>
            </div>
          </div>
        </div>

        {/* SETINGS SECTION */}
        <div className="flex w-full flex-col justify-center items-center h-full">
          <div className="flex-col w-[90%] h-full flex">
              <div className="flex items-center justify-start rounded-md shadow-lg p-2">
                <img src={patientIcon} alt="Patients" className="w-12 h-12 border-r-2 p-2" />
                <p className="font-bold p-2">Patients</p>
              </div>
              <div className="flex items-center justify-start rounded-md shadow-lg p-2" onClick={()=>{
                 navigate('/doctor/appointments')
              }}>
                <img src={appointmentIcon} alt="Appointments" className="w-12 h-12 border-r-2 p-2" />
                <p className="font-bold p-2">Appointments</p>
              </div>
              <div className="flex items-center justify-start rounded-md shadow-lg p-2" onClick={()=>{navigate('/doctor/certifications')}}>
                <img src={certification} alt="Certifications" className="w-12 h-12 border-r-2 p-2" />
                <p className="font-bold p-2">Certifications</p>
              </div>
              </div>
          <div className="flex-col w-[90%] h-full flex">
            <div className="flex justify-between items-center p-2 rounded-md shadow-lg ">
              <div className="flex items-center justify-start ">
                <img src={bell} alt="bells" className="w-8 h-8 " />
                <p className="font-bold p-2">Notification Toggle</p>
              </div>
              <div className={"rounded-full border-2  min-w-8 h-4  " + (toggleNotifs && 'bg-black')}
                onClick={() => { setToggleNotifs(!toggleNotifs) }}
              >
                <div className={`rounded-[50%]  w-3 h-3 ${toggleNotifs ? 'translate-x-[100%] bg-white' : 'bg-black'}`}></div>
              </div>
            </div>


            {settings.map((setting, index) => (
              <div key={index} className="flex justify-between items-center p-2 rounded-md shadow-lg cursor-default " onClick={()=>{
               
                navigate(setting.path)
              
              }}>
                <div className="flex items-center justify-start " >
                  <img src={setting.image} alt="Certifications" className="w-8 h-8" />
                  <p className={`font-bold p-2  ${setting.name === 'Log Out' && 'text-red-500'}`}>{setting.name}</p>
                </div>
                <i className={`fas fa-angle-right ${setting.name === 'Log Out' && 'text-red-500'}`}></i>
              </div>))}

            <div className="flex items-center justify-start rounded-md shadow-lg p-2">
              <img src={deleteIcon} alt="Delete My Account" className="w-8 h-8 " />
              <p className="font-bold p-2 text-red-600 mr-4">Delete My Account</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default DoctorProfile