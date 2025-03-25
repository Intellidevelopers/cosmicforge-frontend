import { useState } from "react"
import {  useDispatch, useSelector } from "react-redux"
import { RootReducer,store } from "../../store/initStore"
import { updateOfferOrAnswer, updatePeerConnectionInstance} from "../../store/reducers/userSocketReducer"


 interface UserRTCProps {
    userToCall:string,
    userCalling:string,
    
 }


const UserRTC = () => {

  let socketCon = useSelector((state:RootReducer)=>state.socket)
  
  const dispatch = useDispatch()
  
    
   const [localPeerConnection,] = useState<RTCPeerConnection>(()=>{
      return  socketCon?.localPeerConnectionInstance!!
   })


   const [remotePeerConnection,] = useState<RTCPeerConnection>(()=>{
      return  socketCon?.remotePeerConnectionInstance!!
   })
    

 
   





   




   



   const createOffer = async ({userToCall,userCalling}:UserRTCProps) =>{
      
      try {
           
         socketCon.localStream?.getTracks().forEach(tracks=>{
            localPeerConnection.addTrack(tracks, socketCon.localStream!!)
            })
            
   
       const offer = await  localPeerConnection.createOffer({
           iceRestart:true,
           offerToReceiveAudio:true,
           offerToReceiveVideo:true
        })
   
        await localPeerConnection.setLocalDescription(offer)
       // dispatch(updateLocalDescription({localDescription:offer as RTCSessionDescription,socket:null}))
          dispatch(updateOfferOrAnswer({offerCreated:true,socket:null}))
          dispatch(updatePeerConnectionInstance({localPeerConnectionInstance:localPeerConnection,remotePeerConnectionInstance:remotePeerConnection,socket:null}))
              
          if(socketCon.connected && socketCon.socket){
             socketCon.socket.emit('create_offer',{
                userToCall,
                userCalling,
                user_calling_offer:offer
             })
        }
         
      } catch (error) {
         
      }
     
   }


    let createAnswer = async ({userToCall,userCalling}:UserRTCProps) =>{

      try {
        socketCon = store.getState().socket

        const localStream =   store.getState().socket.localStream

        const remotePeerConnection = store.getState().socket.remotePeerConnectionInstance
      
        
        
           
         if(localStream){
         
               const answer = await  remotePeerConnection?.createAnswer()
       
               await remotePeerConnection?.setLocalDescription(answer)
               console.log('ansed called...')
               
               if(socketCon.connected && socketCon.socket){
                   console.log('ansed called...')
                   socketCon.socket.emit('create_answer',{
                      userToCall,
                      userCalling,
                      user_receiving_call_answer:answer
                   })
              }
         }else{
            console.log('no stream yet')
         }
   
        
        
         
      } catch (error:any) {
          console.log(error.message)
      }
              
      
    }

    let addTrack = () =>{
      if(socketCon && socketCon.localStream && remotePeerConnection.localDescription && localPeerConnection.remoteDescription){
         console.log('hhh  stream')
          socketCon.localStream?.getTracks().forEach(tracks=>{
               
                 console.log(tracks)
              localPeerConnection.addTrack(tracks, socketCon.localStream!!)
          })
        }
    }

    let destroyConnection = async () => {
       
             console.log('downss')
        // store.dispatch(tearDownConnection())
      
       
    }

   return {createAnswer,createOffer,addTrack,destroyConnection}
}


export default UserRTC