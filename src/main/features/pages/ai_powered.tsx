import ai_powered from "../../../assets/features/ai_powered.png";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Footer from "../../onboarding/pages/components/Footer";
import { Link } from "react-router-dom";

const AIPoweredTools = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Image with Go Back Button */}
        <div
          className="relative flex flex-col justify-between bg-cover bg-center h-64"
          style={{ backgroundImage: `url(${ai_powered})` }}
        >
          <div></div>
          <div className="flex justify-between mx-24 pt-4">
            <Link to="/features/user_centric_design">
              <ArrowLeftCircle className="w-10 h-10 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer" />
            </Link>

            <Link to={"/features/simplified_process"}>
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
          <h1 className="text-2xl font-bold mb-4"> AI-Powered Tools </h1>
          <p className="text-gray-700 mb-4">
            CosmicForge’s AI-Powered Tools are designed to revolutionize
            healthcare delivery, making it more accurate, efficient, and
            personalized. By integrating artificial intelligence, we provide
            advanced solutions that empower healthcare providers, patients,
            laboratories, and pharmacies to achieve better outcomes with less
            effort.
          </p>
          <p className="text-gray-700 mb-4">
            For doctors, our AI-driven diagnostic tools analyze patient data to
            offer insights and suggest potential diagnoses, helping to reduce
            human error and speed up decision-making. Patients benefit from
            personalized care plans and real-time health recommendations based
            on their medical history and lifestyle. Laboratories can leverage AI
            to automate test result analysis, identifying patterns and anomalies
            faster than ever. Pharmacies can optimize inventory management
            ensuring medications are always available when needed.
          </p>
          <p className="text-gray-700 mb-4">
            Our AI-Powered Tools go beyond just automation they enhance the
            decision-making process, improve accuracy, and streamline healthcare
            workflows. By harnessing the power of AI, we’re enabling smarter
            healthcare that adapts to the unique needs of every user, improving
            efficiency across the board.
          </p>

          <p className="text-gray-700">
            Embrace the future of healthcare with CosmicForge’s AI-Powered
            Tools, where innovation meets care for better health outcomes.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AIPoweredTools;
