import React from "react";
import DoctorHomeNavBar from "../../../home/component/doctor/DoctorHomeNavBar";
import DoctorNavBarMobile from "../../../home/component/doctor/DoctorNavBarMobile";
import DoctorHomeSideBar from "../../../home/component/doctor/DoctorHomeSideBar.ls";
import DoctorHomeSideBarMobile from "../../../home/component/doctor/DoctorHomeSideBarMobile";
import DocSummary from "../../Components/DocSummary";
import DoctorDashboardPOandECard from "../../Components/DoctorDashoardPAandECard";
import DoctorAppointments from "../../Components/DoctorAppointments";

const DoctorDashboard: React.FC = () => {


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
                    <DoctorHomeNavBar title="Dashboard" />
                    <DoctorNavBarMobile title="Dashboard"/>
                    <div className="">
                        <div className="flex flex-col items-center justify-center pt-[10px] pb-[70px] gap-[20px] p-3  ">
                            <DocSummary/>
                            <DoctorDashboardPOandECard/>
                            <DoctorAppointments/>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default DoctorDashboard;