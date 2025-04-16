import DoctorHomeNavBar from "./DoctorHomeNavBar";
import menuIcon from "../../../../assets/icons/cosmic-menu-icon.svg";
import appointmentIcon from "../../../../assets/icons/cosmic-doctor-appointment-icon.svg";
import totalPatientsIcon from "../../../../assets/icons/cosmic-doctor-total-patients-icon.svg";
import totalEarningsIcon from "../../../../assets/icons/cosmic-doctor-earnings-icon.svg";
import DoctorChartGraph from "./DoctorChartGrap";
import DoctorNavBarHome from "./DoctorNavBarMobile";
import DoctorTotalEarningGraph from "./DoctorTotalEarningGraph";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../store/initStore";
import DoctorTable from "../../pages/doctor/DoctorTable";
//import DoctorTable from "../../pages/doctor/DoctorTable";




const DoctorHomeBody = () => {


const  appointments = useSelector((state:RootReducer)=>state.appointments)

 
  
  return (

    <div className="w-full h-full  overflow-y-auto  ">
      
      <DoctorHomeNavBar title="Dashboard" />
      <DoctorNavBarHome title="Dashboard" />

      <div className="  w-full h-dvh  ">

        <div className="w-full grid   grid-cols-6 md:p-4 md:gap-8">

          <div className=" bg-cosmic-primary-color col-span-2 min-h-fit md:h-[120px] w-full rounded-md">

            <div className="w-full flex justify-end p-2">
              <img src={menuIcon} />
            </div>

            <div className="w-full flex flex-wrap justify-center text-white gap-4">
              <div className="w-fit bg-white rounded-full p-1 ms-8">
                <img alt="appointment" src={appointmentIcon} />
              </div>
              <div>
                <p className="font-light mt-1">Appointments</p>
                <p className="font-bold">{appointments.totalAppointments??0}</p>
              </div>
            </div>
          </div>

          <div className=" bg-cosmic-color-yellow-color  col-span-2 min-h-fit md:h-[120px]  w-full  rounded-md">
            <div className="w-full flex justify-end p-2">
              <img src={menuIcon} />
            </div>

            <div className="w-full flex flex-wrap justify-center text-white gap-4">

              <div className="w-fit bg-white rounded-full p-1 ms-8">

                <img alt="appointment" src={totalPatientsIcon} />
              </div>

              <div>

                <p className="font-light mt-1">Total Patients</p>

                <p className="font-bold">125</p>
              </div>
            </div>


          </div>

          <div className=" bg-cosmic-color-green-color min-h-fit md:h-[120px] w-full rounded-md col-span-2 ">

            <div className="w-full flex justify-end p-2">

              <img src={menuIcon} />

            </div>

            <div className="w-full flex flex-wrap place-items-center justify-center text-white gap-4">

              <div className="w-fit bg-white rounded-full p-1 ms-8">

                <img alt="appointment" src={totalEarningsIcon} />

              </div>

              <div>

                <p className="font-light mt-1">Total Earnings</p>

                <p className="font-bold">₦ 356,082.00</p>

              </div>
            </div>

          </div>

        </div>

        <div className="w-full grid grid-cols-5 gap-2 p-2">
          <div className="col-span-5 md:col-span-3">
            <DoctorChartGraph />

          </div>
          <div className="col-span-5 md:col-span-2">
            <DoctorTotalEarningGraph />
          </div>
        </div>


       <div className="p-2 h-[400px]  overflow-x-hidden overflow-y-auto  ">
        <div className={` ${ (appointments.appointments && appointments.totalAppointments>0) ? 'hidden':'block'} w-full h-full flex justify-center place-items-center`}>
          <p>No appointment yet</p>
        </div>
      {
        appointments.appointments && appointments.totalAppointments>0 && <DoctorTable/> 
      }
       </div>

      </div>

    </div>
  );
};

export default DoctorHomeBody;
