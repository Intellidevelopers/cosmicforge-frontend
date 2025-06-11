import React from "react";
import optionsIcon from "../../../assets/icons/options.png";
import groupIcon from "../../../assets/icons/group.png";
import calIcon from "../../../assets/icons/calender.png";
import walletIcon from "../../../assets/icons/wallet.png";

const DocSummary: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col w-[100%] justify-evenly md:gap-0 gap-3">
      <div className="md:w-[31.5%] w-[100%] h-[110px] flex flex-col gap-0 rounded-[5px] px-3 pt-3 bg-blue-800">
        <div className="w-[100%] flex flex-row justify-end h-fit">
          <button className=" hover:scale-95">
            <img src={optionsIcon} height={"25px"} width={"20px"} />
          </button>
        </div>
        <div className="flex flex-row gap-3">
          <div className="h-[50px] bg-white w-[50px] rounded-full flex flex-col justify-center items-center">
            <img src={calIcon} height={"35px"} width={"35px"} />
          </div>
          <div className="text-white flex flex-col gap-0">
            <span>Appointments</span>
            <span className="font-bold">25</span>
          </div>
        </div>
      </div>

      <div className="md:w-[31.5%] w-[100%] h-[110px] flex flex-col gap-0 rounded-[5px] px-3 pt-3 bg-yellow-500">
        <div className="w-[100%] flex flex-row justify-end h-fit">
          <button className=" hover:scale-95">
            <img src={optionsIcon} height={"25px"} width={"20px"} />
          </button>
        </div>
        <div className="flex flex-row gap-3">
          <div className="h-[50px] bg-white w-[50px] rounded-full flex flex-col justify-center items-center">
            <img src={groupIcon} height={"35px"} width={"35px"} />
          </div>
          <div className="text-white flex flex-col gap-0">
            <span>Total Patients</span>
            <span className="font-bold">225</span>
          </div>
        </div>
      </div>

      <div className="md:w-[31.5%] w-[100%] h-[110px] flex flex-col gap-0 rounded-[5px] px-3 pt-3 bg-green-600">
        <div className="w-[100%] flex flex-row justify-end h-fit">
          <button className=" hover:scale-95">
            <img src={optionsIcon} height={"25px"} width={"20px"} />
          </button>
        </div>
        <div className="flex flex-row gap-3">
          <div className="h-[50px] bg-white w-[50px] rounded-full flex flex-col justify-center items-center">
            <img src={walletIcon} height={"35px"} width={"35px"} />
          </div>
          <div className="text-white flex flex-col gap-0">
            <span>Earnings</span>
            <span className="font-bold">&#8358;345, 900.23</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocSummary;
