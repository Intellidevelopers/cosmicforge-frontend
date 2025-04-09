import { useState, MutableRefObject, useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootReducer } from "../../../../store/initStore"
import { updateCallMode } from "../../../../store/reducers/userSocketReducer"
import DoctorChatMessage from "../../../component/chat/doctor/DoctorChatMessage"
import { useLocation, useNavigate } from "react-router-dom"
import videoIcon from '../../../../../assets/icons/cosmic-chat-video-icon.svg'
import callIcon from '../../../../..//assets/icons/cosmic-chat-call-icon.svg'
import attachButton from '../../../../../assets/icons/cosmic-attach-icon.svg'
import micIcon from '../../../../../assets/icons/cosmic-chat-mic.svg'
import sendMessageIcon from '../../../../../assets/icons/cosmic-chat-send-message-icon.svg'
import DoctorHomeNavBar from "../../../component/doctor/DoctorHomeNavBar"
import DoctorNavBarHome from "../../../component/doctor/DoctorNavBarMobile"




const DoctorMobileChatPage = () => {

    const userSocket = useSelector((state: RootReducer) => state.socket)

    const user = useSelector((state: RootReducer) => state.user)

    const dispatch = useDispatch()

    // alert(JSON.stringify(userSocket.userChats))
    const navigate = useNavigate()

    const [messagesUpdate, setMessagesUpdate] = useState<{
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

    }[] | null>

        (() => {


            return null
        })


    const { state } = useLocation()



    const [chatSelected, setChatSelected] = useState<{
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
    } | null>(null)


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
        setChatSelected(state.chatSelected)
        setMessages(state.mesages)
        setTimeout(() => {
            if (messageScrollRef.current) {

                messageScrollRef.current.scrollTo({ top: messageScrollRef.current.scrollHeight, behavior: 'smooth' })
            }
        }, 1000)
    })

    const [typedMessage, setTypeMessage] = useState<string>('')

    const messageScrollRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

    const chatPageForWebRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

    useEffect(() => {



        if (userSocket.userChats && userSocket.userChats.length > 0) {





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



            userSocket.userChats?.map((data) => {

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


            setMessagesUpdate(messagesFromServer)



            if (chatSelected && messagesUpdate) {

                const chat = messagesFromServer.find(data => {
                    return chatSelected?.details.patientId === data.details.patientId
                })



                if (chat && messages && messages.length < chat.messages.length!!) {



                    setMessages(chat.messages)

                    setTimeout(() => {
                        if (messageScrollRef.current) {

                            messageScrollRef.current.scrollTo({ top: messageScrollRef.current.scrollHeight, behavior: 'smooth' })
                        }
                    }, 1000)
                }


            }


        }

    }, [userSocket.userChats])



    return <div className="w-full h-dvh overflow-hidden">
        <DoctorHomeNavBar title="Messages" />
        <DoctorNavBarHome title="Messages" />

        <div ref={chatPageForWebRef} className="bg-cosmic-bg-chat-background   flex-col col-span-2">




            <div className={`w-full relative h-full ${chatSelected ? 'block' : 'hidden'} `}>



                <div className="bg-white w-full h-[60px] p-3">

                    <div className="grid grid-cols-3  ">


                        <div className="flex place-items-center gap-2  col-span-2">

                            <img src={chatSelected?.doctorImage} alt="profile-icon" className="w-[40px] h-[40px] rounded-full" />
                            <p>{chatSelected?.doctorName}</p>
                        </div>




                        <div className="w-full flex justify-end  gap-3">
                            <img className="bg-cosmic-color-white-light rounded-full p-1 w-[30px] h-[30px]" alt="voice-call" src={callIcon} onClick={() => {

                                if (userSocket.connected) {
                                    dispatch(updateCallMode({ callMode: 'audio', socket: null }))
                                    navigate("/doctor/appointment/voice-call")
                                }

                            }} />
                            <img className="bg-cosmic-color-white-light rounded-full p-1 w-[30px] h-[30px]" alt="video-call" src={videoIcon} onClick={() => {
                                if (userSocket.connected) {
                                    dispatch(updateCallMode({ callMode: 'video', socket: null }))
                                    navigate("/doctor/appointment/voice-call")
                                }
                            }} />
                            <i className="fa fa-ellipsis-v  mt-2 w-[40px] h-[40px] " />
                        </div>

                    </div>



                </div>



                <div ref={messageScrollRef} className="bg-transparent h-[73vh] overflow-y-auto">


                    {
                        messages?.length && messages?.length > 0 && messages.map((data, i) => (

                            <DoctorChatMessage key={i} message={data.message} messageType='' profilePicture={chatSelected?.doctorImage!!} senderId={data.senderId} receiverId=' ' timeStamp={data.timeStamp} />
                        ))
                    }

                </div>




                <div className="bg-white w-full h-[90px]">

                    <div className="grid grid-cols-3 ">
                        <div className="flex place-items-center j gap-3 col-span-2
">
                            <div className='bg-cosmic-primary-color flex justify-center place-items-center ms-2 w-[40px] h-[40px] rounded-full'>
                                <img src={attachButton} alt='attach' />
                            </div>

                            <textarea placeholder="enter text" value={typedMessage} className=" w-full outline-none resize-none h-[60px] p-2 overflow-y-auto  " onChange={(e) => {
                                setTypeMessage(e.target.value)
                            }}></textarea>
                        </div>
                        <div className="w-full flex justify-end pe-6 gap-3 mt-2">
                            <div className='w-[40px]  h-[40px] flex justify-center place-items-center border rounded-full '>
                                <img alt='mic' className=' ' src={micIcon} />
                            </div>

                            <div className='w-[40px]  h-[40px] flex justify-center place-items-center border rounded-full ' onClick={() => {

                                if (userSocket) {

                                    userSocket.socket?.emit('send_message', {

                                        senderId: user.data?._id!!,
                                        receiverId: chatSelected?.details.patientId,
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
                                            receiverId: chatSelected?.details.patientId!!,
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


                                setMessages((prevMessage) => {


                                    prevMessage?.push({
                                        senderId: user.data?._id!!,
                                        receiverId: chatSelected?.details.patientId!!,
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

                    </div>
                </div>



            </div>

        </div>
    </div>



}


export default DoctorMobileChatPage