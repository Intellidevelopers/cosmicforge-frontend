import { useState } from "react";

interface CustomErrorPageProps {
  message: string;
}

const CustomErrorPage = ({ message }: CustomErrorPageProps) => {
  const [cancel, setCancel] = useState<boolean>(false);

  return (
    <div
      className={`${cancel ? "flex" : "hidden"}  absolute w-full h-dvh bg-blue-200 top-0 z-50`}
    >
      {message}
      <div
        onClick={() => {
          setCancel(true);
        }}
      >
        cancel
      </div>
    </div>
  );
};

export default CustomErrorPage;
