import { useEffect } from "react";
import Footer from "./components/Footer";

import { useLocation, useNavigate } from "react-router-dom";

const DepartmentOverview = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const data: {
    title: string;
    bodyText: string;
    backgroundImage: string;
    relatedPath: string;
  } = state?.department!!;

  useEffect(() => {
    if (window) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full font-poppins ">
      <div className="w-full h-fit relative ">
        <img
          src={data.backgroundImage}
          alt="bg-image"
          className="md:min-h-[300px] bg-black bg-opacity-20"
        />
        <div
          className="absolute bottom-8 left-8 flex gap-2 justify-center place-items-center text-white bg-cosmic-white-light-0.2 p-2  cursor-default"
          onClick={() => {
            navigate(data.relatedPath ?? "/");
          }}
        >
          <i className="fa fa-arrow-left fa-2x" />
          <p>back</p>
        </div>
      </div>
      <div className="w-full p-8">
        <p className="font-extrabold text-[24px]">{data?.title ?? ""}</p>

        <div>
          <p className="font-light leading-10"> {data?.bodyText}</p>
        </div>

        <div></div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DepartmentOverview;
