import bpicon from "../../../assets/icons//bpicon.svg";
import bticon from "../../../assets/icons//bticon.svg";
import spoicon from "../../../assets/icons//spoicon.svg";
import hticon from "../../../assets/icons//hticon.svg";
import React from "react";

const MobileSummary: React.FC = () => {
  return (
    <div className="w-[100%] md:hidden flex flex-row justify-evenly items-center bg-white shadow-md h-[150px] rounded-[5px] p-3 shadow-black/10">
      <div className="w-[24%] h-[95%] flex flex-col justify-evenly items-center">
        <img src={bpicon} className="h-[40px] w-[40px]" alt="chart" />
        <span className="font-bold text-[12px] text-nowrap text-gray-600">
          Blood Pressure
        </span>
        <div className="flex flex-row items-top">
          <span className="text-[20px] font-bold">145</span>
          <span className="text-[14px]">mmHg</span>
        </div>
      </div>
      <div className="w-[24%] h-[95%] flex flex-col justify-evenly items-center">
        <img src={hticon} className="h-[40px] w-[40px]" alt="chart" />
        <span className="font-bold text-[12px] text-gray-600">Heart Rate</span>
        <div className="flex flex-row items-center w-[100%] justify-around">
          <div className="flex flex-col text-[12px]">
            <span>pul</span>
            <span>/min</span>
          </div>
          <span className="text-[20px] font-bold">89</span>
        </div>
      </div>
      <div className="w-[24%] h-[95%] flex flex-col justify-evenly items-center">
        <img src={spoicon} className="h-[40px] w-[40px]" alt="chart" />
        <span className="font-bold text-[12px] text-gray-600">Spo2</span>
        <div className="flex flex-row items-top">
          <span className="text-[20px] font-bold">85%</span>
        </div>
      </div>
      <div className="w-[24%] h-[95%] flex flex-col justify-evenly items-center">
        <img src={bticon} className="h-[40px] w-[40px]" alt="chart" />
        <span className="font-bold text-[12px] text-gray-600">Body Temp</span>
        <div className="flex flex-row items-top">
          <span className="text-[20px] font-bold">27ºc</span>
        </div>
      </div>
    </div>
  );
};

export default MobileSummary;
