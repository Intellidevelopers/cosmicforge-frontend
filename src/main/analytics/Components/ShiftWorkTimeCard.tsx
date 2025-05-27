import React from "react";
import backIcon from "../../../assets/icons/Forward.png";
import StepCountChart from "./StepCountChart";
import TotalEarningsCard from "./TotalEarningsCard";


const ShiftWorkTimeCard:React.FC = () => {
    return (
        <div className="w-[100%] md:flex-row flex-col flex justify-between gap-3">
            <div className="md:w-[64%] w-[100%] bg-white shadow-md h-[300px] rounded-[5px] p-3 shadow-black/10">
                <div className="w-[100%] flex flex-row items-center justify-between">
                    <span className="text-[18px] font-extrabold">Shift /Work Time</span>
                    <button className="flex flex-row justify-center items-center gap-1 p-1 rounded-[5px] border-[1px] border-gray-300">
                        <span className="text-gray-500 text-[15px]">History</span>
                        <img alt="dropdown" className="h-[10px] rotate-90 w-[10px]" src={backIcon}/>
                    </button>
                </div>
                <div>
                    <span className="text-[14px] text-gray-500 font-extralight">Tracking Work Time & Schedule</span>
                </div>
                <div className="pt-[15px] w-[100%]">
                    <StepCountChart/>
                </div>
            </div>

            <div className="bg-white shadow-md h-[300px] md:w-[34%] w-[100%] flex flex-col rounded-[5px] p-3 shadow-black/1">
                <TotalEarningsCard h={170}/>
            </div>
        </div>
    )
}

export default ShiftWorkTimeCard;