import ambulance from "../../../assets/images/Ambulance.png";
import sos from "../../../assets/images/sos.png";
import HomeNavBar from "../../home/component/patient/HomeNavBar";
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar";
import cprImg from "../../../assets/images/cpr.png";
import EmergentBox from "../components/emergentBox.tsx";
import woundImg from "../../../assets/images/wound.png";
import vomitingImg from "../../../assets/images/vomiting.png";
import noseBleedImg from "../../../assets/images/noseBleed.png";
import chokingImg from "../../../assets/images/choking.png";
import bleedingImg from "../../../assets/images/bleeding.png";
import fractureImg from "../../../assets/images/fracture.png";
import faintingImg from "../../../assets/images/fainting.png";
import allergyImg from "../../../assets/images/allergy.png";
import sprainImg from "../../../assets/images/sprain.jpg";
import poisoningImg from "../../../assets/images/poisoning.png";
import animalBite from "../../../assets/images/animalBite.png";
import burnsImg from "../../../assets/images/burns.png";
import drowningImg from "../../../assets/images/drowning.jpg";
import diarrheaImag from "../../../assets/images/diarrhea.jpg";

import NonEmergentBox from "../components/nonEmergentBox.tsx";
import UseNavigateToPath from "../hooks/navigateHook.tsx";

import diagnosis from "../../../assets/search/searchDiagnosis.svg";

import searchBookAppointment from "../../../assets/search/searchBookAppoinment.png";
import searchFindASpecialist from "../../../assets/search/searchFindASpecialist.png";
import searchFirstAid from "../../../assets/search/searchFirtstAid.png";
import searchChatBot from "../../../assets/search/searchChatBot.png";
import { useState } from "react";
import CustomHomeSearchCard, {
  CustomHomeSearchCardProps,
} from "../../home/component/patient/CustomHomeSearchCard.tsx";

const FirstAid1 = () => {
  const dummyImageSet: { image: string; title: string; path: string }[] = [
    {
      image: cprImg,
      title: "CPR",
      path: "CPR",
    },
    {
      image: chokingImg,
      title: "Choking",
      path: "Choking",
    },
    {
      image: bleedingImg,
      title: "Bleeding",
      path: "f/bleeding",
    },
    {
      image: burnsImg,
      title: "Burns",
      path: "f/burns",
    },
    {
      image: drowningImg,
      title: "Drowning",
      path: "f/drowning",
    },
    {
      image: animalBite,
      title: "Animal Bite",
      path: "f/Animal-Bite",
    },
    {
      image: poisoningImg,
      title: "Poisoning",
      path: "f/poisoning",
    },
  ];
  const dummyImageSet2: { image: string; title: string; path: string }[] = [
    {
      image: woundImg,
      title: "Wound",
      path: "f/wound",
    },
    {
      image: fractureImg,
      title: "Fracture",
      path: "f/fracture",
    },
    {
      image: vomitingImg,
      title: "Vomiting",
      path: "Vomiting",
    },
    {
      image: diarrheaImag,
      title: "Diarrhea",
      path: "Diarrhea",
    },
    {
      image: sprainImg,
      title: "Sprained Ankle/ knee/ arm",
      path: "f/sprain",
    },
    {
      image: noseBleedImg,
      title: "Nose Bleed",
      path: "NoseBleed",
    },
    {
      image: faintingImg,
      title: "Fainting",
      path: "f/fainting",
    },
    {
      image: allergyImg,
      title: "Allergy",
      path: "Allergy",
    },
  ];

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

  const navigate = UseNavigateToPath();

  const [toggleSearch, setToggleSearch] = useState<boolean>(false);

  return (
    <div className="w-full relative ">
      <HomeNavBar
        title={"First Aid"}
        onSearchFired={(path) => {
          if (path === "First Aid") {
            setToggleSearch(!toggleSearch);
          }
        }}
      />
      <HomeMobileNavBar
        title={"First Aid"}
        onSearchFired={(path) => {
          if (path === "First Aid") {
            setToggleSearch(!toggleSearch);
          }
        }}
      />

      {toggleSearch && (
        <div className="absolute  bg-white w-full top-[5%] z-[600] min-h-[350px] p-10 md:flex flex-col place-items-center justify-center">
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

      <div className=" px-3 pb-3 flex flex-col gap-4 pt-2 relative">
        <div id="ambulance&sos" className="flex w-full space-x-4">
          <div
            className="w-1/2 flex justify-center bg-white md:h-[165px] h-[140px] items-center rounded border shadow-md cursor-pointer"
            onClick={() => {
              navigate("find-an-ambulance");
            }}
          >
            <img
              src={ambulance}
              alt="Ambulance image"
              className="md:h-[100px] h-[70px]"
            />
          </div>
          <div
            className="w-1/2 flex justify-center bg-white md:h-[165px] h-[140px] items-center rounded border shadow-md cursor-pointer"
            onClick={() => {
              navigate("sos");
            }}
          >
            <img src={sos} alt="SOS" className="md:h-[100px] h-[70px]" />
          </div>
        </div>
        <div id="emergent">
          <div className="flex justify-between">
            <h2 className="font-bold">Emergent</h2>
            <p className="text-purple-600 font-extralight text-[0.8rem] cursor-pointer md:hidden">
              View More
            </p>
          </div>
          <div className="flex md:hidden w-[100%] justify-evenly item-center flex-row overflow-hidden">
            {dummyImageSet.slice(0, 3).map((item, index) => {
              return (
                <EmergentBox
                  path={item.path}
                  image={item.image}
                  key={index}
                  width={"w-[32%]"}
                  title={item.title}
                />
              );
            })}
          </div>
          <div className="md:flex hidden justify-evenly gap-1 flex-row item-center overflow-hidden">
            {dummyImageSet.map((item, index) => {
              return (
                <EmergentBox
                  path={item.path}
                  image={item.image}
                  key={index}
                  width={"w-[120px]"}
                  title={item.title}
                />
              );
            })}
          </div>
        </div>
        <div id="nonEmergent">
          <div className="flex justify-between">
            <h2 className="font-bold">Non-Emergent</h2>
            <p className="text-purple-600 font-extralight text-[0.8rem] cursor-pointer md:hidden">
              View More
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {dummyImageSet2.map((item, index) => {
              return (
                <NonEmergentBox
                  path={item.path}
                  image={item.image}
                  key={index}
                  title={item.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstAid1;
