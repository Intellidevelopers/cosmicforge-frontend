import "../../../../styles/browse.css";
import nutellaImage from "../../../../assets/advert/cosmic-advert-nutella.svg";
import pampers from "../../../../assets/advert/cosmic-advert-pampers.svg";
import huggies from "../../../../assets/advert/cosmic-advert-huggies.svg";
import nescafe from "../../../../assets/advert/cosmic-advert-nescafe.svg";
import cocacola from "../../../../assets/advert/cosmic-advert-cocacola.svg";
import milo from "../../../../assets/advert/cosmic-advert-milo.png";
import uniliver from "../../../../assets/advert/cosmic-advert-uniliver.svg";
import BorderLine from "../../../../assets/HomeImg/borderline.png";

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
    <div className="w-full overflow-x-auto scroll-smooth no-scrollbar py-16">
      <div className="font-semibold text-black text-4xl flex flex-col items-center justify-center mb-4">
        <h1>Our Partners</h1>
        <img src={BorderLine} alt="" />
      </div>
      <div className="grid grid-cols-7 gap-2 items-center">
        {BrowseData.map((item, index) => (
          <div key={index} className="">
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
