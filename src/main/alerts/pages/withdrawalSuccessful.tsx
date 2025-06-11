import BlueButton from "../components/blueButton";
import CashInHand from "../../../assets/images/Cash in Hand.png";

const WithdrawalSuccessful = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img src={CashInHand} alt="Withdrawal Successful" />
      <div className="text-center flex flex-col justify-center items-center mb-4">
        <p className="font-bold">Withdrawal Successful!</p>
        <p className="">Your withdrawal is being processed.</p>
      </div>
      <BlueButton text={"Ok"} />
    </div>
  );
};

export default WithdrawalSuccessful;
