import React from "react";
import health_bg from "../../../assets/features/health_edu_bg.png";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Footer from "../../onboarding/pages/components/Footer";
import { Link } from "react-router-dom";

const HealthEduFeature = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Image with Go Back Button */}
        <div
          className="relative flex flex-col justify-between bg-cover bg-center h-64"
          style={{ backgroundImage: `url(${health_bg})` }}
        >
          <div></div>
          <div className="flex justify-between mx-24 pt-4">
            <Link to="/features/first_aid">
              <ArrowLeftCircle className="w-10 h-10 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer"/>
            </Link>

            <Link to={"/features/vr"}>
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
          <h1 className="text-2xl font-bold mb-4">Health Education</h1>
          <p className="text-gray-700 mb-4">
            CosmicForge’s Health Education for Patients feature is designed to
            empower patients with the knowledge they need to take control of
            their health and well-being. This feature provides a comprehensive
            library of resources, including articles, videos, and guides on
            various health topics, ensuring that patients are informed and
            equipped to make better health decisions.
          </p>
          <p className="text-gray-700 mb-4">
            Patients can access reliable, up-to-date information on a wide range
            of conditions, treatments, medications, and healthy lifestyle tips.
            The platform also offers personalized educational content based on
            individual health data and preferences, helping patients understand
            their medical conditions and treatment plans in depth.
          </p>
          <p className="text-gray-700 mb-4">
            Whether it's managing a chronic condition, learning about preventive
            healthcare, or understanding the importance of nutrition and
            exercise, CosmicForge’s Health Education feature ensures that
            patients have the tools they need to make informed decisions about
            their health.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HealthEduFeature;
