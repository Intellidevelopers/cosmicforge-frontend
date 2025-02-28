import React, { useState } from "react";
import cosmicLogo from '../../../../assets/icons/cosmic forge logo 1.svg';
import { Link, Navigate, useNavigate } from "react-router-dom";
import IconContainer from "../../../generalComponents/IconContainer";
import backIcon from "../../../../assets/icons/Forward.png";
import fbIcon from '../../../../assets/icons/fb.svg';
import ggIcon from '../../../../assets/icons/google.svg';
import appleIcon from '../../../../assets/icons/apple.svg';
import Loader from "../../../generalComponents/Loader";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../../store/initStore";
import { login_user } from "../service/service";
import { authenticateUser } from "../../../store/reducers/userReducers";


const LoginPage: React.FC = () => {

    const user = useSelector((state:RootReducer)=>state.user)
    const dispatch = useDispatch()

      if(user.keepMeSignedIn && user.isAunthenticated && user.data){
           switch(user.data.role){
             case  'client':  return <Navigate to={'/patient/home'} replace/>
             case 'doctor':  return <Navigate to={'/doctor/home'}  replace/>
           }
        return
      }

    const [ userEmail, setUserEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ stayLoggedIn, setStayLoggedIn ] = useState(false);
    const  [errorMessage,setErrorMesage] = useState<string>('')
   const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const navigate = useNavigate();

    const startReg = async () =>{
        setErrorMesage('')
        //form validation here
      //  navigate('/home');
      if(!userEmail || !password){
        setErrorMesage('please enter required fields')
        return
      }
      
       try {
        setErrorMesage('')
        setIsLoading(true)

          const result = await login_user({
            email:userEmail,
            password
          })

       if(result.status === 200){
          setIsLoading(false)
        dispatch(authenticateUser({keepMeSignedIn:stayLoggedIn,data:result.data,isAunthenticated:true}))
        //navigate('/coming-soon')
        switch(result.data.role){
            case  'client':  return navigate('/patient/home')
            case 'doctor':  return  navigate('/doctor/home')
          }
        return
       }

       setIsLoading(false)
       setErrorMesage(result.error ?? result.message)
        

       } catch (error) {
        setIsLoading(false)
        setErrorMesage('failed to fetch.')
       }

    }

    const goToFP = () => {
        navigate('/patient/account/password-reset');
    }

    return (
        <div className="flex flex-row bg-gray-100 py-[50px] justify-center h-screen w-screen">

            <button onClick={()=>{navigate('/patient/account')}} className="flex absolute md:top-[50px] top-[5%] flex-row gap-2 items-center font-bold md:w-[80%] w-[95%] h-fit">
                <IconContainer image={backIcon} classes='rotate-180' mobileSize="35" deskSize="30"/>
                <span className="md:flex hidden">Go back</span>
            </button>
            <div className="flex-col items-center mt-[10%] md:mt-8 h-[90%] flex md:w-[400px] w-[90%] md:h-fit">
                <div className="w-[80%] md:flex hidden h-[50px]">
                    <img src={cosmicLogo} alt="cosmic forge logo" className="h-[100%] w-[100%]"/>
                </div>
                <span className="text-[23px] font-bold self-start md:self-center mt-2">Log In</span>
                <span className="mt-2 text-[17px] md:text-[16px] self-start md:self-center">Welcome back.</span>
                <div onSubmit={startReg} className="mt-[17px] w-[100%] flex flex-col gap-3 md:gap-2">
                    <div className="flex flex-col gap-1">
                        <label className="text-[17px] md:text-[16px]">Email</label>
                        <input 
                            value={userEmail} 
                            onChange={(e)=>{setUserEmail(e.target.value)}}
                            className="w-[100%] px-[10px] outline-none rounded-[5px] bg-gray-300 md:h-[40px] h-[50px]" 
                            type="text" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-[17px] md:text-[16px]">Password</label>
                        <input 
                            value={password} 
                            onChange={(e)=>{setPassword(e.target.value)}}
                            className="w-[100%] px-[10px] outline-none rounded-[5px] bg-gray-300 md:h-[40px] h-[50px]" 
                            type="text" />
                    </div>
                    <div className="w-full flex flex-col place-items-center justify-center ">
                    <p className={`${(errorMessage) ?'block':'hidden'} text-red-600`}>{errorMessage}</p>
                          {
                            isLoading &&   <Loader size="30px"/>
                          }
                        </div>
                    <div className="flex flex-row justify-between mt-[10px] items-center">
                        <div className="flex gap-2 flex-row items-center">
                            <input 
                                type="checkbox"
                                checked={stayLoggedIn}
                                className="h-[23px] w-[23px] hover:cursor-pointer"
                                onChange={()=>{setStayLoggedIn(!stayLoggedIn)}}
                                />
                            <span className="text-[15px] md:text-[16px]">Keep me logged in </span>
                        </div>   
                        <button onClick={goToFP} className="hover:text-[#272EA7]">
                            Forgot Password
                        </button>
                    </div>
                   
                    <button onClick={startReg} type="submit" className="md:h-[40px] h-[45px] md:w-[100%] mt-[20px] md:ml-0 ml-[5%] w-[90%] rounded-[5px] hover:bg-[#272EA7]/70 bg-[#272EA7] cursor-pointer text-white">Log In</button>
                </div>
                <div className="flex flex-col gap-[15px] mt-[30px] w-[100%] items-center">
                        <div className="flex flex-row gap-[20px] w-[100%] justify-center items-center">
                            <button className="w-[55px] h-[55px] md:w-[40px] md:h-[40px] hover:scale-[105%] flex flex-col justify-center items-center border-[1px] border-gray-300 rounded-[4px]">
                                <img src={fbIcon} alt="fb icon" className="h-[70%] w-[70%]"/>
                            </button>
                            <button className="w-[55px] h-[55px] md:w-[40px] md:h-[40px] hover:scale-[105%] flex flex-col justify-center items-center border-[1px] border-gray-300 rounded-[4px]">
                                <img src={ggIcon} alt="fb icon" className="h-[70%] w-[70%]"/>
                            </button>
                            <button className="w-[55px] h-[55px] md:w-[40px] md:h-[40px] hover:scale-[105%] flex flex-col justify-center items-center border-[1px] border-gray-300 rounded-[4px]">
                                <img src={appleIcon} alt="fb icon" className="h-[70%] w-[70%]"/>
                            </button>
                        </div>
                        <span className="mt-[15px] text-black text-[15px]">Don&apos;t have an account? <Link className="text-[#272EA7] hover:text-[#272EA7]/50" to={'/patient/account/signup/verify-email'}>Sign Up</Link></span>

                        <div className="md:w-[450px] text-center mt-[10px] w-[80%]">
                            <span className="mt-[17px] text-black text-[15px]">
                                By signing up or logging in, i accept the app&apos;s
                                <Link className="text-[#272EA7] hover:text-[#272EA7]/50" to={'/terms-and-service'}>{' Terms of service '} </Link>
                                and
                                <Link className="text-[#272EA7] hover:text-[#272EA7]/50" to={'/privacy-policy'}>{' Privacy Policy'}</Link>
                            </span> 
                        </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;