import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar";
import HomeNavBar from "../../home/component/patient/HomeNavBar";
import { useParams } from "react-router-dom";
import adultImg from "../../../assets/images/Frame 359Adult.png";
import childImg from "../../../assets/images/Frame 359child.png";
import infantImg from "../../../assets/images/Frame 359infant.png";
import SelectPersonCard from "../components/selectPersonCard";

interface params {
  [key: string]: string | undefined;
}

interface personCard {
  image: string;
  title: string;
  case: string | undefined;
}

const SelectCase = () => {
  const params = useParams<params>();
  console.log(params);

  const persons: personCard[] = [
    {
      image: adultImg,
      title: "Adult",
      case: params?.case,
    },
    {
      image: childImg,
      title: "Child",
      case: params?.case,
    },
    {
      image: infantImg,
      title: "Infant",
      case: params?.case,
    },
  ];

  return (
    <div className="relative">
      <HomeNavBar
        title={params.case ? params.case : ""}
        onSearchFired={() => {}}
      />
      <HomeMobileNavBar
        title={params.case ? params.case : ""}
        onSearchFired={() => {}}
      />
      <div className="flex flex-col gap-4 border-2 h-[100%] px-3 bg-gray-100 pt-1 ">
        {persons.map((item, index) => {
          return (
            <SelectPersonCard
              key={index}
              image={item.image}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SelectCase;
