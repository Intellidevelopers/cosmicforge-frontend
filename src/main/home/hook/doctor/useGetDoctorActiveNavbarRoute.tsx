import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export enum ActiveRoutePath {
  home = "home",
  "messages" = "messages",
  "appointments" = "appointments",
  analytics = "analytics",
  profile = "profile",
  editProfile = "edit-profile",
}

interface ActiveRoutePathProps {
  isHomeActive: boolean;
  isMessageActive: boolean;
  isAppoinmentsActive: boolean;
  isAnalyticsActive: boolean;
  isProfileActive: boolean;
  isEditProfileActive: boolean;
}
const useGetDoctorActiveNavbarRoute = () => {
  const routePath = useLocation();
  const path = routePath.pathname.split("/")[1];

  const [activeRoutePath, setActiveRoutePath] = useState<ActiveRoutePathProps>(
    () => {
      switch (path) {
        case ActiveRoutePath.home: {
          return {
            isHomeActive: true,
            isRunDiagnosisActive: false,
            isMessageActive: false,
            isAppoinmentsActive: false,
            isAnalyticsActive: false,
            isProfileActive: false,
            isEditProfileActive: false,
          };
        }

        case ActiveRoutePath["messages"]: {
          return {
            isHomeActive: false,
            isRunDiagnosisActive: false,
            isMessageActive: true,
            isAppoinmentsActive: false,
            isAnalyticsActive: false,
            isProfileActive: false,
            isEditProfileActive: false,
          };
        }

        case ActiveRoutePath.analytics: {
          return {
            isHomeActive: false,
            isRunDiagnosisActive: false,
            isMessageActive: false,
            isAppoinmentsActive: false,
            isAnalyticsActive: true,
            isProfileActive: false,
            isEditProfileActive: false,
          };
        }

        case ActiveRoutePath["appointments"]: {
          return {
            isHomeActive: false,
            isRunDiagnosisActive: false,
            isMessageActive: false,
            isAppoinmentsActive: true,
            isAnalyticsActive: false,
            isProfileActive: false,
            isEditProfileActive: false,
          };
        }

        case ActiveRoutePath.profile: {
          return {
            isHomeActive: false,
            isRunDiagnosisActive: false,
            isMessageActive: false,
            isAppoinmentsActive: false,
            isAnalyticsActive: false,
            isProfileActive: true,
            isEditProfileActive: false,
          };
        }

        case ActiveRoutePath.editProfile: {
          return {
            isHomeActive: false,
            isRunDiagnosisActive: false,
            isMessageActive: false,
            isAppoinmentsActive: false,
            isAnalyticsActive: false,
            isProfileActive: false,
            isEditProfileActive: true,
          };
        }

        default:
          return {
            isHomeActive: false,
            isRunDiagnosisActive: false,
            isMessageActive: false,
            isAppoinmentsActive: false,
            isAnalyticsActive: false,
            isProfileActive: false,
            isEditProfileActive: false,
          };
      }
    },
  );

  useEffect(() => {
    const path = routePath.pathname.split("/")[2];
    switch (path) {
      case ActiveRoutePath.home: {
        setActiveRoutePath((prevState) => {
          return {
            ...prevState,
            isHomeActive: true,
            isRunDiagnosisActive: false,
            isMessageActive: false,
            isAppoinmentsActive: false,
            isAnalyticsActive: false,
            isProfileActive: false,
            isEditProfileActive: false,
          };
        });
        return;
      }

      case ActiveRoutePath["messages"]: {
        setActiveRoutePath((prevState) => {
          return {
            ...prevState,
            isHomeActive: false,
            isRunDiagnosisActive: false,
            isMessageActive: true,
            isAppoinmentsActive: false,
            isAnalyticsActive: false,
            isProfileActive: false,
            isEditProfileActive: false,
          };
        });
        return;
      }

      case ActiveRoutePath.analytics: {
        setActiveRoutePath((prevState) => {
          return {
            ...prevState,
            isHomeActive: false,
            isRunDiagnosisActive: false,
            isMessageActive: false,
            isAppoinmentsActive: false,
            isAnalyticsActive: true,
            isProfileActive: false,
            isEditProfileActive: false,
          };
        });
        return;
      }

      case ActiveRoutePath.appointments: {
        setActiveRoutePath((prevState) => {
          return {
            ...prevState,
            isHomeActive: false,
            isRunDiagnosisActive: false,
            isMessageActive: false,
            isAppoinmentsActive: true,
            isAnalyticsActive: false,
            isProfileActive: false,
            isEditProfileActive: false,
          };
        });
        return;
      }

      case ActiveRoutePath.profile: {
        setActiveRoutePath((prevState) => {
          return {
            ...prevState,
            isHomeActive: false,
            isRunDiagnosisActive: false,
            isMessageActive: false,
            isAppoinmentsActive: false,
            isAnalyticsActive: false,
            isProfileActive: true,
            isEditProfileActive: false,
          };
        });
        return;
      }

      case ActiveRoutePath.editProfile: {
        setActiveRoutePath((prevState) => {
          return {
            ...prevState,
            isHomeActive: false,
            isRunDiagnosisActive: false,
            isMessageActive: false,
            isAppoinmentsActive: false,
            isAnalyticsActive: false,
            isProfileActive: false,
            isEditProfileActive: true,
          };
        });
        return;
      }

      default:
        setActiveRoutePath((prevState) => {
          return {
            ...prevState,
            isHomeActive: false,
            isRunDiagnosisActive: false,
            isMessageActive: false,
            isAppoinmentsActive: false,
            isAnalyticsActive: false,
            isProfileActive: false,
            isEditProfileActive: false,
          };
        });
    }
  }, [routePath]);

  return { activeRoutePath, setActiveRoutePath };
};

export default useGetDoctorActiveNavbarRoute;
