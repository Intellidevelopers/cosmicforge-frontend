import BlueButton from "../components/blueButton";
import card from "../../../assets/images/Membership Card.png";

const NoLiscenceAlert = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img src={card} alt="No Liscence Added" />
      <div className="text-center flex flex-col justify-center items-center mb-4">
        <p className="font-bold">No Liscence Added!</p>
        <p className="">You have not added any Liscences to your profile.</p>
      </div>
      <BlueButton text={"Ok"} />
    </div>
  );
};

export default NoLiscenceAlert;
