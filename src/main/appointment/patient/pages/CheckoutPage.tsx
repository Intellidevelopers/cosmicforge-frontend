import { useLocation, useNavigate } from "react-router-dom"
import AppointmentDoctorDescriptionCard from "../component/AppointmentDoctorDescriptionCard"
import editIcon from '../../../../assets/icons/cosmic-edit-button.svg'
import cal from '../../../../assets/icons/home/cosmic-home-calander.svg'
import { PaystackButton } from 'react-paystack'
import { book_appointment } from "../../service"
import { useSelector } from "react-redux"
import { RootReducer } from "../../../store/initStore"

const CheckoutPage = () => {
    const navigate = useNavigate()
    const { state } = useLocation()
    const user = useSelector((state: RootReducer) => state.user)

    const amount: number = state?.pricing.replace(',', '')
    return <div className="relative  bg-[#F5F5F5] bg-opacity-50  cursor-default overflow-auto  font-poppins w-full md:p-5 overflow-x-hidden h-full overflow-y-auto pb-8"
    >
        <div className=" place-items-center gap-3 hidden md:flex " onClick={() => {
            navigate(-1)
        }}>
            <i className="fa fa-angle-left fa-xl" />
            <p>back</p>
        </div>


        <div className="relative w-full  flex flex-col place-items-center    mt-6 ">
            <AppointmentDoctorDescriptionCard address="Lekki, Lagos Nigeria."
                clinic="Chastain Park Hospital"
                doctorSpecialization={`${state?.department} `}
                doctorImage={state?.doctorImage ?? "/"}
                doctorName={`Dr ${state?.doctorName} `} department="" />
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
                    <p className="font-light mt-2">{state?.appointmentmentDetails.date}, {state?.appointmentmentDetails.time}</p>
                </div>


            </div>

        </div>


        <div className="w-full mt-6">

            <p className="font-bold">Total Payment</p>

            <div className="w-full mt-2 border shadow shadow-black bg-white">
                <div className="w-full relative p-2 flex ">
                    <p className="font-light">Consultation Fee</p>
                    <p className="absolute top-2 right-8 decoration-cosmic-primary-color font-bold">N{`${state?.pricing} `}</p>
                </div>

                <div className="w-full relative p-2 flex  ">
                    <p className="font-light">Card Fee(Family)</p>
                    <p className="absolute top-2 right-8 decoration-cosmic-primary-color font-bold">N00.00</p>
                </div>

                <div className="w-full relative p-2 flex  ">
                    <p className="font-light">Vat</p>
                    <p className="absolute top-2 right-8 decoration-cosmic-primary-color font-bold">N00.00</p>
                </div>

                <div className="w-full relative p-2 flex mt-2  ">
                    <p className="font-light">Total</p>
                    <p className="absolute top-2 right-8 decoration-cosmic-primary-color font-bold">N{`${state?.pricing} `}</p>
                </div>
            </div>

        </div>

        <div className="mt-3 bg-cosmic-light-color-call p-6 flex justify-center flex-col place-items-center text-white">
            <p className="text-white">Total</p>
            <p className=" mt-2 decoration-cosmic-primary-color font-bold">N {`${new Intl.NumberFormat().format(2000000000000)} `}</p>
        </div>





        <PaystackButton className="w-full" amount={Number(amount) * 100} email="ben@gmail.com" publicKey="pk_test_5064b4c81898b5c11f082d5fbabe15b2d00bfb07" onSuccess={async (e: {
            reference: string, status: string
        }) => {

            
            if (e.reference) {

               await book_appointment(user.data?.token!!, {
                    doctorId: state?.doctorId, date: state?.appointmentmentDetails.date, time: state?.appointmentmentDetails.time, appointmentType: state?.appointmentmentDetails.appointmentType, appointmentStatus: 'booked', payment: {
                        cardType: 'individual',
                        consultationFee: (Number(amount) * 100).toString(),
                        paymentReference: e.reference,
                        total: (Number(amount) * 100).toString(),
                        vat: ''
                    }
                })

               
            }
            alert(JSON.stringify(e))
        }}>
            <div className="mt-3 flex justify-center flex-col place-items-center">
                <p className="bg-cosmic-primary-color w-[200px] p-2 m-2 text-center text-white border rounded-md font-light">Continue</p>
            </div>
        </PaystackButton>
    </div>
}


export default CheckoutPage