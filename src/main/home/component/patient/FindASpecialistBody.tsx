import { Outlet, useNavigate } from "react-router-dom";
import HomeNavBar from "./HomeNavBar";
import HomeMobileNavBar from "./HomeMobileNavBar";


   const  FindASpecialistBody = () =>{
  const navigate = useNavigate();
  
  return (
    <div className=" w-full  relative  h-dvh overflow-x-hidden    overflow-y-auto flex flex-col cursor-default">
      <HomeNavBar title="Find A Specialist" />
      <HomeMobileNavBar title="Find A Specialist" />
      <div className=" ps-0  md:ps-[294px]     ">
        <div className="w-full m-5 flex place-items-center gap-3" onClick={() => {
          navigate(-1);
        }}>
          {/* <img src={backNavigitionIcon}  onClick={() => {
              navigate(-1);
            }} alt='back'/>
          <p
            className="font-light "
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </p> */}
        </div>

    <Outlet/>
      </div>
    </div>
  );
};

export default FindASpecialistBody;
