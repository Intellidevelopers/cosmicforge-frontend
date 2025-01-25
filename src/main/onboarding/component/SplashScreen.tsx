import React from "react";
import logo from '../../../assets/icons/cosmic forge logo 1.svg';
import Loader from "../../../assets/Loader";

const SplashScreen: React.FC = () => {
    return (
        <div className="h-[100vh] w-screen flex flex-col items-center justify-end bg-white">
            <div className="md:h-[65%] h-[55%] w-full pb-[30px] flex flex-col items-center justify-between md:justify-start gap-[70px] bg-gradient-to-b from-white to-[#272EA7]/50">
                <div className="md:w-[400px] md:h-[100px] w-[80%] h-[100px]">
                    <img src={logo} alt="logo" width={'100%'} height={'100%'} style={{objectFit:'cover'}}/>
                </div>
                <Loader/>
                <span className="text-[#272EA7] md:mb-0 mb-[50px] font-extrabold text-[18px] text-center ">Cosmicforge Healthnet Limited</span>
            </div>
        </div>
    )
}

export default SplashScreen;