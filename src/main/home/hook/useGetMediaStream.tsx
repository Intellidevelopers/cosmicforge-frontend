import { MutableRefObject, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"


const useGetMediaStream = (localVideoStreamRef: MutableRefObject<HTMLVideoElement | null>, localAudioStreamRef: MutableRefObject<HTMLAudioElement | null>) => {

     const navigate = useNavigate()
     const {state} = useLocation()
    interface ModeProps {
        video:boolean,
        audio:boolean
    }
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
            if (localVideoStreamRef.current) {
                localVideoStreamRef.current.srcObject = null
            }
            if(localAudioStreamRef.current){
                localAudioStreamRef.current.srcObject = null
            }

   

            
        }
       

       

       


    }

    const startStream = () => {

        if (localVideoStreamRef.current && mediaStream) {
            localVideoStreamRef.current.srcObject = mediaStream
        }
    }


    useEffect(() => {
        (async () => {
            try {

                const localVideoStream = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: true,


                })
                setMediaStream(localVideoStream)

                if (localVideoStreamRef.current) {
                    localVideoStreamRef.current.srcObject = localVideoStream
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
                    if (localAudioStreamRef.current) {

                        localAudioStreamRef.current.srcObject = mediaStream
                       

                    }
                } else {
                    if (localAudioStreamRef.current) {
                        const cloneStream = mediaStream.clone()
                        cloneStream.getAudioTracks()[0].enabled = false
                        localAudioStreamRef.current.srcObject = cloneStream
                    }
                }
              }


                    if(mode.video){

                        
                        const audioTrack = mediaStream?.getAudioTracks()[0]

                        audioTrack.enabled = !audioTrack.enabled
                        if (audioTrack.enabled) {
                           



                            if (localVideoStreamRef.current) {
        
                                localVideoStreamRef.current.srcObject = mediaStream
        
                            }

                        } else {
                         
                            if (localVideoStreamRef.current) {
                                const cloneStream = mediaStream.clone()
                                cloneStream.getAudioTracks()[0].enabled = false
                                localVideoStreamRef.current.srcObject = cloneStream
                            }
                        }

                    }

               
            




        }

    }

    const switchToAudio = async () => {

        if (mediaStream) {
 const videoTrack = mediaStream?.getVideoTracks()[0]
            

            videoTrack.enabled = !videoTrack.enabled

            if (videoTrack.enabled) {
                if (localVideoStreamRef.current) {

                    localVideoStreamRef.current.srcObject = mediaStream
                    setMode({
                        video:false,
                        audio:true
                    })
                }
            } else {
                if (localAudioStreamRef.current) {
                    const cloneStream = mediaStream.clone()
                    cloneStream.getVideoTracks()[0].enabled = false
                    setMode({
                        video:false,
                        audio:true
                    })
                    localAudioStreamRef.current.srcObject = cloneStream

                }
            }
        }

    }

    const toggleVideo = async () => {
        if (mediaStream) {
            const videoTrack = mediaStream?.getVideoTracks()[0]
            
            videoTrack.enabled = true
            if (localVideoStreamRef.current) {
                    
                setMode({
                    video:true,
                    audio:false
                })
                localVideoStreamRef.current.srcObject = mediaStream
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

    }


    return { mediaStream, cancelMediaStream, toggleMic, toggleVideo, startStream, switchToAudio,mode }
}


export default useGetMediaStream