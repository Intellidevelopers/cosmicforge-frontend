import React, { useState } from "react";
import cosmicLogo from '../../../../assets/icons/cosmic forge logo 1.svg';
import { Link, useNavigate } from "react-router-dom";
import IconContainer from "../../../generalComponents/IconContainer";
import backIcon from "../../../../assets/icons/Forward.png";


const EnterNewPassword: React.FC = () => {
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const navigate = useNavigate();

    const setNewPassword = (e:React.KeyboardEvent<HTMLFormElement>) =>{
        e.preventDefault();
        //form validation here
        navigate('/account/password-reset/success');
    }


    return (
        <div className="flex flex-row bg-gray-100 py-[50px] justify-center h-screen w-screen">


            <button onClick={()=>{navigate('/account/signup/verify-email')}} className="flex absolute md:top-[50px] top-[5%] flex-row gap-2 items-center font-bold md:w-[80%] w-[95%] h-fit">
                <IconContainer image={backIcon} classes='rotate-180' mobileSize="35" deskSize="30"/>
                <span className="md:flex hidden">Go back</span>
            </button>


            <div className="flex-col items-center mt-[10%] md:mt-0 h-[90%] flex md:w-[400px] w-[90%] md:h-fit">
              
                <div className="w-[80%] md:flex hidden h-[50px]">
                    <img src={cosmicLogo} alt="cosmic forge logo" className="h-[100%] w-[100%]"/>
                </div>

                <span className="text-[23px] md:text-[17px] font-bold self-start md:self-center mt-2">Welcome!</span>
                <span className="mt-2 text-[17px] md:text-[16px] self-start md:self-center">Start your journey with us.</span>
                <form onSubmit={setNewPassword} className="mt-[17px] w-[100%] flex flex-col gap-[20px] md:gap-2">
                    
                    <div className="flex flex-col gap-1">
                        <label className="text-[17px] md:text-[16px]">New Password</label>
                        <input 
                            value={password} 
                            onChange={(e)=>{setPassword(e.target.value)}}
                            className="w-[100%] px-[10px] outline-none rounded-[5px] bg-gray-300 md:h-[40px] h-[50px]" 
                            type="text" />
                    </div>


                    <div className="flex flex-col gap-1">
                        <label className="text-[17px] md:text-[16px]">Confirm Password</label>
                        <input 
                            value={confirmPassword} 
                            onChange={(e)=>{setConfirmPassword(e.target.value)}}
                            className="w-[100%] px-[10px] outline-none rounded-[5px] bg-gray-300 md:h-[40px] h-[50px]" 
                            type="text" />
                    </div>

                    <button type="submit" className="md:h-[40px] h-[45px] md:w-[100%] md:mt-0 mt-[20px] md:ml-0 ml-[5%] w-[90%] rounded-[5px] hover:bg-[#272EA7]/70 bg-[#272EA7] cursor-pointer text-white">Confirm</button>
                </form>


                <span className="md:mt-[20px] mt-[25px]">
                    Already have an account?
                    <Link to={'/privacy-and-policy'} className="hover:text-[#272EA7]/80 text-[#272EA7]"> Log in </Link>
                </span>
                
            </div>
        </div>
    )
}

export default EnterNewPassword;