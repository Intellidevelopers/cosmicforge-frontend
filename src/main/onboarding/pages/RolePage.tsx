import React from "react";
import { Link } from "react-router-dom";
import IconContainer from "../../generalComponents/IconContainer";
import backIcon from "../../../assets/icons/Forward.png";
import doctorImage from "../../../assets/images/doctor-role.png";
import patientImage from "../../../assets/images/patient-role.png"
import { useState } from "react";

const RolePage:React.FC = () => {
    const [ accountRole, setAccountRole ] = useState('none');
    const [ isDoctorSelected, setIsDoctorSelected ] = useState(false);
    const [ isPatientSelected, setIsPatientSelected ] = useState(false);

    function handlePatientButton() {
        if (!isPatientSelected) {
            setAccountRole('patient');
            setIsDoctorSelected(false);
        } else {
            setAccountRole('none');
        }
        setIsPatientSelected(!isPatientSelected);
    }

    function handleDoctorButton() {
        if (!isDoctorSelected) {
            setAccountRole('doctor');
            setIsPatientSelected(false);
        } else {
            setAccountRole('none');
        }
        setIsDoctorSelected(!isDoctorSelected);
    }

    return (
        <div className="bg-gray-100 w-screen h-screen flex flex-col justify-center items-center">
            <Link className="md:flex hidden absolute top-[7%] flex-row gap-2 items-center font-bold md:w-[80%] w-[95%] h-fit" to={'/'}>
                <IconContainer image={backIcon} classes='rotate-180' mobileSize="20" deskSize="30"/>
                <span>Go back</span>
            </Link>
            <div className="md:w-[80%] md:h-fit h-screen md:text-center text-left flex flex-col md:pb-0 pb-[10%] justify-between md:justify-around md:pt-0 pt-[30px]  gap-[5px] md:px-[15%] px-[3%] w-[100%]">
                <div className="flex flex-col">
                    <span className="text-[23px] font-extrabold">Select Account Type</span>
                    <span>By selecting your account type, you have automatically set your user role</span>
                    <div className="h-[350px] w-[100%] flex flex-row justify-between items-center">
                        <button onClick={handleDoctorButton} className={`${isDoctorSelected?'border-[2px] border-[#272EA7] ':''}md:h-[300px] h-[250px] w-[45%] hover:scale-[102%] flex flex-col justify-between items-center bg-white rounded-[15px]`}>
                            <div className="md:h-[220px] h-[180px] w-[60%]">
                                <img src={doctorImage} className="h-[100%] w-[100%]" alt='doctor role'/>
                            </div>
                            <span className="font-bold text-[16px] mb-[10px]">Doctor/ Specialist</span>
                        </button>
                        <button onClick={handlePatientButton} className={`${isPatientSelected?'border-[2px] border-[#272EA7] ':''}md:h-[300px] h-[250px] w-[45%] hover:scale-[102%] flex flex-col justify-between items-center bg-white rounded-[15px]`}>
                            <div className="md:h-[220px] h-[180px] md:w-[70%] w-[80%]">
                                <img src={patientImage} className="h-[100%] w-[100%]" alt='doctor role'/>
                            </div>
                            <span className="font-bold text-[16px] mb-[10px]">Patient</span>
                        </button>
                        
                    </div>
                </div>
                { !(isDoctorSelected || isPatientSelected) ? (
                    <div className={`h-[48px] w-[100%] bg-[#272EA7]/70 text-white font-bold flex flex-row justify-center items-center rounded-[5px]`} >
                        continue
                    </div>
                ): (
                    <Link className="h-[48px] w-[100%] bg-[#272EA7] hover:bg-[#272EA7]/80 text-white font-bold flex flex-row justify-center items-center rounded-[5px]" to={'/signup'}>
                        Continue
                    </Link> 
                )}
              
              
            </div>
        </div>
    )
}

export default RolePage;