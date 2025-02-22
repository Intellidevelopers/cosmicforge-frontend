import React from "react";
import backIcon from "../../../assets/icons/Forward.png";
import bpicon from "../../../assets/icons//bpicon.svg";
import bticon from "../../../assets/icons//bticon.svg";
import spoicon from "../../../assets/icons//spoicon.svg";
import hticon from "../../../assets/icons//hticon.svg";
import pinkchart from "../../../assets/icons//pinkchart.svg";
import greenchart from "../../../assets/icons//greenchart.svg";
import redchart from "../../../assets/icons//redchart.svg";
import bluechart from "../../../assets/icons//bluechart.svg";


const Summary:React.FC = () => {
    return (
        <div className="w-[100%] md:flex hidden flex-col bg-white shadow-md h-[310px] rounded-[5px] p-3 shadow-black/10">
            <div className="w-[100%] flex flex-row items-center justify-between">
                <span className="text-[18px] font-extrabold">Vital Chart</span>
                <button className="flex flex-row justify-center items-center gap-1 p-1 rounded-[5px] border-[1px] border-gray-300">
                    <span className="text-gray-500 text-[15px]">History</span>
                    <img alt="dropdown" className="h-[10px] rotate-90 w-[10px]" src={backIcon}/>
                </button>
            </div>
            <div className="pt-[5px] flex flex-row justify-evenly items-center w-[100%]">

                <div className="h-[250px] rounded-[13px] w-[22%] shadow-gray-200 flex flex-col justify-between pb-2 shadow-lg border-[1px] border-gray-300">
                    <div className="p-2 h-[150px]">
                        <div className="flex flex-row items-center gap-4">
                            <img src={bpicon} className="h-[30px] w-[30px]" alt="icon"/>
                            <span className="font-bold text-[15px] text-gray-600">Blood Pressure</span>
                        </div>
                        <div className="flex flex-row justify-between mt-[10px] h-[30px] items-center">
                            <div className="flex gap-0 h-[100%] p-0 justify-center flex-col">
                                <span className="text-[13px]">SYS</span>
                                <span className="text-[13px]">mmHg</span>
                            </div>
                            <span className="text-[18px] font-extrabold">113</span>
                        </div>
                        <div className="flex flex-row justify-between mt-[10px] h-[30px] items-center">
                            <div className="flex gap-0 h-[100%] p-0 justify-center flex-col">
                                <span className="text-[13px]">DIA</span>
                                <span className="text-[13px]">mmHg</span>
                            </div>
                            <span className="text-[18px] font-extrabold">67</span>
                        </div>
                        <div className="flex flex-row justify-between mt-[10px] h-[30px] items-center">
                            <div className="flex gap-0 h-[100%] p-0 justify-center flex-col">
                                <span className="text-[13px]">PUL</span>
                                <span className="text-[13px]">/min</span>
                            </div>
                            <span className="text-[18px] font-extrabold">52</span>
                        </div>
                        <div className="p-1 rounded-[5px] mt-[2px] bg-pink-200 mx-auto font-bold text-[11px] w-fit">
                            Normal
                        </div>
                    </div>
                    <div className="w-[100%] h-[70px] relative">
                        <img src={pinkchart} alt="chart" className="absolute inset-0 object-cover w-full h-full"/>
                    </div>
                </div>

                <div className="h-[250px] rounded-[13px] w-[22%] shadow-gray-200 flex flex-col justify-between pb-1 shadow-lg border-[1px] border-gray-300">
                    <div className="p-2 h-[185px] flex flex-col">
                        <div className="flex flex-row items-center gap-4">
                            <img src={hticon} className="h-[30px] w-[30px]" alt="icon"/>
                            <span className="font-bold text-[15px] text-gray-600">Heart Rate</span>
                        </div>
                        <div className="flex flex-row justify-between mt-[10px] h-[30px] items-center">
                            <div className="flex gap-0 h-[100%] p-0 justify-center flex-col">
                                <span className="text-[13px]">PUL</span>
                                <span className="text-[13px]">/min</span>
                            </div>
                            <span className="text-[18px] font-extrabold">74</span>
                        </div>
                        <div className="p-1 rounded-[5px] mt-auto bg-red-200 mx-auto font-bold text-[11px] w-fit">
                            Normal
                        </div>
                    </div>
                    <div className="w-[100%] h-[70px] relative">
                        <img src={redchart} alt="chart" className="absolute inset-0 object-cover w-full h-full"/>
                    </div>
                </div>

                <div className="h-[250px] rounded-[13px] w-[22%] shadow-gray-200 flex flex-col justify-between pb-1 shadow-lg border-[1px] border-gray-300">
                    <div className="p-2 h-[185px] flex flex-col">
                        <div className="flex flex-row items-center gap-4">
                            <img src={spoicon} className="h-[30px] w-[30px]" alt="icon"/>
                            <span className="font-bold text-[15px] text-gray-600">Heart Rate</span>
                        </div>
                        <div className="flex flex-row justify-between mt-[10px] h-[30px] items-center">
                            <span className="text-[18px] font-extrabold">28%</span>
                        </div>
                        <div className="p-1 rounded-[5px] mt-auto bg-blue-200 mx-auto font-bold text-[11px] w-fit">
                            Normal
                        </div>
                    </div>
                    <div className="w-[100%] h-[70px] relative">
                        <img src={bluechart} alt="chart" className="absolute inset-0 object-cover w-full h-full"/>
                    </div>
                </div>

                <div className="h-[250px] rounded-[13px] w-[22%] shadow-gray-200 flex flex-col justify-between pb-1 shadow-lg border-[1px] border-gray-300">
                    <div className="p-2 h-[185px] flex flex-col">
                        <div className="flex flex-row items-center gap-4">
                            <img src={bticon} className="h-[30px] w-[30px]" alt="icon"/>
                            <span className="font-bold text-[15px] text-gray-600">Heart Rate</span>
                        </div>
                        <div className="flex flex-row justify-between mt-[10px] h-[30px] items-center">
                            <span className="text-[18px] font-extrabold">37ºc</span>
                        </div>
                        <div className="p-1 rounded-[5px] mt-auto bg-green-200 mx-auto font-bold text-[11px] w-fit">
                            Normal
                        </div>
                    </div>
                    <div className="w-[100%] h-[70px] relative">
                        <img src={greenchart} alt="chart" className="absolute inset-0 object-cover w-full h-full"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Summary;