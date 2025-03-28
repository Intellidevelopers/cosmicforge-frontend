import { useLocation, useNavigate } from "react-router-dom"
import HomeMobileNavBar from "./HomeMobileNavBar"
import HomeNavBar from "./HomeNavBar"
import callButton  from '../../../../assets/icons/call-button.svg'
import useGetMediaStream from "../../hook/useGetMediaStream"
import videoButton from '../../../../assets/icons/cosmic-video-call-button.svg'
import muteMic from '../../../../assets/icons/cosmic-mute-mic.svg'
import messageIcon from '../../../../assets/icons/cosmic-video-chat-icon.svg'

import { MutableRefObject,  useEffect,   useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer, store } from "../../../store/initStore"
import UserRTC from "../../hook/UserRTC"
import { tearDownConnection, updateUserCallingData } from "../../../store/reducers/userSocketReducer"


const VirtualConsultBody = ()=>{

    interface ConsultProps {
    
            doctorImage:string,
            doctorName:string,
            doctorSpecialization:string,
            clinic:string,
            address:string,
            department:string,
            docId :string
           
    }

   const localVideoStream:MutableRefObject<HTMLVideoElement | null > = useRef(null)
   const localAudioStream:MutableRefObject<HTMLAudioElement | null > = useRef(null)
   const remoteVideoSteam:MutableRefObject<HTMLVideoElement | null > = useRef(null)

   let {state} = useLocation()
     let data = state as ConsultProps

     const user = useSelector((state:RootReducer)=>state.user)

   const {cancelMediaStream,toggleMic,switchToAudio,mode} = useGetMediaStream()

    const navigate = useNavigate()

    const socketCon = useSelector((state:RootReducer)=>state.socket)

    const {createOffer} = UserRTC()

    const dispatch = useDispatch()


    const [counter,setCounter] = useState<string>('00:00:00')
  const [counterId,setCounterId] = useState<NodeJS.Timeout>()

       const startTimer = () => {
        let countUp = 0
        const timerId = setInterval(()=>{
          const hours = Math.floor(countUp/3600) 
           const mins = Math.floor(countUp/60)
           const sec = countUp % 60
           setCounter(`${hours.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`)  
               
            countUp += 1

           
        },1000)
        setCounterId(timerId)

    }

    
        const stopAndClearTimer = () =>{
    
            if(counterId){
                setCounter('00:00:00')
                clearInterval(counterId)
            }
        }
  



   useEffect(()=>{
   
    if(socketCon.connected && socketCon.socket){
          
         if(socketCon.localStream && !socketCon.offerCreated){
             
            createOffer({userToCall:data.docId,userCalling:user.data?._id!!})
            dispatch(updateUserCallingData({remoteUserId:data.docId,socket:null}))
           
          }else{
            stopAndClearTimer()
            console.log('false alrdeay created')
          }


          



            
        socketCon.socket.on('call-failed',()=>{
          //  alert(JSON.stringify(data))
        })


        
    }

    return () =>{
      
    }

    
   /* const audio =  new Audio('/src/assets/call/ringtone4.mp3')
    audio.loop = true
    //audio.play()
  */
    
   },[socketCon.localStream])


    useEffect(()=>{
      
       
         if(localVideoStream.current){
           localVideoStream.current.srcObject = socketCon.localStream!!
          
         }
   
       },[socketCon.localStream])

    useEffect(()=>{
       
           console.log(socketCon?.remoteStream?.getTracks().length)
           if(remoteVideoSteam.current && socketCon.remoteStream){
            startTimer() 
               
               remoteVideoSteam.current.srcObject = socketCon.remoteStream!!
           }
         
       },[socketCon.remoteStream])

     

  
  
       

   

    return (
        <div className="w-full h-full ">
            <HomeNavBar title="Virtual Consult"/>
            <HomeMobileNavBar title="Virtual Consult"/>

            <div className="w-full ps-0 md:ps-[294px] mt-4">
            <div className="hidden m-8 md:flex place-items-center gap-1">


                    <i className="fa fa-chevron-left fa-2xl" aria-hidden="true" onClick={() => {
                       dispatch(tearDownConnection())
                        cancelMediaStream()
                        
                        navigate(-1)
                    }}></i>
                    <p className="font-extralight">Go back</p>
                </div>

                <div className="w-full relative ">

                 <div className="w-full   flex justify-center place-items-center absolute  mt-6 z-50  font-light ">
                    <div className={`w-full ${(mode.video) && 'text-white'} flex flex-col justify-center place-items-center gap-2`}>
                    <p>Dr   {data.doctorName}</p>
                    <p>{data.department}</p>
                    <p className="font-light italic text-sm">{socketCon.remoteStream?<span className="text-green-600">answered</span>:'calling'}</p>
                    </div>
                 </div>

                    <div className="md:ps-10 md:pe-10 h-[450px] ">

                        <div className={`w-full  ${(mode.video)?'block':'hidden'}`}>
                        <video ref={remoteVideoSteam}   autoPlay className="h-[450px] w-full  bg-black  opacity-90  object-cover"   />
                        <div className="z-50 rounded-lg">
                    <video ref={localVideoStream}  muted autoPlay  className="absolute  rounded-lg h-[200px] w-[150px]  md:h-[250px] md:w-[200px]  bg-black  opacity-40 md:right-[60px]  bottom-0 right-0   md:bottom-5 z-50 object-cover "  src="/"  />
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
                    <p className="bg-cosmic-light-color-call w-[100px] text-center text-white font-light p-1 rounded-md">{counter}</p>

                    <div className="bg-cosmic-light-color-call  flex p-2 gap-2">

                        <div className="w-[30px] h-[30px] bg-cosmic-primary-color p-1 rounded-full" onClick={()=>{
                            switchToAudio()
                        }}>
                        <img className="w-full h-full" src={callButton} onClick={()=>{
                          if(socketCon.socket && !socketCon.remoteConnected){

                            socketCon.socket.emit('calling',{userToCall:data.docId,
                              userCallingDetails:{
                                  name: user.data?.lastName?.concat('').concat(user.data.fullName!!),
                                  profilePicture:user.data?.profile?.profilePicture!!
                              },
                              callMode:'audio'
                             
                          })
                           }else{
                            if(socketCon.connected && socketCon.socket){
                              socketCon.socket.emit('request_to_switch_call_mode',{
                                callMode:'audio',
                                remoteId:data.docId
                              })
                            }
                           }
                          
                           // toggleVideo()
                          }}
                      />
                        </div>

                        <div className="w-[30px] h-[30px] bg-cosmic-primary-color p-1 rounded-full" onClick={()=>{
                         if(socketCon.socket && !socketCon.remoteConnected){

                          socketCon.socket.emit('calling',{userToCall:data.docId,
                            userCallingDetails:{
                                name: user.data?.lastName?.concat('').concat(user.data.fullName!!),
                                profilePicture:user.data?.profile?.profilePicture!!
                            },
                            callMode:'video'
                           
                        })
                         }else{
                          if(socketCon.connected && socketCon.socket){
                            socketCon.socket.emit('request_to_switch_call_mode',{
                              callMode:'video',
                              remoteId:data.docId
                            })
                          }
                         }
                        
                         // toggleVideo()
                        }}>
                        <img src={videoButton} />
                        </div>
                        
                        <div className="w-[30px] h-[30px] bg-white p-1 rounded-full flex justify-center place-items-center" onClick={async()=>{
                          socketCon.socket?.emit('on_call_ended',{
                            remoteId:store.getState().socket.remoteUserId
                          })
                               dispatch(tearDownConnection())
                            cancelMediaStream()
                            navigate(-1)
                        
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