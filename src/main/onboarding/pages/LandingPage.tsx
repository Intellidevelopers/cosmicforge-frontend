import React from "react";

// components imports
import BrowseFeatures from "./components/BrowseFeatures";
import FeaturesSlider from "./components/Features";
import Frequently from "./components/Frequently";
import Footer from "./components/Footer";
import OtherFeature from "./components/SubFeatures";
import Testimonials from "./components/Testimonials";
import WhyUsImage from "../../../assets/HomeImg/whyusimg.png";
import ImageFeatures from "./components/ImageFeatures";

// image imports
import DoctorMed from "../../../assets/HomeImg/doctorcal.png";
import HeroImg from "../../../assets/HomeImg/Healthcare.png";
import image1 from "../../../assets/images/FirstImagCustomView.svg";
import image2 from "../../../assets/images/secondImagCustomview.svg";
import Iphone from "../../../assets/HomeImg/iphone.png";
import Logo from "../../../assets/logo/logo_comsic_splash.svg";
import newProfile from "../../../assets/images/cosmic-display-profile-new.svg";

// import ProfileMed from "../../../assets/HomeImg/profilemed.png";
import profile2 from "../../../assets/images/cosmic-display-profile-2.svg";
import profile3 from "../../../assets/images/cosmic-display-profile-3.svg";
import profile4 from "../../../assets/images/cosmic-display-profile-4.svg";

// dynamic imports
import { Link, useNavigate } from "react-router-dom";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

// Shadcn imports
import { Input } from "../../../components/ui/input";

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="bg-[#272EA74D]">
        <NavvigationComponent />
        <HeroBanner />
      </div>
      <div className="bg-[#272da72d]">
        <ImageFeatures />
      </div>
      <OurFeatures />
      <WhyUsComponents />
      <BrowseDepartments />
      <Testimonials />
      <Frequently />
      <Download />
      <SubFooter />
      <Footer />
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
            <Link to={"/selectRole"}>
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
  // navigation link
  const navigate = useNavigate();

  return (
    <section className="bg-[#272EA74D] py-16">
      <div className="max-w-[80%] mx-auto">
        <div className="heading flex justify-between items-center">
          <h1 className="text-[#272EA7] text-4xl font-semibold">
            Browse by Departments
          </h1>
          <div className="btn">
            <Link to={"/departments"}>
              <button
                onClick={() => navigate("/departments")}
                className="text-white bg-[#272EA7] py-2 px-4 rounded-md cursor-pointer"
              >
                view all
              </button>
            </Link>
          </div>
        </div>
        <div className="browse_features">
          <BrowseFeatures />
        </div>
        <div>
          <OtherFeature />
        </div>
      </div>
    </section>
  );
};

// doctor call and med components

const Download = () => {
  return (
    <section className="max-w-[80%] mx-auto py-16">
      <h1 className="text-[#272EA7] text-center font-bold text-3xl tracking-wide my-4">
        The future of healthcare, promoting timely convenience
      </h1>
      <div className="download_contents text-center">
        <div className="text_contents">
          <p className="leading-10 mb-4">
            Our official App is available for download on App Store and Play
            Store. <br /> Download Now.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="btns flex gap-4 items-center">
            <button className="flex gap-2 items-center  text-white bg-[#272EA7] py-3 px-6 rounded-md cursor-pointer">
              <BiLogoPlayStore />
              <span>App store</span>
            </button>
            <button className="flex gap-2 items-center text-white bg-[#272EA7] py-3 px-6 rounded-md cursor-pointer">
              <FaApple />
              <span>Play store</span>
            </button>
          </div>
        </div>
      </div>
      <div className="img_contents grid grid-cols-3 items-start gap-2s">
        <div className="one">
          <div>
            <img src={DoctorMed} alt="" className="" />
          </div>
          <div className="relative top-[-30px] bg-white py-4 rounded-md shadow-md p-4">
            <h1 className="text-lg font-semibold text-[#030303]">
              virtual Consultation
            </h1>
            <p className="text-sm text-balance text-[#5B5959] leading-7">
              Virtual Consultation with specialist to meet your health needs.
            </p>
          </div>
        </div>
        <div className="two">
          <img src={Iphone} alt="" />
        </div>
        <div>
          <div className="w-full flex flex-wrap gap-8 mt-8 bg-white py-4 rounded-md shadow-md">
            <img src={profile2} className="h-[80px]" alt="image" />
            <img src={profile3} className="h-[80px]" alt="image" />
            <img src={profile4} className="h-[80px]" alt="image" />
            <img src={profile2} className="h-[80px]" alt="image" />
            <img src={newProfile} className="h-[80px]" alt="image" />
          </div>
          <div className="mt-2 bg-white py-4 rounded-md shadow-md p-4">
            <h1 className="text-lg font-semibold text-[#030303]">
              Profile management
            </h1>
            <p className="text-sm text-balance text-[#5B5959] leading-7">
              Control Health history and data through profile management{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <SubDownloadComponents />
      </div>
    </section>
  );
};

// subDownload components
const SubDownloadComponents = () => {
  const DataCount = [
    {
      count: "1k",
      content: "Total application users",
    },
    {
      count: "500+",
      content: "Doctors who have joined us",
    },
    {
      count: "50+",
      content: "Pharmacies who have joined us",
    },
    {
      count: "30+",
      content: "Laboratories who have joined us",
    },
    {
      count: "80%",
      content: "Growth since Launch",
    },
  ];
  return (
    <section className="mt-6">
      <div className="">
        <div className="counts flex items-center justify-center gap-8">
          {DataCount.map((items, index) => {
            const isFirst = index === 0;
            const isLast = index === DataCount.length - DataCount.length;

            return (
              <div
                className={`text-center px-4 ${
                  !isFirst && !isLast ? "border-l border-gray-300" : ""
                }`}
                key={index}
              >
                <h1 className="text-[#272EA7] text-2xl font-semibold">
                  {items.count}
                </h1>
                <p className="text-[#030303] text-sm leading-6 tracking-wide mt-2">
                  {items.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// sub footer
const SubFooter = () => {
  return (
    <section className="bg-[#272EA7] text-center py-12">
      <div className="max-w-[80%] mx-auto text-white">
        <h1 className="capitalize font-semibold text-3xl my-4">
          Sign Up for Our Newsletter
        </h1>
        <p className="my-4 text-base font-light tracking-widest">
          Get weekly update about our products and services on your email
        </p>
        <div className="max-w-[50%] mx-auto my-6 mt-12">
          <div className="flex">
            <Input
              placeholder="Enter email"
              className="flex-grow outline-none placeholder:text-white rounded-l-md"
            />
            <button className="text-sm font-medium capitalize px-4 py-[6px] rounded-r-md bg-white text-[#272ea7] whitespace-nowrap cursor-pointer">
              subscribe now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// footer section

export default LandingPage;
