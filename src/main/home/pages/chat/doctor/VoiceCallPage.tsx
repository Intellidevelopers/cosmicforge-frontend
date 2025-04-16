
import callButton from '../../../../../assets/icons/call-button.svg'
import videoButton from '../../../../../assets/icons/cosmic-video-call-button.svg'
import muteMic from '../../../../../assets/icons/cosmic-mute-mic.svg'
import messageIcon from '../../../../../assets/icons/cosmic-video-chat-icon.svg'
import attachButton from '../../../../../assets/icons/cosmic-attach-icon.svg'
//import micIcon from '../../../../../assets/icons/cosmic-chat-mic.svg'
import sendMessageIcon from '../../../../../assets/icons/cosmic-chat-send-message-icon.svg'
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer, store} from '../../../../store/initStore'
import useGetMediaStream from '../../../hook/useGetMediaStream'
import {  useLocation, useNavigate } from 'react-router-dom'
import { tearDownConnection, updateCallMode, updateOfferOrAnswer, updatePeerConnectionInstance, updateUserCallingData} from '../../../../store/reducers/userSocketReducer'

import DoctorChatMessage from '../../../component/chat/doctor/DoctorChatMessage'


const VoiceCallPage = () => {

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
    

    const localVideoStream: MutableRefObject<HTMLVideoElement | null> = useRef(null)
    //const localAudioStream: MutableRefObject<HTMLAudioElement | null> = useRef(null)
    const remoteVideoSteam: MutableRefObject<HTMLVideoElement | null> = useRef(null)


    const userSocketCon = useSelector((state: RootReducer) => state.socket)

    const user = useSelector((state: RootReducer) => state.user)

    const { getStream,cancelMediaStream, toggleVideo, toggleMic, switchToAudio } = useGetMediaStream()

    const [modeOfCall, setModeOfCall] = useState<'video' | 'audio'>(userSocketCon.callMode!!)

    const [requestingForModeChange, setRequestingForModeChange] = useState<boolean>(false)

    const [tempModeOfCall, setTempModeOfCall] = useState<'video' | 'audio' | null>(null)

    const [typedMessage, setTypeMessage] = useState<string>('')

    const messageScrollRef: MutableRefObject<HTMLDivElement | null> = useRef(null)


    const [callState, setCallState] = useState<'connecting' | 'connected' | 'failed to connect' | 'call ended' | null>('connecting')



    const navigate = useNavigate()
    const dispatch = useDispatch()




    const { state } = useLocation()

    const patientToCallDetails = state?.patientToCallDetails as {
        doctorImage: string,
        doctorName: string,
        lastMessageTime: string,
        numberOfUnreadMessages: number,
        messageType: 'receiving' | 'sending'
        messageRead: boolean,
        message: string | null,
        details: {
            patientId: string
            profilePicture?: string,
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
    } | null


    const [counter, setCounter] = useState<string>('00:00:00')
    const [counterId, setCounterId] = useState<NodeJS.Timeout>()

  


    const [patientMessage, setPatientMessage] = useState<{

        senderId: string,
        receiverId: string,
        messageType: string,
        message: string,
        timeStamp: string
    }[] | null
    >(null)


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


    useEffect(() => {
        console.log(userSocketCon?.remoteStream?.getTracks().length)
        if (remoteVideoSteam.current && userSocketCon.remoteStream && userSocketCon.locallyConnected) {
            
            remoteVideoSteam.current.srcObject = userSocketCon.remoteStream!!

        }

    }, [userSocketCon.remoteStream,userSocketCon.locallyConnected])




    useEffect(() => {


        if (userSocketCon.userChats && userSocketCon.userChats.length > 0) {





            const messagesFromServer: {
                doctorImage: string,
                doctorName: string,
                lastMessageTime: string,
                numberOfUnreadMessages: number,
                messageType: 'receiving' | 'sending'
                messageRead: boolean,
                message: string | null
                details: {
                    patientId: string
                    profilePicture?: string,
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



                },
                messages: {
                    senderId: string,
                    receiverId: string,
                    messageType: string,
                    message: string,
                    timeStamp: string
                }[]

            }[] | null = []



            userSocketCon.userChats?.map((data) => {

                if (data.messages) {

                    const senderProfile = data.userOneID.userId === user.data?._id ? data.userTwoID : data.userOneID

                    const mapChat = data.messages.map(data => {
                        return {
                            senderId: data.sender!!,
                            receiverId: data.reciever!!,
                            messageType: data.message!!,
                            message: data.message!!,
                            timeStamp: data.timeStamp!!

                        }
                    })


                    messagesFromServer.push({

                        doctorImage: senderProfile.userProfile.profilePicture,
                        doctorName: senderProfile.userName,
                        lastMessageTime: data.messages[data.messages.length - 1].timeStamp!!,
                        numberOfUnreadMessages: 8,
                        messageType: 'sending',
                        messageRead: false,
                        message: data.messages[data.messages.length - 1].message!!,
                        details: {
                            ...senderProfile.userProfile,
                            patientId: senderProfile.userId
                        },
                        messages: mapChat


                    })


                }

            })



            const userId = patientToCallDetails?.details.patientId ?? userSocketCon.remoteUserId

            const chat = messagesFromServer.find(data => {
                return userId === data.details.patientId
            })

            setPatientMessage(chat?.messages!!)

            setTimeout(() => {
                if (messageScrollRef.current) {

                    messageScrollRef.current.scrollTo({ top: messageScrollRef.current.scrollHeight, behavior: 'smooth' })
                }
            }, 1000)


        }


    }, [userSocketCon.userChats])





    useEffect(() => {

        

        console.log(userSocketCon.localStream)
        if (localVideoStream.current) {
            localVideoStream.current.srcObject = userSocketCon.localStream!!

        }


        if(!userSocketCon.localStream && userSocketCon.isCallInitiated){

        

            getStream().then(()=>{
      
              let socketCon = store.getState().socket!!
      
              let localPeerConnection = store.getState().socket.localPeerConnectionInstance
      
      
                socketCon.socket?.on('ringing',async()=>{
                  console.log('ringing.....')
                  
                
        
                 if(!socketCon.offerCreated && localPeerConnection && localPeerConnection.signalingState !== 'closed' ){
                  
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


        if ( userSocketCon.socket && userSocketCon.localStream && userSocketCon.isCallInitiated) {
        
                 (async()=>{
        
                  try {
                   if(userSocketCon.socket)
                    userSocketCon.socket.emit('calling', {
                      userToCall: patientToCallDetails?.details.patientId,
                      userCallingDetails: {
                        name: user.data?.lastName?.concat('').concat(user.data.fullName!!),
                        profilePicture: user.data?.profile?.profilePicture!!
                      },
                      callMode: userSocketCon.callMode
            
                    })
        
        
                       
        
                      dispatch(updatePeerConnectionInstance({localPeerConnectionInstance:new RTCPeerConnection(rtcConfig),remotePeerConnectionInstance:new RTCPeerConnection(rtcConfig)}))
                     
                    dispatch(updateUserCallingData({ remoteUserId: patientToCallDetails?.details.patientId, socket: null }))
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

        

     /*   if (userSocketCon && userSocketCon.socket && userSocketCon.localStream && userSocketCon.isCallInitiated) {
            (async()=>{
            
                      try {
                       if(userSocketCon.socket)
                        userSocketCon.socket.emit('calling', {
                            userToCall: patientToCallDetails?.details.patientId,
                            userCallingDetails: {
                                name: user.data?.lastName?.concat('').concat(user.data.fullName!!),
                                profilePicture: user.data?.profile?.profilePicture!!
                            },
                            callMode: userSocketCon.callMode
            
                        })
            
                        userSocketCon.localStream?.getTracks().forEach(tracks=>{
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
                          let  userToCall = patientToCallDetails?.details.patientId
                          let userCalling = user.data?._id 
            
                         if(userSocketCon.connected && userSocketCon.socket){
                            userSocketCon.socket.emit('create_offer',{
                              userToCall ,
                               userCalling,
                               user_calling_offer:offer
                            })
                       }
            
                           
                    dispatch(updateUserCallingData({ remoteUserId: patientToCallDetails?.details.patientId, socket: null }))
                        
                      } catch (error) {
                         console.log(error)
                      }
                    })()




                    try {

                        localPeerConnection.addEventListener('icecandidate', async (e: RTCPeerConnectionIceEvent) => {
              
                          if(userSocketCon.socket){
                            userSocketCon.socket.emit('local_ice_candidate', {
                              userToCall: userSocketCon.remoteUserId,
                              userCalling: user.data?._id,
                              user_calling_ice_candidate: e.candidate
                          })
                          }
                              
              
              
                        })
              
              
                        remotePeerConnection.addEventListener('icecandidate', async (e: RTCPeerConnectionIceEvent) => {
              
                            if (userSocketCon.connected && userSocketCon.socket) {
                                userSocketCon.socket.emit('remote_ice_candidate', {
                                    userToCall: user.data?._id,
                                    userCalling: userSocketCon.remoteUserId,
                                    user_recieving_call_ice_candidate: e.candidate
                                })
                            }
              
              
                        })
              
              
              
                        if (userSocketCon.connected && userSocketCon.socket) {
              
                          userSocketCon.socket.on('local_ice_candidate', (data: {
                                userToCall: string,
                                userCalling: string,
                                user_calling_ice_candidate: RTCIceCandidate
                            }) => {
              
                                if (remotePeerConnection.localDescription && remotePeerConnection.remoteDescription) {
                                    console.log('called')
                                    try {
                                        remotePeerConnection.addIceCandidate(data.user_calling_ice_candidate)
                                    } catch (error) {
              
                                    }
                                }
              
              
                            })
              
              
              
                        }
              
              
              
                        if (userSocketCon.connected && userSocketCon.socket) {
                            userSocketCon.socket.on('remote_ice_candidate', (data: {
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
              
              
              
              
                            if (userSocketCon.socket && localPeerConnection.connectionState === 'connected') {
                                  store.dispatch(updateLocalConection({locallyConnected:true}))
                                userSocketCon.socket?.emit('connected', {
                                    remoteId: userSocketCon.remoteUserId
                                })
              
                            } else if (userSocketCon.socket && localPeerConnection.connectionState === 'failed') {
                                userSocketCon?.socket.emit('failed_to_connect', { userId: userSocketCon.remoteUserId })
              
                            }
              
                        })
              
              
              
              
                        localPeerConnection.onicecandidate = (async () => {
                            //console.log(localPeerConnection.iceConnectionState)
                            // console.log(localPeerConnection.iceConnectionState )
                        })
              
                       if (userSocketCon.connected && userSocketCon.socket) {
                           userSocketCon.socket.on('offer_received', async (data: {
                                userToCall: string,
                                userCalling: string,
                                user_calling_offer: RTCSessionDescription
                            }) => {
              
              
              
                                try {
              
                                    if(remotePeerConnection.signalingState !== "closed" && !userSocketCon.offerCreated)
                                    await remotePeerConnection.setRemoteDescription(data.user_calling_offer)
              
              
                                   // dispatch(updatePeerConnectionInstance({ localPeerConnectionInstance: localPeerConnection, remotePeerConnectionInstance: remotePeerConnection, socket: null }))
              
                                    //   dispatch(updateRemoteDescription({remoteDescription:data.user_calling_offer,socket:null}))
                                    console.log(remotePeerConnection.remoteDescription)
                                    console.log('offer received')
                                    console.log(data.userCalling)
                                    console.log(user.data?._id)
              
                                    dispatch(updateOfferOrAnswer(({ offerReceived: true, socket: null })))
              
              
              
                                } catch (error) {
                                    console.log(error)
                                }
              
              
              
                            })
              
                        }
              
              
                        if (userSocketCon.connected && userSocketCon.socket) {
              
                            userSocketCon.socket.on('answer_received', async (data: {
                                userToCall: string,
                                userCalling: string,
                                user_receiving_call_answer: RTCSessionDescription
                            }) => {
                                // alert(JSON.stringify(data))
                                try {
                                    console.log('anser received')
                                    const localPeerConnectionInstance = store.getState().socket.localPeerConnectionInstance
                                    const remotePeerConnectionInstance = store.getState().socket.remotePeerConnectionInstance
              
                                    await localPeerConnectionInstance?.setRemoteDescription(data.user_receiving_call_answer)
                                    dispatch(updatePeerConnectionInstance({ localPeerConnectionInstance: localPeerConnectionInstance, remotePeerConnectionInstance: remotePeerConnectionInstance, socket: null }))
              
                                } catch (error: any) {
                                    console.log(error.message)
                                }
              
                            })
                        }
              
              
              
                        if (userSocketCon.connected && userSocketCon.socket) {
              
                            userSocketCon.socket.on('remote_answered_call', () => {
              
                             //   createAnswer({ userToCall: store.getState().user.data?._id!!, userCalling: store.getState().socket.remoteUserId!! })
              
                                console.log('call answer receiversll remote')
                            })
                        }
              
              
                        if (userSocketCon.connected && userSocketCon.socket) {
              
              
                           userSocketCon.socket.on('failed_to_connect', () => {
                                console.log('called failed')
              
                            })
                        }
              
              
              
                        if (userSocketCon.connected && userSocketCon.socket) {
                            userSocketCon.socket.on('on_call_end', () => {
                                console.log('tearing downn')
                                dispatch(tearDownConnection({ tearDown: true, socket: null }))
              
                            })
                        }
              
              
                        if (userSocketCon.connected && userSocketCon.socket) {
                            userSocketCon.socket.on('on_connected', () => {
                                store.dispatch(updateRemoteConnection({ remoteConnected: true, socket: null }))
                            })
                        }
              
              
              
              
              
              
              
              
                    } catch (error: any) {
              
                        // alert(error.message)
              
              
                    }
              


                     


        }*/





        if (userSocketCon.localStream && !userSocketCon.offerCreated) {



            

          //  createOffer({ userToCall: patientToCallDetails?.details.patientId!!, userCalling: user.data?._id!! })

           // dispatch(updateUserCallingData({ remoteUserId: patientToCallDetails?.details.patientId, socket: null }))

        } else {
            stopAndClearTimer()
            console.log('false alrdeay created')
        }




        if (userSocketCon.connected && userSocketCon.socket) {
            userSocketCon.socket.on('request_to_switch_call_mode', (data: { callMode: string }) => {
                setRequestingForModeChange(true)
                setTempModeOfCall(data.callMode as 'video' | 'audio')
            })
        }




        if (userSocketCon.connected && userSocketCon.socket) {
            userSocketCon.socket.on('failed_to_connect', () => {
                setCallState('failed to connect')
            })

            if (userSocketCon.connected && userSocketCon.socket) {
                userSocketCon.socket.on('on_call_ended', () => {
                    setCallState('call ended')
                    stopAndClearTimer()
                })
            }
        }



    }, [userSocketCon.localStream])


    useEffect(() => {
        if (userSocketCon.remoteConnected && userSocketCon.locallyConnected) {
            setCallState('connected')
            startTimer()
        }
    }, [userSocketCon.remoteConnected,userSocketCon.locallyConnected])








    return <div className={`w-full grid grid-cols-5 h-full  bg-cosmic-bg-chat-background`}>


        <div className={`${modeOfCall === 'video' ? 'block' : 'hidden'} h-full w-full md:col-span-3  col-span-5  relative`} >

            <div className="w-full h-full  grid grid-rows-5 relative">

                <div className='w-full h-[100vh] bg-black relative pt-6 '>

                    <div className=" h-[100px] m-6 w-full  flex flex-col justify-center place-items-center text-white font-bold absolute z-[200]">


                        <div className={`${requestingForModeChange ? 'flex' : 'hidden'}  w-full cursor-default  justify-center gap-2 flex-col place-items-center`}>

                            <p className='text-white text-[12px]' onClick={() => {

                            }}>{`${userSocketCon.remoteCallerDetails?.name} is requesting to switch to ${tempModeOfCall}`}  </p>

                            <div className=' flex  gap-6'>
                                <span className='bg-green-600 text-white   w-[80px] text-center p-2 rounded-md' onClick={() => {

                                    setRequestingForModeChange(false)
                                    setTempModeOfCall(null)
                                    dispatch(updateCallMode({ callMode: tempModeOfCall, socket: null }))
                                    setModeOfCall(tempModeOfCall!!)



                                }}>accept</span>


                                <span className='bg-red-600 p-2  w-[80px] text-white text-center rounded-md' onClick={() => {

                                }}>reject</span>
                            </div>

                        </div>

                        <div className='w-full flex flex-col place-items-center justify-center pt-8'>
                            <p className=''>{userSocketCon.remoteCallerDetails?.name ?? patientToCallDetails?.doctorName ?? 'User'}</p>



                            {
                                callState === 'failed to connect' ? <span className='italic text-red-600'>{callState}</span> : <span className={`${callState === 'connecting' ? 'text-yellow-500' : 'text-green-600'}`}>{callState}</span>}


                        </div>

                    </div>


                    <video ref={remoteVideoSteam} autoPlay className='  h-[100vh] w-full object-cover' />

                    <div className='w-[150px] md:w-[200px] h-[200px]  md:h-[250px] absolute bg-black top-[40%]  md:top-[35%] right-6 rounded-lg'>
                        <video ref={localVideoStream} autoPlay muted className='  h-full w-full object-cover rounded-lg' />

                    </div>


                    <div className="row-span-2 flex justify-center place-items-center h-full">

                        <div className="w-full absolute top-[70%] flex flex-col place-items-center justify-center p-1 gap-6 mt-2">

                            <p className="bg-cosmic-light-color-call w-fit text-white font-light p-1 rounded-md">{counter}</p>

                            <div className="bg-cosmic-light-color-call  flex p-2 gap-5">

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

                                    userSocketCon.socket?.emit('call_ended', {
                                        remoteId: userSocketCon.remoteUserId
                                    })



                                    await cancelMediaStream()
                                    console.log('fired...')
                                    dispatch(tearDownConnection({ tearDown: true, socket: null }))
                                    stopAndClearTimer()
                                    navigate("/doctor/home")


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

        </div>



        <div className={`${modeOfCall === 'audio' ? 'block' : 'hidden'} h-full w-full md:col-span-3  col-span-5 `} >

            <div className="w-full h-full  grid grid-rows-5">

                <div className="row-span-1 h-full flex flex-col  justify-center place-items-center text-white font-bold">
                    {userSocketCon.remoteCallerDetails?.name ? userSocketCon.remoteCallerDetails?.name : patientToCallDetails?.doctorName ?? patientToCallDetails?.doctorName}

                    {
                        callState === 'failed to connect' ? <span className='italic text-red-600 text-[12px]'>{callState}</span> : <span className={`${callState === 'connecting' ? 'text-yellow-500' : 'text-green-600'} ext-[12px] italic`}>{callState}</span>}

                </div>


                <div className="row-span-1 h-full flex flex-col gap-8 justify-center place-items-center">
                    <img src={userSocketCon.remoteCallerDetails?.profilePicture ?? patientToCallDetails?.details.profilePicture ?? '/'} className={'h-[150px] w-[150px] rounded-full bg-black'} />

                    <div className={`${requestingForModeChange ? 'flex' : 'hidden'}  w-full cursor-default  justify-center gap-2 flex-col place-items-center`}>
                        <p className='text-white text-[12px]'>{`${userSocketCon.remoteCallerDetails?.name} is requesting to switch to ${tempModeOfCall}`} </p>
                        <div className=' flex gap-6'>
                            <span className='bg-green-600 text-white   w-[80px] text-center p-2 rounded-md' onClick={() => {

                                setRequestingForModeChange(false)
                                setTempModeOfCall(null)
                                dispatch(updateCallMode({ callMode: tempModeOfCall, socket: null }))
                                setModeOfCall(tempModeOfCall!!)

                            }}>accept</span>
                            <span className='bg-red-600 p-2  w-[80px] text-white text-center rounded-md' onClick={() => {

                            }}>reject</span>
                        </div>
                    </div>


                    <div>

                        {
                            /**
                             * <video  ref={localVideoStream} autoPlay  muted className='bg-black' />
                            <video ref={remoteVideoSteam} autoPlay controls className='bg-black' />
                             */
                        }

                    </div>
                </div>

                <div className="row-span-2 flex flex-col justify-center place-items-center h-full">

                    <div className="w-full flex flex-col place-items-center justify-center p-1 gap-2 mt-2">

                        <p className="bg-cosmic-light-color-call w-fit text-white font-light p-1 rounded-md">{counter}</p>

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

                                userSocketCon.socket?.emit('call_ended', {
                                    remoteId: userSocketCon.remoteUserId
                                })

                                await cancelMediaStream()

                                dispatch(tearDownConnection({ tearDown: true, socket: null }))
                                stopAndClearTimer()
                                navigate("/doctor/home")


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
            <div className='grid grid-cols-2 bg-white p-1 gap-2  '>
                <div className='p-3'>
                    <p className='col-span-1 text-center w-full text-cosmic-primary-color'>Chat</p>
                    <p className='w-full h-[2px] bg-cosmic-primary-color mt-2 rounded-md'></p>
                </div>

                <div className='p-3'>
                    <p className='col-span-1 text-center w-full text-cosmic-primary-color'>Report</p>
                    <p className='w-full h-[2px] bg-cosmic-primary-color mt-2 rounded-md'></p>
                </div>


            </div>


            <div className=' bg-white '>
                <div className=" h-full flex justify-evenly place-items-center">
                    <img src={patientToCallDetails?.doctorImage ?? userSocketCon.remoteCallerDetails?.profilePicture} className='h-[40px] w-[40px] rounded-full' />
                    <p>{patientToCallDetails?.doctorName ?? userSocketCon.remoteCallerDetails?.profilePicture}</p>
                    <i className='fa fa-ellipsis-v' />
                </div>
            </div>


            <div className=' w-full h-dvh  bg-cosmic-bg-chat-background relative'>



                <div ref={messageScrollRef} className='  h-[67vh] overflow-y-auto'>
                    {
                        patientMessage && patientMessage.length > 0 && patientMessage.map((data, i) => (

                            <DoctorChatMessage key={i} message={data.message} messageType='' profilePicture={patientToCallDetails?.doctorImage!! ?? userSocketCon.remoteCallerDetails?.profilePicture} senderId={data.senderId} receiverId=' ' timeStamp={data.timeStamp} />
                        ))
                    }
                </div>



                <div className=" absolute bg-white w-full h-[33%] bottom-0 ">

                    <div className="grid grid-cols-3  ">
                        <div className="flex place-items-center  gap-3 col-span-2
     ">

                            <div className='bg-cosmic-primary-color flex justify-center place-items-center ms-2 w-[40px] h-[40px] rounded-full'>
                                <img src={attachButton} alt='attach' />
                            </div>

                            <textarea placeholder="enter text" value={typedMessage} className=" mt-2 w-full outline-none resize-none h-[60px] p-2 overflow-y-auto  " onChange={(e) => {
                                setTypeMessage(e.target.value)
                            }}></textarea>
                        </div>
                        <div className="w-full flex justify-end pe-6 gap-3 mt-2">


                            <div className='w-[40px]  h-[40px] flex justify-center place-items-center border rounded-full ' onClick={() => {

                                if (!typedMessage) {
                                    return
                                }


                                if (userSocketCon) {

                                    userSocketCon.socket?.emit('send_message', {

                                        senderId: user.data?._id!!,
                                        receiverId: patientToCallDetails?.details.patientId ?? userSocketCon.remoteUserId,
                                        messageType: 'text',
                                        message: typedMessage,
                                        timeStamp: new Date().toLocaleString('UTC', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: true
                                        })

                                    })
                                }

                                if (!patientMessage) {

                                    setPatientMessage([
                                        {
                                            senderId: user.data?._id!!,
                                            receiverId: patientToCallDetails?.details.patientId ?? userSocketCon.remoteUserId!!,
                                            messageType: 'text',
                                            message: typedMessage,
                                            timeStamp: new Date().toLocaleString('UTC', {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                hour12: true
                                            })

                                        }
                                    ])

                                    setTypeMessage('')

                                    setTimeout(() => {
                                        if (messageScrollRef.current) {

                                            messageScrollRef.current.scrollTo({ top: messageScrollRef.current.scrollHeight, behavior: 'smooth' })
                                        }
                                    }, 1000)

                                    return
                                }


                                setPatientMessage((prevMessage) => {


                                    prevMessage?.push({
                                        senderId: user.data?._id!!,
                                        receiverId: patientToCallDetails?.details.patientId ?? userSocketCon.remoteUserId!!,
                                        messageType: 'text',
                                        message: typedMessage,
                                        timeStamp: new Date().toLocaleString('UTC', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: true
                                        })
                                    })
                                    return [
                                        ...patientMessage,

                                    ]
                                })

                                setTypeMessage('')

                                setTimeout(() => {
                                    if (messageScrollRef.current) {

                                        messageScrollRef.current.scrollTo({ top: messageScrollRef.current.scrollHeight, behavior: 'smooth' })
                                    }
                                }, 1000)



                            }}>
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