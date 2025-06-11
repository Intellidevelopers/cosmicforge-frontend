import successfulIcon from "../../../assets/icons/Bell.png";

const ConfirmWithdrawal = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="max-w-[700px] h-fit items-center justify-center w-full gap-4 flex flex-col p-4 shadow-md">
        <i className="fas fa-close  self-end"></i>
        <img src={successfulIcon} alt="Confirm Withdrawal" className="w-8" />
        <p className="font-bold">Confirm Withdrawal!</p>
        <div className="flex flex-col justify-center items-center">
          <p className="text-center">
            Are you sure you want to continue with the withdrawal?
          </p>
          <p className="text-center">This may take up to 3 hours to process.</p>
        </div>
        <div className="flex flex-col gap-2 w-full p-4">
          <div className="flex w-full justify-between">
            <p className="font-extralight">Network:</p>
            <p className="font-bold text-right">Bitcoin</p>
          </div>
          <div className="flex w-full justify-between">
            <p className="font-extralight">Quality:</p>
            <p className="font-bold text-right">0.001034 BTC</p>
          </div>
          <div className="flex w-full justify-between">
            <p className="font-extralight">Withdrawal Commission:</p>
            <p className="font-bold text-right">0.000025 BTC</p>
          </div>
          <div className="flex w-full justify-between">
            <p className="font-extralight">Description:</p>
            <p className="font-bold text-right">February Earnings Withdrawal</p>
          </div>
        </div>
        <div className="flex justify-around gap-8">
          <button
            type="button"
            className="rounded-md text-white bg-cosmic-primary-color py-2 px-4 opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded-md text-white bg-cosmic-primary-color py-2 px-4"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmWithdrawal;
