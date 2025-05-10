import { useLocation, useNavigate } from "react-router-dom";
import deptBg from "../../../assets/background/cosmic-departments-bg.svg";
import CustomDepartmentCard from "../component/CustomDepartmentCard";
import Footer from "../pages/components/Footer";
import { useEffect, useState } from "react";
import { getDoctorDeparmentsForLandingPage } from "../../profile/service";
const DepartmentsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

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

  return (
    <div className="w-full font-poppins cursor-default">
      <div className="w-full h-fit relative">
        <img src={deptBg} alt="bg-image" />
        <div
          className="absolute bottom-8 left-8 flex gap-2 justify-center place-items-center text-white bg-cosmic-white-light-0.2 p-2  cursor-default"
          onClick={() => {
            navigate("/");
          }}
        >
          <i className="fa fa-arrow-left fa-2x" />
          <p>back</p>
        </div>
      </div>
      <div className="w-full p-8">
        <p className="font-extrabold text-[24px]">Departments</p>

        <div>
          {departments.length > 0 &&
            departments.map((dep: any, i: number) => (
              <CustomDepartmentCard
                key={i}
                icon={dep.image}
                title={dep.name}
                backgroundImage={dep.backgroundImage}
                bodyText={dep.bodyText}
              />
            ))}
        </div>

        <div></div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DepartmentsPage;
