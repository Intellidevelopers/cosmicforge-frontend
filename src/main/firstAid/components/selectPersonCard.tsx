import React from "react";
import UseNavigateToPath from "../hooks/navigateHook";

interface props {
  image: string;
  title: string;
}

const SelectPersonCard: React.FC<props> = ({ image, title }) => {
  const navigate = UseNavigateToPath();
  const end = title;

  return (
    <div
      className="flex justify-start gap-4 p-4 ronded-md shadow-lg items-center bg-white cursor-pointer w-full"
      onClick={() => {
        navigate(end);
      }}
    >
      <img src={image} alt={title} className="max-w-[70px]" />
      <p className="font-bold">{title}</p>
    </div>
  );
};

export default SelectPersonCard;
