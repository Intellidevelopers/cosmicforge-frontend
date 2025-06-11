import React from "react";

interface component {
  size: string;
}

const Loader: React.FC<component> = ({ size }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded-[50%] animate-rotate border-[3.5px] border-t-[#272EA7] border-gray-300`}
    ></div>
  );
};

export default Loader;
