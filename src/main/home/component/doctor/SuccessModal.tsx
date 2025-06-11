import React from "react";
import HandCash from "../../assets/HomeImg/hand.png";

const PaymentSuccessCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white rounded-md shadow-lg p-16 max-w-2xl w-full text-center">
        <div className="text-7xl mb-6">
          {/* Emoji or image */}
          <img
            src={HandCash}
            alt="Success"
            className="mx-auto w-32 h-32 mb-6"
          />

          {/* Or replace with an <img> if you want the exact image */}
          {/* <img src="/path/to/your/image.png" alt="Success" className="mx-auto w-24 h-24 mb-6" /> */}
        </div>
        <h2 className="text-xl font-semibold mb-2">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">
          Your payment was successfully processed.
        </p>
        <button className="bg-[#272EA7] hover:bg-indigo-700 text-white font-medium py-2 w-[50%] px-6 rounded-md transition">
          Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessCard;
