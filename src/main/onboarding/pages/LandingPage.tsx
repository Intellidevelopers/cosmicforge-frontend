import React from "react";

// components imports
import BrowseFeatures from "./components/BrowseFeatures";
// import FeaturesSlider from "./components/Features";
import Frequently from "./components/Frequently";
import Footer from "./components/Footer";
import ShopComponent from "./components/ShopComponent";

// import OtherFeature from "./components/SubFeatures";
import Testimonials from "./components/Testimonials";
// import WhyUsImage from "../../../assets/HomeImg/whyusimg.png";
// import ImageFeatures from "./components/ImageFeatures";
import NavigationComponent from "./components/Navigation";

// image imports
import Borderline from "../../../assets/HomeImg/borderline.png";
import Cart from "../../../assets/HomeImg/Shopping-Cart.png";
import DoctorMed from "../../../assets/HomeImg/doctorcal.png";
import HeroImg from "../../../assets/HomeImg/Healthcare.png";
// import image1 from "../../../assets/images/FirstImagCustomView.svg";
// import image2 from "../../../assets/images/secondImagCustomview.svg";
import Iphone from "../../../assets/HomeImg/iphone.png";
// import Logo from "../../../assets/logo/logo_comsic_splash.svg";
import newProfile from "../../../assets/images/cosmic-display-profile-new.svg";
import FeaturesImg from "../../../assets/HomeImg/Features-List.png";
import Stethoscope from "../../../assets/HomeImg/Stethoscope.png";

// import ProfileMed from "../../../assets/HomeImg/profilemed.png";
import profile2 from "../../../assets/images/cosmic-display-profile-2.svg";
import profile3 from "../../../assets/images/cosmic-display-profile-3.svg";
import profile4 from "../../../assets/images/cosmic-display-profile-4.svg";
import ContactImage from "../../../assets/HomeImg/contactImg.png";

// dynamic imports
import { Link, useNavigate } from "react-router-dom";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";

// Shadcn imports
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="bg-[#272EA74D] bg-white">
        <NavigationComponent />
        <HeroBanner />
        <SubHeroBanner />
      </div>
      {/* <ShopComponent /> */}
      <BrowseDepartments />
      <Subscription />
      <RemoteHealthCare />
      {/* <div className="">
        <ImageFeatures />
      </div> */}
      {/* <Testimonials /> */}
      <Frequently />
      <Download />
      {/* <ContactForm /> */}
      {/* <SubFooter /> */}
      <Footer />
    </React.Fragment>
  );
};

// body section
const HeroBanner = () => {
  return (
    <section className="hero_banner">
      <div className="grid mt-36 sm:mt-24 md:grid-cols-2 items-center gap-12 max-w-[80%] mx-auto">
        <div className="hero_text">
          <h1 className="text-black text-3xl font-semibold">
            <span className="text-[#272EA7]">Simplified</span> and{" "}
            <span className="text-[#272EA7]">Smarter Healthcare</span>{" "}
            solutions, One click at a time.
          </h1>
          <p className="py-2 text-[#5B5959]">
            Streamlining healthcare services to meet your needs...
          </p>
          <div className="btn_items flex gap-6 text-sm sm:text-base">
            <Link to="/selectRole">
              <button className="bg-[#272EA7] text-white px-6 py-2 rounded-md cursor-pointer">
                Get started
              </button>
            </Link>
            {/* <button className="border border-[#272EA7] text-[#272EA7] px-6 py-2 rounded-md cursor-pointer">
              Learn More
            </button> */}
          </div>
        </div>
        <div className="hero_img relative">
          <img src={HeroImg} alt="" className="" />
          {/* <div className="absolute bg-[#272EA766] border border-[#272EA7] p-4 rounded-md top-[80%]">
            Need access to Remote Healthcare ? <br /> Cosmicforge is here to
            serve you.
          </div> */}
        </div>
      </div>
    </section>
  );
};

