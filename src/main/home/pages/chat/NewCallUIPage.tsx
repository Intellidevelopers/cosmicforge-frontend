   import { MutableRefObject, useEffect, useRef } from 'react'
import callIcon from '../../../../assets/icons/callIcon.svg'
import { useSelector } from 'react-redux'
import { RootReducer, store } from '../../../store/initStore'
import useGetMediaStream from '../../hook/useGetMediaStream'
import UserRTC from '../../hook/UserRTC'
import { useNavigate } from 'react-router-dom'
import { tearDownConnection, updateRingTone } from '../../../store/reducers/userSocketReducer'



   interface  NewCallUIProps {
      newCall:boolean,
      onDecline:() => void,
      onAnswer: () => void,
      userCallingDetails:{
         name:string,
         profilePicture:string
       } | null
      
   }

   


const NewCallUIPage = ({newCall,onDecline,onAnswer,userCallingDetails}:NewCallUIProps) => {

   const { } = useGetMediaStream()

   
   const bodyRef:MutableRefObject<HTMLDivElement | null> = useRef(null)

   const socketCon = useSelector((state:RootReducer)=>state.socket)

    const user = useSelector((state:RootReducer)=>state.user)


 


   const {createAnswer,createOffer}=  UserRTC()
  
   const navigate = useNavigate()
   const audioRef:MutableRefObject<HTMLAudioElement | null> = useRef(null)

   useEffect(()=>{
      
       if(socketCon.connected && socketCon.socket){
        if(audioRef.current){
         audioRef.current.loop = true
         audioRef.current.play()
        }
               if(socketCon.localStream && !socketCon.offerCreated){
                  console.log('fired...') 
                 
                 createOffer({userToCall:socketCon.remoteUserId!!,userCalling:user.data?._id!!})
             
                }else{
                  console.log('false alrdeay created')
                }
      
      
      
                  
              socketCon.socket.on('call-failed',(data:any)=>{
                  alert(JSON.stringify(data))
              })
      
      
              
          }

   },[socketCon.localStream])


   useEffect(()=>{
    
     if(!socketCon.startPlayingRingTone && socketCon.localStream){
      if(audioRef.current){
         audioRef.current.load()
         audioRef.current.pause()
        }
     }
   },[socketCon.startPlayingRingTone])
    

    return <div ref={bodyRef} className={`  cursor-default  w-full h-fit flex  absolute bg-transparent z-[300] p-8   justify-center`}>
       <audio src='./src/assets/call/ringtone4.mp3' ref={audioRef} />
       <div className={` ${newCall? 'flex':'hidden'}  bg-white rounded-md p-3 h-[10
       50px] w-[400px] shadow-lg flex `}>
       <img src={callIcon} className='w-[100px] ' />
       <div className='ms-3 mt-2'>
         <div className='flex flex-col gap-6'>
            <p>Incoming call {userCallingDetails?.name}</p>
            <div className='flex gap-4 justify-evenly'>
            <p className='bg-green-600 p-2 rounded-lg text-white' onClick={async()=>{

   if(socketCon.localStream){
     await createAnswer({userToCall:user.data?._id!!,userCalling:socketCon.remoteUserId!!})
        socketCon.socket?.emit('remote_answered_call',{
         userCalling:socketCon.remoteUserId,
        remoteId:user.data?._id,
        })
         store.dispatch(updateRingTone({startPlayingRingTone:false,socket:null}))
         navigate('/doctor/appointment/voice-call')
     
               }
               onAnswer()
            }}>answer</p>
            <p className='bg-red-600 p-2 rounded-lg text-white' onClick={()=>{
                store.dispatch(tearDownConnection())
               store.dispatch(updateRingTone({startPlayingRingTone:false,socket:null}))
               onDecline()
            }}>decline</p>
            </div>
           
           <div>
           
           </div>
         </div>
       </div>
       </div>
    </div>
}


export default NewCallUIPage