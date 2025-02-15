import profileIconTmp from "../../../../assets/icons/home/cosmic-home-profile-pic-temp.svg";
import tuneIcon from '../../../../assets/icons/home/cosmic-home-tune.svg'
import searchIcon from '../../../../assets/icons/home/cosmic-home-search-dark.svg'
import notificationIcon from '../../../../assets/icons/home/cosmic-home-notification.svg'
import { openSideBar } from "../../hook/patient/useGetSideBarMobileAnimation";
import { useNavigate } from "react-router-dom";

 interface NavBarProps {
    title:string
   
  }

 const HomeMobileNavBar  =  ({title}:NavBarProps) =>{
  const navigate =  useNavigate()
    return (
        <div className="block md:hidden md:ms-[294px] w-full h-fit  bg-[#F5F5F5]  p-5  sticky top-0  ">
       
        <div className="md:w-[85%]  w-full flex   flex-wrap relative   ">

            {
            
                (title === "Home") ?
                <div className="w-full flex place-items-center gap-6">
                 <i className="fa fa-bars fa-2xl"   aria-hidden="true" onClick={()=>{

                  openSideBar()
                 }}></i>
                  <div className="flex gap-4 ">
                  <img src={profileIconTmp} className="h-[44px]"  />
                   
                   <div className="w-full relative">

                   <p className="font-semibold">Hi Grace</p>
                   <p className="font-light text-[14px]">How are you feeling today?</p>
                    </div>
                    <div className="absolute right-0 top-2 rounded-lg border  p-1">
                    <img src={notificationIcon}  />
                    </div>
                    </div>

                    </div>:    <div className="w-full flex justify-center">
                    <i className="fa fa-arrow-left fa-xl absolute left-0 top-3" aria-hidden="true" onClick={()=>{
                     navigate(-1)
                  }}></i>
                    <p className="font-extrabold p-1">{title ?? 'Home'}</p>
                      </div>
                    
                   
            }
           

           <div className="w-full mt-5 flex flex-wrap justify-center  place-items-center gap-2 "> 

            <div className="font-extralight border p-[3px] w-[80%] rounded-md flex ">
                <img alt='search' src={searchIcon} />
                <textarea className='w-full resize-none h-[25px] outline-none bg-[#F5F5F5]' />

            </div>
            <div className="font-extralight min-w-[40px] rounded-md border p-1">
              <img alt='tune' src={tuneIcon} />
            </div>
            </div>
      
        
          
        </div>
      </div>
    )
 }


 export default HomeMobileNavBar