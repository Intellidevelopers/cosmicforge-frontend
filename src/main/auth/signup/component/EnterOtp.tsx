import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import backIcon from "../../../../assets/icons/Forward.png";
import IconContainer from "../../../generalComponents/IconContainer";
import cosmicLogo from '../../../../assets/icons/cosmic forge logo 1.svg';
import { resend_otp, validate_otp } from "../service/service";
import Loader from "../../../generalComponents/Loader";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../../store/reducers/userReducers";

interface components {
    step: number,
    setStep: (e:number)=>void,
    email:string,
    userRole:string
}

const EnterOtp:React.FC<components> = ( { step, setStep,email,userRole} ) => {
    const [ activeInput, setActiveInput ] = useState<number>(0);
    const [ boxArray, setBoxArray ] = useState(['', '', '', '', '', ''])
    const [counter,setCounter] = useState<string>('0:00')
     const  [errorMessage,setErrorMesage] = useState<string>('')
     const [ isLoading, setIsLoading ] = useState<boolean>(false);
     const [counterId,setCounterId] = useState<NodeJS.Timeout>()

     const dispatch = useDispatch()

     const navigate = useNavigate()
     


    const startTimer = () => {
        let countDown = 300
        const timerId = setInterval(()=>{
           const mins = Math.floor(countDown/60)
           const sec = countDown % 60
            setCounter(`${mins}:${sec.toString().padStart(2,'0')}`)
            countDown -= 1

            if(countDown ===0){
                setCounter(`${mins}:${''.toString().padStart(2,'0')}`)  
                clearInterval(timerId)
            } 
        },1000)
        setCounterId(timerId)

    }

    const stopAndClearTimer = () =>{

        if(counterId){
            setCounter('0:00')
            clearInterval(counterId)
        }
    }

    useEffect(()=>{
        if(counter.startsWith('0') && counter.endsWith('0')){
           
            startTimer()
           
        }
    
       
    },[])

    useEffect( () => {
        const inputBox = document.getElementById(`otp-${activeInput}`);
        if (inputBox) {
            inputBox.focus();
        }
    }, [activeInput])

    const makeOTPBoxesRed = () =>{
       

        boxArray.map( (_, index) => {
            const inputBox = document.getElementById(`otp-${index}`);
          if(inputBox){
        inputBox.style.borderColor ='red'
          }
           
        })
    }

    const makeOTPBoxesDefaultColor = () =>{
        boxArray.map( (_, index) => {
            const inputBox = document.getElementById(`otp-${index}`);
          if(inputBox){
        inputBox.style.borderColor ='#9ca3af'
          }
           
        })  
    }

    const handleInput = ( e:React.ChangeEvent<HTMLInputElement>, index:number) => {
        if(errorMessage){
            makeOTPBoxesDefaultColor()
            setErrorMesage('')
        }
        const str = e.target.value;
        // only accept digits. if non-digit ignore
        if (!/^\d*$/.test(e.target.value)) return 

        // update the OTP state and take only the last digit
        const newOtp = [...boxArray];
        newOtp[index] = str.slice(-1);
        setBoxArray(newOtp);

        // if digit was entered and was not the last digit move to the next box
        if ( str && (index < boxArray.length-1) ) {
            setActiveInput(index+1);
        }
    };

    const confirmOtp =  async () => {
      
       
        let otpCode = ''
        boxArray.map((val)=>{
            otpCode = otpCode.concat(val)
        });

        if(!otpCode || otpCode.length < 6){
            setErrorMesage('Invalid otp provided')
            makeOTPBoxesRed()
            return
        }
        if(errorMessage){
            makeOTPBoxesDefaultColor()
            setErrorMesage('')
        }

        setIsLoading(true)
      //  console.log(otpCode);

        // place api logic to confirm otp here 
        //yes sir i will place it

        try {
            
            const result = await validate_otp({
                email,
                otp:Number(otpCode)
            })
           
            if(result.status === 200){
                stopAndClearTimer()
                // move to next screen
                dispatch(authenticateUser({emailValidated:true}))
                navigate('/account/signup/enter-personal-info',{
                    state:{
                        otp:result.otp,
                        role:userRole
                    }
                })
                return
            }

           setIsLoading(false)
           makeOTPBoxesRed()
            setErrorMesage(result.error ?? result.message)
            

        } catch (error) {
            setIsLoading(false)
            setErrorMesage('failed to fetch.')
        }


    }

    const goBack = () => {
        setStep(step-1);
    }

    const handleKeyDown = ( e:React.KeyboardEvent<HTMLInputElement>, index:number ) => {
        if ( e.key === 'Backspace' && boxArray[index] === '' ) {
            setActiveInput(index-1);
        }
    }


    return (
        <div className=" font-poppins h-screen w-screen bg-gray-100 md:px-0 px-[5%] flex flex-col justify-center items-center">
            <button onClick={goBack} className="flex absolute md:top-[7%] top-[3%] flex-row gap-2 items-center font-bold md:w-[80%] w-[95%] h-fit">
                <IconContainer image={backIcon} classes='rotate-180' mobileSize="35" deskSize="30"/>
                <span className="md:flex hidden">Go back</span>
            </button>
            <div className="md:w-[400px] md:h-fit h-screen md:text-center text-left  mt-6 flex flex-col md:pb-0 pb-[10%] justify-between items-center md:justify-around md:pt-0 pt-[30px]  gap-[15px] w-[100%]">
            <div className="w-[80%] md:flex hidden h-[50px]">
                    <img src={cosmicLogo} alt="cosmic forge logo" className="h-[100%] w-[100%]"/>
                </div>


                <div className="flex flex-col place-items-center gap-2 w-[100%] mt-[30px]">
                    <span className="text-[23px] font-extrabold">OTP Code</span>
                    <div className="flex flex-col justify-center place-items-center gap-1">
                        <span>We sent you a 6-digit code via your email</span>
                        <span className="font-bold">{email}</span>
                    </div>

                    <div className="flex flex-row gap-2 w-[100%] md:mt-[10px] mt-[20px] justify-center items-center">
                        { boxArray.map( (_, index) => {
                            return <input key={index} pattern="\d*" onKeyDown={(e) => handleKeyDown(e, index)} inputMode="numeric" id={`otp-${index}`} value={boxArray[index]} onChange={(e)=>{handleInput(e, index)}} className='h-[44px] w-[43px] border-[1px] border-gray-400 rounded-[5px] text-center bg-transparent' type="tel" maxLength={1} />
                        
                        })}
                    </div>
                    {/* <span className="text-red-500">Invalid OTP code please try again</span> USE THIS TO HANDLE EXCEPTIONS TO THE UI*/}
                    <div className="mt-6">
                        <p >{counter}</p>
                    </div>

                    <div className="w-full mt-[6px] justify-center place-items-center font-light gap-2 flex">
                    <span className="text-left ">Did&apos;t receive the code?</span>
                    <button className={"  text-[#272EA7] hover:underline decoration-blue-600  text-[16px] w-fit"} disabled={(!counter.startsWith('0') && !counter.endsWith('0'))} onClick={ async()=>{
                        
                        setErrorMesage('')
                        stopAndClearTimer()
                        if(errorMessage && boxArray.some(it=>{
                            return it != ''
                        })){
                            makeOTPBoxesDefaultColor()

                        }

                        setIsLoading(true)
                        try {
                          const result = await   resend_otp({email})
                           if(result.status === 200){
                            setIsLoading(false)
                           
                             startTimer()

                             return
                           }
                           setIsLoading(false)
                           setErrorMesage(result.error ?? result.message)
                        } catch (error:any) {
                            setIsLoading(false)
                            setErrorMesage('failed to fetch.')
                        }
                    }}>Resend Code</button>
             
                    </div>
                    <p className={`${(errorMessage) ?'block':'hidden'} text-red-600`}>{errorMessage}</p>
                    {
                       isLoading &&  <Loader size={"40px"} />
                    }
                      </div>
                <div className="w-[100%]">
                    <button onClick={confirmOtp} className="h-[48px] w-[100%] mt-[50px] bg-[#272EA7] hover:bg-[#272EA7]/80 text-white font-bold flex flex-row justify-center items-center rounded-[5px]" >
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