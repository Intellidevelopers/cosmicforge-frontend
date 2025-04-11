
import videoIcon from '../../../../assets/icons/cosmic-chat-video-icon.svg'
import callIcon from '../../../../assets/icons/cosmic-chat-call-icon.svg'
import attachButton from '../../../../assets/icons/cosmic-attach-icon.svg'
import micIcon from '../../../../assets/icons/cosmic-chat-mic.svg'
import sendMessageIcon from '../../../../assets/icons/cosmic-chat-send-message-icon.svg'
import ChatMessagesBody from '../../component/chat/ChatMessagesBody'
import { useLocation, useNavigate } from 'react-router-dom'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store/initStore'
import { updateCallInitialization, updateCallMode } from '../../../store/reducers/userSocketReducer'




const ChatPage = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const messageScrollRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

    const { state } = useLocation()

    const doctorDetails = state!! as {
        doctorImage: string,
        doctorName: string,
        doctorSpecialization: string,
        clinic: string,
        address: string,
        title: string,
        department: string,
        docId: string,

    }



    const user = useSelector((state: RootReducer) => state.user)

    const userSocket = useSelector((state: RootReducer) => state.socket)

    const [typedMessage, setTypeMessage] = useState<string>('')



    const [messages, setMessages] = useState<{
        senderId: string,
        receiverId: string,
        messageType: string,
        message: string,
        timeStamp: string
    }[] | null>(() => {


        return null
    })




    useEffect(() => {

        if (userSocket.userChats && userSocket.userChats.length > 0) {
            const specificChat = userSocket.userChats.find((data) => {
                return data.chatID === user.data?._id?.concat(doctorDetails.docId) || data.chatID === doctorDetails.docId?.concat(user.data?._id!!)
            })

            if (specificChat) {
                const messagesFromServer = specificChat.messages?.map((data) => {
                    return {
                        senderId: data.sender,
                        receiverId: data.reciever,
                        messageType: data.message,
                        message: data.message,
                        timeStamp: data.timeStamp

                    }
                })

                setMessages(messagesFromServer as {
                    senderId: string,
                    receiverId: string,
                    messageType: string,
                    message: string,
                    timeStamp: string
                }[] | null)

                setTimeout(() => {
                    if (messageScrollRef.current) {

                        messageScrollRef.current.scrollTo({ top: messageScrollRef.current.scrollHeight, behavior: 'smooth' })
                    }
                }, 1000)
            }


            if (specificChat && specificChat.messages && messages && specificChat.messages.length > messages.length) {


                const mapChat = specificChat.messages.map(data => {
                    return {
                        senderId: data.sender!!,
                        receiverId: data.reciever!!,
                        messageType: data.message!!,
                        message: data.message!!,
                        timeStamp: data.timeStamp!!

                    }
                })

                setMessages(mapChat)

                setTimeout(() => {
                    if (messageScrollRef.current) {

                        messageScrollRef.current.scrollTo({ top: messageScrollRef.current.scrollHeight, behavior: 'smooth' })
                    }
                }, 1000)


            }


        }

    }, [userSocket.userChats])


    return <div className="w-full overflow-y-hidden cursor-default  ">



        <div className=" place-items-center md:gap-3  flex  bg-white h-[80px] md:m-2 md:ps-4 " >
            <div className='w-fit  justify-center place-items-center gap-2 hidden md:flex  hover:text-cosmic-primary-color' onClick={() => {
                navigate(-1)
            }}>
                <i className="fa fa-angle-left fa-xl " />
                <p>back</p>
            </div>


            <div className="w-fit ps-2 md:ms-7  md:p-3 flex justify-center place-items-center gap-2 relative ">
                <img className='w-[40px] h-[40px] rounded-full' alt='card-profile' src={doctorDetails?.doctorImage} />
                <div className='w-full   flex flex-col justify-center  gap-1 relative'>
                    <p className="w-[180px] md:w-full overflow-hidden text-nowrap text-ellipsis text-[14px] md:text-[16px] font-bold ">{doctorDetails?.doctorName}</p>
                    <p className="w-[180px] md:w-full overflow-hidden text-nowrap text-ellipsis  text-[14px] md:text-[16px] font-light">{doctorDetails?.department}</p>


                </div>
            </div>






            <div className='flex gap-3 w-fit absolute right-2 md:me-3'>

                <img src={callIcon} className='w-[24px] h-[40px] ' alt='call' onClick={() => {
                    dispatch(updateCallMode({ callMode: 'audio', socket: null }))
                    dispatch(updateCallInitialization({ isCallInitiated: true, socket: null }))
                    navigate('/patient/find-a-specialist/consult', {
                        state: {
                            doctorImage: doctorDetails.doctorImage,
                            doctorName: doctorDetails.doctorName,
                            doctorSpecialization: doctorDetails.doctorSpecialization,
                            clinic: doctorDetails.clinic,
                            address: doctorDetails.address,
                            title: 'Virtual Consult',
                            department: doctorDetails.department,
                            docId: doctorDetails.docId
                        }
                    })

                }} />
                <img className='w-[24px] h-[40px]' src={videoIcon} alt='video' onClick={() => {
                    dispatch(updateCallInitialization({ isCallInitiated: true, socket: null }))
                    dispatch(updateCallMode({ callMode: 'video', socket: null }))

                    navigate('/patient/find-a-specialist/consult', {
                        state: {
                            doctorImage: doctorDetails.doctorImage,
                            doctorName: doctorDetails.doctorName,
                            doctorSpecialization: doctorDetails.doctorSpecialization,
                            clinic: doctorDetails.clinic,
                            address: doctorDetails.address,
                            title: 'Virtual Consult',
                            department: doctorDetails.department,
                            docId: doctorDetails.docId
                        }
                    })
                }} />

            </div>

        </div>



        <div ref={messageScrollRef} className=' w-full h-[69vh] p-3 overflow-y-auto '>

            {
                messages?.length && messages?.length > 0 && messages.map((data, i) => (

                    <ChatMessagesBody key={i} message={data.message} messageType='' profilePicture={doctorDetails.doctorImage} senderId={data.senderId} receiverId=' ' timeStamp={data.timeStamp} />
                ))
            }













        </div>



        <div className=' md:w-[80vw]   w-[100vw] absolute bottom-0  bg-white  h-[8%]  flex '>




            <div className='md:w-[63vw] w-[86vw] h-full   flex place-items-center ps-2 gap-3 '>

                <div className='bg-cosmic-primary-color rounded-full flex justify-center place-items-center p-1 w-[30px] h-[30px]'>
                    <img src={attachButton} alt='attach' />
                </div>

                <div className='w-full pt-6'>
                    <textarea name='message-box' value={typedMessage} placeholder='Type a message...' className='w-full outline-none   h-full resize-none ' onChange={(e) => {

                        setTypeMessage(e.target.value)

                    }} />



                </div>




            </div>


            <div className='md:w-[10vw] w-[20vw]   pe-1 flex place-items-center justify-evenly md:justify-normal  ps-1 gap-3 '>

                <div className='w-[40px]  h-[40px] flex justify-center place-items-center border rounded-full  '>
                    <img alt='mic' className=' ' src={micIcon} />
                </div>


                <div className='w-[40px] h-[40px]  flex justify-center place-items-center border rounded-full ' onClick={() => {
                    if (!typedMessage) {
                        return
                    }

                    if (userSocket) {

                        userSocket.socket?.emit('send_message', {

                            senderId: user.data?._id!!,
                            receiverId: doctorDetails.docId,
                            messageType: 'text',
                            message: typedMessage,
                            timeStamp: new Date().toLocaleString('UTC', {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true
                            })

                        })
                    }

                    if (!messages) {

                        setMessages([
                            {
                                senderId: user.data?._id!!,
                                receiverId: doctorDetails.docId,
                                messageType: 'text',
                                message: typedMessage,
                                timeStamp: new Date().toLocaleString('UTC', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: true
                                })

                            }
                        ])

                        setTimeout(() => {
                            if (messageScrollRef.current) {

                                messageScrollRef.current.scrollTo({ top: messageScrollRef.current.scrollHeight, behavior: 'smooth' })
                            }
                        }, 1000)
                        setTypeMessage('')

                        return
                    }


                    setMessages((prevMessage) => {


                        prevMessage?.push({
                            senderId: user.data?._id!!,
                            receiverId: doctorDetails.docId,
                            messageType: 'text',
                            message: typedMessage,
                            timeStamp: new Date().toLocaleString('UTC', {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true
                            })
                        })
                        return [
                            ...messages,

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




            {
                /*
            
            <div className='w-full flex justify-end place-items-center gap-8 col-span-1 '>
            
                <div className='w-[40px]  h-[40px] flex justify-center place-items-center border rounded-full '>
                    <img alt='mic' className=' ' src={micIcon} />
                </div>
            
            
            
                <div className='w-[40px] h-[40px]  flex justify-center place-items-center border rounded-full ' onClick={() => {
            
            
                    if (userSocket) {
            
                        userSocket.socket?.emit('send_message', {
            
                            senderId: user.data?._id!!,
                            receiverId: doctorDetails.docId,
                            messageType: 'text',
                            message: typedMessage,
                            timeStamp: new Date().toLocaleString('UTC', {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true
                            })
            
                        })
                    }
            
                    if (!messages) {
            
                        setMessages([
                            {
                                senderId: user.data?._id!!,
                                receiverId: doctorDetails.docId,
                                messageType: 'text',
                                message: typedMessage,
                                timeStamp: new Date().toLocaleString('UTC', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: true
                                })
            
                            }
                        ])
            
                        return
                    }
            
            
                    setMessages((prevMessage) => {
            
            
                        prevMessage?.push({
                            senderId: user.data?._id!!,
                            receiverId: doctorDetails.docId,
                            messageType: 'text',
                            message: typedMessage,
                            timeStamp: new Date().toLocaleString('UTC', {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true
                            })
                        })
                        return [
                            ...messages,
            
                        ]
                    })
            
            
                }}>
                    <img alt='mic' className='' src={sendMessageIcon} />
                </div>
            
            
            
            
            </div>
            */
            }





        </div>



    </div>
}


export default ChatPage