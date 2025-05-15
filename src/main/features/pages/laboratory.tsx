import React from "react";
import laboratory_bg from "../../../assets/features/labouratory_bg.png";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Footer from "../../onboarding/pages/components/Footer";
import { Link } from "react-router-dom";

const LaboratoryFeature = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Image with Go Back Button */}
        <div
          className="relative flex flex-col justify-between bg-cover bg-center h-64"
          style={{ backgroundImage: `url(${laboratory_bg})` }}
        >
          <div></div>
          <div className="flex justify-between mx-24 pt-4">
            <Link to="/features/pharmacy">
              <ArrowLeftCircle className="w-10 h-10 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer" />
            </Link>

            <Link to={"/features/first_aid"}>
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
          <h1 className="text-2xl font-bold mb-4">Laboratory</h1>
          <p className="text-gray-700 mb-4">
            CosmicForge’s Laboratory Feature transforms how patients, doctors,
            and laboratories interact with test results and sample collection,
            streamlining the entire process for better efficiency and faster
            results. The Laboratory Feature enhances communication and
            collaboration across the healthcare system, making testing and
            results management easier, faster, and more accurate for everyone
            involved.
          </p>
          <p className="text-gray-700 mb-4">
            For patients, scheduling sample collections has never been easier.
            With just a few clicks, they can book appointments for sample
            collection at their convenience, either at home or at a designated
            laboratory. Patients can also track the status of their tests and
            receive notifications when results are available, ensuring a smooth
            and stress-free experience.
          </p>
          <p className="text-gray-700 mb-4">
            For doctors, the platform provides seamless access to test results,
            enabling fast analysis and more informed decision-making. Doctors
            can view detailed reports, analyze test data, and use AI-driven
            tools to interpret results more accurately, helping to diagnose
            conditions faster and create personalized treatment plans for
            patients.
          </p>
          <p className="text-gray-700">
            For laboratories, CosmicForge streamlines the entire testing
            process. Laboratories can manage test orders, track sample
            collections, and upload results to the platform in real time. This
            integration with doctors and patients ensures that test results are
            quickly and accurately communicated, minimizing delays and improving
            the overall workflow.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LaboratoryFeature;
