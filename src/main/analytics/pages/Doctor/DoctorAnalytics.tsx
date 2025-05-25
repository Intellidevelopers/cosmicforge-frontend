import React, { useState } from "react";
import DoctorHomeNavBar from "../../../home/component/doctor/DoctorHomeNavBar";
import DoctorNavBarMobile from "../../../home/component/doctor/DoctorNavBarMobile";
import DoctorHomeSideBar from "../../../home/component/doctor/DoctorHomeSideBar.ls";
import DoctorHomeSideBarMobile from "../../../home/component/doctor/DoctorHomeSideBarMobile";
import ShiftWorkTimeCard from "../../Components/ShiftWorkTimeCard";
import PACard from "../../Components/PACard";
import POCard from "../../Components/POCard";
import DocSummary from "../../Components/DocSummary";

const DoctorAnalytics: React.FC = () => {


    return (
        <div className="font-poppins  flex relative w-full h-dvh bg-[#F5F5F5] overflow-hidden">
            <div className=" hidden md:flex w-[25%]">
                <DoctorHomeSideBar />
            </div>
            <div className=" w-full grid grid-cols-1  relative ">
                <div className=" md:hidden">
                <DoctorHomeSideBarMobile />
                </div>
                <div className="overflow-y-scroll">
                    <DoctorHomeNavBar title="Analytics" />
                    <DoctorNavBarMobile title="Analytics"/>
                    <div className="">
                        <div className="flex flex-col items-center justify-center pt-[10px] pb-[70px] gap-[20px] p-3  ">
                            <DocSummary/>
                            <PACard/>
                            <POCard h={240} c="330"/>
                            <ShiftWorkTimeCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default DoctorAnalytics;