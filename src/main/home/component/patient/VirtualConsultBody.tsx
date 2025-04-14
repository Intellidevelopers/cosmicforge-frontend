import { useLocation, useNavigate } from "react-router-dom"
import HomeMobileNavBar from "./HomeMobileNavBar"
import HomeNavBar from "./HomeNavBar"
import callButton from '../../../../assets/icons/call-button.svg'
import useGetMediaStream from "../../hook/useGetMediaStream"
import videoButton from '../../../../assets/icons/cosmic-video-call-button.svg'
import muteMic from '../../../../assets/icons/cosmic-mute-mic.svg'
import messageIcon from '../../../../assets/icons/cosmic-video-chat-icon.svg'

import { MutableRefObject, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer, store } from "../../../store/initStore"

import { tearDownConnection, updateCallInitialization, updateCallMode,  updateOfferOrAnswer, updatePeerConnectionInstance, updateUserCallingData } from "../../../store/reducers/userSocketReducer"

const VirtualConsultBody = () => {

  interface ConsultProps {

    doctorImage: string,
    doctorName: string,
    doctorSpecialization: string,
    clinic: string,
    address: string,
    department: string,
    docId: string

  }

  const localVideoStream: MutableRefObject<HTMLVideoElement | null> = useRef(null)
  const localAudioStream: MutableRefObject<HTMLAudioElement | null> = useRef(null)
  const remoteVideoSteam: MutableRefObject<HTMLVideoElement | null> = useRef(null)

  let { state } = useLocation()

  let data = state as ConsultProps

  const user = useSelector((state: RootReducer) => state.user)

  const { cancelMediaStream, toggleMic, getStream} = useGetMediaStream()

  const navigate = useNavigate()

  const socketCon = useSelector((state: RootReducer) => state.socket)



  const dispatch = useDispatch()




  const [callState, setCallState] = useState<'calling' | 'connected' | 'failed to connect' | 'call ended' | null>('calling')

  const [counter, setCounter] = useState<string>('00:00:00')
  const [counterId, setCounterId] = useState<NodeJS.Timeout>()

  const startTimer = () => {
    let countUp = 0
    const timerId = setInterval(() => {
      const hours = Math.floor(countUp / 3600)
      const mins = Math.floor(countUp / 60)
      const sec = countUp % 60
      setCounter(`${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`)

      countUp += 1


    }, 1000)
    setCounterId(timerId)

  }


  const stopAndClearTimer = () => {

    if (counterId) {
      setCounter('00:00:00')
      clearInterval(counterId)
    }
  }


  const rtcConfig = {
    iceServers: [
        /* {
             urls: ['stun:stun1.l.google.com:19302', 'stun:stun3.l.google.com:19302']
         },*/
        /*   {
               urls: "stun:stun.relay.metered.ca:80",
           },
           {
               urls: "turn:global.relay.metered.ca:80",
               username: "053ea0981f6caa6c8eba5e29",
               credential: "5ksdYtPQ2aO2jjDk",
           },
           {
               urls: "turn:global.relay.metered.ca:80?transport=tcp",
               username: "053ea0981f6caa6c8eba5e29",
               credential: "5ksdYtPQ2aO2jjDk",
           },
           {
               urls: "turn:global.relay.metered.ca:443",
               username: "053ea0981f6caa6c8eba5e29",
               credential: "5ksdYtPQ2aO2jjDk",
           },
           {
               urls: "turns:global.relay.metered.ca:443?transport=tcp",
               username: "053ea0981f6caa6c8eba5e29",
               credential: "5ksdYtPQ2aO2jjDk",
           }*/


        { "url": "stun:global.stun.twilio.com:3478", "urls": "stun:global.stun.twilio.com:3478" },
        { "credential": "nKkNB9mCKhGQGCWd8uUJ1kL1Z+ECTzjNxAN7gFQp8Og=", "url": "turn:global.turn.twilio.com:3478?transport=udp", "urls": "turn:global.turn.twilio.com:3478?transport=udp", "username": "53a50d8a428c241a9eb0e79b5461a90e8ed802825e30f84c9b5a86c1a7318ad9" },
        { "credential": "nKkNB9mCKhGQGCWd8uUJ1kL1Z+ECTzjNxAN7gFQp8Og=", "url": "turn:global.turn.twilio.com:3478?transport=tcp", "urls": "turn:global.turn.twilio.com:3478?transport=tcp", "username": "53a50d8a428c241a9eb0e79b5461a90e8ed802825e30f84c9b5a86c1a7318ad9" },
        { "credential": "nKkNB9mCKhGQGCWd8uUJ1kL1Z+ECTzjNxAN7gFQp8Og=", "url": "turn:global.turn.twilio.com:443?transport=tcp", "urls": "turn:global.turn.twilio.com:443?transport=tcp", "username": "53a50d8a428c241a9eb0e79b5461a90e8ed802825e30f84c9b5a86c1a7318ad9" }

    ]
}




  useEffect(() => {



    if(!socketCon.localStream && socketCon.isCallInitiated){

        

      getStream().then(()=>{

        let socketCon = store.getState().socket!!

        let localPeerConnection = store.getState().socket.localPeerConnectionInstance


          socketCon.socket?.on('ringing',async()=>{
            console.log('ringing.....')
            
          
  
           if(   !socketCon.offerCreated && localPeerConnection && localPeerConnection.signalingState !== 'closed' ){
            
            console.log('called ')
  
            
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
                 dispatch(updatePeerConnectionInstance({localPeerConnectionInstance:localPeerConnection}))
                 
               


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
            
    
               
       
          })
      })
    }





    if (socketCon.connected && socketCon.socket && socketCon.localStream ) {

     

      if ( socketCon.socket && socketCon.localStream && socketCon.isCallInitiated) {

         (async()=>{

          try {
           if(socketCon.socket)
            socketCon.socket.emit('calling', {
              userToCall: data.docId,
              userCallingDetails: {
                name: user.data?.lastName?.concat('').concat(user.data.fullName!!),
                profilePicture: user.data?.profile?.profilePicture!!
              },
              callMode: socketCon.callMode
    
            })


               

              dispatch(updatePeerConnectionInstance({localPeerConnectionInstance:new RTCPeerConnection(rtcConfig),remotePeerConnectionInstance:new RTCPeerConnection(rtcConfig)}))
             
            dispatch(updateUserCallingData({ remoteUserId: data.docId, socket: null }))
          } catch (error) {
             console.log(error)
          }
        })()






         

       /* try {

          if(localPeerConnection && remotePeerConnection){
     
             const socketCon = store.getState().socket

          localPeerConnection.addEventListener('icecandidate', async (e: RTCPeerConnectionIceEvent) => {

            if(socketCon.socket){
              socketCon.socket.emit('local_ice_candidate', {
                userToCall: socketCon.remoteUserId,
                userCalling: user.data?._id,
                user_calling_ice_candidate: e.candidate
            })
            }
                


          })


          remotePeerConnection.addEventListener('icecandidate', async (e: RTCPeerConnectionIceEvent) => {

              if (socketCon.connected && socketCon.socket) {
                  socketCon.socket.emit('remote_ice_candidate', {
                      userToCall: user.data?._id,
                      userCalling: socketCon.remoteUserId,
                      user_recieving_call_ice_candidate: e.candidate
                  })
              }


          })



          if (socketCon.connected && socketCon.socket) {

            socketCon.socket.on('local_ice_candidate', (data: {
                  userToCall: string,
                  userCalling: string,
                  user_calling_ice_candidate: RTCIceCandidate
              }) => {

                  if (remotePeerConnection.localDescription && remotePeerConnection.remoteDescription && remotePeerConnection.signalingState !=="closed") {
                      console.log('called')
                      try {
                          remotePeerConnection.addIceCandidate(data.user_calling_ice_candidate)
                      } catch (error) {

                      }
                  }


              })



          }



          if (socketCon.connected && socketCon.socket) {
              socketCon.socket.on('remote_ice_candidate', (data: {
                  userToCall: string,
                  userCalling: string,
                  user_recieving_call_ice_candidate: RTCIceCandidate
              }) => {

                  if (localPeerConnection.remoteDescription && localPeerConnection.localDescription && localPeerConnection.signalingState !== 'closed') {
                      try {
                          localPeerConnection.addIceCandidate(data.user_recieving_call_ice_candidate)
                      } catch (error) {

                      }
                  }

              })
          }







          remotePeerConnection.addEventListener('track', async (e) => {
              console.log('tracks.....')
              console.log(e.track.kind)

              dispatch(updateRemoteStream({ remoteStream: e.streams[0], socket: null }))

          })



          localPeerConnection.onconnectionstatechange = (async () => {
              console.log('change...')
              console.log(localPeerConnection.connectionState)




              if (socketCon.socket && localPeerConnection.connectionState === 'connected') {
               store.dispatch(updateLocalConection({locallyConnected:true}))
                  socketCon.socket?.emit('connected', {
                      remoteId: socketCon.remoteUserId
                  })

              } else if (socketCon.socket && localPeerConnection.connectionState === 'failed') {
                  socketCon?.socket.emit('failed_to_connect', { userId: socketCon.remoteUserId })

              }

          })




          localPeerConnection.onicecandidate = (async () => {
              //console.log(localPeerConnection.iceConnectionState)
              // console.log(localPeerConnection.iceConnectionState )
          })




         if (socketCon.connected && socketCon.socket) {
             socketCon.socket.on('offer_received', async (data: {
                  userToCall: string,
                  userCalling: string,
                  user_calling_offer: RTCSessionDescription
              }) => {



                 if(remotePeerConnection.signalingState !=='closed'){

                  try {

                   
                    await remotePeerConnection.setRemoteDescription(data.user_calling_offer)


                    dispatch(updatePeerConnectionInstance({ localPeerConnectionInstance: localPeerConnection, remotePeerConnectionInstance: remotePeerConnection, socket: null }))

                    //   dispatch(updateRemoteDescription({remoteDescription:data.user_calling_offer,socket:null}))
                    console.log(remotePeerConnection.remoteDescription)
                    console.log('offer received')
                    console.log(data.userCalling)
                    console.log(user.data?._id)

                    dispatch(updateOfferOrAnswer(({ offerReceived: true, socket: null })))


                    const answer = await  remotePeerConnection?.createAnswer()
     
                    await remotePeerConnection?.setLocalDescription(answer)
                    console.log('ansed called...')
                    
                  if(socketCon.connected && socketCon.socket){
                        console.log('ansed called...')
                         const userCalling = store.getState().socket.remoteUserId
                        socketCon.socket.emit('create_answer',{
                           userToCall:user.data?._id,
                           userCalling:userCalling,
                           user_receiving_call_answer:answer
                        })
                   }



                } catch (error) {
                    console.log(error)
                }
                 }



              })

          }


          if (socketCon.connected && socketCon.socket) {

              socketCon.socket.on('answer_received', async (data: {
                  userToCall: string,
                  userCalling: string,
                  user_receiving_call_answer: RTCSessionDescription
              }) => {
                  // alert(JSON.stringify(data))

                
               if(localPeerConnection.signalingState !== 'closed'){
                try {
                  console.log('anser received')
                  

                  await localPeerConnection.setRemoteDescription(data.user_receiving_call_answer)
                 
                
              } catch (error: any) {
                  console.log(error.message)
              }
               }

              })
          }



          if (socketCon.connected && socketCon.socket) {

              socketCon.socket.on('remote_answered_call', () => {

               //   createAnswer({ userToCall: store.getState().user.data?._id!!, userCalling: store.getState().socket.remoteUserId!! })

                  console.log('call answer receiversll remote')
              })
          }


          if (socketCon.connected && socketCon.socket) {


             socketCon.socket.on('failed_to_connect', () => {
                  console.log('called failed')

              })
          }



          if (socketCon.connected && socketCon.socket) {
              socketCon.socket.on('on_call_end', () => {
                  console.log('tearing downn')
                  dispatch(tearDownConnection({ tearDown: true, socket: null }))

              })
          }


          if (socketCon.connected && socketCon.socket) {
              socketCon.socket.on('on_connected', () => {
                  store.dispatch(updateRemoteConnection({ remoteConnected: true, socket: null }))
              })
          }

        }






      } catch (error: any) {

          // alert(error.message)


      }*/






      }




      if (socketCon.localStream && socketCon.socket) {
        socketCon.socket.on('failed_to_connect', () => {
          setCallState('failed to connect')
        })
      }




      if (socketCon.connected && socketCon.socket) {
        socketCon.socket.on('on_call_ended', () => {
          stopAndClearTimer()
          setCounter('00:00:00')

          setCallState('call ended')
        })
      }







      if (socketCon.localStream && !socketCon.offerCreated) {

        //createOffer({ userToCall: data.docId, userCalling: user.data?._id!! })

       
    

      } else {
        stopAndClearTimer()
        console.log('false alrdeay created')
      }







      socketCon.socket.on('call-failed', () => {
        //  alert(JSON.stringify(data))
      })



    }

    return () => {

    }


    /* const audio =  new Audio('/src/assets/call/ringtone4.mp3')
     audio.loop = true
     //audio.play()
   */

  }, [socketCon.localStream])





  useEffect(() => {


    if (localVideoStream.current) {
      localVideoStream.current.srcObject = socketCon.localStream!!

    }

  }, [socketCon.localStream])





  useEffect(() => {

    console.log(socketCon?.remoteStream?.getTracks().length)
    if (remoteVideoSteam.current && socketCon.remoteStream && socketCon.onCallAnswered && socketCon.locallyConnected) {


      remoteVideoSteam.current.srcObject = socketCon.remoteStream!!
    }

  }, [socketCon.remoteStream,socketCon.onCallAnswered,socketCon.locallyConnected])



  useEffect(() => {
    if (socketCon.remoteConnected && socketCon.onCallAnswered && socketCon.locallyConnected) {
      setCallState('connected')
      startTimer()
    }
  }, [socketCon.remoteConnected,socketCon.onCallAnswered,socketCon.locallyConnected])




    
 




  return (
    <div className="w-full h-full ">

      <HomeNavBar title="Virtual Consult" />
      <HomeMobileNavBar title="Virtual Consult" />

      <div className="w-full ps-0  mt-4">
        <div className="hidden m-8 md:flex place-items-center gap-1">


          <i className="fa fa-chevron-left fa-2xl" aria-hidden="true" onClick={() => {
            dispatch(tearDownConnection({ tearDown: true, socket: null }))
            cancelMediaStream()

            navigate(-1)

          }}></i>
          <p className="font-extralight">Go back</p>
        </div>

        <div className="w-full relative ">

          <div className="w-full   flex justify-center place-items-center absolute  mt-6 z-50  font-light ">

            <div className={`w-full ${(socketCon.callMode === 'video') && 'text-white'} flex flex-col justify-center place-items-center gap-2`}>
              <p>Dr   {data?.doctorName ?? socketCon.remoteCallerDetails?.name}</p>
              <p>{data?.department ?? ''}</p>
              <p className="font-light italic text-sm">{callState === 'connected' ? <span className="text-green-600">answered</span> : callState}</p>
            </div>
          </div>

          <div className="md:ps-10 md:pe-10 h-[450px] ">

            <div className={`w-full  ${(socketCon.callMode === 'video') ? 'block' : 'hidden'}`}>
              <video ref={remoteVideoSteam} autoPlay className="h-[450px] w-full  bg-black  opacity-90  object-cover" />
              <div className="z-50 rounded-lg">
                <div className="absolute  rounded-lg h-[200px] w-[150px]  md:h-[250px] md:w-[200px]  bg-black   md:right-[60px]  bottom-0 right-0   md:bottom-5 z-50">
                  <video ref={localVideoStream} muted autoPlay className=" w-full h-full  object-cover " src="/" />
                </div>
              </div>
            </div>




            <div className={`h-full  w-full  ${(socketCon.callMode === 'audio') ? 'block' : 'hidden'}`}>

              <div className="w-full h-full flex justify-center place-items-center ">
                <div className="w-[200px] h-[200px] rounded-full object-contain mt-16 ">
                  <img className=" h-full w-full rounded-full" src={data?.doctorImage ?? socketCon.remoteCallerDetails?.profilePicture} alt="doctors profile" />
                  <audio hidden ref={localAudioStream} controls autoPlay />
                </div>


              </div>

            </div>



          </div>






        </div>

        <div className="w-full flex flex-col place-items-center justify-center p-1 gap-2 mt-2">
          <p className="bg-cosmic-light-color-call w-[100px] text-center text-white font-light p-1 rounded-md">{counter}</p>

          <div className="bg-cosmic-light-color-call  flex p-2 gap-2">

            <div className="w-[30px] h-[30px] bg-cosmic-primary-color p-1 rounded-full" onClick={() => {
              //switchToAudio()
              if (socketCon.connected && socketCon.socket && socketCon.remoteConnected && socketCon.callMode === 'video') {
                console.log('fired...')
                socketCon.socket.emit('request_to_switch_call_mode', {
                  callMode: 'audio',
                  remoteId: data.docId
                })

              }
              dispatch(updateCallMode({ callMode: 'audio', socket: null }))
            }}>


              <img className="w-full h-full" src={callButton} onClick={() => {




                // toggleVideo()
              }}
              />
            </div>

            <div className="w-[30px] h-[30px] bg-cosmic-primary-color p-1 rounded-full" onClick={() => {

              if (socketCon.connected && socketCon.socket && socketCon.remoteConnected && socketCon.callMode === 'audio') {
                console.log('fired...')
                socketCon.socket.emit('request_to_switch_call_mode', {
                  callMode: 'video',
                  remoteId: data.docId
                })
                dispatch(updateCallMode({ callMode: 'video', socket: null }))

              }

              // toggleVideo()
            }}>
              <img src={videoButton} />
            </div>

            <div className="w-[30px] h-[30px] bg-white p-1 rounded-full flex justify-center place-items-center" onClick={async () => {

              socketCon.socket?.emit('call_ended', {
                remoteId: socketCon.remoteUserId
              })

              
 
            
              await cancelMediaStream()
              console.log('fired...')
              dispatch(updateCallInitialization({isCallInitiated:false}))
              dispatch(tearDownConnection({ tearDown: true, socket: null }))
              stopAndClearTimer()
              navigate(-1)

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
  )
}

export default VirtualConsultBody