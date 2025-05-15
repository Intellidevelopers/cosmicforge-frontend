import React from "react";
import pharmacy_bg from "../../../assets/features/pharmacy_bg.png";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Footer from "../../onboarding/pages/components/Footer";
import { Link } from "react-router-dom";

const PharmacyFeature = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Image with Go Back Button */}
        <div
          className="relative flex flex-col justify-between bg-cover bg-center h-64"
          style={{ backgroundImage: `url(${pharmacy_bg})` }}
        >
          <div></div>
          <div className="flex justify-between mx-24 pt-4">
            <div></div>
            {/* <ArrowLeftCircle className="w-10 h-10 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer" /> */}

            <Link to="/features/laboratory">
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
          <h1 className="text-2xl font-bold mb-4">Pharmacy</h1>
          <p className="text-gray-700 mb-4">
            CosmicForge’s Pharmacy Feature is designed to bridge the gap between
            patients and pharmacies, ensuring a seamless and efficient
            prescription process for all. This feature allows both patients and
            pharmacies to manage prescriptions, track medication history, and
            ensure that medications are available when needed.
          </p>
          <p className="text-gray-700 mb-4">
            For patients, the platform makes it easy to request and fill
            prescriptions, view medication details, and receive reminders for
            refills. Patients can also connect directly with pharmacies for
            medication queries, ensuring they receive the right treatment at the
            right time.
          </p>
          <p className="text-gray-700 mb-4">
            For pharmacies, our platform streamlines the process of managing
            prescriptions, tracking inventory, and processing medication orders.
            With built-in tools for managing prescription fulfillment and
            real-time communication with patients and healthcare providers,
            pharmacies can ensure faster, more accurate service.
          </p>
          <p className="text-gray-700">
            The Pharmacy Feature ensures that patients have quick access to the
            medications they need while enabling pharmacies to operate more
            efficiently and meet patient needs in real time.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PharmacyFeature;
