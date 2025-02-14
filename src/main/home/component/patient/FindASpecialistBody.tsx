import {  useNavigate } from "react-router-dom";
import HomeNavBar from "./HomeNavBar";
import HomeMobileNavBar from "./HomeMobileNavBar";

import genMedIcon from "../../../../assets/background/specialist-general-med-image.svg";
import emgMedIcon from "../../../../assets/images/find-speccialist-emergency-med-image.svg";
import cardioIcon from "../../../../assets/images/cosmic-specialist-cardiology-image.svg";
import pediatricsIcon from "../../../../assets/images/comsic-speciallist-pediatrics-image.svg";
import neuorologyIcon from "../../../../assets/images/cosmic-specialist-nuerology-image.svg";
import OBGIcon from "../../../../assets/images/cosmic-specialist-og.svg";
import dentIcon from "../../../../assets/images/cosmic-specialist-dentistry-image.svg";
import otolynIcon from "../../../../assets/images/comsic-specialist-otolyryngology.svg";
import psyIcon from "../../../../assets/images/cosmic-specialist-psychiatry.svg";
import radiologyIcon from "../../../../assets/images/cosmic-specialist-radiology.svg";
import dermaIcon from "../../../../assets/images/cosmic-specialist-dermatology.svg";
import pathIcon from "../../../../assets/images/cosmic-specialist-pathology.svg";
import oncologyIcon from "../../../../assets/images/cosmic-specialist-oncology.svg";
import opthaIcon from "../../../../assets/images/cosmic-specialist-opthamology.svg";
import urologyIcon from "../../../../assets/images/cosmic-specialist-urology.svg";
import phyTherapyIcon from "../../../../assets/images/cosmic-specialist-physicaltheraphy.svg";
import rheumatoidIcon from "../../../../assets/images/cosmic-specialist-rheumatology.svg";
import gastroEnIcon from "../../../../assets/images/cosmic-specialist-gastro-enterology.svg";
import orthopedIcon from "../../../../assets/images/cosmic-specialist-orthopedics.svg";
import neonateIcon from "../../../../assets/images/cosmic-specialist-neonatology.svg";
import nephroIcon from "../../../../assets/images/cosmic-specialist-nephrology.svg";
import pulmoIcon from "../../../../assets/images/cosmic-specialist-pulmonology.svg";
import genoIcon from "../../../../assets/images/cosmic-specialist-geonomics.svg";
import hematologyIcon from "../../../../assets/images/cosmic-specialist-hematology.svg";
import { SpecialistCardProps } from "../../component/patient/SpecialistCard";
import FindASpecialistCard from "../../component/patient/FindASpecialistCard";
// import backNavigitionIcon from "../../../../assets/icons/cosmic-navigate-back.svg";



   const  FindASpecialistBody = () =>{
  const navigate = useNavigate();
  const specialCards: SpecialistCardProps[] = [
    {
      title: "General Medicine",
      icon: genMedIcon
    },
    {
      title: "Emergency Medicine",
      icon: emgMedIcon
    },
    {
      title: "Cardiology",
      icon: cardioIcon
    },
    {
      title: "Pediatrics",
      icon: pediatricsIcon
    },
    {
      title: "Nuerology",
      icon: neuorologyIcon
    },
    {
      title: "OB-GYN",
      icon: OBGIcon
    },
    {
      title: "Dentistry",
      icon: dentIcon
    },
    {
      title: "Otolarygngo logy",
      icon: otolynIcon
    },
    {
      title: "Pschiatry",
      icon: psyIcon
    },
    {
      title: "Radiology",
      icon: radiologyIcon
    },
    {
      title: "Dermatology",
      icon: dermaIcon
    },
    {
      title: "Pathology",
      icon: pathIcon
    },

    {
      title: "Oncology",
      icon: oncologyIcon
    },
    {
      title: "Ophthalmology",
      icon: opthaIcon
    },
    {
      title: "Urology",
      icon: urologyIcon
    },
    {
      title: "Physical Therapy",
      icon: phyTherapyIcon
    },
    {
      title: "Rheumatology",
      icon: rheumatoidIcon
    },
    {
      title: "Grastro Enterology",
      icon: gastroEnIcon
    },
    {
      title: "Orthopedics",
      icon: orthopedIcon
    },
    {
      title: "Neonatology",
      icon: neonateIcon
    },
    {
      title: "Nephrology",
      icon: nephroIcon
    },
    {
      title: "Pulmonology",
      icon: pulmoIcon
    },
    {
      title: "Geonomics",
      icon: genoIcon
    },
    {
      title: "Hematology",
      icon: hematologyIcon
    }
  ];

  return (
    <div className=" w-full  relative  h-dvh overflow-x-hidden    overflow-y-auto flex flex-col cursor-default">
      <HomeNavBar title="Find A Specialist" />
      <HomeMobileNavBar title="Find A Specialist" />
      <div className=" ps-0  md:ps-[294px]     ">
        <div className="w-full m-5 flex place-items-center gap-3" onClick={() => {
          navigate(-1);
        }}>
          {/* <img src={backNavigitionIcon}  onClick={() => {
              navigate(-1);
            }} alt='back'/>
          <p
            className="font-light "
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </p> */}
        </div>
        <div className="w-full">
        {specialCards.map((item: SpecialistCardProps, index) =>
          <FindASpecialistCard
            key={index}
            icon={item.icon}
            title={item.title}
          />
        )}
      </div>
  
      </div>
    </div>
  );
};

export default FindASpecialistBody;
