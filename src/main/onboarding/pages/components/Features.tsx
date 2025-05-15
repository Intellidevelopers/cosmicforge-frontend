import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import CarouselImage from "../../../../assets/HomeImg/carousel.png";

import { FaArrowRightLong } from "react-icons/fa6";

const FeaturesSlider = () => {
  // data for the carousel effects
  const carouselData = [
    {
      label: "Unified Healthcare Hub",
      image: CarouselImage,
      contents:
        "A unified platform connecting doctors, patients, labs, and pharmacies seamlessly.",
    },
    {
      label: "User-Centric Design",
      image: CarouselImage,
      contents: "Intuitive, role-based interfaces tailored for each user type.",
    },
    {
      label: "AI-Powered Tools",
      image: CarouselImage,
      contents:
        "Advanced features like robotic virtual diagnosis and Chat Bot virtual health assistant.",
    },
    {
      label: "Simplified Processes",
      image: CarouselImage,
      contents:
        "Simplified process to schedule appointments, manage tests and prescriptions.",
    },
    {
      label: "Unified Healthcare Hub",
      image: CarouselImage,
      contents:
        "A unified platform connecting doctors, patients, labs, and pharmacies seamlessly.",
    },
    {
      label: "Unified Healthcare Hub",
      image: CarouselImage,
      contents:
        "A unified platform connecting doctors, patients, labs, and pharmacies seamlessly.",
    },
    {
      label: "Unified Healthcare Hub",
      image: CarouselImage,
      contents:
        "A unified platform connecting doctors, patients, labs, and pharmacies seamlessly.",
    },
  ];

  // map methods for the carousel contents
  return (
    <Carousel>
      <CarouselContent className="">
        {carouselData.map((props, index) => (
          <CarouselItem
            className="bg-white p-4 pb-0 rounded-sm mx-2"
            key={index}
          >
            <div className="">
              <div className="img_contents">
                <img src={props.image} alt="" />
              </div>
              <div className="text_contents relative">
                <h1 className="font-semibold text-lg py-2">{props.label}</h1>
                <p className="text-[#5B5959] text-[14px] tracking-wider">
                  {props.contents}
                </p>
              </div>
              <div className="flex justify-end items-end">
                <button>
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default FeaturesSlider;
