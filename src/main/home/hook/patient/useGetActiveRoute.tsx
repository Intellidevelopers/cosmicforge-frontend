import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export enum ActiveRoutePath {
  home="home",
  "run-diagnosis"="run-diagnosis",
  "messages"="messages",
  "book-appointment"="book-appointment",
  analytics="analytics",
  "first-aid"="first-aid",
  "chat-bot"= "chat-bot",
  "find-a-specialist"= "find-a-specialist",
  calendar="calendar",
 profile="profile",
 settings="settings"
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
  isProfileActive:boolean;
  isSettingsActive:boolean;
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
          isCalenderActive:false,
          isProfileActive:false,
          isSettingsActive:false
        };
      }

      case ActiveRoutePath['messages']: {
       
        return {

          isHomeActive: false,
          isRunDiagnosisActive:false,
          isMessageActive: true,
          isBookAppoinmentActive:false,
          isAnalyticsActive: false,
          isFirstAidActive: false,
          isChatBotActive: false,
          isFindASpecialistActive:false,
          isCalenderActive:false,
          isProfileActive:false,
          isSettingsActive:false
        };
      }

      case ActiveRoutePath["find-a-specialist"]: {
        return {
          isHomeActive: false,
          isRunDiagnosisActive:false,
          isMessageActive: false,
          isBookAppoinmentActive:false,
          isAnalyticsActive: false,
          isFirstAidActive: false,
          isChatBotActive: false,
          isFindASpecialistActive:true,
          isCalenderActive:false,
          isProfileActive:false,
          isSettingsActive:false
        };
      }

      case ActiveRoutePath.analytics: {
        return{
          isHomeActive: false,
          isRunDiagnosisActive:false,
          isMessageActive: false,
          isBookAppoinmentActive:false,
          isAnalyticsActive: true,
          isFirstAidActive: false,
          isChatBotActive: false,
          isFindASpecialistActive:false,
          isCalenderActive:false,
          isProfileActive:false,
          isSettingsActive:false
        }
        
      }

      case ActiveRoutePath.calendar: {
        return{
          isHomeActive: false,
          isRunDiagnosisActive:false,
          isMessageActive: false,
          isBookAppoinmentActive:false,
          isAnalyticsActive: false,
          isFirstAidActive: false,
          isChatBotActive: false,
          isFindASpecialistActive:false,
          isCalenderActive:true,
          isProfileActive:false,
          isSettingsActive:false
        }
        
      }


      case ActiveRoutePath['first-aid']: {
        return{
          isHomeActive: false,
          isRunDiagnosisActive:false,
          isMessageActive: false,
          isBookAppoinmentActive:false,
          isAnalyticsActive: false,
          isFirstAidActive: true,
          isChatBotActive: false,
          isFindASpecialistActive:false,
          isCalenderActive:false,
          isProfileActive:false,
          isSettingsActive:false
        }
        
      }


      case ActiveRoutePath.profile: {
        return{
          isHomeActive: false,
          isRunDiagnosisActive:false,
          isMessageActive: false,
          isBookAppoinmentActive:false,
          isAnalyticsActive: false,
          isFirstAidActive:false,
          isChatBotActive: false,
          isFindASpecialistActive:false,
          isCalenderActive:false,
          isProfileActive:true,
          isSettingsActive:false
        }
      }

        case ActiveRoutePath["run-diagnosis"]: {

          return{
            isHomeActive: false,
            isRunDiagnosisActive:true,
            isMessageActive: false,
            isBookAppoinmentActive:false,
            isAnalyticsActive: false,
            isFirstAidActive:false,
            isChatBotActive: false,
            isFindASpecialistActive:false,
            isCalenderActive:false,
            isProfileActive:false,
            isSettingsActive:false
          }
        
      }

      case ActiveRoutePath["book-appointment"]: {

        return{
          isHomeActive: false,
          isRunDiagnosisActive:false,
          isMessageActive: false,
          isBookAppoinmentActive:true,
          isAnalyticsActive: false,
          isFirstAidActive:false,
          isChatBotActive: false,
          isFindASpecialistActive:false,
          isCalenderActive:false,
          isProfileActive:false,
          isSettingsActive:false
        }
      
    }


    case ActiveRoutePath["chat-bot"]: {

      return{
        isHomeActive: false,
        isRunDiagnosisActive:false,
        isMessageActive: false,
        isBookAppoinmentActive:false,
        isAnalyticsActive: false,
        isFirstAidActive:false,
        isChatBotActive: true,
        isFindASpecialistActive:false,
        isCalenderActive:false,
        isProfileActive:false,
        isSettingsActive:false
      }
    
  }



  case ActiveRoutePath["settings"]: {

    return{
      isHomeActive: false,
      isRunDiagnosisActive:false,
      isMessageActive: false,
      isBookAppoinmentActive:false,
      isAnalyticsActive: false,
      isFirstAidActive:false,
      isChatBotActive: false,
      isFindASpecialistActive:false,
      isCalenderActive:false,
      isProfileActive:false,
      isSettingsActive:true
    }
  
}

      
      default:  return {
        isHomeActive: false,
        isRunDiagnosisActive:false,
        isMessageActive: false,
        isBookAppoinmentActive:false,
        isAnalyticsActive: false,
        isFirstAidActive: false,
        isChatBotActive: false,
        isFindASpecialistActive:false,
        isCalenderActive:false,
        isProfileActive:false,
        isSettingsActive:false
      }
    }
  });


  
  useEffect(()=>{
    const path = routePath.pathname.split("/")[2];
    switch (path ) {

      case ActiveRoutePath.home: {
        setActiveRoutePath( prevState=>{
          return{
          ...prevState,
          isHomeActive: true,
          isRunDiagnosisActive:false,
          isMessageActive: false,
          isBookAppoinmentActive:false,
          isAnalyticsActive: false,
          isFirstAidActive: false,
          isChatBotActive: false,
          isFindASpecialistActive:false,
          isCalenderActive:false,
          isProfileActive:false,
          isSettingsActive:false
        }})
        return
      }

      case ActiveRoutePath['messages']: {


        setActiveRoutePath(prevState=>{
          return{
          ...prevState,
            isHomeActive: false,
            isRunDiagnosisActive:false,
            isMessageActive: true,
            isBookAppoinmentActive:false,
            isAnalyticsActive: false,
            isFirstAidActive: false,
            isChatBotActive: false,
            isFindASpecialistActive:false,
            isCalenderActive:false,
            isProfileActive:false,
            isSettingsActive:false,

          
        }})
        return 
       
        
      }
      case ActiveRoutePath["find-a-specialist"]: {
        setActiveRoutePath(prevState=>{
          return{
          ...prevState,
          isHomeActive: false,
          isRunDiagnosisActive:false,
          isMessageActive: false,
          isBookAppoinmentActive:false,
          isAnalyticsActive: false,
          isFirstAidActive: false,
          isChatBotActive: false,
          isFindASpecialistActive:true,
          isCalenderActive:false,
          isProfileActive:false,
          isSettingsActive:false
        }})
        return 
      }

      case ActiveRoutePath.analytics: {
        setActiveRoutePath(prevState=>{
          return{
          ...prevState,
          isHomeActive: false,
          isRunDiagnosisActive:false,
          isMessageActive: false,
          isBookAppoinmentActive:false,
          isAnalyticsActive: true,
          isFirstAidActive: false,
          isChatBotActive: false,
          isFindASpecialistActive:false,
          isCalenderActive:false,
          isProfileActive:false,
          isSettingsActive:false
        }})
        return 
      }


      case ActiveRoutePath["run-diagnosis"]: {
        setActiveRoutePath(prevState=>{
          return{
          ...prevState,
          isHomeActive: false,
          isRunDiagnosisActive:true,
          isMessageActive: false,
          isBookAppoinmentActive:false,
          isAnalyticsActive: false,
          isFirstAidActive: false,
          isChatBotActive: false,
          isFindASpecialistActive:false,
          isCalenderActive:false,
          isProfileActive:false,
          isSettingsActive:false
        }})
        return 
      }


      case ActiveRoutePath["book-appointment"]: {
        setActiveRoutePath(prevState=>{
          return{
          ...prevState,
          isHomeActive: false,
          isRunDiagnosisActive:false,
          isMessageActive: false,
          isBookAppoinmentActive:true,
          isAnalyticsActive: false,
          isFirstAidActive: false,
          isChatBotActive: false,
          isFindASpecialistActive:false,
          isCalenderActive:false,
          isProfileActive:false,
          isSettingsActive:false
        }})
        return 
      }


      case ActiveRoutePath["chat-bot"]: {
        setActiveRoutePath(prevState=>{
          return{
          ...prevState,
          isHomeActive: false,
          isRunDiagnosisActive:false,
          isMessageActive: false,
          isBookAppoinmentActive:false,
          isAnalyticsActive: false,
          isFirstAidActive: false,
          isChatBotActive: true,
          isFindASpecialistActive:false,
          isCalenderActive:false,
          isProfileActive:false,
          isSettingsActive:false
        }})
        return 
      }


      case ActiveRoutePath.calendar: {
        setActiveRoutePath(prevState=>{
          return{
          ...prevState,
          isHomeActive: false,
          isRunDiagnosisActive:false,
          isMessageActive: false,
          isBookAppoinmentActive:false,
          isAnalyticsActive: false,
          isFirstAidActive: false,
          isChatBotActive: false,
          isFindASpecialistActive:false,
          isCalenderActive:true,
          isProfileActive:false,
          isSettingsActive:false
        }})
        return 
      }


      case ActiveRoutePath["first-aid"]: {
        setActiveRoutePath(prevState=>{
          return{
          ...prevState,
          isHomeActive: false,
          isRunDiagnosisActive:false,
          isMessageActive: false,
          isBookAppoinmentActive:false,
          isAnalyticsActive: false,
          isFirstAidActive: true,
          isChatBotActive: false,
          isFindASpecialistActive:false,
          isCalenderActive:false,
          isProfileActive:false,
          isSettingsActive:false
        }})
        return 
      }

      case ActiveRoutePath.profile: {
        setActiveRoutePath(prevState=>{
          return{
          ...prevState,
          isHomeActive: false,
          isRunDiagnosisActive:false,
          isMessageActive: false,
          isBookAppoinmentActive:false,
          isAnalyticsActive: false,
          isFirstAidActive: false,
          isChatBotActive: false,
          isFindASpecialistActive:false,
          isCalenderActive:false,
          isProfileActive:true,
          isSettingsActive:false
        }})
        return 
      }

      case ActiveRoutePath.settings: {
        setActiveRoutePath(prevState=>{
          return{
          ...prevState,
          isHomeActive: false,
          isRunDiagnosisActive:false,
          isMessageActive: false,
          isBookAppoinmentActive:false,
          isAnalyticsActive: false,
          isFirstAidActive: false,
          isChatBotActive: false,
          isFindASpecialistActive:false,
          isCalenderActive:false,
          isProfileActive:false,
          isSettingsActive:true
        }})
        return 
      }


      default: setActiveRoutePath(prevState=> {
      return {   ...prevState,
        isHomeActive: false,
        isRunDiagnosisActive:false,
        isMessageActive: false,
        isBookAppoinmentActive:false,
        isAnalyticsActive: false,
        isFirstAidActive: false,
        isChatBotActive: false,
        isFindASpecialistActive:false,
        isCalenderActive:false,
        isProfileActive:false,
        isSettingsActive:false

      }
      })  
    }
  },[routePath])

  return {activeRoutePath,setActiveRoutePath}
};


export default useGetActiveRoute
