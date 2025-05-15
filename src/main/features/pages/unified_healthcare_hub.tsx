import unified_healthcare_bg from "../../../assets/features/unified_healthcare_hub.png";
import { ArrowRightCircle } from "lucide-react";
import Footer from "../../onboarding/pages/components/Footer";
import { Link } from "react-router-dom";

const UnifiedHealthCare = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Image with Go Back Button */}
        <div
          className="relative flex flex-col justify-between bg-cover bg-center h-64"
          style={{ backgroundImage: `url(${unified_healthcare_bg})` }}
        >
          <div></div>
          <div className="flex justify-between mx-24 pt-4">
            <div></div>
            {/* <ArrowLeftCircle className="w-10 h-10 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer" /> */}

            <Link to="/features/user_centric_design">
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
          <h1 className="text-2xl font-bold mb-4">Unified Healthcare Hub</h1>
          <p className="text-gray-700 mb-4">
            Welcome to the CosmicForge Health Net, a groundbreaking innovation
            designed to unify and streamline healthcare delivery. This feature
            serves as the cornerstone of our platform, connecting doctors,
            patients, laboratories, and pharmacies in a seamless, centralized
            ecosystem.
          </p>
          <p className="text-gray-700 mb-4">
            With the CosmicForge Health Net, users can access all the tools and
            services they need from a single platform. Doctors can efficiently
            manage consultations, access patient records, and review lab results
            in one intuitive interface. Patients benefit from the convenience of
            booking appointments, viewing their medical history, and staying in
            touch with their care teams—all in one place. Laboratories and
            pharmacies enjoy streamlined workflows, from processing test results
            to fulfilling prescriptions, ensuring quick and accurate service.
          </p>
          <p className="text-gray-700 mb-4">
            Security is at the core of CosmicForge Health Net. Built with
            advanced encryption technology and compliant with global healthcare
            standards, it guarantees the highest level of data protection for
            all users. The platform is accessible 24/7 across devices, offering
            the flexibility to manage healthcare needs anytime, anywhere.
          </p>
          <p className="text-gray-700">
            CosmicForge Health Net is a transformative approach to healthcare.
            By bringing every stakeholder onto a unified platform, we enhance
            collaboration, reduce inefficiencies, and create a patient-centric
            experience that prioritizes care, convenience, and innovation.
          </p>
          <p className="text-gray-700">
            Experience the future of healthcare with CosmicForge Health Net
            where connections drive better care.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UnifiedHealthCare;
