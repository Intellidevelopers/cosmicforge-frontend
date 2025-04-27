import { useNavigate } from "react-router-dom"
import DoctorHomeNavBar from "../../../home/component/doctor/DoctorHomeNavBar"
import DoctorNavBarMobile from "../../../home/component/doctor/DoctorNavBarMobile"

const Certifications = () => {
    const navigate = useNavigate()
  return (
    <div>
        <DoctorHomeNavBar title="Certifications" />
        <DoctorNavBarMobile title="Certifications" />
        <div className="flex flex-col h-full p-2 justify-start items-center w-full">
            <p className="font-bold p-4 shadow-md rounded-md w-[95%]" onClick={()=>{navigate('/doctor/liscence-upload')}}>Liscences </p>
            <p className="font-bold p-4 shadow-md rounded-md w-[95%]" onClick={()=>{navigate('/doctor/certification-upload')}}>Certifications </p>
        </div>
    </div>
  )
}

export default Certifications