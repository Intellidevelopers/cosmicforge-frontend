import React from "react";
import OnboardImage from '../../../assets/images/introframe.jpeg';
import logo from '../../../assets/icons/cosmic forge logo 1.svg';
import fbIcon from '../../../assets/icons/fb.svg';
import ggIcon from '../../../assets/icons/google.svg';
import appleIcon from '../../../assets/icons/apple.svg';
import { Link } from "react-router-dom";

const Onboard:React.FC = () => {
    return (
        <div className="h-screen w-screen ">
            <div className="md:h-[100%] md:w-[100%] h-[36%] w-[100%]">
                <img src={OnboardImage} className="h-[100%] w-[100%" alt="welcome image"/>
            </div>
            <div className="md:bg-gradient-to-b  text-center pb-[50px] flex flex-col md:justify-top justify-around items-center fixed bottom-0 md:h-[58%] h-[65%] md:rounded-t-0 rounded-t-[20px] w-screen md:backdrop-blur-[5px] md:bg-none bg-white from-transparent to-[#272EA7]/60">
                <div className="flex flex-col items-center gap-[15px]">
                    <div className="md:h-[70px] h-[45px] w-fit">
                        <img src={logo} alt="cosmicforge logo" className="h-[100%] w-[100%]"/>
                    </div> 
                    <span className="md:text-white text-[18px] font-extrabold text-[#272EA7]">Cosmicforge Healthnet Limited</span>
                </div>
                <div className="flex flex-col gap-[20px] w-[100%] items-center mt-[20px]">
                    <Link  className="md:h-[40px] h-[45px] flex flex-col justify-center items-center font-extrabold rounded-[4px] md:w-[300px] w-[80%] bg-[#272EA7] text-white hover:bg-[#272EA7]/70 hover:scale-[105%]" to={'/account/signup'}>Sign Up with your Email address</Link>
                    <div className="flex flex-row gap-[20px] w-[100%] justify-center items-center">
                        <button className="md:h-[35px] w-[45px] h-[45px] hover:scale-[105%] flex flex-col justify-center items-center md:w-[35px] border-[1px] border-gray-300 rounded-[4px]">
                            <img src={fbIcon} alt="fb icon" className="h-[70%] w-[70%]"/>
                        </button>
                        <button className="md:h-[35px] w-[45px] h-[45px] hover:scale-[105%] flex flex-col justify-center items-center md:w-[35px] border-[1px] border-gray-300 rounded-[4px]">
                            <img src={ggIcon} alt="fb icon" className="h-[70%] w-[70%]"/>
                        </button>
                        <button className="md:h-[35px] w-[45px] h-[45px] hover:scale-[105%] flex flex-col justify-center items-center md:w-[35px] border-[1px] border-gray-300 rounded-[4px]">
                            <img src={appleIcon} alt="fb icon" className="h-[70%] w-[70%]"/>
                        </button>
                    </div>
                </div>
                <span className="font-bold mt-[15px] text-black text-[15px]">Already have an account? <Link className="md:text-white md:hover:text-[#272EA7] hover:text-[#272EA7]/50 text-[#272EA7]" to={'/account/login'}>Log In</Link></span>
                <div className="md:w-[450px] mt-[20px] w-[80%]">
                    <span className="font-bold mt-[20px] text-black text-[15px]">
                        By signing up or logging in, i accept the app&apos;s
                        <Link className="md:text-white md:hover:text-[#272EA7] hover:text-[#272EA7]/50 text-[#272EA7]" to={'/terms-and-service'}>{' Terms of service '} </Link>
                        and
                        <Link className="md:text-white md:hover:text-[#272EA7] hover:text-[#272EA7]/50 text-[#272EA7]" to={'/privacy-policy'}>{' Privacy Policy'}</Link>
                    </span> 
                </div>
             
            </div>
        </div>
    )
}

export default Onboard;