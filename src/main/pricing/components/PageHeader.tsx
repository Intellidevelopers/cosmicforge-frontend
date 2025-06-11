import { Button } from "../../../components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const PageHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full bg-blue-900 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between ">
          <div className="mb-8 md:mb-0 text-center md:text-left z-10">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide text-gray-200">
              <span className="block">BECOME A</span>
              <span className="block mt-2 md:mt-3 text-4xl md:text-6xl lg:text-7xl">
                MEMBER
              </span>
            </h1>
          </div>

          <div className="relative z-10"></div>
        </div>

        {/* Go Back button */}
        <Button
          variant="secondary"
          onClick={handleGoBack}
          className=" bg-white/10 border border-white/50 mt-6 rounded-[8px] py-2 px-7 flex items-center text-white text-sm font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