// const subHeroBanner
const SubHeroBanner = () => {
  // cons data for the sub banner
  const SubData = [
    {
      imageLabel: FeaturesImg,
      label: "Features",
    },
    {
      imageLabel: Stethoscope,
      label: "Consultation",
    },
    {
      imageLabel: Cart,
      label: "Shopping",
    },
  ];
  return (
    <section className="py-8 max-w-[80%] mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-start gap-8">
        {/* {SubData.map((items, index) => (
          <div
            className="border border-[#272EA7] rounded-md py-3 pt-12 px-3"
            key={index}
          >
            <div className="imagess flex items-center justify-center">
              <img src={items.imageLabel} alt="" className="w-[30%]" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-[#272EA7] font-semibold">{items.label}</h1>
                <p className="text-sm">Explore Now!</p>
              </div>
              <div>
                <GrLinkNext />
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
};

// first section
// const OurFeatures = () => {
//   return (
//     <section className="py-6 pt-16 flex flex-col justify-center items-center bg-[#272da723]">
//       <div className="text-center my-4">
//         <h1 className="capitalize  text-[#272EA7] text-3xl font-bold">
//           Our Features
//         </h1>
//         <p className="text-[#5B5959] my-2">What we are offering you.</p>
//       </div>
//       <div className="carousel_effect max-w-[80%] mx-auto">
//         <FeaturesSlider />
//       </div>
//     </section>
//   );
// };

// // why us
// const WhyUsComponents = () => {
//   // map data
//   const whyData = [
//     {
//       id: "1",
//       label: "Qualified Medical Professionals",
//       contents:
//         "Our physicians are certified and licensed professionals, who provide patients with standard medical care",
//     },
//     {
//       id: "2",
//       label: "AI and Modern Technologies",
//       contents:
//         "Our physicians are certified and licensed professionals, who provide patients with standard medical care",
//     },
//     {
//       id: "3",
//       label: "Patient-Doctor Confidentiality",
//       contents:
//         "Our physicians are certified and licensed professionals, who provide patients with standard medical care",
//     },
//   ];

//   return (
//     <section className="max-w-[80%] mx-auto mt-24">
//       <div className="flex justify-center items-center">
//         <div className="text-center">
//           <h1 className="capitalize  text-[#272EA7] text-3xl font-bold">
//             Why us?
//           </h1>
//           <p className="text-[#5B5959] my-2">Why you should trust us.</p>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 items-center gap-4">
//         <div>
//           {whyData.map((items) => (
//             <div className="flex gap-4 items-start mb-6" key={items.id}>
//               <h1 className="flex items-center justify-center text-white bg-[#272EA7] w-12 h-8 rounded-full text-center">
//                 {items.id}
//               </h1>
//               <div className="">
//                 <h1 className="font-semibold">{items.label}</h1>
//                 <p className="text-[#5B5959] leading-7 text-[14px] text-balance">
//                   {items.contents}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="relative">
//           <img src={WhyUsImage} alt="" className="absolute top-12 z-50" />
//           <div className="relative">
//             <img src={image1} alt="" />
//             <img
//               src={image2}
//               alt=""
//               className="absolute top-[10%] left-[2%] w-[90%]"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// browse departments
const BrowseDepartments = () => {
  // navigation link
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-[#272EA7]">
      <div className="max-w-[90%] mx-auto">
        <div className="heading mb-8 flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 items-start sm:items-center">
          <div>
            <h1 className="text-white text-4xl font-semibold">
              Need a specialist or Consultant?
            </h1>
            <p className="text-white text-base font-semibold">
              Browse by Departments
            </p>
          </div>
          <div className="btn">
            <Link to={"/departments"}>
              <button
                onClick={() => navigate("/departments")}
                className="text-[#272EA7] bg-white py-2 px-4 rounded-md cursor-pointer"
              >
                view all
              </button>
            </Link>
          </div>
        </div>
        <div className="browse_features">
          <BrowseFeatures />
        </div>
      </div>
    </section>
  );
};

// subscription components
const Subscription = () => {
  // Subscription data
  const SubscriptionData = [
    {
      plan: "Free plan",
      suitable: "suitable to all premium subscribers",
      price: "0.00",
      listone: "Access to chat only.",
      listtwo: "Access to 10 AI Chatbot Responses",
      listThree: "Access to General & Emergency specialist only.",
      listFour: "Access to Shop/Purchase",
      listFive: "Access to Support",
    },
    {
      plan: "Basic plan",
      suitable: "suitable to all Basic subscribers",
      price: "16,000.00",
      listone: "Video Consultations and chat.",
      listtwo: "Access to 50 AI Chatbot Responses",
      listThree: "Access to 20 AI Diagnostic Requests.",
      listFour: "Access to all Department Specialist.",
      listFive: "Access to Shop/Purchase",
      listSix: "Suitable for Individual account only",
      listSeven: "Access to standard support",
    },
    {
      plan: "Medium plan",
      suitable: "suitable to all Medium subscribers",
      price: "30,000.00",
      listone: "Video Consultations and chat.",
      listtwo: "Access to 100 AI Chatbot Responses",
      listThree: "Access to 50 AI Diagnostic Requests.",
      listFour: "Access to all Department Specialist.",
      listFive: "Access to Shop/Purchase",
      listSix: "Suitable for Family account ( 1 Adults & 2 or more Children ) ",
      listSeven: "Access to First Aid Assistance.",
      listEight: "Access to Standard support",
    },
    {
      plan: "premium plan",
      suitable: "suitable to all premium subscribers",
      price: "60,000.00",
      listone: "Video Consultations and chat.",
      listtwo: "Access to Unlimited AI Chatbot Responses",
      listThree: "Access to Unlimited AI Diagnostic Requests.",
      listFour: "Access to all Department Specialist.",
      listFive: "Access to Shop/Purchase",
      listSix: "Suitable for Family account ( 2 Adults & 2 or more Children ) ",
      listSeven: "Access to First Aid Assistance.",
      listEight: "Access to Priority support",
    },
  ];

  return (
    <section className="subscription max-w-[90%] mx-auto my-32">
      <div>
        <div className="font-semibold text-black text-4xl flex flex-col items-center justify-center mb-4">
          <h1 className="capitalize text-center sm:text-left">
            Our subscription Plans
          </h1>
          <img src={Borderline} alt="" className="relative sm:left-[100px]" />
          <p className="font-medium text-base">
            Cosmicforge has the best plan for you!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 items-start text-sm">
          {SubscriptionData.map((items, index) => {
            const listItems = [
              items.listone,
              items.listtwo,
              items.listThree,
              items.listFour,
              items.listFive,
              items.listSix,
              items.listSeven,
              items.listEight,
            ].filter(Boolean);

            return (
              <div
                className="h-[550px] flex flex-col justify-between border border-[#272EA7] rounded-sm px-8 pr-2 py-6 shadow-md hover:text-white hover:bg-[#272EA7] duration-300 cursor-pointer"
                key={index}
              >
                <div>
                  <h1 className="font-medium capitalize text-base">
                    {items.plan}
                  </h1>
                  <p className="text-[12px] my-4">{items.suitable}</p>
                  <div className="price">
                    <h1>
                      <span className="text-3xl font-bold">{items.price}</span>
                      /Month
                    </h1>
                  </div>
                  <ul
                    style={{ listStyleType: "disc" }}
                    className="text-[12px] mt-4 leading-7 ml-2"
                  >
                    {listItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Button className="bg-blue-950 mt-4 w-[80%] text-white cursor-pointer hover:bg-blue-950">
                    Get started
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Remote Healthcare
const RemoteHealthCare = () => {
  return (
    <section className="bg-[#272EA7] text-white mt-8 py-20">
      <div className="max-w-[80%] mx-auto text-center">
        <h1 className="font-semibold text-3xl mb-4">
          Remote Healthcare made available to you, anywhere and anytime...
        </h1>
        <p className="">
          Gain access to healthcare services remotely, enjoy mind blowing
          features just for you!
        </p>
        <div className="flex justify-center mt-8">
          <Button className="text-[#272EA7] bg-white px-8 py-6 hover:bg-white duration-300">
            Get Started
          </Button>
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
            Our official App is coming to the App Store and Play Store. <br />
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
      <div className="img_contents grid md:grid-cols-3 items-start gap-2s">
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
        <div className="counts flex flex-col md:flex-row items-center justify-center gap-8">
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

// contactform
const ContactForm = () => {
  return (
    <section className="bg-[#0a0d1723] pb-8">
      <div className="max-w-[80%] mx-auto grid md:grid-cols-2 items-center gap-4">
        <div>
          <img src={ContactImage} alt="" />
        </div>
        <div className="contact_form">
          <div className="headers mb-4">
            <h1 className="text-3xl text-[#272EA7] font-semibold mb-3">
              Contact Form
            </h1>
            <p className="font-medium">
              We are always here to listen, Leave us a message.
            </p>
          </div>
          <form action="">
            <div className="grid grid-cols-2 items-start gap-4 mb-2">
              <Input
                type="text"
                className="outline-none bg-white"
                placeholder="Last Name"
              />
              <Input
                type="text"
                className="bg-white outline-none"
                placeholder="First Name"
              />
            </div>
            <Input
              type="email"
              className="bg-white mb-2 outline-none"
              placeholder="Email"
            />
            <Input
              type="number"
              className="bg-white mb-2 outline-none"
              placeholder="Number"
            />
            <Textarea className="bg-white" placeholder="Message" />
            <div className="flex justify-center items-center mt-4">
              <Button className="bg-[#272EA7] text-white py-3 px-24 rounded-md hover:bg-blue-800 duration-200">
                submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// sub footer
const SubFooter = () => {
  return (
    <section className="bg-white text-center py-12">
      <div className="max-w-[80%] mx-auto text-[#272EA7]">
        <h1 className="capitalize font-semibold text-3xl my-4">
          Sign Up for Our Newsletter
        </h1>
        <p className="my-4 text-sm font-light text-black">
          Get weekly update about our products and services on your email
        </p>
        <div className="max-w[100%] md:max-w-[50%] mx-auto my-6 mt-12">
          <div className="flex">
            <Input
              placeholder="Enter email"
              className="flex-grow outline-none placeholder:text-black rounded-l-md border-[#272EA7]"
            />
            <button className="text-sm font-medium capitalize px-4 py-[6px] rounded-r-md bg-[#272EA7] text-white whitespace-nowrap cursor-pointer">
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
