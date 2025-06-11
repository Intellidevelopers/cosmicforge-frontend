import { useNavigate } from "react-router-dom";
import successfulIcon from "../../../assets/icons/Bell.png";

const WithdrawalSubmitted = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center gap-4 w-fit h-fit p-8 bg-white shadow-md shadow-black  animate-customBounce ">
      <img src={successfulIcon} alt={"Success"} className="w-12" />
      <p className="font-bold">Withdrawal Submitted Successfully</p>
      <p className="text-center">
        Your withdrawal request has been confirmed and successfully. You can
        track its progress on the withdrawal history page
      </p>
      <button
        type="button"
        className="py-2 px-8 text-white bg-cosmic-primary-color rounded-md "
        onClick={() => {
          navigate("/doctor/earnings");
        }}
      >
        Go to Withdrawal History
      </button>
    </div>
  );
};

export default WithdrawalSubmitted;
