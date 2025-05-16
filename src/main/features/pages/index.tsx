import React from "react";
import { Link } from "react-router-dom";
import FooterComponent from "../../onboarding/pages/components/Footer";
import NavigationComponent from "../../onboarding/pages/components/Navigation";
import {
  what_we_offering,
  other_feature_data,
  Offering,
} from "../data/features_data";
import right_arrow from "../../../assets/features/right_arrow.svg";
import first from "../../../assets/features/1st.svg";
import second from "../../../assets/features/2nd.svg";
import third from "../../../assets/features/3rd.svg";
import doctor from "../../../assets/features/doc.png";
import BrowseFeatures from "../../onboarding/pages/components/BrowseFeatures";
import { ArrowRight } from "lucide-react";

const FeaturesPage = () => {
  return (
    <React.Fragment>
      <NavigationComponent />

      <main className="bg-[rgba(39,46,167,0.15)]">
        <OurFeatures />
        <WhyUs />
        <BrowseByDocuments />
        <OtherFeatures />
      </main>

      <FooterComponent />
    </React.Fragment>
  );
};

const OurFeatures = () => {
  return (
    <section className="mt-36 sm:mt-24 mx-auto max-w-[80%]">
      <div className="">
        <h1 className="capitalize text-[#272EA7] text-[40px] font-bold text-center">
          Our Features{" "}
        </h1>
        <p className="text-[rgba(91,89,89,1)] mt-2 text-center mb-4">
          What we are offering you.
        </p>

        <div className="flex sm:flex-row flex-col justify-between flex-wrap items-start">
          {what_we_offering.map((data) => WeOffering(data))}
        </div>
      </div>
    </section>
  );
};

const WeOffering = (data: Offering) => {
  return (
    <div className="sm:w-1/5 h-[460px] bg-white rounded-[5px] p-4 mr-3 mb-5 relative">
      <img src={data.img_url} />
      <p className="font-semibold text-[20px] leading-[30px] mt-3">
        {data.title}
      </p>
      <p className="text-[rgba(91,89,89,1)] leading-[30px]">
        {data.description}
      </p>

      <Link to={data.link}>
        <div className="bg-[rgba(39,46,167,0.15)] w-[110px] h-[63px] absolute bottom-0 right-0 flex items-end justify-end">
          <span className="relative bg-white w-[100px] h-[53px] p-2 flex items-center justify-center z-10 rounded-[5px]">
            <img
              src={right_arrow}
              className="m-auto max-w-full max-h-full"
              alt="Right Arrow"
            />
          </span>
        </div>
      </Link>
    </div>
  );
};

const WhyUs = () => {
  return (
    <section className="mt-10 bg-white pb-[100px] pt-10">
      <div className="max-w-[80%] mx-auto">
        <div>
          <h1 className="capitalize text-[#272EA7] text-[40px] font-bold text-center">
            Why Us?{" "}
          </h1>
          <p className="text-[rgba(91,89,89,1)] mt-2 text-center mb-24">
            Why you should trust us
          </p>
        </div>

        <div className="flex justify-between relative flex-wrap items-end">
          <div className="md:w-[50%]">
            <div className="flex items-start mb-2">
              <img src={first} />
              <div>
                <p className="font-bold text-[24px]">
                  Qualified Medical Professional
                </p>
                <p className="font-normal leading-[40px] text-[15px] text-[rgba(91, 89, 89, 1)]">
                  Our physicians are certified and licensed professionals, who
                  provide patients with standard medical care
                </p>
              </div>
            </div>
            <div className="flex items-start mb-2">
              <img src={second} />
              <div>
                <p className="font-bold text-[24px]">
                  AI and Modern Technologies{" "}
                </p>
                <p className="font-normal leading-[40px] text-[15px] text-[rgba(91, 89, 89, 1)]">
                  Our physicians are certified and licensed professionals, who
                  provide patients with standard medical care
                </p>
              </div>
            </div>
            <div className="flex items-start mb-2">
              <img src={third} />
              <div>
                <p className="font-bold text-[24px]">
                  Patient-Doctor Confidentiality
                </p>
                <p className="font-normal leading-[40px] text-[15px] text-[rgba(91, 89, 89, 1)]">
                  Our physicians are certified and licensed professionals, who
                  provide patients with standard medical care
                </p>
              </div>
            </div>
          </div>

          <div className="w-[50%] hidden md:block">
            <img src={doctor} className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

const BrowseByDocuments = () => {
  return (
    <section>
      <div className="max-w-[80%] mx-auto mb-[50px] mt-10">
        <div className="flex justify-between items-end mb-[50px]">
          <h4 className="capitalize text-[#272EA7] text-[20px] sm:text-[40px] font-bold">
            Browse by Departments
          </h4>

          <Link to="/departments">
            <p className="capitalize text-white bg-[#272EA7] px-3 sm:px-8 py-2 rounded-lg whitespace-nowrap">
              view all
            </p>
          </Link>
        </div>
        <div className="browse_features">
          <BrowseFeatures />
        </div>
      </div>
    </section>
  );
};

const OtherFeatures = () => {
  return (
    <section className="mx-auth">
      <h4 className="capitalize text-[#272EA7] text-[20px] sm:text-[40px] font-bold text-center ">
        Other Feautures we have to Offer
      </h4>
      <p className="text-[rgba(91, 89, 89, 1)] text-center text-[15px] mb-5 px-5">
        At Cosmicforge, we offer a range of standardized top notch services to
        ensure we provide you with the best affordable and remote healthcare at
        your convenience.
      </p>

      <div className="flex justify-center flex-wrap max-w-[70%] mx-auto">
        {other_feature_data.map((data) => features(data))}
      </div>
    </section>
  );
};

const features = (data: Offering) => {
  return (
    <div className="bg-white shadow-[1px_1px_10.5px_0px_rgba(0,0,0,0.1)] w-[350px] h-[338px] rounded-lg mb-10 mr-5 p-5 flex flex-col justify-between">
      <div>
        <img src={data.img_url} className="mb-2" />
        <p className="font-bold leading-[30px]">{data.title}</p>
        <p className="leading-[30px] text-[rgba(91, 89, 89, 1)]">
          {data.description}
        </p>
      </div>

      <Link to={data.link}>
        <p className="flex">
          Learn More <ArrowRight />
        </p>
      </Link>
    </div>
  );
};

export default FeaturesPage;
