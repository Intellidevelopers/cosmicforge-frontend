import DoctorHomeNavBar from "../../../component/doctor/DoctorHomeNavBar"
import DoctorNavBarHome from "../../../component/doctor/DoctorNavBarMobile"
import videoIcon from '../../../../../assets/icons/cosmic-chat-video-icon.svg'
import callIcon from '../../../../..//assets/icons/cosmic-chat-call-icon.svg'
import docImage from '../../../../../assets/images/doctor-image.jpeg'
import attachButton from '../../../../../assets/icons/cosmic-attach-icon.svg'
import micIcon from '../../../../../assets/icons/cosmic-chat-mic.svg'
import sendMessageIcon from '../../../../../assets/icons/cosmic-chat-send-message-icon.svg'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../../../store/initStore"
import { updateCallMode } from "../../../../store/reducers/userSocketReducer"

const DoctorMainChatPage = () => {


    const navigate = useNavigate()

    const userSocket = useSelector((state:RootReducer)=>state.socket)

    const dispatch = useDispatch()

    return <div className="w-full h-[100vh] overflow-hidden font-poppins">
        <DoctorHomeNavBar title="Messages" />
        <DoctorNavBarHome title="Messages" />

        <div className="  w-full grid grid-cols-3 h-full   ">
            <div className="bg-[#272EA7] col-span-3 md:col-span-1 p-6">
                <div className="grid grid-cols-3">
                    <p className="text-white col-span-2">Messages</p>
                    <div className="w-full flex justify-end gap-3">
                        <img className="bg-cosmic-color-white-light rounded-full p-1 w-[30px] h-[30px]" alt="voice-call" src={callIcon} />
                        <img className="bg-cosmic-color-white-light rounded-full p-1 w-[30px] h-[30px]" alt="video-call" src={videoIcon} />

                    </div>
                </div>

                <div className="mt-6 p-2 flex place-items-center ps-6 bg-cosmic-color-white-light rounded-md  cursor-default">
                    <i className="fa fa-search " />
                    <input type="search" placeholder="Search here..." className="ms-2 w-full h-full outline-none bg-transparent font-light" />
                </div>
            </div>

            <div className="bg-cosmic-bg-chat-background hidden  md:flex flex-col col-span-2">
                <div className="bg-white w-full h-[60px]">

                    <div className="grid grid-cols-3 m-3">
                        <div className="flex place-items-center gap-2  col-span-2">
                            <img src={docImage} alt="profile-icon" className="w-[40px] h-[40px] rounded-full" />
                            <p>Jenifer Williams</p>
                        </div>
                        <div className="w-full flex justify-end  gap-3">
                            <img className="bg-cosmic-color-white-light rounded-full p-1 w-[30px] h-[30px]" alt="voice-call" src={callIcon} onClick={() => {
                                
                                if(userSocket.connected){
                                   dispatch(updateCallMode({callMode:'audio',socket:null}))
                                   navigate("/doctor/appointment/voice-call")
                                }
                                
                            }} />
                            <img className="bg-cosmic-color-white-light rounded-full p-1 w-[30px] h-[30px]" alt="video-call" src={videoIcon} onClick={()=>{
                                  if(userSocket.connected){
                                    dispatch(updateCallMode({callMode:'video',socket:null}))
                                    navigate("/doctor/appointment/voice-call")
                                 }
                            }} />
                            <i className="fa fa-ellipsis-v  mt-2 w-[40px] h-[40px] " />
                        </div>

                    </div>
                </div>
                <div className="bg-transparent h-[73%]">
                    kkdk
                </div>

                <div className="bg-white w-full h-[90px]">

                    <div className="grid grid-cols-3 ">
                        <div className="flex place-items-center j gap-3 col-span-2
 "><div className='bg-cosmic-primary-color flex justify-center place-items-center ms-2 w-[40px] h-[40px] rounded-full'>
                                <img src={attachButton} alt='attach' />
                            </div>

                            <textarea placeholder="enter text" className=" w-full outline-none resize-none h-[60px] p-2 overflow-y-auto  "></textarea>
                        </div>
                        <div className="w-full flex justify-end pe-6 gap-3 mt-2">
                            <div className='w-[40px]  h-[40px] flex justify-center place-items-center border rounded-full '>
                                <img alt='mic' className=' ' src={micIcon} />
                            </div>

                            <div className='w-[40px]  h-[40px] flex justify-center place-items-center border rounded-full '>
                                <img alt='mic' className='' src={sendMessageIcon} />
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
}


export default DoctorMainChatPage