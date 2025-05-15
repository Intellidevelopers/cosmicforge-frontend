import React from "react";
import vr_bg from "../../../assets/features/vr_bg.png";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Footer from "../../onboarding/pages/components/Footer";
import { Link } from "react-router-dom";

const VRFeature = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Image with Go Back Button */}
        <div
          className="relative flex flex-col justify-between bg-cover bg-center h-64"
          style={{ backgroundImage: `url(${vr_bg})` }}
        >
          <div></div>
          <div className="flex justify-between mx-24 pt-4">
            <Link to="/features/health_edu">
              <ArrowLeftCircle className="w-10 h-10 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer" />
            </Link>
            <Link to={"/features/therapy"}>
              <ArrowRightCircle className="w-10 h-10 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer" />
            </Link>
          </div>
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 mx-24 mb-4 self-start"
            onClick={() => window.history.back()}
          >
            ← Go Back
          </button>
        </div>

        {/* Content Section */}
        <div className="mx-auto px-24 py-10 bg-white z-10">
          <h1 className="text-2xl font-bold mb-4">
            Virtual Reality Assistance
          </h1>
          <p className="text-gray-700 mb-4">
            CosmicForge’s Virtual Reality Assistance feature brings the future
            of healthcare to the present, offering patients and doctors an
            immersive, interactive experience that enhances diagnosis,
            treatment, and education. This cutting-edge technology offers a
            unique way to visualize complex medical conditions, simulate
            treatment scenarios, and provide hands-on support, all from the
            comfort of your home or office.
          </p>
          <p className="text-gray-700 mb-4">
            For patients, Virtual Reality Assistance can be used for guided
            therapy sessions, rehabilitation exercises, or even virtual
            consultations, allowing patients to interact with healthcare
            professionals in an engaging and informative way. This feature is
            particularly beneficial for patients undergoing physical therapy or
            those in need of specialized care that may not be immediately
            available in person.
          </p>
          <p className="text-gray-700 mb-4">
            For doctors, VR assistance provides virtual simulations of medical
            procedures, helping to visualize anatomy, patient conditions, and
            surgical plans with greater clarity. This immersive tool aids in
            training, enhancing diagnostic accuracy, and improving patient
            communication by helping doctors explain conditions and treatments
            in a more tangible way.
          </p>
          <p className="text-gray-700">
            With Virtual Reality Assistance, CosmicForge delivers an innovative
            solution that not only improves healthcare delivery but also makes
            the healthcare experience more engaging, informative, and effective
            for both patients and providers.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VRFeature;
