import cosmicLogo from "../../../assets/icons/cosmic forge logo 1.svg";
import thumbUp from "../../../assets/images/profileCompleteThumbUp.png";


const ProfileComplete = () => {
  return (
    <div className='h-screen flex '>
        <div className="flex flex-col w-full px-4 justify-center gap-[5%] items-center">
            <img src={cosmicLogo} className="h-10 hidden lg:block" alt="Cosmicforge logo" />
            <div className="flex flex-col place-items-center gap-2" >
                <h2 className="font-bold">Welcome Grace!</h2>
                <p className="text-xs text-neutral-600">You've successfully completed your Profile Set Up.</p>
            </div>
            <div className="relative">
                <img src={thumbUp} alt="Thumbs up" />
                <div className="absolute w-full h-24 left-0 bottom-0 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            <div className="flex flex-col gap-2">
                <button type="button" className="w-[250px] text-white font-bold rounded-md bg-cosmic-primary-color p-2">Profile</button>
                <button type="button" className="w-[250px] text-white font-bold rounded-md bg-cosmic-primary-color p-2">Home</button>
            </div>
        </div>
    </div>
  )
}

export default ProfileComplete