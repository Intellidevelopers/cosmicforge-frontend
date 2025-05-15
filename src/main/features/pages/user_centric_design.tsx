import user_centric_design from "../../../assets/features/user_centric_design.png";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Footer from "../../onboarding/pages/components/Footer";
import { Link } from "react-router-dom";

const UserCentricDesign = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Image with Go Back Button */}
        <div
          className="relative flex flex-col justify-between bg-cover bg-center h-64"
          style={{ backgroundImage: `url(${user_centric_design})` }}
        >
          <div></div>
          <div className="flex justify-between mx-24 pt-4">
            <Link to="/features/unified_healthcare_hub">
              <ArrowLeftCircle className="w-10 h-10 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer" />
            </Link>

            <Link to={"/features/ai_powered"}>
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
          <h1 className="text-2xl font-bold mb-4"> User-Centric Design </h1>
          <p className="text-gray-700 mb-4">
            At CosmicForge we prioritizes the needs and experiences of every
            user, from doctors to patients, laboratories, and pharmacies. We
            understand that healthcare can be complex, and our goal is to
            simplify it by making the platform intuitive, accessible, and easy
            to navigate for all users, regardless of their tech expertise.
          </p>
          <p className="text-gray-700 mb-4">
            With a clean, modern interface, the platform adapts to the unique
            needs of each role. For doctors, it provides quick access to patient
            information, medical histories, and consultation tools. Patients
            enjoy a straightforward experience for booking appointments, viewing
            records, and managing their health data. Laboratories and pharmacies
            have custom-built dashboards that streamline workflows, from test
            result management to prescription processing.
          </p>
          <p className="text-gray-700 mb-4">
            CosmicForge's User-Centric Design ensures that every interaction
            feels intuitive and efficient. The platform is built with user
            feedback in mind, continuously evolving to meet the changing demands
            of healthcare professionals and patients alike.
          </p>
          <p className="text-gray-700">
            By focusing on simplicity and ease of use, we make healthcare more
            accessible and less daunting, enabling users to focus on what truly
            matters: providing and receiving care.
          </p>

          <p className="text-gray-700">
            Experience a seamless, intuitive platform with CosmicForge where
            healthcare is simplified for you.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserCentricDesign;
