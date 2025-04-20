import UserMessagesCard, { UserMessagesCardProps } from "../../component/chat/UserMessagesCard"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootReducer } from "../../../store/initStore"

const UserMessagesPage = () => {

  

    const user = useSelector((state: RootReducer) => state.user)
    const userSocket = useSelector((state: RootReducer) => state.socket)

    const [messagesUpdate, setMessagesUpdate] = useState<UserMessagesCardProps[] | null>(() => {


        return null
    })



    useEffect(() => {

        if (userSocket.userChats && userSocket.userChats.length > 0) {


          


            const messagesFromServer: UserMessagesCardProps[] | null = []

            userSocket.userChats?.map((data) => {
                const senderProfile = data.userOneID.userId === user.data?._id ? data.userTwoID : data.userOneID

                if (data.messages)
                    messagesFromServer.push({

                        doctorImage: senderProfile.userProfile.profilePicture,
                        doctorName: senderProfile.userName,
                        lastMessageTime:data.messages[data.messages.length-1].timeStamp!! ,
                        numberOfUnreadMessages: 8,
                        messageType: data.messages[data.messages.length-1].messageType!!,
                        messageRead: false,
                        message: data.messages[data.messages.length-1].message!!,
                        details:{
                            ...senderProfile.userProfile,
                            docId:senderProfile.userId
                        }

                    })
            })


            setMessagesUpdate(messagesFromServer)



        }

    }, [userSocket.userChats])

    return (
        <div className="w-full cursor-default h-[600px] overflow-y-auto ">

            <div className="w-full mt-6 p-5 overflow-y-auto ">
                {
                    messagesUpdate?.map((it, index) => (
                        <UserMessagesCard

                            doctorImage={it.doctorImage}
                            doctorName={it.doctorName}
                            lastMessageTime={it.lastMessageTime}
                            numberOfUnreadMessages={it.numberOfUnreadMessages}
                            messageType={it.messageType}
                            messageRead={it.messageRead}
                            message={it.message}
                            details={it.details}
                            key={index} />
                    ))
                }
            </div>
        </div>
    )
}


export default UserMessagesPage