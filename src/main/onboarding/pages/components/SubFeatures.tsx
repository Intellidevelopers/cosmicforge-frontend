import healthEdu from "../../../../assets/icons/cosmic-features-health-edu.svg";
import pharmacy from "../../../../assets/icons/cosmic-features-physiotherapy.svg";
import lab from "../../../../assets/icons/cosmic-features-lab.svg";
import ai from "../../../../assets/icons/cosmic-features-virtual-reality.svg";
import fitness from "../../../../assets/icons/cosmic-features-fit-and-emergency.svg";
import therapy from "../../../../assets/icons/cosmic-features-therapy.svg";

const otherFeatures = () => {
  // other features data
  const OtherFeaturesData = [
    {
      label: "Pharmacy",
      image: pharmacy,
      contents:
        "Easily manage prescriptions, track medications, and connect with pharmacies for fast, reliable service.",
    },
    {
      label: "Laboratory",
      image: lab,
      contents:
        "Schedule sample collections, access test results, and simplify lab management for doctors, patients, and laboratories.",
    },
    {
      label: "First-Aid & Emergency",
      image: fitness,
      contents:
        "Access step-by-step first-aid instructions and quickly contact emergency services like ambulance, fire, and police.",
    },
    {
      label: "Health Education",
      image: healthEdu,
      contents:
        "Stay informed with personalized health resources, from condition management to wellness tips, empowering better decisions.",
    },
    {
      label: "Virtual reality assistant",
      image: ai,
      contents:
        "Enhance diagnosis, treatment, and patient engagement with immersive VR technology for both therapy and education.",
    },
    {
      label: "Therapy",
      image: therapy,
      contents:
        "Access mental and physical therapy services with personalized care plans, virtual sessions, and progress tracking.",
    },
  ];

  return (
    <div className="flex flex-col gap-10 justify-center items-center mt-16">
      <div className="text-center">
        <h1 className="text-3xl text-[#272EA7] font-semibold">
          Other features we have to Offer
        </h1>
        <p className="text-[#5B5959] text-balance text-[14px] leading-7 mt-2">
          At Cosmicforge, we offer a range of standardized top notch services to
          ensure we provide you with the best affordable and remote healthcare
          at your convenience.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {OtherFeaturesData.map((items, index) => (
          <div className="bg-white p-4 rounded-md" key={index}>
            <div className="px-4 py-4">
              <img src={items.image} alt="" />
            </div>
            <h1 className="font-semibold capitalize">{items.label}</h1>
            <p className="text-balance text-[14px] text-[#5B5959] leading-7 mt-2">
              {items.contents}
            </p>
            <button className="cursor-pointer text-sm mt-4 capitalize">
              learn more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default otherFeatures;
