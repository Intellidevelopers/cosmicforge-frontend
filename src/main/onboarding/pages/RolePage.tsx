import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo_comsic_splash.svg";
import backIcon from "../../../assets/images/introframe.jpeg";
import doctorImage from "../../../assets/images/doctor-role.png";
import patientImage from "../../../assets/images/patient-role.png";
import { useState } from "react";

const RolePage: React.FC = () => {
  const [accountRole, setAccountRole] = useState("none");
  const [isDoctorSelected, setIsDoctorSelected] = useState(false);
  const [isPatientSelected, setIsPatientSelected] = useState(false);

  const saveRole = () => {
    //place the logic to save role in local storage here
    console.log(accountRole);
  };

  function handlePatientButton() {
    if (!isPatientSelected) {
      setAccountRole("patient");
      setIsDoctorSelected(false);
    } else {
      setAccountRole("none");
    }
    setIsPatientSelected(!isPatientSelected);
    saveRole();
  }

  function handleDoctorButton() {
    if (!isDoctorSelected) {
      setAccountRole("doctor");
      setIsPatientSelected(false);
    } else {
      setAccountRole("none");
    }
    setIsDoctorSelected(!isDoctorSelected);
    saveRole();
  }

  return (
    <section className="bg-gray-100">
      <div className="font-poppins  h-screen  grid grid-cols-2 gap-8 items-center max-w-[90%] mx-auto">
        <div className="w-full col-span-1 hidden md:block">
          <img src={backIcon} className="" />
        </div>

        <div className="">
          <div className="flex flex-col justify-center place-items-center ">
            <img src={logo} className="w-[150px] mt-1" />
            <span className="text-[18px] font-bold">Welcome!</span>
            <span className="font-light my-2 mb-6 text-sm">
              How do you want to continue?
            </span>

            <div className="flex flex-row justify-between items-center gap-8  ">
              <button
                onClick={handleDoctorButton}
                className={`${
                  isDoctorSelected ? "border-[2px] border-[#272EA7] " : ""
                } hover:scale-[102%] flex flex-col justify-between items-center bg-white rounded-[15px]`}
              >
                <div className="w-[30%]">
                  <img
                    src={doctorImage}
                    className="h-[100%] w-[100%]"
                    alt="doctor role"
                  />
                </div>
                <span className="font-bold text-[16px] mb-[10px]">
                  Doctor/ Specialist
                </span>
              </button>

              <button
                onClick={handlePatientButton}
                className={`${
                  isPatientSelected ? "border-[2px] border-[#272EA7] " : ""
                }hover:scale-[102%] flex flex-col justify-between items-center bg-white rounded-[15px]`}
              >
                <div className="w-[50%]">
                  <img
                    src={patientImage}
                    className="h-[100%] w-[100%]"
                    alt="doctor role"
                  />
                </div>
                <span className="font-bold text-[16px] mb-[10px]">Patient</span>
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center place-items-center">
            {!(isDoctorSelected || isPatientSelected) ? (
              <div
                className={`h-[48px] w-[50%] m-3 bg-[#272EA7]/70 text-white font-bold flex flex-row justify-center items-center rounded-[5px] mt-10`}
              >
                continue
              </div>
            ) : (
              //signup here
              <Link
                className="h-[48px] w-[50%] m-3 bg-[#272EA7] hover:bg-[#272EA7]/80 text-white font-bold flex flex-row justify-center items-center rounded-[5px]"
                to={"/account"}
                state={{ userRole: accountRole }}
              >
                Continue
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolePage;
