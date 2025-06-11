import { useNavigate } from "react-router-dom";

import Footer from "../pages/components/Footer";
import NavigationComponent from "./components/Navigation";
import Services from "../../../assets/HomeImg/Services.svg";
import Services2 from "../../../assets/HomeImg/Services2.svg";
import Services3 from "../../../assets/HomeImg/Services3.svg";
import aboutUsBg from "../../../assets/HomeImg/aboutUs.jpg";
import { useEffect } from "react";

// Import images - adjust paths as needed for your project structure

function AboutUs() {
  // const { state } = useLocation();
  const navigate = useNavigate();
  // const departmentData = state?.department;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full font-poppins">
      <NavigationComponent />
      {/* Hero Section with Back Button */}
      <div className="w-full relative">
        <div className="w-full relative">
          <img
            src={aboutUsBg}
            alt="CosmicForge HealthNet"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              About Us
            </h1>
          </div>
        </div>
        <button
          className="absolute bottom-4 left-4 md:bottom-8 md:left-8 flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white py-2 px-4 rounded-md transition duration-300"
          onClick={() => navigate("/")}
        >
          <i className="fa fa-arrow-left" />
          <span>Go Back</span>
        </button>
      </div>

      {/* Main Content Section */}
      <div className="w-full px-4 py-8 md:px-8 lg:px-24 md:py-16">
        {/* About Us Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <h2 className="font-extrabold text-2xl md:text-3xl lg:text-4xl mb-6 text-[#272EA7]">
              Our Story
            </h2>

            <div className="space-y-6 text-gray-700">
              <p className="leading-relaxed">
                CosmicForge HealthNet Limited is a visionary healthcare
                technology company redefining healthcare delivery in Africa and
                setting a new global standard for digital health innovation. We
                address critical healthcare disparities through our world-class
                telemedicine platform that democratizes access to quality
                healthcare.
              </p>

              <p className="leading-relaxed">
                Our platform connects patients with healthcare professionals
                from local doctors to international specialists, breaking down
                geographical barriers to quality medical care. In regions with
                inadequate healthcare infrastructure, especially rural and
                underserved areas, we deliver top-tier medical expertise through
                innovative digital channels.
              </p>

              <p className="leading-relaxed">
                From virtual consultations to remote diagnostics, AI-powered
                tools, and integrated IoT health monitoring, our platform
                addresses the most pressing healthcare needs across Africa with
                a patient-centric and provider-friendly approach.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src={aboutUsBg}
              alt="CosmicForge HealthNet Team"
              className="w-full h-auto rounded-lg "
            />
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-6 rounded-lg  border-l-4 border-[#272EA7]">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#272EA7]">
                Our Mission
              </h3>
              <p className="leading-relaxed text-gray-700">
                To break down barriers to healthcare access through cutting-edge
                technologies that make high-quality medical care affordable and
                accessible to everyone. We're creating a seamless, digital
                healthcare ecosystem that empowers patients while providing
                healthcare professionals with essential tools to deliver
                effective and efficient care.
              </p>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                <li>Empowering underserved communities across Africa</li>
                <li>Connecting local providers with global medical experts</li>
                <li>
                  Leveraging AI, data analytics, and blockchain for improved
                  diagnoses
                </li>
                <li>
                  Creating sustainable growth in Africa's healthcare sector
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div
              className="bg-white p-6 rounded-lg 
             border-l-4 border-[#272EA7]"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#272EA7]">
                Our Vision
              </h3>
              <p className="leading-relaxed text-gray-700">
                We envision a world where high-quality healthcare is a universal
                right, not a privilege. Our goal is to transform healthcare
                delivery by removing traditional barriers and leveraging
                technology to provide affordable, equitable, and effective
                medical services to all.
              </p>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">Accessible:</span> Ensuring
                  everyone can access medical services with ease
                </li>
                <li>
                  <span className="font-semibold">Affordable:</span> Bringing
                  world-class care within reach of all communities
                </li>
                <li>
                  <span className="font-semibold">Inclusive:</span> Designing
                  for all demographics and technical proficiencies
                </li>
                <li>
                  <span className="font-semibold">Innovative:</span>{" "}
                  Incorporating emerging technologies at the cutting edge
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#272EA7]">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border flex flex-col items-center p-6 md:p-8 rounded-lg  ">
              <img
                src={Services}
                alt="Sellers Icon"
                className="h-16 w-16 mb-3"
              />
              <h3 className="text-[#272EA7] text-2xl md:text-3xl font-bold">
                5k+
              </h3>
              <p className="text-center mt-2 text-gray-600">
                Sellers active on our platform
              </p>
            </div>

            <div className="border flex flex-col items-center p-6 md:p-8 rounded-lg  ">
              <img
                src={Services2}
                alt="Doctors Icon"
                className="h-16 w-16 mb-3"
              />
              <h3 className="text-[#272EA7] text-2xl md:text-3xl font-bold">
                7k+
              </h3>
              <p className="text-center mt-2 text-gray-600">
                Doctors active on our platform
              </p>
            </div>

            <div className="border flex flex-col items-center p-6 md:p-8 rounded-lg  ">
              <img
                src={Services3}
                alt="Patients Icon"
                className="h-16 w-16 mb-3"
              />
              <h3 className="text-[#272EA7] text-2xl md:text-3xl font-bold">
                4k+
              </h3>
              <p className="text-center mt-2 text-gray-600">
                Patients using our services
              </p>
            </div>
          </div>
        </div>

        {/* Innovation Section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#272EA7]">
            Healthcare Innovation
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="leading-relaxed mb-4 text-gray-700">
              CosmicForge HealthNet is creating an entire healthcare ecosystem
              that incorporates:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="bg-white p-4 rounded ">
                <h3 className="font-bold text-lg mb-2 text-[#272EA7]">
                  Blockchain Security
                </h3>
                <p className="text-sm text-gray-600">
                  For secure, immutable medical records and transparent
                  transactions
                </p>
              </div>
              <div className="bg-white p-4 rounded ">
                <h3 className="font-bold text-lg mb-2 text-[#272EA7]">
                  AI Diagnostics
                </h3>
                <p className="text-sm text-gray-600">
                  Powering intelligent symptom analysis and treatment
                  recommendations
                </p>
              </div>
              <div className="bg-white p-4 rounded ">
                <h3 className="font-bold text-lg mb-2 text-[#272EA7]">
                  Augmented Reality
                </h3>
                <p className="text-sm text-gray-600">
                  Enabling real-time remote assistance for healthcare providers
                </p>
              </div>
              <div className="bg-white p-4 rounded ">
                <h3 className="font-bold text-lg mb-2 text-[#272EA7]">
                  Data Analytics
                </h3>
                <p className="text-sm text-gray-600">
                  Driving continuous improvement in patient outcomes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutUs;
