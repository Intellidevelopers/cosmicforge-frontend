import React from "react";
import lockIcon from '../../../../assets/images/managePass.png';


interface props {
    forwardFunction:()=>void;
}

const EnterPassword:React.FC<props> = ( { forwardFunction } ) => {
    const validateInput = () => {
        //add logic to validate input here and other API logic here
        forwardFunction() // sends to next page
    }
    return (
                <div className="flex flex-col items-center justify-start w-[100%] h-[100%]">
                    <img src={lockIcon} className="h-[50px] w-[50px] mt-[50px]"/>
                    <div className="h-[300px] flex flex-col justify-center pt-[25px] md:w-[50%] w-[90%] items-center gap-4 bg-white rounded-[10px] mt-[50px]">
                        <div className="flex flex-col md:w-[80%] w-[90%] gap-1">
                            <span>Enter Password</span>
                            <input type="password" className="outline-none bg-gray-300 rounded-[7px] h-[45px] px-2 w-[100%]" placeholder="Enter your password..."/>
                        </div>
                        <button onClick={validateInput} className="hover:bg-[#272EA7]/70 bg-[#272EA7] md:w-[80%] w-[90%] h-[40px] rounded-[7px] mt-[20px] flex flex-row justify-center items-center text-white">Change Password</button>
                    </div>
                </div>
    )
}

export default EnterPassword;