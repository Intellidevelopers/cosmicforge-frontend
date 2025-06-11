import { Outlet } from "react-router-dom";
import HomeMobileNavBar from "../../../home/component/patient/HomeMobileNavBar";
import HomeNavBar from "../../../home/component/patient/HomeNavBar";
import HomeSideBar from "../../../home/component/patient/HomeSideBar.ls";
import HomeSideBarMobile from "../../../home/component/patient/HomeSideBarMobile";

import diagnosis from "../../../../assets/search/searchDiagnosis.svg";

import searchBookAppointment from "../../../../assets/search/searchBookAppoinment.png";
import searchFindASpecialist from "../../../../assets/search/searchFindASpecialist.png";
import searchFirstAid from "../../../../assets/search/searchFirtstAid.png";
import searchChatBot from "../../../../assets/search/searchChatBot.png";
import CustomHomeSearchCard, {
  CustomHomeSearchCardProps,
} from "../../../home/component/patient/CustomHomeSearchCard";
import { useState } from "react";

const AppointmentMainBody = () => {
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
    <div className=" w-full   h-dvh    overflow-hidden  flex relative ">
      <div className=" ">
        <div className="hidden md:block w-[25vw]">
          <HomeSideBar />
        </div>
        <HomeSideBarMobile />
      </div>

      <div className=" w-full md:w-[80vw] overflow-hidden h-full pb-10 relative">
        {toggleSearch && (
          <div className="absolute  bg-white w-full top-[9%] z-[600] min-h-[350px] p-10 md:flex flex-col place-items-center justify-center">
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
          title="Book Appointment"
          onSearchFired={(path) => {
            if (path === "Book Appointment") {
              setToggleSearch(!toggleSearch);
            }
          }}
        />
        <HomeMobileNavBar title="Book Appointment" onSearchFired={() => {}} />

        <Outlet />
      </div>
    </div>
  );
};

export default AppointmentMainBody;
