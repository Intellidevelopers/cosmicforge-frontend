import { Outlet } from "react-router-dom"
import HomeNavBar from "../patient/HomeNavBar"
import HomeMobileNavBar from "../patient/HomeMobileNavBar"


const  ChatBody = ()  => {

    return (
        <div className="w-full overflow-hidden ">
            <HomeNavBar title="Messages" />
            <HomeMobileNavBar title="Messages"/>
     
          
            <Outlet/>
        </div>
    )
}


export default ChatBody