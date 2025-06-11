import tuneIcon from "../../../../assets/icons/home/cosmic-home-tune.svg";
import searchIcon from "../../../../assets/icons/home/cosmic-home-search-dark.svg";
import notificationIcon from "../../../../assets/icons/home/cosmic-home-notification.svg";
import { openSideBar } from "../../hook/patient/useGetSideBarMobileAnimation";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../store/initStore";
import defaultProfile from "../../../../assets/icons/defaultProfile.jpg";

interface NavBarProps {
  title: string;
  onSearchFired: (path: string, searchQuery?: string) => void;
}

const HomeMobileNavBar = ({ title, onSearchFired }: NavBarProps) => {
  const navigate = useNavigate();

  const user = useSelector((state: RootReducer) => state.user);

  if (!user.isAunthenticated) {
    return <Navigate to={"/"} replace />;
  }

  if (user.data && user.data.role !== "client") {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div className=" md:hidden md:ms-[294px] w-full h-fit  bg-[#F5F5F5]  ps-3 pt-[25px] pb-4 sticky top-0 z-[100] ">
      <div className="md:w-[85%]  w-full flex   flex-wrap relative   ">
        {title === "Home" ? (
          <div className="w-full flex place-items-center gap-2 b">
            <i
              className="fa fa-bars fa-2xl"
              aria-hidden="true"
              onClick={() => {
                openSideBar();
              }}
            ></i>
            <div className="flex gap-2 w-full  ">
              <img
                src={user.data?.profile?.profilePicture ?? defaultProfile}
                className="h-[44px] rounded-full"
              />

              <div className="w-full relative">
                <p className="font-semibold">
                  Hi {user.data?.lastName ?? "user"}
                </p>
                <p className="font-light text-[14px]">
                  How are you feeling today?
                </p>
              </div>

              <div className="absolute right-1   rounded-lg border  p-2 ">
                <img src={notificationIcon} />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <i
              className="fa fa-arrow-left fa-xl absolute left-0 top-3"
              aria-hidden="true"
              onClick={() => {
                navigate(-1);
              }}
            ></i>
            <p className="font-extrabold p-1">{title ?? "Home"}</p>
          </div>
        )}

        <div
          className={`w-full ${title !== "Home" ? "hidden" : ""} mt-5 flex flex-wrap   place-items-center gap-2 `}
        >
          <div
            className={`font-extralight border p-[5px] w-[84%] rounded-md flex `}
            onClick={() => {
              onSearchFired(title);
            }}
          >
            <img alt="search" src={searchIcon} />
            <textarea className="w-full resize-none h-[25px] outline-none bg-[#F5F5F5]" />
          </div>
          <div className="font-extralight min-w-[40px] rounded-md border pt-[7px] pb-[7px] flex justify-center">
            <img alt="tune" src={tuneIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMobileNavBar;
