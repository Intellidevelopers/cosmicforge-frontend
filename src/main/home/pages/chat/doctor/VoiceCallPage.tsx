
import docImage from '../../../../../assets/images/doctor-image.jpeg'
import callButton from '../../../../../assets/icons/call-button.svg'
import videoButton from '../../../../../assets/icons/cosmic-video-call-button.svg'
import muteMic from '../../../../../assets/icons/cosmic-mute-mic.svg'
import messageIcon from '../../../../../assets/icons/cosmic-video-chat-icon.svg'
import attachButton from '../../../../../assets/icons/cosmic-attach-icon.svg'
//import micIcon from '../../../../../assets/icons/cosmic-chat-mic.svg'
import sendMessageIcon from '../../../../../assets/icons/cosmic-chat-send-message-icon.svg'
import  { MutableRefObject, useEffect, useRef } from "react"
import { useSelector} from 'react-redux'
import { RootReducer } from '../../../../store/initStore'
import useGetMediaStream from '../../../hook/useGetMediaStream'


const VoiceCallPage = () => {

    const localVideoStream: MutableRefObject<HTMLVideoElement | null> = useRef(null)
    //const localAudioStream: MutableRefObject<HTMLAudioElement | null> = useRef(null)
    const remoteVideoSteam: MutableRefObject<HTMLVideoElement | null> = useRef(null)


      const userSocketCon =  useSelector((state:RootReducer)=>state.socket)

      const {cancelMediaStream,toggleVideo,toggleMic,switchToAudio} = useGetMediaStream()
      
    useEffect(()=>{
        console.log(userSocketCon?.remoteStream?.getTracks().length)
        if(remoteVideoSteam.current && userSocketCon.remoteStream){
            
            remoteVideoSteam.current.srcObject = userSocketCon.remoteStream!!
        }
      
    },[userSocketCon.remoteStream])

    useEffect(()=>{
      console.log('my streamss')
      console.log(userSocketCon.localStream)
      if(localVideoStream.current){
        localVideoStream.current.srcObject = userSocketCon.localStream!!
      
      }

    },[userSocketCon.localStream])
    
   
   
      
    return  <div className={`w-full grid grid-cols-5 h-full  bg-cosmic-bg-chat-background`}>


             <div className=" h-full w-full md:col-span-3  col-span-5 " >
     
                 <div className="w-full h-full  grid grid-rows-5">
     
                     <div className="row-span-1 h-full flex justify-center place-items-center text-white font-bold">
                         {userSocketCon.remoteCallerDetails?.name?? 'User'}
                     </div>
                     <div className="row-span-2 h-full flex justify-center place-items-center">
                         <img src={userSocketCon.remoteCallerDetails?.profilePicture?? '/'} className='h-[200px] w-[200px] rounded-full' />
                        <div>

                       {
                        /**
                         * <video  ref={localVideoStream} autoPlay  muted className='bg-black' />
                        <video ref={remoteVideoSteam} autoPlay controls className='bg-black' />
                         */
                       } 

                            </div>
                     </div>
                     <div className="row-span-2 flex justify-center place-items-center h-full">
     
                         <div className="w-full flex flex-col place-items-center justify-center p-1 gap-2 mt-2">
                             <p className="bg-cosmic-light-color-call w-fit text-white font-light p-1 rounded-md">2:34:34</p>
     
                             <div className="bg-cosmic-light-color-call  flex p-2 gap-2">
     
                                 <div className="w-[30px] h-[30px] bg-cosmic-primary-color p-1 rounded-full" onClick={() => {
                                     switchToAudio()
                                 }}>
                                     <img className="w-full h-full" src={callButton} />
                                 </div>
     
                                 <div className="w-[30px] h-[30px] bg-cosmic-primary-color p-1 rounded-full" onClick={() => {
                                     toggleVideo()
                                 }}>
                                     <img src={videoButton} />
                                 </div>
     
                                 <div className="w-[30px] h-[30px] bg-white p-1 rounded-full flex justify-center place-items-center" onClick={async () => {
                                     cancelMediaStream()
     
                                 }}>
                                     <i className="fa fa-times text-red-600 text-[20px]" aria-hidden="true"></i>
                                 </div>
     
     
     
                                 <div className="w-[30px] h-[30px] bg-white p-1 rounded-full flex justify-center place-items-center" onClick={async () => {
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
     
             </div>
     
     
     
     
             <div className="h-full w-full hidden md:block col-span-2  bg-cosmic-bg-chat-background border-l border-l-white" >
                 <div className='grid grid-cols-2 bg-white p-1 gap-2 '>
                     <div>
                         <p className='col-span-1 text-center w-full text-cosmic-primary-color'>Chat</p>
                         <p className='w-full h-[2px] bg-cosmic-primary-color'></p>
                     </div>
     
                     <div>
                         <p className='col-span-1 text-center w-full text-cosmic-primary-color'>Report</p>
                         <p className='w-full h-[2px] bg-cosmic-primary-color'></p>
                     </div>
     
                 </div>
     
     
                 <div className='h-[50px] bg-white'>
                     <div className=" h-full flex justify-evenly place-items-center">
                         <img src={docImage} className='h-[40px] w-[40px] rounded-full' />
                         <p>Jennifer Williams</p>
                         <i className='fa fa-ellipsis-v' />
                     </div>
                 </div>
     
                 <div className=' w-full h-full  bg-cosmic-bg-chat-background relative'>
     
     
     
                     <div className='  h-full overflow-y-auto'>
                         sss
                     </div>
     
     
     
                     <div className=" absolute bg-white w-full h-[30%] bottom-0 ">
     
                         <div className="grid grid-cols-3  ">
                             <div className="flex place-items-center  gap-3 col-span-2
     ">
         
         <div className='bg-cosmic-primary-color flex justify-center place-items-center ms-2 w-[40px] h-[40px] rounded-full'>
                                     <img src={attachButton} alt='attach' />
                                 </div>
     
                                 <textarea placeholder="enter text" className=" w-full outline-none resize-none h-[60px] p-2 overflow-y-auto  "></textarea>
                             </div>
                             <div className="w-full flex justify-end pe-6 gap-3 mt-2">
                                 
     
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


export default VoiceCallPage