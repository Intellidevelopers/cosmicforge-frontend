import React, { useState } from "react";
import DoctorNavBarMobile from "../../../home/component/doctor/DoctorNavBarMobile";
import EnterNewPassword from "../components/enterNewPassword";
import NewPasswordSuccess from "../components/newPasswordSucces";
import EnterPassword from "../components/enterPassword";
import DoctorHomeNavBar from "../../../home/component/doctor/DoctorHomeNavBar";
import { useNavigate } from "react-router-dom";

const ManageDocPassword: React.FC = () => {
  const [presentPage, setPresentPage] = useState(1);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const nextPage = () => {
    if (presentPage < 4) {
      setPresentPage(presentPage + 1);
      return;
    }
  };

  return (
    <div className="overflow-y-scroll">
      <DoctorHomeNavBar title="Manage Password" />
      <DoctorNavBarMobile title="Manage Passowrd" />
      <div className="">
        <div
          className=" hidden md:flex w-full m-2 ps-3 pt-2  place-items-center gap-2 cursor-default hover:text-cosmic-primary-color"
          onClick={() => {
            navigate(-1);
          }}
        >
          <i className="fa fa-angle-left fa-xl " />
          <p>Go Back</p>
        </div>
        {presentPage === 2 && (
          <EnterNewPassword
            passwordEnteredEarlier={password}
            forwardFunction={nextPage}
          />
        )}
        {presentPage === 3 && <NewPasswordSuccess setPage={setPresentPage} />}
        {presentPage === 1 && (
          <EnterPassword
            forwardFunction={(e) => {
              setPassword(e);
              nextPage();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ManageDocPassword;
