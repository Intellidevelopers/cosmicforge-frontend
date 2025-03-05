import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import cosmicLogo from "../../../assets/icons/cosmic forge logo 1.svg";
import thumbUp from "../../../assets/images/profileCompleteThumbUp.png";
import { RootReducer } from "../../store/initStore";


const ProfileComplete = () => {

    const user = useSelector((state:RootReducer)=> state.user)

     if(!user.emailValidated && !user.isAunthenticated){
   return <Navigate to={'/account'}/>
     }

     const navigate = useNavigate()

  return (
    <div className='h-screen flex '>
        <div className="flex flex-col w-full px-4 justify-center gap-[5%] items-center">
            <img src={cosmicLogo} className="h-10 hidden lg:block" alt="Cosmicforge logo" />
            <div className="flex flex-col place-items-center gap-2" >
                <h2 className="font-bold">Welcome {user.data?.lastName?.concat(' ').concat(user.data?.fullName!!)!}</h2>
                <p className="text-xs text-neutral-600">You've successfully completed your Profile Set Up.</p>
            </div>
            <div className="relative">
                <img src={thumbUp} alt="Thumbs up" />
                <div className="absolute w-full h-24 left-0 bottom-0 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            <div className="flex flex-col gap-2">
                <button type="button" className="w-[250px] text-white font-bold rounded-md bg-cosmic-primary-color p-2">Profile</button>
                <button type="button" className="w-[250px] text-white font-bold rounded-md bg-cosmic-primary-color p-2" onClick={()=>{
                    navigate('/patient/home')
                }}>Home</button>
            </div>
        </div>
    </div>
  )
}

export default ProfileComplete