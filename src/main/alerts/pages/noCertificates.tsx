import BlueButton from "../components/blueButton";
import certificateLogo from "../../../assets/images/Certificate.png";

const NoCertificates = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img src={certificateLogo} alt="No Certificate Added" />
      <div className="text-center flex flex-col justify-center items-center mb-4">
        <p className="font-bold">No Certificates Added!</p>
        <p className="">You have not added any Certificate to your profile.</p>
      </div>
      <BlueButton text={"Ok"} />
    </div>
  );
};

export default NoCertificates;
