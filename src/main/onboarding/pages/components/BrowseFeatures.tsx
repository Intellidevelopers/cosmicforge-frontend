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
  ];

  return (
    <div className="w-full overflow-x-auto scroll-smooth no-scrollbar">
      <div
        className="
            flex gap-4 px-4 py-6 
            snap-x snap-mandatory 
            w-max
          "
      >
        {BrowseData.map((item, index) => (
          <div
            key={index}
            className="
                bg-white p-6 rounded-xl shadow 
                min-w-[200px] 
                snap-start 
                flex-shrink-0 
                text-center
                transition-all
              "
            style={{
              // Optional: You can dynamically control width per screen using Tailwind classes instead
              width: "clamp(140px, 20vw, 240px)",
            }}
          >
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
