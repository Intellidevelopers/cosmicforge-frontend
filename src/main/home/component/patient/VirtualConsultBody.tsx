import { useLocation, useNavigate } from "react-router-dom"
import HomeMobileNavBar from "./HomeMobileNavBar"
import HomeNavBar from "./HomeNavBar"
import callButton  from '../../../../assets/icons/call-button.svg'
import useGetMediaStream from "../../hook/useGetMediaStream"
import videoButton from '../../../../assets/icons/cosmic-video-call-button.svg'
import muteMic from '../../../../assets/icons/cosmic-mute-mic.svg'
import messageIcon from '../../../../assets/icons/cosmic-video-chat-icon.svg'

import { MutableRefObject,  useRef } from "react"


const VirtualConsultBody = ()=>{

    interface ConsultProps {
    
            doctorImage:string,
            doctorName:string,
            doctorSpecialization:string,
            clinic:string,
            address:string
           
    }

   const localVideoStream:MutableRefObject<HTMLVideoElement | null > = useRef(null)
   const localAudioStream:MutableRefObject<HTMLAudioElement | null > = useRef(null)
   const remoteVideoSteam:MutableRefObject<HTMLVideoElement | null > = useRef(null)

   let {state} = useLocation()
     let data = state as ConsultProps

   const {cancelMediaStream,toggleVideo,toggleMic,switchToAudio,mode} = useGetMediaStream(localVideoStream,localAudioStream)

    const navigate = useNavigate()

   

  

   

    return (
        <div className="w-full ">
            <HomeNavBar title="Virtual Consult"/>
            <HomeMobileNavBar title="Virtual Consult"/>

            <div className="w-full ps-0 md:ps-[294px] mt-4">
            <div className="hidden m-8 md:flex place-items-center gap-1">


                    <i className="fa fa-chevron-left fa-2xl" aria-hidden="true" onClick={() => {
                        navigate(-1)
                    }}></i>
                    <p className="font-extralight">Go back</p>
                </div>

                <div className="w-full relative ">

                 <div className="w-full md:right-[22%]  flex justify-center place-items-center absolute  mt-6 z-50  font-light">
                    <div className={`w-[600px] ${(mode.video) && 'text-white'} flex flex-col justify-center place-items-center gap-2`}>
                    <p>{data.doctorName}</p>
                    <p>{data.doctorSpecialization}</p>
                    </div>
                 </div>

                    <div className="md:ps-10 md:pe-10 h-[450px] ">

                        <div className={`w-full  ${(mode.video)?'block':'hidden'}`}>
                        <video ref={remoteVideoSteam}  autoPlay className="h-[450px] w-full  bg-black  opacity-90  object-cover"   />
                        <div className="z-50 rounded-lg">
                    <video ref={localVideoStream}  autoPlay  className="absolute  rounded-lg h-[200px] w-[150px]  md:h-[250px] md:w-[200px]  bg-black  opacity-40 md:right-[60px]  bottom-0 right-0   md:bottom-5 z-50 object-cover "  src="/"  />
                    </div>
                        </div>




                 <div className={`h-full  w-full  ${(mode.audio)?'block':'hidden'}`}>

                    <div className="w-full h-full flex justify-center place-items-center ">
                        <div className="w-[200px] h-[200px] rounded-full object-contain mt-16 ">
                        <img className=" h-full w-full rounded-full"  src={data.doctorImage} alt="doctors profile"/>
                        <audio ref={localAudioStream} controls autoPlay />
                        </div>
                      
                      
                          </div>

                 </div>

                       
                     
                    </div>

                   




                </div>

                <div className="w-full flex flex-col place-items-center justify-center p-1 gap-2 mt-2">
                    <p className="bg-cosmic-light-color-call w-fit text-white font-light p-1 rounded-md">2:34:34</p>

                    <div className="bg-cosmic-light-color-call  flex p-2 gap-2">

                        <div className="w-[30px] h-[30px] bg-cosmic-primary-color p-1 rounded-full" onClick={()=>{
                            switchToAudio()
                        }}>
                        <img className="w-full h-full" src={callButton} />
                        </div>

                        <div className="w-[30px] h-[30px] bg-cosmic-primary-color p-1 rounded-full" onClick={()=>{
                          toggleVideo()
                        }}>
                        <img src={videoButton} />
                        </div>
                        
                        <div className="w-[30px] h-[30px] bg-white p-1 rounded-full flex justify-center place-items-center" onClick={async()=>{
                            cancelMediaStream()
                        }}>
                        <i className="fa fa-times text-red-600 text-[20px]" aria-hidden="true"></i>
                        </div>

                        

                        <div className="w-[30px] h-[30px] bg-white p-1 rounded-full flex justify-center place-items-center" onClick={async()=>{
                           await toggleMic()
                        }}>
                       
                        <img className="w-full h-full" src={muteMic} />
                           </div>


                           <div className="w-[30px] h-[30px] bg-white p-1 rounded-full flex justify-center place-items-center">
                       
                       <img className="w-full h-full" src={messageIcon} />
                          </div>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VirtualConsultBody