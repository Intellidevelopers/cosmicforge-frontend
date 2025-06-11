import bell from "../../../../assets/icons/Bell.png";
// import wallet from '../../../../assets/images/Coin Wallet.png'
import profileImg from "../../../../assets/images/cosmic-display-client-profile.png";
import deleteIcon from "../../../../assets/images/deleteIconAccount.png";
import { settings } from "../utils/settings";

import { useState } from "react";
// import { useSelector } from "react-redux"
// import { RootReducer } from "../../../store/initStore"
import { /*Navigate,*/ useNavigate } from "react-router-dom";
import HomeMobileNavBar from "../../../home/component/patient/HomeMobileNavBar";
import HomeNavBar from "../../../home/component/patient/HomeNavBar";

const PatientProfile = () => {
  const navigate = useNavigate();

  const [toggleNotifs, setToggleNotifs] = useState(false);

  // const user = useSelector((state:RootReducer)=>state.user)

  //  const formatAmout = (amount:number)=>{
  //   if(amount){
  //     amount = amount/100
  //    return new Intl.NumberFormat().format(amount)
  //   }

  //   return 0
  // }

  return (
    <div className="overflow-y-scroll">
      <HomeNavBar title="My Profile" onSearchFired={() => {}} />
      <HomeMobileNavBar title="My Profile" onSearchFired={() => {}} />
      <div className="justify-center items-center flex flex-col ">
        {/* MAIN PROFILE SECTION */}
        <div className="flex justify-self-start px-4 w-full">
          {/* HEAD OF PROFILE */}
          <div className="flex gap-2 p-4 justify-start">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-[50%] h-16 w-16 object-cover"
            />
            <div className="flex flex-col">
              <p className="font-bold">Hi Grace</p>
              <p className="font-light">How are you feeling today?</p>
            </div>
          </div>
        </div>
        <div className="">{/* UPCOMING APPOINTMENTS */}</div>
        <div className="">{/* DIFFERENT PROFILES */}</div>

        {/* SETINGS SECTION */}
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
              <p className="font-bold p-2 text-red-600 mr-4">
                Delete My Account
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
