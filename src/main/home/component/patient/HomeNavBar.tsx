import tuneIcon from "../../../../assets/icons/home/cosmic-home-tune.svg";
import searchIcon from "../../../../assets/icons/home/cosmic-home-search-dark.svg";
import shopIcon from "../../../../assets/icons/home/cosmic-home-shop.svg";
import cartIcon from "../../../../assets/icons/home/cosmic-home-cart.svg";
import botChatIcon from "../../../../assets/icons/home/cosmic-home-bot-chat.svg";
import notificationIcon from "../../../../assets/icons/home/cosmic-home-notification.svg";
import { useState } from "react";

interface NavBarProps {
  title: string;
  onSearchFired: (path: string, searchQuery?: string) => void;
}

const HomeNavBar = ({ title, onSearchFired }: NavBarProps) => {
  const [textSearched, setTextSearched] = useState<string>("");
  return (
    <div className="  hidden md:block  bg-white w-full min-h-[70px] h-fit  p-5  sticky top-0  shadow-md shadow-black/10 z-[100]">
      <div className=" w-full flex  relative   ">
        <p className="font-extrabold pt-3 min-w-fit pe-2 text-wrap  ">
          {title ?? "Home"}
        </p>

        <div className=" p-1 w-full  relative grid grid-cols-5 mt-1 ">
          <div className=" w-[50%] md:w-full col-span-3 font-light    flex flex-wrap  justify-center  place-items-center gap-2 cursor-default ">
            <div
              className="w-[50%] md:w-[60%] font-extralight min-w-[40px] rounded-md border p-1  flex gap-1"
              onClick={() => {
                onSearchFired(title, textSearched);
              }}
            >
              <img alt="tune" src={searchIcon} />
              <input
                className="w-full outline-none"
                type="search"
                placeholder="search here"
                onChange={(e) => {
                  setTextSearched(e.target.value);
                  onSearchFired(title, e.target.value);
                }}
              />
            </div>

            <div className="font-extralight min-w-[40px]  rounded-md border p-1 ">
              <img alt="tune" src={tuneIcon} />
            </div>
          </div>

          <div className="hidden  col-span-2    md:flex flex-wrap md:justify-end  gap-1 md:w-full   ">
            <div className="font-extralight min-w-[40px] flex  justify-center rounded-md border p-1 ">
              <img alt="tune" src={shopIcon} />
            </div>
            <div className="font-extralight min-w-[40px] rounded-md border p-1 flex  justify-center">
              <img alt="tune" src={cartIcon} />
            </div>
            <div className="font-extralight min-w-[40px] rounded-md border p-1 flex  justify-center">
              <img alt="tune" src={botChatIcon} />
            </div>
            <div className="font-extralight min-w-[40px] rounded-md border p-1 flex  justify-center">
              <img alt="tune" src={notificationIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavBar;
