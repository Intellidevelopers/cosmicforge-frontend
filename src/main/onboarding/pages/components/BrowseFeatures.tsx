import "../../../../styles/browse.css";
import Med from "../../../../assets/HomeImg/med.png";

const BrowseFeatures = () => {
  const BrowseData = [
    { label: "General Med", image: Med },
    { label: "Emergency Med", image: Med },
    { label: "Cardiology", image: Med },
    { label: "Neurology", image: Med },
    { label: "OB-GYN", image: Med },
    { label: "Denistry", image: Med },
    { label: "Otolaryngology", image: Med },
    { label: "Pediatrics", image: Med },
    { label: "Psychiatry", image: Med },
    { label: "Radiology", image: Med },
  ];

  return (
    <div className="w-full">
      <div className="grid  grid-cols-10 gap-2">
        {BrowseData.map((item, index) => (
          <div key={index} className="bg-white rounded-sm p-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <img src={item.image} alt="" />
              <span className="text-[#030303] text-sm font-normal capitalize">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseFeatures;
