import DoctorHomeNavBar from "./DoctorHomeNavBar";
import menuIcon from "../../../../assets/icons/cosmic-menu-icon.svg";
import appointmentIcon from "../../../../assets/icons/cosmic-doctor-appointment-icon.svg";
import totalPatientsIcon from "../../../../assets/icons/cosmic-doctor-total-patients-icon.svg";
import totalEarningsIcon from "../../../../assets/icons/cosmic-doctor-earnings-icon.svg";
import DoctorChartGraph from "./DoctorChartGrap";


const DoctorHomeBody = () => {

  return (

    <div className="w-full">

      <DoctorHomeNavBar title="Dashboard" />

      <div className=" md:ps-[294px]   ">

        <div className="w-full flex flex-wrap p-10 justify-center gap-8">

          <div className=" bg-cosmic-primary-color  h-[120px] w-[280px] rounded-sm">

            <div className="w-full flex justify-end p-2">
              <img src={menuIcon} />
            </div>

            <div className="w-full flex flex-wrap text-white gap-4">
              <div className="w-fit bg-white rounded-full p-1 ms-8">
                <img alt="appointment" src={appointmentIcon} />
              </div>
              <div>
                <p className="font-light mt-1">Appointments</p>
                <p className="font-bold">25</p>
              </div>
            </div>
          </div>

          <div className=" bg-cosmic-color-yellow-color  h-[120px] w-[280px] rounded-sm">
            <div className="w-full flex justify-end p-2">
              <img src={menuIcon} />
            </div>

            <div className="w-full flex flex-wrap text-white gap-4">

              <div className="w-fit bg-white rounded-full p-1 ms-8">

                <img alt="appointment" src={totalPatientsIcon} />
              </div>

              <div>

                <p className="font-light mt-1">Total Patients</p>

                <p className="font-bold">125</p>
              </div>
            </div>


          </div>

          <div className=" bg-cosmic-color-green-color h-[120px] w-[280px] rounded-sm">

            <div className="w-full flex justify-end p-2">

              <img src={menuIcon} />

            </div>

            <div className="w-full flex flex-wrap text-white gap-4">

              <div className="w-fit bg-white rounded-full p-1 ms-8">

                <img alt="appointment" src={totalEarningsIcon} />

              </div>

              <div>

                <p className="font-light mt-1">Total Patients</p>

                <p className="font-bold">₦ 356,082.00</p>

              </div>
            </div>

          </div>

        </div>

        <div className="w-full  p-10">
            <DoctorChartGraph/>
        </div>

      </div>

    </div>
  );
};

export default DoctorHomeBody;
