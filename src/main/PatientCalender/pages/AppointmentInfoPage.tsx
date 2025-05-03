import { useLocation, useNavigate } from "react-router-dom"
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar"
import HomeNavBar from "../../home/component/patient/HomeNavBar"
import HomeSideBar from "../../home/component/patient/HomeSideBar.ls"
import HomeSideBarMobile from "../../home/component/patient/HomeSideBarMobile"


import callIcon from '../../../assets/icons/call-button.svg'
import messageButton from '../../../assets/icons/message-icon.svg'
import appointmentButton from '../../../assets/icons/appointment-icon.svg'
import verifiedThick from '../../../assets/icons/home/verifiedThick.svg'
import ratingStar from '../../../assets/icons/star-icon.svg'
import { useSelector } from "react-redux"
import { RootReducer } from "../../store/initStore"
const AppointmentInfoPage = () => {
    const navigate = useNavigate()


    const { state } = useLocation()

    const user = useSelector((state: RootReducer) => state.user)

    const details = state as {
        docImage: string,
        dateInFull: string,
        userName: string,
        paymentStatus: string
    }

    return <div className="w-full font-poppins overflow-hidden flex">


        <HomeSideBarMobile />

        <div className="hidden md:block w-[25%]">
            <HomeSideBar />
        </div>

        <div className="w-full">

            <HomeNavBar title="Appointment Info" onSearchFired={() => {
                alert('ddf')
            }} />
            <HomeMobileNavBar title="Appointment Info" onSearchFired={() => { }} />

            <div className=" h-[600px]  relative bg-[#F5F5F5] bg-opacity-50  cursor-default overflow-y-auto   font-poppins w-full p-3  ">

                <div className=" place-items-center gap-3 hidden md:flex m-8 " onClick={() => {
                    navigate(-1)
                }}>
                    <i className="fa fa-angle-left fa-xl" />
                    <p>back</p>
                </div>



                <div className="w-full p-8">
                    <div className="w-full   p-3 flex gap-2 relative bg-white rounded-sm shadow-black shadow-sm ">
                        <img className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full' alt='card-profile' src={user.data?.profile?.profilePicture} />
                        <div className='w-full   flex flex-col justify-center gap-1 relative'>
                            <p className="w-full text-[14px] md:text-[16px] font-bold">{user.data?.lastName}{" has an Appointment"}</p>


                        </div>
                    </div>
                </div>


                <div className="w-full ps-8 pe-8">

                    <div className="bg-white w-full h-fit flex  relative shadow-black shadow-sm  ">

                        <div className=" w-[180px] h-[150px]  relative border border-cosmic-color-border-color rounded-md">

                            <p className="bg-cosmic-primary-color absolute text-white  rounded-br-md font-light p-1 ">Top</p>
                            <img className="bg-green-500 object-cover h-full w-full" src={details.docImage} />
                        </div>




                        <div className="w-full flex flex-col gap-4 md:ms-4 relative">
                            <div className='flex  place-items-center mt-2'>
                                <p className="font-bold text-[14px]  "> {"doctorName"}</p>
                                <img className=' h-[24px] ' src={verifiedThick} />

                            </div>
                            <div className='absolute mt-2 right-2  text-[14px]  flex md:ustify-center  place-items-center gap-2'>
                                <img className="w-[24px] h-[24px]" src={ratingStar} alt='ratings' />
                                <p className='text-cosmic-silver-color '>4.5</p>
                            </div>
                            <p className="font-extralight"> {''}</p>
                            {/* <p className="font-extralight"> {"clinic"}</p>
                        <p className="font-extralight">  {"address"}</p>
*/}



                            <div className=" relative md:absolute bottom-5 right-5 inline-flex  justify-end mt-2    flex-row gap-3">

                                <div className="w-[40px] h-[40px] bg-cosmic-color-border-color hover:bg-cosmic-primary-color rounded-md flex justify-center place-items-center" onClick={() => {

                                }}>
                                    <img src={callIcon} alt="call button" />
                                </div>

                                <div className="w-[40px] h-[40px] bg-cosmic-color-border-color hover:bg-cosmic-primary-color rounded-md flex justify-center place-items-center">
                                    <img src={messageButton} alt="mesage button" />
                                </div>

                                <div className="w-[40px] h-[40px] bg-cosmic-color-border-color hover:bg-cosmic-primary-color rounded-md flex justify-center place-items-center" aria-disabled onClick={() => {

                                }}>
                                    <img src={appointmentButton} alt="appointment button" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="w-full p-8">
                    <div className="w-full   p-3 flex gap-2 relative bg-white rounded-sm shadow-black shadow-sm ">
                        <div className='w-full   flex flex-col justify-center gap-1 relative'>
                            <p className="w-full font-light text-[14px] md:text-[16px] ">Time:<span>{details.dateInFull.split(',')[1]}</span></p>

                            <p className="w-full text-[14px] md:text-[16px] font-light">Date:<span>{details.dateInFull.split(',')[0]}</span></p>

                        </div>
                    </div>
                </div>

                <div className="w-full mt-3 h-[200px] flex justify-center place-items-center">

                    <div className="bg-green-600 bg-opacity-20 p-3">
                        <p className=" text-cosmic-color-green-color">{(details.paymentStatus && details.paymentStatus === "success") ? 'Confirmed' : details.paymentStatus}</p>
                    </div>

                </div>


                <div>
                    <div className=" text-white flex justify-center gap-8">
                        <div className="w-[300px] bg-cosmic-primary-color text-[12px] md:text-[14px] p-2 rounded-md text-center" onClick={() => {
                            //navigate('/patient/appointment/book')
                        }}>
                            Reschedule Appointment
                        </div>


                        <div className="w-[300px] bg-cosmic-light-color-call text-[12px] md:text-[14px] p-2 rounded-md text-center" >
                            Cancel Appointment
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
}


export default AppointmentInfoPage