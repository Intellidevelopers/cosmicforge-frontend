import { MutableRefObject, useRef } from 'react'
import callIcon from '../../../../assets/icons/callIcon.svg'
import { useSelector } from 'react-redux'
import { RootReducer, store } from '../../../store/initStore'

import { useNavigate } from 'react-router-dom'
import { tearDownConnection,  updateRingTone} from '../../../store/reducers/userSocketReducer'




interface NewCallUIProps {
   newCall: boolean,
   onDecline: () => void,
   onAnswer: () => void,
   userCallingDetails: {
      name: string,
      profilePicture: string
   } | null

}




const NewCallUIPage = ({ newCall, onDecline, onAnswer, userCallingDetails }: NewCallUIProps) => {

   


   const bodyRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

   const socketCon = useSelector((state: RootReducer) => state.socket)

   const user = useSelector((state: RootReducer) => state.user)

   //const dispatch = useDispatch()
   





   

   const navigate = useNavigate()
   
   
   /*getStream().then(async()=>{
    
     if(!socketCon.offerCreated && localPeerConnection ){


         if(localPeerConnection.signalingState !== 'closed'){

            store.getState().socket.localStream?.getTracks().forEach(tracks=>{
            
                 localPeerConnection.addTrack(tracks, store.getState().socket.localStream!!)
                 })
                 
           const offer = await  localPeerConnection.createOffer({
             iceRestart:true,
             offerToReceiveAudio:true,
             offerToReceiveVideo:true
          })
     
          await localPeerConnection.setLocalDescription(offer)
         // dispatch(updateLocalDescription({localDescription:offer as RTCSessionDescription,socket:null}))
            dispatch(updateOfferOrAnswer({offerCreated:true,socket:null}))
            //dispatch(updatePeerConnectionInstance({localPeerConnectionInstance:localPeerConnection,remotePeerConnectionInstance:remotePeerConnection,socket:null}))
             let  userToCall = store.getState().socket.remoteUserId
             let userCalling = user.data?._id 
      
            if(socketCon.connected && socketCon.socket){
               socketCon.socket.emit('create_offer',{
                 userToCall ,
                  userCalling,
                  user_calling_offer:offer
               })
          }
         }

    

       }


 
 })*/

 


  




  



   return <div ref={bodyRef} className={`  cursor-default  w-full h-fit flex  absolute bg-transparent   top-0  z-[800] p-8    justify-center`}>
     
      <div className={` ${newCall ? 'flex' : 'hidden'}  bg-white rounded-md p-3 h-[10
       50px] w-[400px] shadow-lg flex `}>
         <img src={callIcon} className='w-[100px] ' />
         <div className='ms-3 mt-2'>
            <div className='flex flex-col gap-6'>
               <p>Incoming call {userCallingDetails?.name}</p>
               <div className='flex gap-4 justify-evenly'>

                  <p className='bg-green-600 p-2 rounded-lg text-white' onClick={async () => {

                     if (socketCon.localStream) {
                       // await createAnswer({ userToCall: user.data?._id!!, userCalling: socketCon.remoteUserId!! })
                        socketCon.socket?.emit('remote_answered_call', {
                           userCalling: socketCon.remoteUserId,
                           remoteId: user.data?._id,
                        })

                        store.dispatch(updateRingTone({ startPlayingRingTone: false, socket: null }))
                        

                        switch (user.data?.role) {
                           case 'client': {
                              onAnswer()
                              navigate('/patient/find-a-specialist/consult',{
                                 replace:true
                              })
                              return
                           }

                           case 'doctor': {
                              onAnswer()
                               
                              navigate('/doctor/appointment/voice-call',{
                                replace:true
                             })
                               
                             
                              return
                           }
                        }


                     }

                  }}>answer</p>
                  <p className='bg-red-600 p-2 rounded-lg text-white' onClick={() => {
                     store.dispatch(tearDownConnection({ tearDown: true, socket: null }))
                     store.dispatch(updateRingTone({ startPlayingRingTone: false, socket: null }))
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