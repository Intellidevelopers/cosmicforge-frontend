import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import backIcon from "../../../../assets/icons/Forward.png";
import IconContainer from "../../../generalComponents/IconContainer";
import cosmicLogo from '../../../../assets/icons/cosmic forge logo 1.svg';
import Loader from "../../../generalComponents/Loader";
import fbIcon from '../../../../assets/icons/fb.svg';
import ggIcon from '../../../../assets/icons/google.svg';
import appleIcon from '../../../../assets/icons/apple.svg';
import { sign_up_user } from "../service/service";

interface component {
    email:string,
    step:number,
    setEmail:(e:string)=>void,
    setStep:(e:number)=>void,
}

const EnterEmail:React.FC<component> = ( { email, setEmail, step, setStep }) => {

   const {state} = useLocation()
     
    const userRole: string | null = state?.userRole 


    if(!userRole){

       return <Navigate to={'/selectRole'} replace={true}/>
    }




    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ notValidError, setNotValid ] = useState<boolean>(false);
    const  [errorMessage,setErrorMesage] = useState<string>('')
    const [ pageWidth, setPageWidth ] = useState('w-0');
    const [ pageOp, setPageOp ] = useState('opacity-0');







    useEffect( () => {
        setPageWidth('w-screen');
        setPageOp('opacity-100')
    }, [])

    const handleEmailInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const validateEmail = ( email:string) => {
        const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
    }

    const displayError = (message:string) => {
        setNotValid(true);
        setErrorMesage(message)
        setIsLoading(false)
    
        setTimeout(() => {
            setNotValid(false)
         setErrorMesage('')
        }, 5000);
    }

    const toNextScreen = async () => {
        //you place function to verify if the email is valid here
       
   
     
       if ( validateEmail(email) ) {
            setIsLoading(true);
            setNotValid(false)
             try {
           let response=    await sign_up_user({
                    email
                })
            
                  if(response.status === 200){
                    setStep(step+1);
                    return
                  }
                  displayError(response.message)
               
             } catch (error) {
                 displayError('failed to connect.')
             }
           
            setTimeout(() => {
              //  setStep(step+1);
                // you can the setTimeout, place the setStep(step+1) line and the add the API logic below it
            }, 1000);
        } else {
            displayError("Invalid email address. please enter a valid email address");
        }
    }


    return (

        <div className={`h-screen ${pageWidth} ${pageOp} bg-gray-100 overflow-hidden transition-all duration-500 ease-in-out md:px-0 px-[5%] flex flex-col justify-center items-center`}>
            <Link className="flex absolute md:top-[7%] top-[3%] flex-row gap-2 items-center font-bold md:w-[80%] w-[95%] h-fit" to={'/account'}>
                <IconContainer image={backIcon} classes='rotate-180' mobileSize="35" deskSize="30"/>
                <span className="flex font-light">Go back</span>
            </Link>

            <div className="md:w-[400px] md:h-fit h-screen md:text-center text-left flex flex-col md:pb-0 pb-[10%] justify-between items-center md:justify-around md:pt-0 pt-[20%]  gap-[15px] w-[100%]">
                <div className="w-[80%] md:flex hidden h-[50px]">
                    <img src={cosmicLogo} alt="cosmic forge logo" className="h-[100%] w-[100%]"/>
                </div>

                <div className="flex flex-col justify-center place-items-center gap-2 w-[100%] mt-[10%]">
                    <span className="text-[23px] font-extrabold">Sign Up</span>
                    <span>Let's get you started.</span>

                    <input onChange={handleEmailInput} value={email} type="text" placeholder="Email address" className="w-[100%] px-[10px]  outline-none rounded-[5px] bg-gray-300 md:h-[48px] h-[50px] md:mt-0 mt-[40px]"/>
                    <span className={`text-red-500 text-[14px] ${notValidError?'opacity-[100%]':'opacity-[0%]'}`}>{errorMessage}</span>
                    <span className={` ${errorMessage.includes('Already sent otp') ? 'block':'hidden'}    underline hover:text-blue-600 decoration-blue-700 cursor-default`} onClick={()=>{
                        setStep(step+1)
                    }} >Go to otp page</span>
                </div>

                <button onClick={toNextScreen} className={`${isLoading?'bg-[#272EA7]/80':'bg-[#272EA7]'} h-[48px] w-[100%] md:mt-[80px] hover:bg-[#272EA7]/80 text-white font-bold flex flex-row justify-center items-center rounded-[5px]`}>
                    {isLoading?<Loader size="30px"/>:'Continue'}
                </button> 

                <div className="md:hidden flex flex-col w-[100%] text-center gap-[50px]">
                    <div className="flex text-[18px] text-gray-300 justify-evenly items-center flex-row gap-1">
                        <div className="w-[40%] h-[3px] bg-gray-300"></div>
                        <span>Or</span>
                        <div className="w-[40%] h-[3px] bg-gray-300"></div>
                    </div>

                    
                    <div className="flex flex-col md:gap-[20px] gap-[15px] w-[100%] items-center">
                        <div className="flex flex-row gap-[20px] w-[100%] justify-center items-center">
                            <button className="w-[55px] h-[55px] hover:scale-[105%] flex flex-col justify-center items-center md:w-[35px] border-[1px] border-gray-300 rounded-[4px]">
                                <img src={fbIcon} alt="fb icon" className="h-[70%] w-[70%]"/>
                            </button>
                            <button className="w-[55px] h-[55px] hover:scale-[105%] flex flex-col justify-center items-center md:w-[35px] border-[1px] border-gray-300 rounded-[4px]">
                                <img src={ggIcon} alt="fb icon" className="h-[70%] w-[70%]"/>
                            </button>
                            <button className="w-[55px] h-[55px] hover:scale-[105%] flex flex-col justify-center items-center md:w-[35px] border-[1px] border-gray-300 rounded-[4px]">
                                <img src={appleIcon} alt="fb icon" className="h-[70%] w-[70%]"/>
                            </button>
                        </div>
                    </div>
                    <span className="mt-[10px] text-black text-[15px]">Already have an account? <Link className="md:text-white md:hover:text-[#272EA7] hover:text-[#272EA7]/50 text-[#272EA7]" to={'/account/login'}>Log In</Link></span>
                </div>
            </div>
        </div>
    )
}

export default EnterEmail;