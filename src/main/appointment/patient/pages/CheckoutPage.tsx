import { Navigate, useLocation, useNavigate } from "react-router-dom"

import editIcon from '../../../../assets/icons/cosmic-edit-button.svg'
import cal from '../../../../assets/icons/home/cosmic-home-calander.svg'
import { PaystackButton } from 'react-paystack'
import { book_appointment } from "../../service"
import { useSelector } from "react-redux"
import { RootReducer } from "../../../store/initStore"


//import verifiedThick from '../../../../assets/icons/home/verifiedThick.svg'
//import ratingStar from '../../../../assets/icons/star-icon.svg'
import PaymentSuccessCard from "../../../home/component/patient/SuccessModal"
import { useState } from "react"

const CheckoutPage = () => {
    const navigate = useNavigate()
    const { state } = useLocation()

     if (!state) {
    
            return <Navigate to={'/patient/find-a-specialist'} />
    
        }
    const user = useSelector((state: RootReducer) => state.user)



    const total = Number(state?.pricing.replace(',', '')) + 1000

    const [paymentSuccessful, setPaymentSuccessful] = useState<boolean>()

    return <div className="relative  bg-[#F5F5F5] bg-opacity-50  cursor-default overflow-auto  font-poppins w-full md:p-5 overflow-x-hidden h-full overflow-y-auto pb-8 mb-20"
    >
        <div className=" place-items-center gap-3 hidden md:flex " onClick={() => {
            navigate(-1)
        }}>
            <i className="fa fa-angle-left fa-xl" />
            <p>back</p>
        </div>


        <div className="relative w-full  flex flex-col place-items-center    mt-6 ">

            {/*<AppointmentDoctorDescriptionCard address="Lekki, Lagos Nigeria."
                clinic="Chastain Park Hospital"
                doctorSpecialization={`${state?.department} `}
                doctorImage={state?.doctorImage ?? "/"}
                doctorName={`Dr ${state?.doctorName} `} department="" />*/}


            <div className="bg-white w-full h-fit flex  relative  ">

                <div className=" w-[180px] h-[150px]  relative border rounded-md">

                    {/**<p className="bg-cosmic-primary-color absolute text-white  rounded-br-md font-light p-1 ">Top</p> */}
                    <img className="bg-green-500 object-cover h-full w-full" src={state?.doctorImage ?? "/"} />
                </div>


                <div className="w-full flex flex-col gap-4 md:ms-4 relative">
                    <div className='flex  place-items-center mt-2'>
                        <p className="font-bold text-[14px]  "> {`Dr ${state?.doctorName} `}</p>
                       
                       {/**
                        *  <img className=' h-[24px] ' src={'/'} />
                        */}

                    </div>

                    <div className='absolute mt-2 right-2  text-[14px]  flex md:ustify-center  place-items-center gap-2'>
                        {
                            /**
                             * <img className="w-[24px] h-[24px]" src={ratingStar} alt='ratings' />
                        <p className='text-cosmic-silver-color '>4.5</p>
                             */
                        }
                    </div>


                    <p className="font-extralight"> {state?.department}</p>







                </div>
            </div>

        </div>



        <div className="w-full mt-6">
            <div className="w-full relative flex">
                <p className="font-bold">Schedule Details</p>
                <div className="absolute right-3 flex gap-2" onClick={() => {
                    navigate(-1)
                }}>
                    
                    <img src={editIcon} alt="edit-icon" className="w-[20px]" />
                    <p className="text-cosmic-primary-color">Edit</p>
                </div>
            </div>

            <div className="w-full flex gap-5 mt-5 bg-white shadow shadow-black  p-1 relative">

                <div className="bg-cosmic-light-color-call p-1">
                    <img alt="calender" src={cal} />
                </div>

                <div className="text-[12px] md:text-[14px]">
                    <p className="font-bold">{state?.appointmentmentDetails.appointmentType} Appointment</p>
                    <p className="font-light mt-2">{state?.udpatedDate??state?.appointmentmentDetails.date}, {state?.appointmentmentDetails.time}</p>
                </div>


            </div>

        </div>


        <div className="w-full mt-6">

            <p className="font-bold">Total Payment</p>

            <div className="w-full mt-2 border shadow shadow-black bg-white">
                <div className="w-full relative p-2 flex ">
                    <p className="font-light">Consultation Fee</p>
                    <p className="absolute top-2 right-8 decoration-cosmic-primary-color font-bold min-w-[90px] text-end">N {`${new Intl.NumberFormat().format(state?.pricing)} `}</p>
                </div>

                <div className="w-full relative p-2 flex  ">
                    <p className="font-light">Service fee</p>
                    <p className="absolute top-2 right-8 decoration-cosmic-primary-color font-bold min-w-[90px] text-end">N {new Intl.NumberFormat().format(1000)}</p>
                </div>

                <div className="w-full relative p-2 flex  ">
                    <p className="font-light">Vat</p>
                    <p className="absolute top-2 right-8 decoration-cosmic-primary-color font-bold min-w-[90px] text-end">N {new Intl.NumberFormat().format(total)} </p>
                </div>

                <div className="w-full relative p-2 flex mt-2  ">
                    <p className="font-light">Total</p>
                    <p className="absolute top-2 right-8 decoration-cosmic-primary-color font-bold min-w-[90px] text-end">N{`${new Intl.NumberFormat().format(total)}  `}</p>
                </div>
            </div>

        </div>

        <div className="mt-3 bg-cosmic-light-color-call p-6 flex justify-center flex-col place-items-center text-white">
            <p className="text-white">Total</p>
            <p className=" mt-2 decoration-cosmic-primary-color font-bold">N {`${new Intl.NumberFormat().format(total)} `}</p>
        </div>




        <div className="mb-10 ">
            <PaystackButton className="w-full" amount={Number(total) * 100} email={user.data?.email!!} publicKey={'pk_live_395226088f830b6c1369b497d49864128c7992dd'} onSuccess={async (e: {
                reference: string, status: string
            }) => {


                if (e.reference) {
                     await book_appointment(user.data?.token!!, {
                        doctorId: state?.doctorId, date: state?.appointmentmentDetails.date, time: state?.appointmentmentDetails.time, appointmentType: state?.appointmentmentDetails.appointmentType, appointmentStatus: 'booked', payment: {
                            cardType: 'individual',
                            consultationFee: (Number(total) * 100).toString(),
                            paymentReference: e.reference,
                            total: (Number(total) * 100).toString(),
                            vat: (Number(total) * 100).toString(),

                        },
                        sessionDuration: 15
                    })
                    setPaymentSuccessful(true)
                  

                }

            }}>
                <div className="mt-3 flex justify-center flex-col place-items-center">
                    <p className="bg-cosmic-primary-color w-[200px] p-2 m-2 text-center text-white border rounded-md font-light">Continue</p>
                </div>
            </PaystackButton>
        </div>

        {
           paymentSuccessful &&  <div className={`  absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-50  flex place-items-center md:ps-[20%]`}>

                <PaymentSuccessCard onClose={()=>{
                    setPaymentSuccessful(false)
                }} />
            </div>
        }

    </div>
}


export default CheckoutPage
