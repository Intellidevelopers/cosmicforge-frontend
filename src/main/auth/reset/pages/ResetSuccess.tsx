import React from "react";
import cosmicLogo from "../../../../assets/icons/cosmic forge logo 1.svg";
import successIllus from "../../../../assets/icons/businessmanthumbs up.svg";
import { Link } from "react-router-dom";

const ResetSuccess: React.FC = () => {
  return (
    <div className="flex flex-row bg-gray-100 py-[50px] md:px-[25px] justify-center h-screen w-screen">
      <div className="flex-col items-center justify-between mt-[10%] md:mt-0 h-[90%] flex md:w-[400px] w-[90%] md:h-fit">
        <div className="w-[80%] md:flex hidden h-[50px]">
          <img
            src={cosmicLogo}
            alt="cosmic forge logo"
            className="h-[100%] w-[100%]"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[23px] md:text-[17px] font-bold self-center mt-2">
            Success!
          </span>
          <span className="mt-2 text-[17px] md:text-[16px] self-center">
            You have successfully reset your password.
          </span>
        </div>
        <div className="w-[80%] h-[400px] md:h-[300px] justify-end md:mt-[20px] items-center flex flex-col">
          <div className="w-[100%] flex flex-col h-[100%] md:h-[300px] ">
            <img
              src={successIllus}
              alt="cosmic forge logo"
              className="h-[100%] w-[100%]"
            />
          </div>
          <div className="md:h-[150px] h-[175px] bg-gradient-to-t from-gray-100 to-transparent self-end w-[100%] left-0 absolute"></div>
        </div>
        <div className="mt-[17px] w-[100%] flex flex-col items-center gap-2">
          <Link
            to={"/account/login"}
            className="md:h-[40px] flex flex-col justify-center items-center h-[45px] md:w-[100%] mt-[20px] w-[90%] rounded-[5px] hover:bg-[#272EA7]/70 bg-[#272EA7] cursor-pointer text-white"
          >
            Back to Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetSuccess;
