import React from "react";

const PaymentReceipt: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EDEEF0]">
      {/* Fixed small card */}
      <div className="w-[340px] h-[550px] bg-white rounded-lg  overflow-hidden relative p-6">
        {/* Watermark background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none rounded-2xl"
          style={{
            backgroundImage: "url('/cosmic.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "80px", // 👈 smaller watermark size
          }}
        />

        {/* Foreground content */}
        <div className="relative z-10">
          {/* Logo */}
          <div className="flex justify-left mb-6">
            <img src="/watermark.png" alt="Logo" className="h-6" />
          </div>

          {/* Amount + Status */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-[#272EA7]">N23,000.00</h2>
            <p className="text-xs font-semibold mb-1 text-gray-700">
              Successful Transaction
            </p>
            <p className="text-xs text-gray-500">12th December, 2024</p>
          </div>

          {/* Info list */}
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex justify-between mb-6">
              <span className="text-xs">Transaction Type:</span>
              <span className="font-semibold text-xs text-right">
                Appointment
              </span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-xs">Amount:</span>
              <span className="font-semibold text-xs">N 23,000.00</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-xs">Recipient:</span>
              <span className="font-semibold text-xs text-right">
                Chastain Park Hospital
                <br />
                <span className="text-xs text-gray-500">GLB | 1234567898</span>
              </span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-xs">Transaction Id:</span>
              <span className="font-semibold text-xs">1234567892</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-xs">Reference Id:</span>
              <span className="font-semibold text-xs">1233eww33998</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-xs">Date:</span>
              <span className="font-semibold text-xs">12 Dec, 2024</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-xs">Payer:</span>
              <span className="font-semibold text-xs text-right">
                Grace Jennifer Williams
                <br />
                <span className="text-xs text-gray-500">
                  **** **** **** 2345
                </span>
              </span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-xs">Method:</span>
              <span className="font-semibold text-xs">Card</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-xs">Status:</span>
              <span className="font-semibold text-xs text-black">
                Successful
              </span>
            </div>
            <img src="/zig.png" alt="" className="" />
          </div>
        </div>
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 340 20"
          preserveAspectRatio="none"
        >
          <path
            d="M0 10 C 5 0, 15 0, 20 10 C 25 20, 35 20, 40 10 C 45 0, 55 0, 60 10 C 65 20, 75 20, 80 10 C 85 0, 95 0, 100 10 C 105 20, 115 20, 120 10 C 125 0, 135 0, 140 10 C 145 20, 155 20, 160 10 C 165 0, 175 0, 180 10 C 185 20, 195 20, 200 10 C 205 0, 215 0, 220 10 C 225 20, 235 20, 240 10 C 245 0, 255 0, 260 10 C 265 20, 275 20, 280 10 C 285 0, 295 0, 300 10 C 305 20, 315 20, 320 10 C 325 0, 335 0, 340 10 L340 20 L0 20 Z"
            fill="#EDEEF0"
          />
        </svg>
      </div>
    </div>
  );
};

export default PaymentReceipt;
