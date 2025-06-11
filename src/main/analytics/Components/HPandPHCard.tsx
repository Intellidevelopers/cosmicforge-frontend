import React from "react";
import backIcon from "../../../assets/icons/Forward.png";
import bodyIcon from "../../../assets/icons/bodyicon.svg";
import tapeIcon from "../../../assets/icons/tapeicon.svg";
import rgbIcon from "../../../assets/icons/rgbicon.svg";
import StepCountChart from "./StepCountChart";

const HPandPHCard: React.FC = () => {
  return (
    <div className="w-[100%] md:flex-row flex-col flex justify-between gap-3">
      <div className="md:w-[64%] w-[100%] bg-white shadow-md h-[300px] rounded-[5px] p-3 shadow-black/10">
        <div className="w-[100%] flex flex-row items-center justify-between">
          <span className="text-[18px] font-extrabold">Heart Perfomance</span>
          <button className="flex flex-row justify-center items-center gap-1 p-1 rounded-[5px] border-[1px] border-gray-300">
            <span className="text-gray-500 text-[15px]">History</span>
            <img
              alt="dropdown"
              className="h-[10px] rotate-90 w-[10px]"
              src={backIcon}
            />
          </button>
        </div>
        <div>
          <span className="text-[14px] text-gray-500 font-extralight">
            Tracking Heart Performance
          </span>
        </div>
        <div className="pt-[15px] w-[100%]">
          <StepCountChart />
        </div>
      </div>

      <div className="bg-white shadow-md h-[300px] md:w-[34%] w-[100%] flex flex-col rounded-[5px] p-3 shadow-black/1">
        <div>
          <span className="text-[18px] font-extrabold">Physical Health</span>
        </div>
        <div className="flex flex-row justify-between mt-[10px] items-center">
          <img src={bodyIcon} className="w-[35%] h-[240px]" />
          <div className="h-[240px] w-[60%] flex flex-col justify-evenly items-center">
            <div className="w-[100%] px-2 pt-1 h-[55px] flex flex-row justify-between items-top bg-blue-800 rounded-[7px]">
              <div className="flex flex-col">
                <span className="text-[13px] text-white">Breathing</span>
                <span className="text-[18px] text-white font-bold">
                  140/135h
                </span>
              </div>
              <div className="p-1 flex flex-row justify-center items-center h-fit w-fit bg-white rounded-[5px]">
                <span className="text-[12px]">+67%</span>
              </div>
            </div>
            <div className="w-[100%] h-[55px] flex flex-row justify-between items-center p-2 bg-amber-200  rounded-[7px]">
              <div className="w-[30%] h-[100%]">
                <span className="text-[13px]">Height</span>
              </div>
              <div className="w-[64%] flex flex-col p-2 items-center justify-center">
                <img src={tapeIcon} className="w-[80%]" />
                <span className="text-[15px] font-bold">174 cm</span>
              </div>
            </div>
            <div className="w-[100%] h-[55px] flex flex-row justify-between items-center p-2 bg-green-200  rounded-[7px]">
              <div className="w-[30%] h-[100%]">
                <span className="text-[13px]">Weight</span>
              </div>
              <div className="w-[64%] flex flex-col p-2 items-center justify-center">
                <img src={tapeIcon} className="w-[80%]" />
                <span className="text-[15px] font-bold">45 kg</span>
              </div>
            </div>
            <div className="w-[100%] h-[55px] flex flex-row justify-between items-center p-2 bg-yellow-100  rounded-[7px]">
              <div className="w-[30%] h-[100%]">
                <span className="text-[13px]">BMI</span>
              </div>
              <div className="w-[64%] flex flex-col p-2 items-center justify-center">
                <img src={rgbIcon} className="w-[80%]" />
                <span className="text-[15px] font-bold">29.3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HPandPHCard;
