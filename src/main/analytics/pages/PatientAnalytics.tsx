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
        <div className="w-full  relative h-dvh  bg-gray-100 overflow-x-hidden overflow-y-hidden  flex cursor-default">
           <div className="md:w-[25vw]">
          
            <HomeSideBar/>

           </div>


       <div className="w-full md:w-[75vw] overflow-y-auto">

       <HomeNavBar title="Analytics"/>
           <HomeMobileNavBar title="Analytics"/>

            <div className="flex flex-col items-center justify-center pt-[10px] pb-[70px] gap-[20px] p-3  ">
                <MobileSummary/>
                <Summary/>
                <BptCard/>
                <SpoTCard/>
                <OverallHealth/>
                <HPandPHCard/>
            </div>
       </div>
        </div>
    )
}

export default PatientAnalytics;