import { Outlet } from "react-router-dom";
import DoctorHomeNavBar from "../../../component/doctor/DoctorHomeNavBar";
import DoctorNavBarHome from "../../../component/doctor/DoctorNavBarMobile";

const VoiceAndVideoContainerPage = () => {
  return (
    <div className="w-full h-[100vh] overflow-hidden  font-poppins">
      <DoctorHomeNavBar title="Appointments" />
      <DoctorNavBarHome title="Appointments" />

      <Outlet />
    </div>
  );
};

export default VoiceAndVideoContainerPage;
