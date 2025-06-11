import { Outlet } from "react-router-dom";
import HomeNavBar from "../patient/HomeNavBar";
import HomeMobileNavBar from "../patient/HomeMobileNavBar";
import { useState } from "react";

const ChatBody = () => {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <div className="w-full overflow-hidden ">
      <HomeNavBar
        title="Messages"
        onSearchFired={(path, text) => {
          if (path === "Messages") {
            setSearchText(text!!);
          }
        }}
      />
      <HomeMobileNavBar title="Messages" onSearchFired={() => {}} />

      <Outlet context={{ query: searchText }} />
    </div>
  );
};

export default ChatBody;
