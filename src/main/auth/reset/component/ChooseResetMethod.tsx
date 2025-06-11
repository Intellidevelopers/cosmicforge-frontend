import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../../../../assets/icons/Forward.png";
import IconContainer from "../../../generalComponents/IconContainer";
import cosmicLogo from "../../../../assets/icons/cosmic forge logo 1.svg";

interface component {
  step: number;
  setStep: (e: number) => void;
}

const ChooseResetMethod: React.FC<component> = ({ step, setStep }) => {
  const toNextScreen = () => {
    setStep(step + 1);
  };

  return (
    <div className="h-screen w-screen bg-gray-100 md:px-0 px-[5%] flex flex-col justify-center items-center">
      <Link
        className="flex absolute md:top-[7%] top-[3%] flex-row gap-2 items-center font-bold md:w-[80%] w-[95%] h-fit"
        to={"/account"}
      >
        <IconContainer
          image={backIcon}
          classes="rotate-180"
          mobileSize="35"
          deskSize="30"
        />
        <span className="md:flex hidden">Go back</span>
      </Link>
      <div className="md:w-[400px] md:h-fit h-screen md:text-center text-left flex flex-col md:pb-0 pb-[10%] justify-between items-center md:justify-around md:pt-0 pt-[20%]  gap-[15px] w-[100%]">
        <div className="w-[80%] md:flex hidden h-[50px]">
          <img
            src={cosmicLogo}
            alt="cosmic forge logo"
            className="h-[100%] w-[100%]"
          />
        </div>
        <div className="flex flex-col gap-2 w-[100%]">
          <span className="text-[20px] font-bold">Password Reset</span>
          <span>Choose how you want to reset your password.</span>
        </div>
        <div className="flex flex-col md:gap-[50px] gap-[20px] w-[100%] text-center">
          <button
            onClick={toNextScreen}
            className={`bg-[#272EA7] h-[48px] w-[100%] md:mt-[190px] hover:bg-[#272EA7]/80 text-white font-bold flex flex-row justify-center items-center rounded-[5px]`}
          >
            Email address
          </button>
          <span className="text-black text-[15px]">
            Don&apos;t have an account?{" "}
            <Link
              className="text-[#272EA7] hover:text-[#272EA7]/50"
              to={"/account/signup/verify-email"}
            >
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChooseResetMethod;
