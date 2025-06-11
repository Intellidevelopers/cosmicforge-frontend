// import mapImg from '../../../assets/images/mapImage.png'
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar";
import HomeNavBar from "../../home/component/patient/HomeNavBar";
import "./styles.css";

const AmbulanceEnRoute = () => {
  return (
    <>
      <HomeNavBar title={"Ambulance En-Route"} onSearchFired={() => {}} />
      <HomeMobileNavBar title={"Ambulance En-Route"} onSearchFired={() => {}} />
      <div
        className=" relative  w-full h-[90%] flex items-end justify-center"
        id="map"
      >
        {/* <img src={mapImg} alt="Map"  className='min-w-full min-h-full z-1 absolute'/> */}
        <div className="relative z-10 gap-4 flex flex-col md:ml-[-250px] justify-center items-center  mb-[10%] w-full  ">
          <div className="bg-white flex flex-col space-3 rounded-md shadow-md p-4 w-[90%] max-w-full sm:max-w-[450px]">
            <p className="truncate">Ambulance En-Route</p>
            <p className="truncate font-bold">9 mins</p>
            <p className="truncate">Lekki, Nigeria</p>
          </div>
          <div className="bg-white flex flex-col space-3 rounded-md shadow-md p-4 w-[90%] max-w-full sm:max-w-[450px]">
            <p className="truncate text-sm">Destination for Patient</p>
            <p className=" font-bold">
              Chastain Park Hospital, Lekki, Lagos, Nigeria
            </p>
            <p className="text-xs">
              Thank you for initiating the ambulance call for the patient.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AmbulanceEnRoute;
