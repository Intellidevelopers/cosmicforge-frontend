import { useEffect, useState } from "react"
import { store } from "../../store/initStore"
import { updateUserLocalStream } from "../../store/reducers/userSocketReducer"

interface ModeProps {
    video:boolean,
    audio:boolean
}

const useGetMediaStream = () => {

     //const navigate = useNavigate()
    // const {state} = useLocation()
   
    const [mediaStream, setMediaStream] = useState<MediaStream | null>()

    const [mode,setMode] = useState<ModeProps>(()=>{
        return {
            video:true,
            audio:false
        }
    })

  


    const cancelMediaStream = async () => {

        if(mediaStream){
            mediaStream.getTracks().forEach(track => {
               track.stop()
            }) 

            setMediaStream(null)
           
            store.dispatch(updateUserLocalStream({localStream:null,socket:null}))
   

            
        }
       

       

       


    }

    const startStream = () => {

        if ( mediaStream) {
            
            store.dispatch(updateUserLocalStream({localStream:mediaStream,socket:null}))
            
        }
    }


    useEffect(() => {
        (async () => {
            try {
               if(!mediaStream){

                const localVideoStream = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: true,


                })
                
                setMediaStream(localVideoStream)
                store.dispatch(updateUserLocalStream({localStream:localVideoStream,socket:null}))
              

               }
                




            } catch (error: any) {
                alert(error.message)
                return null
            }
        })()

    }, [])

    
    const toggleMic = async () => {
        if (mediaStream) {

       if(mode.audio){

                const audioTrack = mediaStream?.getAudioTracks()[0]

                audioTrack.enabled = !audioTrack.enabled
                if (audioTrack.enabled) {


                store.dispatch(updateUserLocalStream({localStream:mediaStream,socket:null}))
                   
                } else {
                    
                        const cloneStream = mediaStream.clone()
                        cloneStream.getAudioTracks()[0].enabled = false
                        
                        store.dispatch(updateUserLocalStream({localStream:cloneStream,socket:null}))
                    
                }
              }


                    if(mode.video){

                        
                        const audioTrack = mediaStream?.getAudioTracks()[0]

                        audioTrack.enabled = !audioTrack.enabled
                        if (audioTrack.enabled) {
                           
                            store.dispatch(updateUserLocalStream({localStream:mediaStream,socket:null}))

                        } else {
                         
                      
                                const cloneStream = mediaStream.clone()
                                cloneStream.getAudioTracks()[0].enabled = false

                                store.dispatch(updateUserLocalStream({localStream:cloneStream,socket:null}))
                            
                        }

                    }

               
            




        }

    }

    const switchToAudio = async () => {

        if (mediaStream) {
 const videoTrack = mediaStream?.getVideoTracks()[0]
            

            videoTrack.enabled = !videoTrack.enabled

            if (videoTrack.enabled) {
                
                store.dispatch(updateUserLocalStream({localStream:mediaStream,socket:null}))
                     

                   
                    setMode({
                        video:false,
                        audio:true
                    })
              
            } else {
               
                    const cloneStream = mediaStream.clone()
                    cloneStream.getVideoTracks()[0].enabled = false
                    setMode({
                        video:false,
                        audio:true
                    })
                    store.dispatch(updateUserLocalStream({localStream:cloneStream,socket:null}))
                     

                }
            }
        }

    
        const toggleVideo = async () => {
            if (mediaStream) {
                const videoTrack = mediaStream?.getVideoTracks()[0]
                
                videoTrack.enabled = true
               
                        
                    setMode({
                        video:true,
                        audio:false
                    })
                    store.dispatch(updateUserLocalStream({localStream:mediaStream,socket:null}))
                         
                }
             /*   if (videoTrack.enabled) {
                    if (localVideoStreamRef.current) {
                        
                        setMode({
                            video:true,
                            audio:false
                        })
                        localVideoStreamRef.current.srcObject = mediaStream
                    }
                } else {
                    if (localVideoStreamRef.current) {
                        const cloneStream = mediaStream.clone()
                        cloneStream.getVideoTracks()[0].enabled = false
                        setMode({
                            video:true,
                            audio:false
                        })
                        localVideoStreamRef.current.srcObject = cloneStream
                    }
                }*/
            }

    



    


    return { mediaStream, cancelMediaStream, toggleMic, toggleVideo, startStream, switchToAudio,mode }
}


export default useGetMediaStream