
import docImage from '../../../../../assets/images/doctor-image.jpeg'
import callButton from '../../../../../assets/icons/call-button.svg'
import videoButton from '../../../../../assets/icons/cosmic-video-call-button.svg'
import muteMic from '../../../../../assets/icons/cosmic-mute-mic.svg'
import messageIcon from '../../../../../assets/icons/cosmic-video-chat-icon.svg'
import attachButton from '../../../../../assets/icons/cosmic-attach-icon.svg'
//import micIcon from '../../../../../assets/icons/cosmic-chat-mic.svg'
import sendMessageIcon from '../../../../../assets/icons/cosmic-chat-send-message-icon.svg'
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../../store/initStore'
import useGetMediaStream from '../../../hook/useGetMediaStream'
import { useNavigate } from 'react-router-dom'
import { tearDownConnection, updateCallMode } from '../../../../store/reducers/userSocketReducer'


const VoiceCallPage = () => {

    const localVideoStream: MutableRefObject<HTMLVideoElement | null> = useRef(null)
    //const localAudioStream: MutableRefObject<HTMLAudioElement | null> = useRef(null)
    const remoteVideoSteam: MutableRefObject<HTMLVideoElement | null> = useRef(null)


    const userSocketCon = useSelector((state: RootReducer) => state.socket)

    const { cancelMediaStream, toggleVideo, toggleMic, switchToAudio } = useGetMediaStream()

    const [modeOfCall,setModeOfCall] = useState<'video' | 'audio'>(userSocketCon.callMode!!)

    const [requestingForModeChange, setRequestingForModeChange] = useState<boolean>(true)

    const [tempModeOfCall,setTempModeOfCall] = useState<'video' | 'audio' | null>(null)


    const navigate = useNavigate()
    const dispatch = useDispatch()

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


    useEffect(() => {
        console.log(userSocketCon?.remoteStream?.getTracks().length)
        if (remoteVideoSteam.current && userSocketCon.remoteStream) {

            remoteVideoSteam.current.srcObject = userSocketCon.remoteStream!!
            startTimer()
        }

    }, [userSocketCon.remoteStream])




    useEffect(() => {

        console.log(userSocketCon.localStream)
        if (localVideoStream.current) {
            localVideoStream.current.srcObject = userSocketCon.localStream!!

        }


        if (userSocketCon.connected && userSocketCon.socket) {
            userSocketCon.socket.on('request_to_switch_call_mode', (data:{callMode:string}) => {
              setRequestingForModeChange(true)
              setTempModeOfCall(data.callMode as 'video' | 'audio' )
            })
        }

    }, [userSocketCon.localStream])








    return <div className={`w-full grid grid-cols-5 h-full  bg-cosmic-bg-chat-background`}>


        <div className={`${modeOfCall === 'video' ? 'block' : 'hidden'} h-full w-full md:col-span-3  col-span-5  relative`} >

            <div className="w-full h-full  grid grid-rows-5 relative">

                <div className='w-full h-[100vh] bg-black relative'>
                    <div className=" h-[100px] w-full  flex justify-center place-items-center text-white font-bold absolute">
                        {userSocketCon.remoteCallerDetails?.name ?? 'User'}
                    </div>
                    <video ref={remoteVideoSteam} autoPlay className='  h-[100vh] w-full object-cover' />

                    <div className='w-[150px] md:w-[200px] h-[200px]  md:h-[250px] absolute bg-black top-[40%]  md:top-[35%] right-6 rounded-lg'>
                        <video ref={localVideoStream} autoPlay muted className='  h-full w-full object-cover rounded-lg' />

                    </div>
                    <div className={`${requestingForModeChange ? 'flex' : 'hidden'}  w-full cursor-default  justify-center gap-2 flex-col place-items-center`}>
                        <p className='text-white text-[14px]'>{`${userSocketCon.remoteCallerDetails?.name} is requesting to switch to ${tempModeOfCall}`} </p>
                        <div className=' flex gap-6'>
                            <span className='bg-green-600 text-white   w-[80px] text-center p-2 rounded-md' onClick={()=>{

                               dispatch(updateCallMode({callMode:tempModeOfCall,socket:null}))
                               setModeOfCall(tempModeOfCall!!)

                            }}>accept</span>
                            <span className='bg-red-600 p-2  w-[80px] text-white text-center rounded-md' onClick={()=>{

                            }}>reject</span>
                        </div>
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
                                    cancelMediaStream().then(() => {
                                        dispatch(tearDownConnection())
                                        stopAndClearTimer()
                                        navigate(-1)
                                    })


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

                <div className="row-span-1 h-full flex justify-center place-items-center text-white font-bold">
                    {userSocketCon.remoteCallerDetails?.name ?? 'User'}
                </div>
                <div className="row-span-2 h-full flex flex-col gap-8 justify-center place-items-center">
                    <img src={userSocketCon.remoteCallerDetails?.profilePicture ?? '/'} className={'h-[150px] w-[150px] rounded-full bg-black'} />

                    <div className={`${requestingForModeChange ? 'flex' : 'hidden'}  w-full cursor-default  justify-center gap-2 flex-col place-items-center`}>
                        <p className='text-white text-[14px]'>{`${userSocketCon.remoteCallerDetails?.name} is requesting to switch to ${tempModeOfCall}`} </p>
                        <div className=' flex gap-6'>
                            <span className='bg-green-600 text-white   w-[80px] text-center p-2 rounded-md' onClick={()=>{

                               dispatch(updateCallMode({callMode:tempModeOfCall,socket:null}))
                               setModeOfCall(tempModeOfCall!!)

                            }}>accept</span>
                            <span className='bg-red-600 p-2  w-[80px] text-white text-center rounded-md' onClick={()=>{

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
                                cancelMediaStream().then(() => {
                                    dispatch(tearDownConnection())
                                    stopAndClearTimer()
                                    navigate(-1)
                                })


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


            <div className=' bg-white'>
                <div className=" h-full flex justify-evenly place-items-center">
                    <img src={docImage} className='h-[40px] w-[40px] rounded-full' />
                    <p>Jennifer Williams</p>
                    <i className='fa fa-ellipsis-v' />
                </div>
            </div>

            <div className=' w-full h-full  bg-cosmic-bg-chat-background relative'>



                <div className='  h-full overflow-y-auto'>
                    sss
                </div>



                <div className=" absolute bg-white w-full h-[33%] bottom-0 ">

                    <div className="grid grid-cols-3  ">
                        <div className="flex place-items-center  gap-3 col-span-2
     ">

                            <div className='bg-cosmic-primary-color flex justify-center place-items-center ms-2 w-[40px] h-[40px] rounded-full'>
                                <img src={attachButton} alt='attach' />
                            </div>

                            <textarea placeholder="enter text" className=" w-full outline-none resize-none h-[60px] p-2 overflow-y-auto  "></textarea>
                        </div>
                        <div className="w-full flex justify-end pe-6 gap-3 mt-2">


                            <div className='w-[40px]  h-[40px] flex justify-center place-items-center border rounded-full '>
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