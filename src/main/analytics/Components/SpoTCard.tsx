import React from "react";
import backIcon from "../../../assets/icons/Forward.png";
import SplineAreaChart from "./SplineAreaChart";


const SpoTCard:React.FC = () => {
    return (
        <div className="w-[100%] bg-white shadow-md h-[300px] rounded-[5px] p-3 shadow-black/10">
            <div className="w-[100%] flex flex-row items-center justify-between">
                <span className="text-[18px] font-extrabold">Spo 2 Tracking</span>
                <button className="flex flex-row justify-center items-center gap-1 p-1 rounded-[5px] border-[1px] border-gray-300">
                    <span className="text-gray-500 text-[15px]">History</span>
                    <img alt="dropdown" className="h-[10px] rotate-90 w-[10px]" src={backIcon}/>
                </button>
            </div>
            <div>
                <span className="text-[14px] text-gray-500 font-extralight">Keep track of Oxygen Circulation</span>
            </div>
            <div className="pt-[15px] w-[100%]">
                <SplineAreaChart data={[ 2300, 4000, 3000, 4600, 5900, 4000, 6100, 8000, 4400, 7500, 2900, 7000 ]} title="SPO" color={'blue'}/>
            </div>
        </div>
    )
}

export default SpoTCard;