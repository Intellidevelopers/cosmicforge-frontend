import React from "react";
import simplified_process from "../../../assets/features/simplified_process.png";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Footer from "../../onboarding/pages/components/Footer";
import { Link } from "react-router-dom";

const SimplifiedProcess = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Image with Go Back Button */}
        <div
          className="relative flex flex-col justify-between bg-cover bg-center h-64"
          style={{ backgroundImage: `url(${simplified_process})` }}
        >
          <div></div>
          <div className="flex justify-between mx-24 pt-4">
            <Link to="/features/ai_powered">
              <ArrowLeftCircle className="w-10 h-10 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer" />
            </Link>

            <div></div>
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
          <h1 className="text-2xl font-bold mb-4"> Simplified Processes </h1>
          <p className="text-gray-700 mb-4">
            At CosmicForge Health Net, we believe that healthcare should be
            efficient and straightforward. Our Simplified Processes feature
            ensures that every task from appointment booking to prescription
            fulfillment is streamlined, making healthcare management smoother
            for all users.
          </p>
          <p className="text-gray-700 mb-4">
            For doctors, this means effortless patient scheduling, easy access
            to medical histories, and quick documentation of consultations.
            Patients can book appointments, access their health data, and
            communicate with their healthcare providers in just a few clicks.
            Laboratories and pharmacies benefit from automated workflows,
            allowing them to process test results, manage inventory, and fulfill
            prescriptions without the usual hassles.
          </p>
          <p className="text-gray-700 mb-4">
            By reducing administrative tasks and eliminating unnecessary steps,
            our Simplified Processes feature frees up time for healthcare
            professionals to focus on what matters most: delivering quality
            care. This efficiency extends to patients, who experience faster
            service and a more personalized healthcare journey.
          </p>

          <p className="text-gray-700">
            Experience hassle-free healthcare management with CosmicForge’s
            Simplified Processes where every step is designed to save time and
            enhance care.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SimplifiedProcess;
