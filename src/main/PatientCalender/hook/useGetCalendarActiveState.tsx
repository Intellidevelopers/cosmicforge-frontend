import { useState } from "react";
import { useLocation } from "react-router-dom";

interface CalendarActiveStateProps {
  calendar: boolean;
  upcoming: boolean;
  past: boolean;
  cancelled: boolean;
}

const useGetCalendarActiveState = () => {
  const { pathname } = useLocation();

  let path: string = pathname.split("/")[3];
  if (path === undefined) pathname.split("/")[2];

  const [activeState, setActiveState] = useState<CalendarActiveStateProps>(
    () => {
      switch (path) {
        case "calendar": {
          return {
            calendar: true,
            upcoming: false,
            cancelled: false,
            past: false,
          };
        }

        case "upcoming": {
          return {
            calendar: false,
            upcoming: true,
            cancelled: false,
            past: false,
          };
        }

        case "past": {
          return {
            calendar: false,
            upcoming: false,
            cancelled: true,
            past: false,
          };
        }

        case "cancelled": {
          return {
            calendar: false,
            upcoming: false,
            cancelled: true,
            past: false,
          };
        }

        default: {
          return {
            calendar: true,
            upcoming: false,
            cancelled: false,
            past: false,
          };
        }
      }
    },
  );

  return { activeState, setActiveState };
};

export default useGetCalendarActiveState;
