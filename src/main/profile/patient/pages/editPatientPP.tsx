import React, { useState } from "react";
import HomeSideBar from "../../../home/component/patient/HomeSideBar.ls";
import HomeMobileNavBar from "../../../home/component/patient/HomeMobileNavBar";
import HomeNavBar from "../../../home/component/patient/HomeNavBar";
import profileIconTmp from "../../../../assets/icons/home/cosmic-home-profile-pic-temp.svg";
import useGetImageBase64String from "../hooks/useGetImageBase64String";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../store/initStore";

const EditPatientPP:React.FC = () => {

    const user = useSelector((state:RootReducer)=>state.user)
    const [ photo, setPhoto ] = useState<string | null>(null);
    const [ fullname, setfullname ] = useState<string>(`${user.data?.fullName} ${user.data?.lastName}`);
    const [ email, setEmail ] = useState<string>(user.data?.email!!);
    const [ phoneNo, setPhoneNo ] = useState<string>('+(234) 1234 5676');
    const [ homeAddress, setHomeAddress ] = useState<string>('6th av, Lekki lagos');
    const [ workAddress, setWorkAddress ] = useState<string>('Joana Cr Lekki Lagos');


    const selectPhoto = () => {
        const element = document.getElementById('photoFile');
        if (element) {
            element.click();
        }
      }

    const saveNewChanges = () => {
        //place the logic to save the new changes here
    }

    const {getImageBase64String} = useGetImageBase64String()

    return (
        <div className="w-full  relative  h-dvh bg-gray-100 overflow-x-hidden overflow-y-auto flex flex-col cursor-default">
            <HomeSideBar/>
            <HomeMobileNavBar title="Edit Profile"/>
            <HomeNavBar title="Edit Profile"/>
            <div className="flex flex-col items-center justify-center pt-[10px] pb-[70px] gap-[10px] p-3  md:ps-[265px]">
                <input
                className="hidden"
                id="photoFile" 
                accept="image/*" 
                type="file" 
                onChange={async(e)=>{
                    const files = e.target.files;
                    if (files) {

                        try {
                         const t = await getImageBase64String(files[0])
                        
                         setPhoto(t)
                        } catch (error) {
                            
                        }
                        
                      
                    }
                }}
                />
                <div className="w-[150px] flex flex-col h-[150px] mt-[15px]">
                    <img className="h-[100%] w-[100%] rounded-full" alt="profile-image" src={photo?photo:profileIconTmp} />
                    <button onClick={selectPhoto} className="h-[150px] text-[#272EA7] md:opacity-0 opacity-50 hover:opacity-100 cursor-pointer absolute bg-white/50 flex flex-col justify-center items-center rounded-full w-[150px]">
                        <span>Change photo</span>
                    </button>
                </div>
                <div className="flex flex-col gap-3 w-[100%] md:px-[5%] px-[3%] mt-[15px]">
                    <div className="flex flex-col gap-1">
                        <input className=" h-[50px] border-b-[1px] text-[15px] border-b-black px-2 bg-transparent font-bold outline-none" 
                        type="text" placeholder="Write here"
                        onChange={(e)=>{setfullname(e.target.value)}}
                        value={fullname}
                        />
                        <span className="ml-2">Full Name</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <input className=" h-[50px] border-b-[1px] text-[15px] border-b-black px-2 bg-transparent font-bold outline-none" 
                        type="text" placeholder="Write here"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        value={email}
                        />
                        <span className="ml-2">Email</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <input className=" h-[50px] border-b-[1px] text-[15px] border-b-black px-2 bg-transparent font-bold outline-none"
                        type="text" placeholder="Write here"
                        onChange={(e)=>{setPhoneNo(e.target.value)}}
                        value={phoneNo}
                        />
                        <span className="ml-2">Phone No</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <input className=" h-[50px] border-b-[1px] text-[15px] border-b-black px-2 bg-transparent font-bold outline-none" 
                        type="text" placeholder="Write here"
                        onChange={(e)=>{setHomeAddress(e.target.value)}}
                        value={homeAddress}
                        />
                        <span className="ml-2">House Address</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <input className=" h-[50px] border-b-[1px] text-[15px] border-b-black px-2 bg-transparent font-bold outline-none" 
                        type="text" placeholder="Write here"
                        onChange={(e)=>{setWorkAddress(e.target.value)}}
                        value={workAddress}
                        />
                        <span className="ml-2">Work Address</span>
                    </div>
                </div>
                <button onClick={saveNewChanges} className="rounded-[5px] hover:bg-[#272EA7]/70 bg-[#272EA7] cursor-pointer text-white w-[50%] md:w-[35%] h-[45px] mt-[20px]">Save Changes</button>
            </div>
        </div>
    )
}

export default EditPatientPP;