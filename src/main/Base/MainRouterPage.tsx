import { MutableRefObject, useEffect, useMemo, useRef, useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { getAppointments, getUserChats, getWalletBalance, validateUserSession } from "./service"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer, store } from "../store/initStore"
import { authenticateUser } from "../store/reducers/userReducers"
import io from 'socket.io-client'
import { connectSocket, tearDownConnection, updateCallAnswered, updateCallMode, updateIncomingCall, updateLocalConection, updateOfferOrAnswer, updatePeerConnectionInstance, updateRemoteConnection, updateRemoteStream, updateRingTone, updateUserCallingData, updateUserChat } from "../store/reducers/userSocketReducer"
import { cacheDiagnosis } from "../store/reducers/diagnosisReducer"

import NewCallUIPage from "../home/pages/chat/NewCallUIPage"
import useGetMediaStream from "../home/hook/useGetMediaStream"
import ringtone from '../../assets/call/ringtone4.mp3'
import { updateAppointments } from "../store/reducers/doctorAppointmentsReducer"
import { updateDoctorWallet } from "../store/reducers/doctorWalletReducer"




const MainRouterPage = () => {
    const navigate = useNavigate()
    const user = useSelector((state: RootReducer) => state.user)
    let userSocket = useSelector((state: RootReducer) => state.socket)
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const path = pathname.split('/')[2]


    const { getStream } = useGetMediaStream()

    const audioRef: MutableRefObject<HTMLAudioElement | null> = useRef(null)

   
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
    





    const [isNewCall, setNewCall] = useState<boolean>(userSocket.newInComingCall!!)

    const [userCallingDetails, setUserCallingDetails] = useState<{
        name: string,
        profilePicture: string
    }>()





     useMemo(() => {
 
 
         if(!isNewCall &&  userSocket.newInComingCall!! ){
 
      
 
             setNewCall(userSocket.newInComingCall!!)
            // if(!userSocket.localStream)
            // getStream()
             
         }
 
         
 
       
 
     }, [userSocket.newInComingCall])
 
 



  










    useEffect(() => {
        /* setTimeout(()=>{
         // navigate("/patient/calendar")
         },5000)*/

        switch (path) {
            case 'homem':

                (async () => {
                    try {


                        const result = await validateUserSession({ isKeepMeSignedIn: user.keepMeSignedIn!!, token: user.data?.token!! })

                        if (result.status === 200) {
                            if (result.token) {
                                dispatch(authenticateUser({
                                    data: {
                                        ...user.data,
                                        token: result.token
                                    }
                                }))
                            }
                            return
                        }
                        dispatch(authenticateUser({ isAunthenticated: false, data: {}, keepMeSignedIn: false, message: "sessionExpired" }))
                        navigate("/patient/account", {
                            replace: true,

                        })

                    } catch (error) {

                        //dispatch(authenticateUser({isAunthenticated:false,data:{},keepMeSignedIn:false,message:"sessionExpired"}))

                        navigate("/patient/account", {
                            replace: true,

                        })
                    }
                })()


        }





        if (user.isAunthenticated && !userSocket.connected) {
            const socket = io(`${import.meta.env.VITE_BASE_Socket_URL}`, {
                auth: {
                    token: user.data?.token
                }
            })

            socket.on('connect', async () => {

                if (!store.getState().socket.connected) {
                    store.dispatch(connectSocket({ connected: true, socket }))
                    try {


                        const result = await getUserChats(user.data?.token!!)
                        console.log(result)
                        if (result.status === 200) {
                            store.dispatch(updateUserChat({ userChats: result.data }))
                        }



                    } catch (error) {
                        const result = await getUserChats(user.data?.token!!)
                        console.log(result)
                        if (result.status === 200) {
                            store.dispatch(updateUserChat({ userChats: result.data }))
                        }
                    }


                    try {

                   const result = await     getWalletBalance(user.data?.token!!)

                       if(result.status=== 200){

                        

                        store.dispatch(updateDoctorWallet({wallet:result.data}))
                       }

                       console.log(result)
                        
                    } catch (error) {
                        
                    }

                }


             

                if(user && user.data){

                    const result = await getAppointments(user.data.token!!)

                    if(result.status === 200 && result.data){
                        console.log(result.data)
                        store.dispatch(updateAppointments({appointments:result.data.appointments,totalAppointments:result.data.totalAppointments}))
                    }else{
                        console.log(result.error)
                    }
                   


                }





            })


            socket.on('update_chat', async (d: {
                chatID: string;
                userOneID: {
                    userId: string;
                    userName: string;
                    userProfile: {
                        profilePicture: string;
                        professionalTitle?: string;
                        specialization?: string;
                        currentClinic?: string;
                        department?: string;
                        bio?: string;
                        pricing?: string;
                        workAddress?: string;
                        experience?: {
                            hospitalName?: string;
                            NoOfPatientTreated?: string;
                            specializationAndDepartment?: string;
                            date?: string;
                        };
                        workTime?: {
                            day?: string;
                            time?: string;
                        };
                    };
                };
                userTwoID: {
                    userId: string;
                    userName: string;
                    userProfile: {
                        profilePicture: string;
                        professionalTitle?: string;
                        specialization?: string;
                        currentClinic?: string;
                        department?: string;
                        bio?: string;
                        pricing?: string;
                        workAddress?: string;
                        experience?: {
                            hospitalName?: string;
                            NoOfPatientTreated?: string;
                            specializationAndDepartment?: string;
                            date?: string;
                        };
                        workTime?: {
                            day?: string;
                            time?: string;
                        };
                    };
                };
                messages: [{
                    messageType?: string;
                    message?: string;
                    timeStamp?: string;
                    sender?: string;
                    reciever?: string;
                }] | null;
            }) => {


                let chats = store.getState().socket.userChats?.filter(data => {
                    return data.chatID !== d.chatID
                }) as [{

                    chatID: string,
                    userOneID: {
                        userId: string,
                        userName: string,
                        userProfile: {

                            profilePicture: string,
                            professionalTitle?: string,
                            specialization?: string,
                            currentClinic?: string,
                            department?: string,
                            bio?: string,
                            pricing?: string,

                            workAddress?: string,
                            experience?: {

                                hospitalName?: string,
                                NoOfPatientTreated?: string,
                                specializationAndDepartment?: string,
                                date?: string
                            },
                            workTime?: {
                                day?: string,
                                time?: string
                            }
                        }
                    },
                    userTwoID: {
                        userId: string,
                        userName: string,
                        userProfile: {

                            profilePicture: string,
                            professionalTitle?: string,
                            specialization?: string,
                            currentClinic?: string,
                            department?: string,
                            bio?: string,
                            pricing?: string,

                            workAddress?: string,
                            experience?: {

                                hospitalName?: string,
                                NoOfPatientTreated?: string,
                                specializationAndDepartment?: string,
                                date?: string
                            },
                            workTime?: {
                                day?: string,
                                time?: string
                            }
                        }
                    }

                    messages: [{
                        messageType?: string,
                        message?: string,
                        timeStamp?: string,
                        sender?: string,
                        reciever?: string

                    }] | null

                }] | null


                chats?.unshift(d)
                store.dispatch(updateUserChat({ userChats: chats, socket: null }))
            })





            socket.on('incoming-call', (data: {
                caller: { _id: string }, userCallingDetails: {
                    name: string,
                    profilePicture: string
                }, callMode: 'audio' | 'video'
            }) => {

               

                
                getStream().then(()=>{
                    store.dispatch(updateCallMode({ callMode: data.callMode }))
                store.dispatch(updateRingTone({ startPlayingRingTone: true, }))
                store.dispatch(updateUserCallingData({ remoteUserId: data.caller._id, remoteCallerDetails: data.userCallingDetails }))
                setUserCallingDetails(data.userCallingDetails)


                dispatch(updateIncomingCall({ newInComingCall: true }))

                dispatch(updatePeerConnectionInstance({localPeerConnectionInstance:new RTCPeerConnection(rtcConfig),remotePeerConnectionInstance:new RTCPeerConnection(rtcConfig)}))
                })
                  
               



               /* getStream().then(async() => {


                    


                    const userSocket = store.getState().socket

                  

                    if(userSocket.socket){
                        store.getState().socket.socket?.emit('ringing',{
                            remoteId:data.caller._id
                         })

                        
                    }
                        
        
                      

                


                   




                })*/
               

                //  navigate('/doctor/appointment/voice-call')
            })




            socket.on('all-diagnosis', (data: any) => {

                dispatch(cacheDiagnosis({ diagnosisChat: data }))
            })

            socket.on('disconnect', () => {
                dispatch(connectSocket({ connected: false, socket: null }))
            })


            socket.on('connect_error', (_: any) => {
                //alert(e)
            })




       
        }





    }, [])







          useEffect(() => {
          console.log('fired')

          let localPeerConnection = store.getState().socket.localPeerConnectionInstance
          let remotePeerConnection = store.getState().socket.remotePeerConnectionInstance

         


  
  
          
  
  
  
          if (userSocket.connected && store.getState().user.isAunthenticated && localPeerConnection && localPeerConnection?.signalingState !== 'closed' && localPeerConnection.iceConnectionState !== 'closed' && remotePeerConnection && remotePeerConnection?.signalingState !== 'closed' && remotePeerConnection.iceConnectionState !== 'closed') {
              console.log('active')
  
              try {
  
                  localPeerConnection.addEventListener('icecandidate', async (e: RTCPeerConnectionIceEvent) => {
  
                      if (userSocket.connected && userSocket.socket) {
                          userSocket.socket.emit('local_ice_candidate', {
                              userToCall: store.getState().socket.remoteUserId,
                              userCalling: store.getState().user.data?._id,
                              user_calling_ice_candidate: e.candidate
                          })
                      }
  
  
                  })







  
                  remotePeerConnection.addEventListener('icecandidate', async (e: RTCPeerConnectionIceEvent) => {
  
                      if (userSocket.connected && userSocket.socket) {
                          userSocket.socket.emit('remote_ice_candidate', {
                              userToCall: store.getState().user.data?._id,
                              userCalling: store.getState().socket.remoteUserId,
                              user_recieving_call_ice_candidate: e.candidate
                          })
                      }
  
  
                  })
  


  
                  if (userSocket.connected && userSocket.socket) {
  
                      userSocket.socket.on('local_ice_candidate', (data: {
                          userToCall: string,
                          userCalling: string,
                          user_calling_ice_candidate: RTCIceCandidate
                      }) => {
  
                          if (remotePeerConnection.localDescription && remotePeerConnection.remoteDescription && remotePeerConnection.signalingState !== 'closed') {
                              console.log('called')
                              try {
                                  remotePeerConnection.addIceCandidate(data.user_calling_ice_candidate)
                              } catch (error) {
  
                              }
                          }
  
  
                      })
  
  
  
                  }
  



  
  
                  if (userSocket.connected && userSocket.socket) {
                      userSocket.socket.on('remote_ice_candidate', (data: {
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
  
  
                      if (localPeerConnection.connectionState === 'connected') {
  
                          store.dispatch(updateLocalConection({locallyConnected:true}))
                          store.getState().socket.socket?.emit('connected', {
                              remoteId: store.getState().socket.remoteUserId
                          })
  
                      } else if (localPeerConnection.connectionState === 'failed') {
                          store.getState().socket.socket?.emit('failed_to_connect', { userId: store.getState().socket.remoteUserId })
  
                      }
  
                  })
  
  
  
  
                  localPeerConnection.onicecandidate = (async () => {
                      //console.log(localPeerConnection.iceConnectionState)
                      // console.log(localPeerConnection.iceConnectionState )
                  })
  

                  if (userSocket.connected && userSocket.socket) {
                      userSocket.socket.on('offer_received', async (data: {
                          userToCall: string,
                          userCalling: string,
                          user_calling_offer: RTCSessionDescription
                      }) => {
  
  
  
                         if(remotePeerConnection && remotePeerConnection.signalingState !== "closed"){

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

               const userSocket = store.getState().socket
               
               if(userSocket.connected && userSocket.socket){
                   console.log('ansed called...')

                  userSocket.socket.emit('create_answer',{
                      userToCall:data.userToCall,
                      userCalling:data.userCalling,
                      user_receiving_call_answer:answer
                   })
              }
    
    
                            } catch (error) {
                                console.log(error)
                            }
                         }
  
  
  
                      })
  
                  }
  
  
                  if (userSocket.connected && userSocket.socket) {
  
                      userSocket.socket.on('answer_received', async (data: {
                          userToCall: string,
                          userCalling: string,
                          user_receiving_call_answer: RTCSessionDescription
                      }) => {
                          // alert(JSON.stringify(data))
                          const localPeerConnectionInstance = store.getState().socket.localPeerConnectionInstance
                        const remotePeerConnectionInstance = store.getState().socket.remotePeerConnectionInstance
    
                         
                          if(localPeerConnection && localPeerConnection.signalingState !== "closed"){
                            try {
                                console.log('anser received')
                                
                                await localPeerConnectionInstance?.setRemoteDescription(data.user_receiving_call_answer)
                                dispatch(updatePeerConnectionInstance({ localPeerConnectionInstance: localPeerConnectionInstance, remotePeerConnectionInstance: remotePeerConnectionInstance, socket: null }))
    
                            } catch (error: any) {
                                console.log(error.message)
                            }
                          }
  
                      })
                  }
  
  
  
                  if (userSocket.connected && userSocket.socket) {
  
                      userSocket.socket.on('remote_answered_call', () => {
  
                       //   createAnswer({ userToCall: store.getState().user.data?._id!!, userCalling: store.getState().socket.remoteUserId!! })
                       store.dispatch(updateCallAnswered({onCallAnswered:true}))
                          console.log('call answer receiversll remote')
                      })
                  }
  


  
                  if (userSocket.connected && userSocket.socket) {
  
  
                      userSocket.socket.on('failed_to_connect', () => {
                          console.log('called failed')
  
                      })
                  }
  
  
  
                  if (userSocket.connected && userSocket.socket) {
                      userSocket.socket.on('on_call_end', () => {
                          console.log('tearing downn')
                          dispatch(tearDownConnection({ tearDown: true, socket: null }))
  
                      })
                  }
  
  
                  if (userSocket.connected && userSocket.socket) {
                      userSocket.socket.on('on_connected', () => {
                          store.dispatch(updateRemoteConnection({ remoteConnected: true, socket: null }))
                      })
                  }
  
  
  
  
  
  
  
  
              } catch (error: any) {
  
                  // alert(error.message)
  
  
              }
          }
  
          return () => {
  
  
  
              console.log('dddjjj')
          }
  
  
      }, [userSocket.localPeerConnectionInstance,userSocket.remotePeerConnectionInstance])





      
    useEffect(() => {

        if (userSocket.tearDown) {

            console.log('tearin downn')
if(store.getState().socket.localStream){
    dispatch(tearDownConnection({ tearDown: false, }))
   
}

          

        }

    }, [userSocket.tearDown])



    useEffect(()=>{
        if (userSocket.connected && userSocket.socket && userSocket.localStream) {
         
            if (audioRef.current && audioRef.current.currentTime === 0) {
               audioRef.current.loop = true
               audioRef.current.play()
               
   
               
              
          
            }
        }
    },[store.getState().socket.newInComingCall])


    useEffect(() => {

     

        if (!userSocket.startPlayingRingTone) {
  
           if (audioRef.current) {
              
              if (audioRef.current) {
  
                 audioRef.current.load()
              audioRef.current.pause()
             
                 }
           }
        }
     }, [userSocket.startPlayingRingTone])

     useEffect(()=>{
       if(store.getState().socket.localPeerConnectionInstance){
      

            (async ()=>{
                const userSocket = store.getState().socket
                if(userSocket.socket && userSocket.newInComingCall){
                userSocket.socket.emit('ringing',{
                    remoteId:userSocket.remoteUserId
                   })
    
                }


                const localPeerConnection = store.getState().socket.localPeerConnectionInstance
                   
                console.log('create offer.....')
               if(!userSocket.offerCreated && localPeerConnection && localPeerConnection.signalingState !== 'closed' && !userSocket.offerCreated && userSocket.newInComingCall ){
                
                    console.log('called ')
          
                    
                    userSocket.localStream?.getTracks().forEach(tracks=>{
                      
                      localPeerConnection.addTrack(tracks, userSocket.localStream!!)
                      })
                  
          
                        const offer = await  localPeerConnection.createOffer({
                          iceRestart:true,
                          offerToReceiveAudio:true,
                          offerToReceiveVideo:true
                       })
                  
                       await localPeerConnection.setLocalDescription(offer)
                      // dispatch(updateLocalDescription({localDescription:offer as RTCSessionDescription,socket:null}))
                         dispatch(updateOfferOrAnswer({offerCreated:true,socket:null}))
                         //dispatch(updatePeerConnectionInstance({localPeerConnectionInstance:localPeerConnection}))
                         
                       
        
        
                         let  userToCall = store.getState().socket.remoteUserId
                          let userCalling = store.getState().user.data?._id
                   
                         if(userSocket.connected && userSocket.socket){
                            userSocket.socket.emit('create_offer',{
                              userToCall ,
                               userCalling,
                               user_calling_offer:offer
                            })
                       }
                   
            
                 
            
                    }
            })()
        
          


       }

     },[store.getState().socket.localPeerConnectionInstance])





    return <div className="w-full h-full relative">
         <audio src={ringtone} ref={audioRef} />
        {
              isNewCall &&  <NewCallUIPage userCallingDetails={userCallingDetails!!} newCall={userSocket.newInComingCall!!} onDecline={() => {
                store.dispatch(updateIncomingCall({ newInComingCall: false }))
            }} onAnswer={() => {
               
                store.dispatch(updateIncomingCall({ newInComingCall: false }))

            }} />
        }

        <Outlet />
    </div>


}





export default MainRouterPage