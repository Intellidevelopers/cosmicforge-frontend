import HomeNavBar from "./HomeNavBar";
import aiImage from "../../../../assets/background/home-card-ai-diagnosis-image.svg";
import auRealityImage from "../../../../assets/background/home-card-augmented-reality.svg";
import SpecialistCard, { SpecialistCardProps } from "./SpecialistCard";
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
import arrowIcon from "../../../../assets/icons/cosmic-arrow.svg";
import WellnessProductCard, { WellnessProductCardProps } from "./WellnessProductCard";

import tempProductImage from '../../../../assets/images/cosmic-wellness-product-temp.svg'
import { useRef } from "react";
import useSetScrollbar from "../../hook/patient/useSetUpScrollbar";
import HomeMobileNavBar from "./HomeMobileNavBar";



//Importing here to avoid typing the classes over and over again


const HomeBody = () => {
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
      title: "Otolarygngology",
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
  const wellnessProducts: WellnessProductCardProps[] = [
    {
      productTitle: ' Ibuprofen 400mg',
      productDescription: ' 100 tablets',
      productImage: tempProductImage,
      productPrice: " N 3,500"

    },
    {
      productTitle: ' Ibuprofen 400mg',
      productDescription: ' 100 tablets',
      productImage: tempProductImage,
      productPrice: " N 3,500"

    },
    {
      productTitle: ' Ibuprofen 400mg',
      productDescription: ' 100 tablets',
      productImage: tempProductImage,
      productPrice: " N 3,500"

    },
    {
      productTitle: ' Ibuprofen 400mg',
      productDescription: ' 100 tablets',
      productImage: tempProductImage,
      productPrice: " N 3,500"

    },
    {
      productTitle: ' Ibuprofen 400mg',
      productDescription: ' 100 tablets',
      productImage: tempProductImage,
      productPrice: " N 3,500"

    },
    {
      productTitle: ' Ibuprofen 400mg',
      productDescription: ' 100 tablets',
      productImage: tempProductImage,
      productPrice: " N 3,500"

    }
    , {
      productTitle: ' Ibuprofen 400mg',
      productDescription: ' 100 tablets',
      productImage: tempProductImage,
      productPrice: " N 3,500"

    }
  ]


  const wellnessScrollContainerRef = useRef(null)



  const { scrollWellnessProductCardRight, scrollWellnessProductCardLeft } = useSetScrollbar()
  
  return (
    <div className=" w-full  relative  h-dvh overflow-x-hidden    overflow-y-auto flex flex-col">

      <HomeNavBar title="Home" />
      <HomeMobileNavBar title="Home" />

      <div className=" md:ps-[294px] ">
        <div className="w-full  p-2  md:justify-center   inline-flex overflow-x-auto">
          <img
            src={aiImage}
            alt="Ai diagnosis image"
            className=" bg-blue-400 max-h-[150px] rounded-xl me-8 mt-1"
          />
          <img
            src={auRealityImage}
            alt="Ai diagnosis image"
            className=" bg-orange-400   max-h-[150px] rounded-xl m-1"
          />
        </div>

        <div className="w-full md:ps-10  ">

          <div className="w-full flex">
            <p className="font-extrabold w-fit md:w-[30%] mt-2 ms-2">
              Find a specialist
            </p>
            <p className=" absolute right-0 md:right-10 md:ms-0 mt-2 me-2  md:w-[66%] text-end md:pe-12 font-extralight text-cosmic-primary-color">
              see more
            </p>
          </div>
          <div
            className=" cursor-default font-medium  space-x-3  md:w-[92%] w-[100%]  inline-flex  overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {specialCards.map((item: SpecialistCardProps, index: number) =>
              <SpecialistCard key={index} icon={item.icon} title={item.title} />
            )}
          </div>
        </div>

        <div className="relative md:ps-7 w-full " >
          <div className="relative mt-2 md:m-3 flex gap-4 place-items-center md:w-[92%] ">
            <p className="font-bold min-w-fit ms-2">Wellness Product</p>

            <p className="absolute right-0 md:right-3  md:relative  font-extralight min-w-fit text-cosmic-color-lightBlue me-2">see more</p>
            <div className="hidden w-[74%] m-2 relative md:flex justify-end place-content-center gap-5">
              <img src={arrowIcon} alt="scroll left" onClick={() => {
                scrollWellnessProductCardRight(wellnessScrollContainerRef)
              }} />
              <img src={arrowIcon} className="rotate-[-180deg]" alt="scroll left" onClick={() => {
                scrollWellnessProductCardLeft(wellnessScrollContainerRef)
              }} />

            </div>
          </div>
          <div ref={wellnessScrollContainerRef} className="cursor-default font-medium  space-x-3  md:w-[92%] w-[98%] inline-flex  overflow-x-auto" style={{ scrollbarWidth: 'none' }}>

            {

              wellnessProducts.map((item: WellnessProductCardProps, index) => (
                <WellnessProductCard key={index} productTitle={item.productTitle} productDescription={item.productDescription} productImage={item.productImage} productPrice={item.productPrice} />
              ))


            }
          </div>

        </div>


      </div>
    </div>
  );
};

export default HomeBody;
