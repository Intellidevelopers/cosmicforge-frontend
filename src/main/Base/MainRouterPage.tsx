import { useEffect, useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { validateUserSession } from "./service"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer, store } from "../store/initStore"
import { authenticateUser } from "../store/reducers/userReducers"
import io from 'socket.io-client'
import { connectSocket, tearDownConnection, updateCallMode, updateOfferOrAnswer, updatePeerConnectionInstance, updateRemoteConnection, updateRemoteStream, updateRingTone, updateUserCallingData } from "../store/reducers/userSocketReducer"
import { cacheDiagnosis } from "../store/reducers/diagnosisReducer"
import UserRTC from "../home/hook/UserRTC"
import NewCallUIPage from "../home/pages/chat/NewCallUIPage"




const MainRouterPage = () => {
    const navigate = useNavigate()
    const user = useSelector((state: RootReducer) => state.user)
    let userSocket = useSelector((state: RootReducer) => state.socket)
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const path = pathname.split('/')[2]









    const [isNewCall, setNewCall] = useState<boolean>(false)

    const [userCallingDetails, setUserCallingDetails] = useState<{
        name: string,
        profilePicture: string
    }>()

    useEffect(() => {

        if (userSocket.connected && userSocket.socket) {

            userSocket.socket.on('incoming-call', (data: {
                caller: { _id: string }, userCallingDetails: {
                    name: string,
                    profilePicture: string
                }, callMode: 'audio' | 'video'
            }) => {


                dispatch(updateCallMode({ callMode: data.callMode, socket: null }))
                dispatch(updateRingTone({ startPlayingRingTone: true, socket: null }))
                dispatch(updateUserCallingData({ remoteUserId: data.caller._id, socket: null, remoteCallerDetails: data.userCallingDetails }))
                setUserCallingDetails(data.userCallingDetails)
                setNewCall(true)
                //  navigate('/doctor/appointment/voice-call')
            })
        }
    }, [userSocket])


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


    const [localPeerConnection,] = useState<RTCPeerConnection>(() => {
        return new RTCPeerConnection({
            iceServers: rtcConfig.iceServers
        })
    })


    const [remotePeerConnection,] = useState<RTCPeerConnection>(() => {
        return new RTCPeerConnection({
            iceServers: rtcConfig.iceServers
        })
    })

    const { createAnswer } = UserRTC()

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

            socket.on('connect', () => {
                dispatch(connectSocket({ connected: true, socket }))
                dispatch(updatePeerConnectionInstance({ localPeerConnectionInstance: localPeerConnection, remotePeerConnectionInstance: remotePeerConnection, socket: null }))
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
        let userSocket = store.getState().socket
        let localPeerConnection = userSocket.localPeerConnectionInstance!!
        let remotePeerConnection = userSocket.remotePeerConnectionInstance!!

        if (localPeerConnection && remotePeerConnection) {
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

                        if (remotePeerConnection.localDescription && remotePeerConnection.remoteDescription) {
                            console.log('called')
                            remotePeerConnection.addIceCandidate(data.user_calling_ice_candidate)
                        }


                    })



                }



                if (userSocket.connected && userSocket.socket) {
                    userSocket.socket.on('remote_ice_candidate', (data: {
                        userToCall: string,
                        userCalling: string,
                        user_recieving_call_ice_candidate: RTCIceCandidate
                    }) => {

                        if (localPeerConnection.remoteDescription && localPeerConnection.localDescription) {
                            localPeerConnection.addIceCandidate(data.user_recieving_call_ice_candidate)
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



                        try {
                            await remotePeerConnection.setRemoteDescription(data.user_calling_offer)
                            dispatch(updatePeerConnectionInstance({ localPeerConnectionInstance: localPeerConnection, remotePeerConnectionInstance: remotePeerConnection, socket: null }))

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


                if (userSocket.connected && userSocket.socket) {

                    userSocket.socket.on('answer_received', async (data: {
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



                if (userSocket.connected && userSocket.socket) {

                    userSocket.socket.on('remote_answered_call', () => {

                        createAnswer({ userToCall: store.getState().user.data?._id!!, userCalling: store.getState().socket.remoteUserId!! })

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
                        store.dispatch(tearDownConnection())
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



    }, [userSocket.localPeerConnectionInstance])



    useEffect(() => {

        if (userSocket.tearDown) {



            console.log('tearin downn')
            dispatch(updatePeerConnectionInstance({ localPeerConnectionInstance: localPeerConnection, remotePeerConnectionInstance: remotePeerConnection, socket: null }))

        }

    }, [userSocket.tearDown])



    return <div className="w-full h-full relative">
        {
            isNewCall && <NewCallUIPage userCallingDetails={userCallingDetails!!} newCall={isNewCall} onDecline={() => {

                setNewCall(false)
            }} onAnswer={async () => {
                console.log('answered.')

                setNewCall(false)

            }} />
        }

        <Outlet />
    </div>


}





export default MainRouterPage