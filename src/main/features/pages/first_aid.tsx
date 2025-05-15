import React from "react";
import first_aid_bg from "../../../assets/features/first_aid_bg.png";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Footer from "../../onboarding/pages/components/Footer";
import { Link } from "react-router-dom";

const FirstAidFeature = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Image with Go Back Button */}
        <div
          className="relative flex flex-col justify-between bg-cover bg-center h-64"
          style={{ backgroundImage: `url(${first_aid_bg})` }}
        >
          <div></div>
          <div className="flex justify-between mx-24 pt-4">
            <Link to="/features/laboratory">
              <ArrowLeftCircle className="w-10 h-10 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer" />
            </Link>

            <Link to={"/features/health_edu"}>
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
          <h1 className="text-2xl font-bold mb-4">First-Aid and Emergency</h1>
          <p className="text-gray-700 mb-4">
            CosmicForge offers a comprehensive First-Aid Instructions &
            Emergency Services feature designed to provide quick, reliable
            assistance during medical emergencies. This feature ensures that
            help is always just a few taps away, guiding users through critical
            situations with confidence.
          </p>
          <p className="text-gray-700 mb-4">
            First-Aid Instructions For any unexpected injury or medical event,
            our platform provides easy-to-follow, step-by-step First-Aid
            Instructions. These instructions cover a wide range of situations,
            from minor cuts and burns to life-threatening conditions like heart
            attacks and choking. With clear, concise information, users can take
            immediate action while waiting for professional medical help to
            arrive.
          </p>
          <p className="text-gray-700 mb-4">
            Emergency Services In the event of a medical emergency, CosmicForge
            enables users to access emergency services quickly. The platform
            connects users to ambulance services, fire departments, and police
            with a simple SOS button that instantly sends their location to
            local emergency responders. Whether it’s a health crisis, fire, or
            security threat, CosmicForge ensures that help arrives without
            delay, providing peace of mind when time is of the essence.
          </p>
          <p className="text-gray-700">
            This integrated feature ensures that patients and their loved ones
            have immediate access to life-saving resources, making it easier to
            manage emergencies with confidence and clarity.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FirstAidFeature;
