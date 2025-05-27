import React from "react";
import backIcon from "../../../assets/icons/Forward.png";
import SplineAreaChart2 from "./SplineAreaChart2";


const PACard:React.FC = () => {
    return (
        <div className="w-[100%] bg-white shadow-md h-[330px] rounded-[5px] p-3 shadow-black/10">
            <div className="w-[100%] flex flex-row items-center justify-between">
                <span className="text-[18px] font-extrabold">Patient Appointments</span>
                <button className="flex flex-row justify-center items-center gap-1 p-1 rounded-[5px] border-[1px] border-gray-300">
                    <span className="text-gray-500 text-[15px]">History</span>
                    <img alt="dropdown" className="h-[10px] rotate-90 w-[10px]" src={backIcon}/>
                </button>
            </div>
            <div>
                <span className="text-[14px] text-gray-500 font-extralight">Keep Track Of Patient Apointments</span>
            </div>
            <div className="w-[100%]">
                <SplineAreaChart2/>
            </div>
        </div>
    )
}

export default PACard;