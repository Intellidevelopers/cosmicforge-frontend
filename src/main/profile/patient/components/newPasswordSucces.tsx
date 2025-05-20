import React from "react";
import successIcon from "../../../../assets/images/saveSuccess.png";

interface props {
    setPage:(value:any)=>void;
}

const NewPasswordSuccess:React.FC<props> = ( { setPage } ) => {

    const backToMain = () => {
        setPage(1);
    }
    return (
        <div className="flex flex-col items-center justify-start w-[100%] h-[100%]">
            <div className="h-[400px] flex flex-col justify-center pt-[25px] md:w-[70%] w-[90%] items-center gap-4 bg-white rounded-[7px] mt-[50px]">
                <img src={successIcon} className="h-[70px] w-[70px]"/>
                <span className="font-bold text-[23px]">Congratulations 🎊 </span>
                <div className="flex flex-col md:w-[80%] w-[90%] gap-1 mt-[5px] text-center">
                    <span>Your password has been successfully changed, please do not forget your password next time.</span>
                </div>
                <button onClick={backToMain} className="hover:bg-[#272EA7]/70 bg-[#272EA7] w-[70%] h-[35px] rounded-[7px] mt-[50px] flex flex-row justify-center items-center text-white">Close</button>
            </div>
        </div>
    )
}

export default NewPasswordSuccess;