import HomeNavBar from "../../home/component/patient/HomeNavBar";
import HomeSideBar from "../../home/component/patient/HomeSideBar.ls";
import React from "react";
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar";
import successIllus from "../../../assets/icons//Busnesswoman thinking about work with questions hanging over her head.svg";
import { Link } from "react-router-dom";


const ComingSoon:React.FC = () => {

    return (
        <div className="w-full  relative  h-dvh bg-gray-100 overflow-x-hidden overflow-y-auto flex flex-col cursor-default">
            <HomeNavBar title="Analytics"/>
            <HomeMobileNavBar title="Analytics"/>
            <HomeSideBar/>
            <div className="flex flex-col items-center justify-center pt-[10px] pb-[70px] gap-[20px] p-3  md:ps-[265px]">
            <div className="flex-col items-center mt-[10%] md:mt-0 h-[90%] justify-between flex md:w-[400px] w-[90%] md:h-fit">

                <div className="w-[80%] h-[400px] md:mt-[20px] md:h-[300px] justify-end items-center flex flex-col">
                        <div className="w-[100%] flex flex-col h-[100%] md:h-[300px] ">
                            <img src={successIllus} alt="cosmic forge logo" className="h-[100%] w-[100%]"/>
                        </div>
                        <div className="md:h-[150px] h-[175px] bg-gradient-to-t from-gray-100 to-transparent self-end w-[100%] left-0 absolute"></div>
                </div>
                <div className="flex flex-col">
                    <span className="mt-2 text-center text-[17px] md:text-[16px] self-center">We are currently working on bringing this feature to you.</span>
                </div>
                <div className="mt-[7px] w-[100%] flex flex-col items-center gap-2">
                    <Link to={'/home'} className="md:h-[40px] flex flex-col justify-center items-center h-[45px] md:w-[100%] mt-[20px] w-[90%] rounded-[5px] hover:bg-[#272EA7]/70 bg-[#272EA7] cursor-pointer text-white">Go back</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ComingSoon;