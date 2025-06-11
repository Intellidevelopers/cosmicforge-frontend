import { useNavigate } from "react-router-dom";
import bell from "../../../../assets/icons/Bell.png";

import deleteIcon from "../../../../assets/images/deleteIconAccount.png";
import { settings } from "../utils/patientSettings";
import { useState } from "react";

const PatientSettings = () => {
  const [toggleNotifs, setToggleNotifs] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="w-full pt-10">
      <p className="font-bold ms-4 text-[24px]">Settings</p>

      <div className="flex w-full flex-col justify-center items-center h-full">
        <div className="flex-col w-[90%] h-full flex">
          <div className="flex justify-between items-center p-2 rounded-md shadow-lg ">
            <div className="flex items-center justify-start ">
              <img src={bell} alt="bells" className="w-8 h-8 " />
              <p className="font-bold p-2">Notification Toggle</p>
            </div>
            <div
              className={
                "rounded-full border-2  min-w-8 h-4  " +
                (toggleNotifs && "bg-black")
              }
              onClick={() => {
                setToggleNotifs(!toggleNotifs);
              }}
            >
              <div
                className={`rounded-[50%]  w-3 h-3 ${toggleNotifs ? "translate-x-[100%] bg-white" : "bg-black"}`}
              ></div>
            </div>
          </div>

          {settings.map((setting, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 rounded-md shadow-lg cursor-default "
              onClick={() => {
                navigate(setting.path);
              }}
            >
              <div className="flex items-center justify-start ">
                <img
                  src={setting.image}
                  alt="Certifications"
                  className="w-8 h-8"
                />
                <p
                  className={`font-bold p-2  ${setting.name === "Log Out" && "text-red-500"}`}
                >
                  {setting.name}
                </p>
              </div>
              <i
                className={`fas fa-angle-right ${setting.name === "Log Out" && "text-red-500"}`}
              ></i>
            </div>
          ))}

          <div className="flex items-center justify-start rounded-md shadow-lg p-2">
            <img
              src={deleteIcon}
              alt="Delete My Account"
              className="w-8 h-8 "
            />
            <p className="font-bold p-2 text-red-600 mr-4">Delete My Account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSettings;
