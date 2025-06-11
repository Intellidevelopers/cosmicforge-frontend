import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import backIcon from "../../../../assets/icons/Forward.png";
import IconContainer from "../../../generalComponents/IconContainer";
import cosmicLogo from "../../../../assets/icons/cosmic forge logo 1.svg";

interface components {
  step: number;
  setStep: (e: number) => void;
  email: string;
}

const EnterOtp: React.FC<components> = ({ step, setStep, email }) => {
  const [activeInput, setActiveInput] = useState<number>(0);
  const [boxArray, setBoxArray] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  useEffect(() => {
    const inputBox = document.getElementById(`otp-${activeInput}`);
    if (inputBox) {
      inputBox.focus();
    }
  }, [activeInput]);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const str = e.target.value;
    // only accept digits. if non-digit ignore
    if (!/^\d*$/.test(e.target.value)) return;

    // update the OTP state and take only the last digit
    const newOtp = [...boxArray];
    newOtp[index] = str.slice(-1);
    setBoxArray(newOtp);

    // if digit was entered and was not the last digit move to the next box
    if (str && index < boxArray.length - 1) {
      setActiveInput(index + 1);
    }
  };

  const confirmOtp = () => {
    let otpCode = "";
    boxArray.map((val) => {
      otpCode = otpCode.concat(val);
    });
    console.log(otpCode);
    navigate("/account/password-reset/new-password");

    // place api logic to confirm otp here
  };

  const goBack = () => {
    setStep(step - 1);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && boxArray[index] === "") {
      setActiveInput(index - 1);
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100 md:px-0 px-[5%] flex flex-col justify-center items-center">
      <button
        onClick={goBack}
        className="flex absolute md:top-[7%] top-[3%] flex-row gap-2 items-center font-bold md:w-[80%] w-[95%] h-fit"
      >
        <IconContainer
          image={backIcon}
          classes="rotate-180"
          mobileSize="35"
          deskSize="30"
        />
        <span className="md:flex hidden">Go back</span>
      </button>
      <div className="md:w-[400px] md:h-fit h-screen md:text-center text-left flex flex-col md:pb-0 pb-[10%] justify-between items-center md:justify-around md:pt-0 pt-[30px]  gap-[15px] w-[100%]">
        <div className="w-[80%] md:flex hidden h-[50px]">
          <img
            src={cosmicLogo}
            alt="cosmic forge logo"
            className="h-[100%] w-[100%]"
          />
        </div>
        <div className="flex flex-col gap-2 w-[100%] md:mt-0 mt-[30px]">
          <span className="text-[23px] font-extrabold">OTP Code</span>
          <div className="flex flex-col gap-0">
            <span>We sent you a 6-digit code via your email</span>
            <span className="font-bold">{email}</span>
          </div>

          <div className="flex flex-row gap-2 w-[100%] md:mt-[10px] mt-[20px] justify-center items-center">
            {boxArray.map((_, index) => {
              return (
                <input
                  key={index}
                  pattern="\d*"
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  inputMode="numeric"
                  id={`otp-${index}`}
                  value={boxArray[index]}
                  onChange={(e) => {
                    handleInput(e, index);
                  }}
                  className="h-[44px] w-[43px] border-[1px] border-gray-400 rounded-[5px] text-center bg-transparent"
                  type="tel"
                  maxLength={1}
                />
              );
            })}
          </div>
          {/* <span className="text-red-500">Invalid OTP code please try again</span> USE THIS TO HANDLE EXCEPTIONS TO THE UI*/}
          <span className="text-left mt-[10px]">
            Did&apos;t receive the code?
          </span>
          <button className="text-[#272EA7] hover:text-[#272EA7]/70 font-bold text-[18px] w-fit">
            Resend Code
          </button>
        </div>
        <div className="w-[100%]">
          <button
            onClick={confirmOtp}
            className="h-[48px] w-[100%] md:mt-[120px] bg-[#272EA7] hover:bg-[#272EA7]/80 text-white font-bold flex flex-row justify-center items-center rounded-[5px]"
          >
            Continue
          </button>
          <div className="md:hidden flex flex-col w-[100%] text-center">
            <span className="mt-[30px] text-black text-[15px]">
              Already have an account?{" "}
              <Link
                className="md:text-white md:hover:text-[#272EA7] hover:text-[#272EA7]/50 text-[#272EA7]"
                to={"/account/login"}
              >
                Log In
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterOtp;
