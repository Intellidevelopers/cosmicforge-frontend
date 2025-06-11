import successfulUploadImg from "../../../assets/images/Upload to Cloud.png";
import BlueButton from "../components/blueButton";

const UploadSuccessful = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <img src={successfulUploadImg} alt="uploaded" />
      <div className="text-center flex flex-col justify-center items-center">
        <p className="font-bold">Upload Successful!</p>
        <p className="">Your file has been successfully uploaded.</p>
      </div>
      <BlueButton text={"ok"} />
    </div>
  );
};

export default UploadSuccessful;
