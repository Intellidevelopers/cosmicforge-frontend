import { Outlet, useNavigate } from "react-router-dom";
import DoctorHomeNavBar from "./DoctorHomeNavBar";
import DoctorNavBarHome from "./DoctorNavBarMobile";

const DoctorAppointmentsMainBody = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full  overflow-y-auto  overflow-x-hidden  relative">
      <DoctorHomeNavBar title="Appointments" />
      <DoctorNavBarHome title="Appointments" />

      <div className="w-full  md:p-8">
        <div
          className=" hidden md:flex w-full mb-4  place-items-center gap-2 cursor-default hover:text-cosmic-primary-color"
          onClick={() => {
            navigate(-1);
          }}
        >
          <i className="fa fa-angle-left fa-2xl " />
          <p>Go Back</p>
        </div>

        <div className="w-full h-dvh overflow-y-auto overflow-x-hidden relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointmentsMainBody;
