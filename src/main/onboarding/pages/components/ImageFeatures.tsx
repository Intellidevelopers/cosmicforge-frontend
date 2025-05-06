import "../../../../styles/browse.css";
import nutellaImage from "../../../../assets/advert/cosmic-advert-nutella.svg";
import pampers from "../../../../assets/advert/cosmic-advert-pampers.svg";
import huggies from "../../../../assets/advert/cosmic-advert-huggies.svg";
import nescafe from "../../../../assets/advert/cosmic-advert-nescafe.svg";
import cocacola from "../../../../assets/advert/cosmic-advert-cocacola.svg";
import milo from "../../../../assets/advert/cosmic-advert-milo.png";
import uniliver from "../../../../assets/advert/cosmic-advert-uniliver.svg";

const BrowseFeatures = () => {
  const BrowseData = [
    { image: nutellaImage },
    { image: pampers },
    { image: huggies },
    { image: nescafe },
    { image: cocacola },
    { image: milo },
    { image: uniliver },
  ];

  return (
    <div className="w-full overflow-x-auto scroll-smooth no-scrollbar">
      <div
        className="
            flex items-center gap-4 px-4 
            snap-x snap-mandatory 
            w-max
          "
      >
        {BrowseData.map((item, index) => (
          <div
            key={index}
            className="
                p-2 
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
            <div className="flex items-center justify-center gap-2">
              <img src={item.image} alt="" className="w-24" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseFeatures;
