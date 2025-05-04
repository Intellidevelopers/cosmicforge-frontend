import React from "react";
import FeaturesSlider from "./components/Features";
import HeroImg from "../../../assets/HomeImg/Healthcare.png";
import image1 from "../../../assets/images/FirstImagCustomView.svg";
import image2 from "../../../assets/images/secondImagCustomview.svg";
import Logo from "../../../assets/logo/logo_comsic_splash.svg";
import OtherFeature from "./components/SubFeatures";
import WhyUsImage from "../../../assets/HomeImg/whyusimg.png";

import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="bg-[#272EA74D]">
        <NavvigationComponent />
        <HeroBanner />
      </div>
      <OurFeatures />
      <WhyUsComponents />
      <BrowseDepartments />
    </React.Fragment>
  );
};

// navigation
const NavvigationComponent = () => {
  const navLinks = [
    {
      label: "home",
      href: "/",
    },
    {
      label: "about us",
      href: "/about",
    },
    {
      label: "features",
      href: "/features",
    },
    {
      label: "prices",
      href: "/prices",
    },
  ];
  return (
    <nav>
      <div className="flex justify-between items-center max-w-[90%] mx-auto py-4">
        <div>
          <img src={Logo} className="w-full h-[50px] col-span-1  " />
        </div>
        <div className="navigation_url">
          <ul className="flex  space-x-16 items-center text-sm font-medium">
            {navLinks.map((items, index) => (
              <Link to={items.href} key={index} className="">
                <li className="capitalize">{items.label}</li>
              </Link>
            ))}
            <Link to={"/register"}>
              <li className="capitalize text-white bg-[#272EA7] px-8 py-2 rounded-lg">
                Register
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
// body section
const HeroBanner = () => {
  return (
    <section className="min-h-screen">
      <div className="hero_banner grid grid-cols-2 items-center gap-12 max-w-[80%] mx-auto">
        <div className="hero_text">
          <h1 className="text-black text-3xl font-semibold">
            <span className="text-[#272EA7]">Simplified</span> and{" "}
            <span className="text-[#272EA7]">Smarter Healthcare</span>{" "}
            solutions, One click at a time.
          </h1>
          <p className="py-2 text-[#5B5959]">
            Streamlining healthcare services to meet your needs...
          </p>
          <div className="btn_items flex gap-6">
            <button className="bg-[#272EA7] text-white px-6 py-2 rounded-md cursor-pointer">
              Get started
            </button>
            <button className="border border-[#272EA7] text-[#272EA7] px-6 py-2 rounded-md cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
        <div className="hero_img relative">
          <img src={HeroImg} alt="" className="opacity-60" />
          <div className="absolute bg-[#272EA766] border border-[#272EA7] p-4 rounded-md top-[80%]">
            Need access to Remote Healthcare ? <br /> Cosmicforge is here to
            serve you.
          </div>
        </div>
      </div>
    </section>
  );
};

// first section
const OurFeatures = () => {
  return (
    <section className="py-6 pt-16 flex flex-col justify-center items-center bg-[#272da723]">
      <div className="text-center my-4">
        <h1 className="capitalize  text-[#272EA7] text-3xl font-bold">
          Our Features
        </h1>
        <p className="text-[#5B5959] my-2">What we are offering you.</p>
      </div>
      <div className="carousel_effect max-w-[80%] mx-auto">
        <FeaturesSlider />
      </div>
    </section>
  );
};

// why us
const WhyUsComponents = () => {
  // map data
  const whyData = [
    {
      id: "1",
      label: "Qualified Medical Professionals",
      contents:
        "Our physicians are certified and licensed professionals, who provide patients with standard medical care",
    },
    {
      id: "2",
      label: "AI and Modern Technologies",
      contents:
        "Our physicians are certified and licensed professionals, who provide patients with standard medical care",
    },
    {
      id: "3",
      label: "Patient-Doctor Confidentiality",
      contents:
        "Our physicians are certified and licensed professionals, who provide patients with standard medical care",
    },
  ];

  return (
    <section className="max-w-[80%] mx-auto mt-24">
      <div className="flex justify-center items-center">
        <div className="text-center">
          <h1 className="capitalize  text-[#272EA7] text-3xl font-bold">
            Why us?
          </h1>
          <p className="text-[#5B5959] my-2">Why you should trust us.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center gap-4">
        <div>
          {whyData.map((items) => (
            <div className="flex gap-4 items-start mb-6" key={items.id}>
              <h1 className="flex items-center justify-center text-white bg-[#272EA7] w-12 h-8 rounded-full text-center">
                {items.id}
              </h1>
              <div className="">
                <h1 className="font-semibold">{items.label}</h1>
                <p className="text-[#5B5959] leading-7 text-[14px] text-balance">
                  {items.contents}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative">
          <img src={WhyUsImage} alt="" className="absolute top-12 z-50" />
          <div className="relative">
            <img src={image1} alt="" />
            <img
              src={image2}
              alt=""
              className="absolute top-[10%] left-[2%] w-[90%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// browse departments
const BrowseDepartments = () => {
  return (
    <section className="bg-[#272EA74D] py-16">
      <div className="max-w-[80%] mx-auto">
        <div className="heading flex justify-between items-center">
          <h1 className="text-[#272EA7] text-4xl font-semibold">
            Browse by Departments
          </h1>
          <div className="btn">
            <button className="text-white bg-[#272EA7] py-2 px-4 rounded-md cursor-pointer">
              view all
            </button>
          </div>
        </div>
        <div>
          <OtherFeature />
        </div>
      </div>
    </section>
  );
};

// carousel effect

// sub footer

// footer section

export default LandingPage;
