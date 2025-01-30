import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import backIcon from "../../../../assets/icons/Forward.png";
import IconContainer from "../../../generalComponents/IconContainer";
import cosmicLogo from '../../../../assets/icons/cosmic forge logo 1.svg';

interface components {
    step: number,
    setStep: (e:number)=>void,
}

const EnterOtp:React.FC<components> = ( { step, setStep } ) => {
    const [ box1, setBox1 ] = useState<string>('');
    const [ box2, setBox2 ] = useState<string>('');
    const [ box3, setBox3 ] = useState<string>('');
    const [ box4, setBox4 ] = useState<string>('');
    const [ box5, setBox5 ] = useState<string>('');
    const [ box6, setBox6 ] = useState<string>('');
    const [ otp, setOtp ] = useState<string>('');

    const confirmOtp = () => {
        // place api logic to confirm otp here
        console.log(otp);
    }

    const handleOtpInput = (str:string) => {
        setOtp(str);
    }


    const goBack = () => {
        setStep(step-1);
    }

    return (
        <div className="h-screen w-screen bg-gray-100 md:px-0 px-[5%] flex flex-col justify-center items-center">
            <button onClick={goBack} className="flex absolute md:top-[7%] top-[3%] flex-row gap-2 items-center font-bold md:w-[80%] w-[95%] h-fit">
                <IconContainer image={backIcon} classes='rotate-180' mobileSize="35" deskSize="30"/>
                <span className="md:flex hidden">Go back</span>
            </button>
            <div className="md:w-[400px] md:h-fit h-screen md:text-center text-left md:pt-0 pt-[20%] flex flex-col md:pb-0 pb-[10%] justify-between items-center md:justify-around md:pt-0 pt-[30px]  gap-[15px] w-[100%]">
            <div className="w-[80%] md:flex hidden h-[50px]">
                    <img src={cosmicLogo} alt="cosmic forge logo" className="h-[100%] w-[100%]"/>
                </div>
                <div className="flex flex-col gap-2 w-[100%]">
                    <span className="text-[23px] font-extrabold">OTP Code</span>
                    <div className="flex flex-col gap-0">
                        <span>We sent you a 6-digit code via your email</span>
                        <span className="font-bold">example@gmail.com</span>
                    </div>
        
                    <div className="flex flex-row gap-2 w-[100%] md:mt-[10px] mt-[20px] justify-center items-center">
                        <input value={box1} onChange={(e)=>{ setBox1(e.target.value); handleOtpInput(`${e.target.value}${box2}${box3}${box4}${box5}${box6}`) }} className='h-[44px] w-[43px] border-[1px] border-gray-400 rounded-[5px] text-center bg-transparent' type="tel" maxLength={1} />
                        <input value={box2} onChange={(e)=>{ setBox2(e.target.value); handleOtpInput(`${box1}${e.target.value}${box3}${box4}${box5}${box6}`) }} className='h-[44px] w-[43px] border-[1px] border-gray-400 rounded-[5px] text-center bg-transparent' type="tel" maxLength={1} />
                        <input value={box3} onChange={(e)=>{ setBox3(e.target.value); handleOtpInput(`${box1}${box2}${e.target.value}${box4}${box5}${box6}`) }} className='h-[44px] w-[43px] border-[1px] border-gray-400 rounded-[5px] text-center bg-transparent' type="tel" maxLength={1} />
                        <input value={box4} onChange={(e)=>{ setBox4(e.target.value); handleOtpInput(`${box1}${box2}${box3}${e.target.value}${box5}${box6}`) }} className='h-[44px] w-[43px] border-[1px] border-gray-400 rounded-[5px] text-center bg-transparent' type="tel" maxLength={1} />
                        <input value={box5} onChange={(e)=>{ setBox5(e.target.value); handleOtpInput(`${box1}${box2}${box3}${box4}${e.target.value}${box6}`) }} className='h-[44px] w-[43px] border-[1px] border-gray-400 rounded-[5px] text-center bg-transparent' type="tel" maxLength={1} />
                        <input value={box6} onChange={(e)=>{ setBox6(e.target.value); handleOtpInput(`${box1}${box2}${box3}${box4}${box5}${e.target.value}`) }} className='h-[44px] w-[43px] border-[1px] border-gray-400 rounded-[5px] text-center bg-transparent' type="tel" maxLength={1} />
                    </div>
                    {/* <span className="text-red-500">Invalid OTP code please try again</span> USE THIS TO HANDLE EXCEPTIONS TO THE UI*/}
                    <span className="text-left mt-[10px]">Did&apos;t receive the code?</span>
                    <button className="text-[#272EA7] hover:text-[#272EA7]/70 font-bold text-[18px] w-fit">Resend Code</button>
                </div>
                <div className="w-[100%]">
                    <button onClick={confirmOtp} className="h-[48px] w-[100%] md:mt-[120px] bg-[#272EA7] hover:bg-[#272EA7]/80 text-white font-bold flex flex-row justify-center items-center rounded-[5px]">
                        Continue
                    </button> 
                    <div className="md:hidden flex flex-col w-[100%] text-center">
                        <span className="mt-[30px] text-black text-[15px]">Already have an account? <Link className="md:text-white md:hover:text-[#272EA7] hover:text-[#272EA7]/50 text-[#272EA7]" to={'/account/login'}>Log In</Link></span>
                    </div>   
                </div>

            </div>
        </div>
    )
}

export default EnterOtp;