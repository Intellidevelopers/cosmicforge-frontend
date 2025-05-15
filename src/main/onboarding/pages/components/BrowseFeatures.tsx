import "../../../../styles/browse.css";
import Med from "../../../../assets/HomeImg/med.png";
import { getDoctorDeparmentsForLandingPage } from "../../../profile/service";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BrowseFeatures = () => {
  const { state } = useLocation();
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    if (!state?.departments) {
      (async () => {
        try {
          const result = await getDoctorDeparmentsForLandingPage();

          if (result.status === 200) {
            setDepartments(result.data);
          }
        } catch (error) {}
      })();
    } else {
      setDepartments(state?.departments.length > 0 ? state.departments : []);
    }
  }, []);
  const BrowseData = [
    { label: "General Med", image: Med },
    { label: "Emergency Med", image: Med },
    { label: "Cardiology", image: Med },
    { label: "Neurology", image: Med },
    { label: "OB-GYN", image: Med },
    { label: "Denistry", image: Med },
    { label: "Otolaryngology", image: Med },
    { label: "Pediatrics", image: Med },
    { label: "Psychiatry", image: Med },
    { label: "Radiology", image: Med },
  ];
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="grid sm:grid-cols-3 md:grid-cols-5  lg:grid-cols-10 gap-2">
        {departments.length > 0 &&
          departments.map((dep: any, i: number) => (
            <div
              key={i}
              className="bg-white rounded-sm p-4 cursor-pointer"
              onClick={() => {
                navigate("/department/overview", {
                  state: {
                    department: {
                      title: dep.title,
                      backgroundImage: dep.backgroundImage,
                      bodyText: dep.bodyText,
                      relatedPath: "/",
                    },
                  },
                });
              }}
            >
              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  src={dep.backgroundImage}
                  alt=""
                  className="rounded-full w-[50px] h-[50px] object-cover"
                />
                <span className="text-[#030303] text-sm font-normal capitalize">
                  {dep.name}
                </span>
              </div>
            </div>
            // <CustomDepartmentCard
            //   key={i}
            //   icon={dep.image}
            //   title={dep.name}
            //   backgroundImage={dep.backgroundImage}
            //   bodyText={dep.bodyText}
            // />
          ))}
        {/* {BrowseData.map((item, index) => (
          <div key={index} className="bg-white rounded-sm p-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <img src={item.image} alt="" />
              <span className="text-[#030303] text-sm font-normal capitalize">
                {item.label}
              </span>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default BrowseFeatures;
