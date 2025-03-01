import { useNavigate } from "react-router-dom"
import AppointmentDoctorDescriptionCard from "../component/AppointmentDoctorDescriptionCard"
import doctorImage from '../../../../assets/images/doctor-image.jpeg'

const CheckoutPage = () => {
    const navigate = useNavigate()
    return <div className="relative bg-[#F5F5F5] bg-opacity-50  cursor-default overflow-auto  font-poppins w-full p-5 overflow-x-hidden"
    >
        <div className=" place-items-center gap-3 hidden md:flex " onClick={() => {
            navigate(-1)
        }}>
            <i className="fa fa-angle-left fa-xl" />
            <p>back</p>
        </div>


        <div className="relative w-full  flex flex-col place-items-center  p-3  mt-6 ">
           <AppointmentDoctorDescriptionCard address="Lekki, Lagos Nigeria."
            clinic="Chastain Park Hospital"
            doctorSpecialization='General Medicine'
            doctorImage = {doctorImage}
            doctorName='Dr Josh Olawale '/>
            </div>
        </div>
}


export  default CheckoutPage