import { useEffect } from "react";
import lantern from "../../../assets/images/lanternImg.png";
import { useNavigate } from "react-router-dom";

const VerifyPayment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/patient/shop/payment-complete");
    }, 3000);
  });
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <img src={lantern} alt="Loading" />
        <div className="flex flex-col justify-center items-center">
          <p className="text-center font-bold">
            Please wait while we confirm your payment.
          </p>
          <p className="text-center font-extralight">
            This would only take a moment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyPayment;
