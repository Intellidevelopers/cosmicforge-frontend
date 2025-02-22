import HomeNavBar from "../../home/component/patient/HomeNavBar";
import HomeSideBar from "../../home/component/patient/HomeSideBar.ls";
import React from "react";
import Summary from "../Components/Summary";
import SpoTCard from "../Components/SpoTCard";
import BptCard from "../Components/BptCard";
import OverallHealth from "../Components/OverallHealth";
import HPandPHCard from "../Components/HPandPHCard";
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar";
import MobileSummary from "../Components/MobileSummary";


const PatientAnalytics:React.FC = () => {

    return (
        <div className="w-full  relative  h-dvh bg-gray-100 overflow-x-hidden overflow-y-auto flex flex-col cursor-default">
            <HomeNavBar title="Analytics"/>
            <HomeMobileNavBar title="Analytics"/>
            <HomeSideBar/>
            <div className="flex flex-col items-center justify-center pt-[10px] pb-[70px] gap-[20px] p-3  md:ps-[265px]">
                <MobileSummary/>
                <Summary/>
                <BptCard/>
                <SpoTCard/>
                <OverallHealth/>
                <HPandPHCard/>
            </div>
        </div>
    )
}

export default PatientAnalytics;