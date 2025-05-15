import therapy_bg from "../../../assets/features/therapy_bg.png";
import { ArrowLeftCircle } from "lucide-react";
import Footer from "../../onboarding/pages/components/Footer";
import { Link } from "react-router-dom";

const TherapyFeature = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Image with Go Back Button */}
        <div
          className="relative flex flex-col justify-between bg-cover bg-center h-64"
          style={{ backgroundImage: `url(${therapy_bg})` }}
        >
          <div></div>
          <div className="flex justify-between mx-24 pt-4">
            <Link to="/features/vr">
              <ArrowLeftCircle className="w-10 h-10 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer" />
            </Link>

            <div></div>
            {/* <Link to={"/features/first_aid"}>
              <ArrowRightCircle className="w-10 h-10 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer" />
            </Link> */}
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
          <h1 className="text-2xl font-bold mb-4">Therapy</h1>
          <p className="text-gray-700 mb-4">
            CosmicForge’s Therapy Feature provides an integrated platform for
            both mental and physical therapy, offering comprehensive support to
            patients and healthcare providers. This feature ensures that therapy
            is more accessible, personalized, and effective for those seeking
            professional care and treatment.
          </p>
          <p className="text-gray-700 mb-4">
            For patients, the platform offers an easy way to access both mental
            and physical therapy resources. Whether it’s managing stress,
            overcoming anxiety, improving mobility, or recovering from an
            injury, patients can connect with qualified therapists and doctors
            who tailor therapy plans to their specific needs. Virtual therapy
            sessions, progress tracking, and guided exercises make it easier for
            patients to follow their treatment plan from home or at a clinic.
          </p>
          <p className="text-gray-700 mb-4">
            For therapists and doctors, the platform provides tools for managing
            patient therapy sessions, tracking progress, and adjusting treatment
            plans. With real-time feedback and virtual sessions, healthcare
            providers can deliver personalized care while monitoring their
            patients’ mental and physical progress. The integration of both
            mental and physical health in one platform ensures a holistic
            approach to patient well-being.
          </p>
          <p className="text-gray-700">
            CosmicForge’s Therapy Feature empowers patients to take an active
            role in their recovery while providing therapists and doctors with
            the tools they need to offer effective, personalized care.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TherapyFeature;
