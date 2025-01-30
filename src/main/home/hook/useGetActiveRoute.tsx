import { useState } from "react";
import { useLocation } from "react-router-dom";

export enum ActiveRoutePath {
  home="home",
  "run-diagnosis"="run-diagnosis",
  message="messages",
  "book-appointment"="book-appointment",
  analytics="analytics",
  "first-aid"="first-aid",
  "chat-bot"= "chat-bot",
  "find-a-specialist"= "find-a-specialist",
  calendar="calendar"
}

interface ActiveRoutePathProps {
  isHomeActive: boolean;
  isRunDiagnosisActive: boolean;
  isMessageActive: boolean;
  isBookAppoinmentActive: boolean;
  isAnalyticsActive: boolean;
  isFirstAidActive: boolean;
  isChatBotActive: boolean;
  isFindASpecialistActive: boolean;
  isCalenderActive: boolean;
}
const useGetActiveRoute = () => {
  const routePath = useLocation();
  const path = routePath.pathname.split("/")[1];

  const [activeRoutePath, setActiveRoutePath] = useState<
    ActiveRoutePathProps
  >(() => {
    switch (path ) {

      case ActiveRoutePath.home: {
        return {
          isHomeActive: true,
          isRunDiagnosisActive:false,
          isMessageActive: false,
          isBookAppoinmentActive:false,
          isAnalyticsActive: false,
          isFirstAidActive: false,
          isChatBotActive: false,
          isFindASpecialistActive:false,
          isCalenderActive:false
        };
      }

      default:  return {
        isHomeActive: true,
        isRunDiagnosisActive:false,
        isMessageActive: false,
        isBookAppoinmentActive:false,
        isAnalyticsActive: false,
        isFirstAidActive: false,
        isChatBotActive: false,
        isFindASpecialistActive:false,
        isCalenderActive:false
      }
    }
  });

  return {activeRoutePath,setActiveRoutePath}
};


export default useGetActiveRoute
