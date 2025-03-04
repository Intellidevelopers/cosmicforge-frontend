import React, { MutableRefObject, useRef, useState } from "react";
import cosmicLogo from '../../../../assets/icons/cosmic forge logo 1.svg';
import { Link, /*Navigate,*/ useLocation, useNavigate } from "react-router-dom";
import IconContainer from "../../../generalComponents/IconContainer";
import backIcon from "../../../../assets/icons/Forward.png";
import Loader from "../../../generalComponents/Loader";
import { complete_registration } from "../service/service";
import { useDispatch, /*useSelector*/ } from "react-redux";
import { authenticateUser } from "../../../store/reducers/userReducers";
//import { RootReducer } from "../../../store/initStore";


const EnterPersonalDetails: React.FC = () => {
  //  const user = useSelector((state:RootReducer)=> state.user)

    /*if(!user.isAunthenticated){
  return <Navigate to={'/account'}/>
    }*/


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const  [errorMessage,setErrorMesage] = useState<string>('')
     const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const atleast8CharatersRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
    const upperCaseRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
    const lowerCaseRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
    const numberRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
    const symbolRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

    const dispatch = useDispatch()

    const {state} = useLocation()

    const userRole = state?.role ?? ''


    const  otpCode = state?.otp ?? ''


    const navigate = useNavigate();

    const startReg = async (e: React.KeyboardEvent<HTMLFormElement>) => {
        e.preventDefault();

        setErrorMesage('')

        if(!firstName || !lastName || !password || !confirmPassword){
            setErrorMesage('please enter details')
            return
        }
 
        if(!(/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[@£$%^*&?!±|#€∞§¶]).{8,}$/.test(password))){
         setErrorMesage('Pasworwd must be atleast 8 characters, contain uppercase, lowercase, number and symbol.')
       return
        }
        if(confirmPassword !== password){
            setErrorMesage('password not match.')
            return
        }
        if(!agreedToTerms){
            setErrorMesage('Enure you agree to terms and conditions by checking the box.')
            return
        }
        //form validation here
    setIsLoading(true)
      try {

        const result = await complete_registration({
            lastName,
            fullName:firstName,
            password,
            otp:otpCode,
            role:userRole === 'patient' ? 'client': userRole
        })

        if(result.status ===200){
        setErrorMesage('')
        setIsLoading(false)
      dispatch(authenticateUser({isAunthenticated:true,data:result.data}))
      navigate('/patient/account/signup/registration-success',{
        replace:true
      });
            return
        }
        setErrorMesage('')
        setIsLoading(false)
        setErrorMesage(result.error ?? result.message)
        
      } catch (error) {
        setErrorMesage('')
        setIsLoading(false)
         setErrorMesage('failed to load.')
      }

        //
    }


    return (
        <div className=" font-poppins flex flex-row bg-gray-100 py-[50px] justify-center h-screen w-screen">
            <button onClick={() => { navigate('/account/signup/verify-email') }} className="flex absolute md:top-[50px] top-[5%] flex-row gap-2 items-center font-bold md:w-[80%] w-[95%] h-fit">
                <IconContainer image={backIcon} classes='rotate-180' mobileSize="35" deskSize="30" />
                <span className="md:flex hidden">Go back</span>
            </button>
            <div className="flex-col items-center mt-[4%] md:mt-0 h-[90%] flex md:w-[400px] w-[90%] md:h-fit">
                <div className="w-[80%] md:flex hidden h-[50px]">
                    <img src={cosmicLogo} alt="cosmic forge logo" className="h-[100%] w-[100%]" />
                </div>

                <div className="w-full flex flex-col place-items-center justify-center">
                <span className="text-[23px] md:text-[17px] font-bold  md:self-center mt-2">Welcome!</span>
                <span className="mt-2 text-[17px] md:text-[16px]  ">Start your journey with us.</span>
                
                </div>
                <form onSubmit={startReg} className="mt-[10px] w-[100%] flex flex-col gap-[10px] md:gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-[17px] md:text-[16px]">First Name</label>
                        <input
                            value={firstName}
                            onChange={(e) => { setFirstName(e.target.value) }}
                            className="w-[100%] px-[10px] outline-none rounded-[5px] bg-gray-300 md:h-[40px] h-[50px]"
                            type="text" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-[17px] md:text-[16px]">Last Name</label>
                        <input
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value) }}
                            className="w-[100%] px-[10px] outline-none rounded-[5px] bg-gray-300 md:h-[40px] h-[50px]"
                            type="text" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-[17px] md:text-[16px]">Password</label>
                        <input
                            value={password}
                            onChange={(e) => {

                    

                                if (e.target.value.length < 8) {


                                    if (e.target.value) {

                                        if (atleast8CharatersRef.current) {

                                            atleast8CharatersRef.current.style.backgroundColor = 'red'
                                        }


                                    } else {

                                        if (atleast8CharatersRef.current) {

                                            atleast8CharatersRef.current.style.backgroundColor = '#d1d5db'
                                        }
                                    }

                                } else if (e.target.value.length === 8) {


                                    if (atleast8CharatersRef.current) {

                                        atleast8CharatersRef.current.style.backgroundColor = 'rgba(255, 204, 0, 1)'
                                    }
                                } else {

                                    if (atleast8CharatersRef.current) {

                                        atleast8CharatersRef.current.style.backgroundColor = 'green'
                                    }
                                }




                                if (e.target.value && /[A-Z]/.test(e.target.value)) {

                                    let text = e.target.value.match(/[A-Z]/g)!!

                                    if (text && text.length === 1) {

                                        if (upperCaseRef.current) {

                                            upperCaseRef.current.style.backgroundColor = 'rgba(255, 204, 0, 1)'
                                        }
                                    }
                                    else
                                        if (upperCaseRef.current) {

                                            upperCaseRef.current.style.backgroundColor = 'green'
                                        }

                                } else {

                                    if(e.target.value){

                                        if (upperCaseRef.current) {


                                            upperCaseRef.current.style.backgroundColor = 'red'
                                        }
                                    }else{

                                        if (upperCaseRef.current) {


                                            upperCaseRef.current.style.backgroundColor = '#d1d5db'
                                        } 
                                    }
                                    
                                }




                                if (e.target.value && /[a-z]/.test(e.target.value)) {


                                    let text = e.target.value.match(/[a-z]/g)!!

                                    if (text && text.length === 1) {

                                        if (lowerCaseRef.current) {

                                            lowerCaseRef.current.style.backgroundColor = 'rgba(255, 204, 0, 1)'
                                        }
                                    }
                                    else
                                        if (lowerCaseRef.current) {


                                            lowerCaseRef.current.style.backgroundColor = 'green'
                                        }

                                } else {

                                    if (e.target.value) {

                                        if (lowerCaseRef.current) {

                                            lowerCaseRef.current.style.backgroundColor = 'red'
                                        }
                                    }

                                    else {

                                        if (lowerCaseRef.current) {


                                            lowerCaseRef.current.style.backgroundColor = '#d1d5db'
                                        }
                                    }
                                }



                                if (e.target.value && /[0-9]/.test(e.target.value)) {

                                    let text = e.target.value.match(/[0-9]/g)!!

                                    if (text && text.length === 1) {


                                        if (numberRef.current) {

                                            numberRef.current.style.backgroundColor = 'rgba(255, 204, 0, 1)'
                                        }
                                    }
                                    else
                                        if (numberRef.current) {


                                            numberRef.current.style.backgroundColor = 'green'
                                        }

                                } else {


                                    if (e.target.value) {


                                        if (numberRef.current) {


                                            numberRef.current.style.backgroundColor = 'red'
                                        }
                                    }

                                    else {
                                        if (numberRef.current) {


                                            numberRef.current.style.backgroundColor = '#d1d5db'
                                        }
                                    }
                                }


                                if (e.target.value && /[@£$%^*&?!±|#€∞§¶]/.test(e.target.value)) {


                                    let text = e.target.value.match(/[@£$%^*&?!±|#€∞§¶]/g)!!

                                    if (text && text.length === 1) {

                                        if (symbolRef.current) {


                                            symbolRef.current.style.backgroundColor = 'rgba(255, 204, 0, 1)'
                                        }
                                    }
                                    else
                                        if (symbolRef.current) {


                                            symbolRef.current.style.backgroundColor = 'green'
                                        }

                                } else {

                                    if (e.target.value) {

                                        if (symbolRef.current) {


                                            symbolRef.current.style.backgroundColor = 'red'
                                        }
                                    }

                                    else {
                                        if (symbolRef.current) {

                                            symbolRef.current.style.backgroundColor = '#d1d5db'
                                        }
                                    }
                                }



                                setPassword(e.target.value)

                            }}
                            className="w-[100%] px-[10px] outline-none rounded-[5px] bg-gray-300 md:h-[40px] h-[50px]"
                            type="text" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-[17px] md:text-[16px]">Confirm Password</label>
                        <input
                            value={confirmPassword}
                            onChange={(e) => { setConfirmPassword(e.target.value) }}
                            className="w-[100%] px-[10px] outline-none rounded-[5px] bg-gray-300 md:h-[40px] h-[50px]"
                            type="text" />
                    </div>

                    <div className="w-full flex  gap-5 mt-4">
                        <div ref={atleast8CharatersRef} className="w-[35px] h-[3px] bg-gray-300 rounded-md"></div>
                        <div ref={upperCaseRef} className="w-[35px] h-[3px] bg-gray-300 rounded-md"></div>
                        <div ref={lowerCaseRef} className="w-[35px] h-[3px] bg-gray-300 rounded-md"></div>
                        <div ref={numberRef} className="w-[35px] h-[3px] bg-gray-300 rounded-md"></div>
                        <div ref={symbolRef} className="w-[35px] h-[3px] bg-gray-300 rounded-md"></div>

                    </div>
                    <div className="w-full flex flex-col place-items-center justify-center ">
                    <p className={`${(errorMessage) ?'block':'hidden'} text-red-600`}>{errorMessage}</p>
                          {
                            isLoading &&   <Loader size="30px"/>
                          }
                        </div>

                    <div className="flex gap-2 mt-[10px] flex-row items-center">
                        <input
                            type="checkbox"
                            checked={agreedToTerms}
                            className="h-[23px] w-[23px] hover:cursor-pointer"
                            onChange={() => { setAgreedToTerms(!agreedToTerms) }}
                        />
                        <span className="text-[14px] md:text-[14px] font-light">
                            I accept the
                            <Link to={'/privacy-and-policy'} className="hover:text-[#272EA7]/80 text-[#272EA7]"> Privacy Policy </Link>
                            and
                            <Link to={'/privacy-and-policy'} className="hover:text-[#272EA7]/80 text-[#272EA7]"> Terms of Service </Link>
                        </span>
                        
                    </div>
                    <button type="submit" className=" mt-3  md:h-[40px] h-[45px] md:w-[100%]  md:ml-0 ml-[5%] w-[90%] rounded-[5px] hover:bg-[#272EA7]/70 bg-[#272EA7] cursor-pointer text-white">Sign Up</button>
                </form>
                <span className="md:mt-[20px] mt-[25px]">
                    Already have an account?
                    <Link to={'/privacy-and-policy'} className="hover:text-[#272EA7]/80 text-[#272EA7]"> Log in </Link>
                </span>
            </div>
        </div>
    )
}

export default EnterPersonalDetails;