import HomeNavBar from "../../../home/component/patient/HomeNavBar";
import HomeSideBar from "../../../home/component/patient/HomeSideBar.ls";
import React, { useState } from "react";
import Summary from "../../Components/Summary";
import SpoTCard from "../../Components/SpoTCard";
import BptCard from "../../Components/BptCard";
import OverallHealth from "../../Components/OverallHealth";
import HPandPHCard from "../../Components/HPandPHCard";
import HomeMobileNavBar from "../../../home/component/patient/HomeMobileNavBar";
import MobileSummary from "../../Components/MobileSummary";
import diagnosis from "../../../../assets/search/searchDiagnosis.svg";

import searchBookAppointment from "../../../../assets/search/searchBookAppoinment.png";
import searchFindASpecialist from "../../../../assets/search/searchFindASpecialist.png";
import searchFirstAid from "../../../../assets/search/searchFirtstAid.png";
import searchChatBot from "../../../../assets/search/searchChatBot.png";
import CustomHomeSearchCard, {
  CustomHomeSearchCardProps,
} from "../../../home/component/patient/CustomHomeSearchCard";

const PatientAnalytics: React.FC = () => {
  const searchCards: CustomHomeSearchCardProps[] | null = [
    {
      title: "Run Diagnosis",
      image: diagnosis,
      navigationPath: "/patient/run-diagnosis",
    },
    {
      title: "Book Appointment",
      image: searchBookAppointment,
      navigationPath: "/patient/find-a-specialist",
    },

    {
      title: "Find A Specialist",
      image: searchFindASpecialist,
      navigationPath: "/patient/find-a-specialist",
    },
    {
      title: "First Aid",
      image: searchFirstAid,
      navigationPath: "/patient/first-aid",
    },

    {
      title: "Chat Bot",
      image: searchChatBot,
      navigationPath: "/patient/chatbot",
    },
  ];
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);

  return (
    <div className="w-full  relative h-dvh  bg-gray-100 overflow-x-hidden overflow-y-hidden  flex cursor-default">
      <div className="md:w-[25vw]">
        <HomeSideBar />
      </div>

      <div className="w-full md:w-[75vw] overflow-y-auto relative">
        {toggleSearch && (
          <div className="absolute  bg-white w-full top-[9%] z-[600] min-h-[350px] p-10 md:flex flex-col place-items-center justify-center ">
            <div className="w-full h-[20px] relative ">
              <i
                className="fa  font-bold text-[30px] fa-times absolute right-0 hover:text-cosmic-primary-color"
                onClick={() => {
                  setToggleSearch(false);
                }}
              />
            </div>

            <div className="mt-6 bg-black bg-opacity-5 w-[90%] h-full flex  justify-center gap-8 p-8 flex-wrap ">
              {searchCards &&
                searchCards.map((card) => (
                  <CustomHomeSearchCard
                    title={card.title}
                    image={card.image}
                    navigationPath={card.navigationPath}
                  />
                ))}
            </div>
          </div>
        )}

        <HomeNavBar
          title="Analytics"
          onSearchFired={(path) => {
            if (path === "Analytics") {
              setToggleSearch(!toggleSearch);
            }
          }}
        />
        <HomeMobileNavBar title="Analytics" onSearchFired={() => {}} />

        <div className="flex flex-col items-center justify-center pt-[10px] pb-[70px] gap-[20px] p-3  ">
          <MobileSummary />
          <Summary />
          <BptCard />
          <SpoTCard />
          <OverallHealth />
          <HPandPHCard />
        </div>
      </div>
    </div>
  );
};

export default PatientAnalytics;
