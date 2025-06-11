import ambulanceSmall from "../../../assets/images/ambulanceSmall.png";

interface AmbulanceProps {
  name: string;
  distance: string;
}

const FindAmbulanceComp = ({ name, distance }: AmbulanceProps) => {
  return (
    <div className="p-2 w-full">
      <div className="flex p-2 w-full hover:border-2 place-items-center gap-4 shadow-md">
        <img src={ambulanceSmall} alt="Ambulance" className="p-w" />
        <div className="flex flex-col">
          <p className="font-bold">{name}</p>
          <p className="extra-light">{distance}</p>
        </div>
      </div>
    </div>
  );
};

export default FindAmbulanceComp;
