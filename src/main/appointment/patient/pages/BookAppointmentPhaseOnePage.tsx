import { useNavigate } from "react-router-dom"
import docImage from '../../../../assets/images/doctor-image.jpeg'
import AppointmentCalender from "./AppointmentCalender"
import Loader from "../../../generalComponents/Loader"
import { useState } from "react"

const BookAppointmentPhaseOnePage = () => {

    const navigate = useNavigate()
    const [loading,] = useState<boolean>(false)
    const [errorMesage,] = useState<string>('')

    return <div className="relative bg-[#F5F5F5] bg-opacity-50  cursor-default overflow-auto  font-poppins w-full p-5 overflow-x-hidden"
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
  " src={docImage} style={{ objectPosition: 'top', objectFit: 'cover' }} />

            </div>

            <div className="mt-2">
                <p>Dr Josh Olawale</p>
                <p className="font-extralight">General Medicine</p>


            </div>



        </div>

        <p className="font-bold">Select available Date and Time</p>
        <p className="text-center mt-2 text-cosmic-primary-color">Date</p>

        <div className="w-full">
            <AppointmentCalender />
        </div>

        <div className="w-full">
            <p className="text-center  text-cosmic-primary-color mt-8">Time</p>

            <div className="w-full flex justify-center flex-wrap gap-10 mt-8 ">

                <p className="basis-[10%] text-cosmic-primary-color">07:00am</p>
                <p className="basis-[10%] text-cosmic-primary-color">08:00am</p>
                <p className="basis-[10%] text-cosmic-primary-color">09:00am</p>
                <p className="basis-[10%] text-cosmic-primary-color">07:00am</p>
                <p className="basis-[10%] text-cosmic-primary-color">10:00am</p>
                <p className="basis-[10%] text-cosmic-primary-color">1:00am</p>
                <p className="basis-[10%] text-cosmic-primary-color">07:00am</p>
                <p className="basis-[10%] text-cosmic-primary-color">07:00am</p>
                <p className="basis-[10%] text-cosmic-primary-color">07:00am</p>
                <p className="basis-[10%] text-cosmic-primary-color">07:00am</p>
                <p className="basis-[10%] text-cosmic-primary-color">07:00am</p>
                <p className="basis-[10%] text-cosmic-primary-color">1:00am</p>

            </div>
        </div>

        <div className="w-full mt-8">
            <p className="font-bold ">Appointment Type</p>

            <div className="w-full mt-2">
                <div className="w-full relative p-2 flex border shadow">
                    <p className="">Virtual</p>
                    <input type="checkbox" className="absolute top-4 right-8 decoration-cosmic-primary-color" />
                </div>

                <div className="w-full relative p-2 flex  border shadow">
                    <p className="">Virtual</p>
                    <input type="checkbox" className="absolute top-4 right-8 decoration-cosmic-primary-color" />
                </div>
            </div>
        </div>


        <div className="w-full mt-8">
            <p className="font-bold ">Select Patient</p>

            <div className="w-full mt-2">
                <div className="w-full relative p-2 flex border shadow">
                    <p className="">Grace</p>
                    <input type="checkbox" className="absolute top-4 right-8 decoration-cosmic-primary-color" />
                </div>

                <div className="w-full relative p-2 flex  border shadow">
                    <p className="">Emmanuel</p>
                    <input type="checkbox" className="absolute top-4 right-8 decoration-cosmic-primary-color" />
                </div>

                <div className="w-full relative p-2 flex  border shadow">
                    <p className="">Kelvin</p>
                    <input type="checkbox" className="absolute top-4 right-8 decoration-cosmic-primary-color" />
                </div>

                <div className="w-full relative p-2 flex  border shadow">
                    <p className="">Devjoe</p>
                    <input type="checkbox" className="absolute top-4 right-8 decoration-cosmic-primary-color" />
                </div>
            </div>
        </div>

        <div className="w-full p-8 flex justify-center">
            <p className="bg-cosmic-primary-color p-2 text-center text-white rounded-md w-[300px]" onClick={()=>{
                navigate("/patient/appointment/checkout")
            }}>Continue</p>
        </div>


       {
         loading &&  <div className="w-full m-3 flex justify-center">
         <Loader size="50px"/>
     </div>
       }

       {
        errorMesage && <div className="w-full m-3 flex justify-center">
        <p className="text-red-600">error</p>
    </div>
       }

    </div>
}


export default BookAppointmentPhaseOnePage