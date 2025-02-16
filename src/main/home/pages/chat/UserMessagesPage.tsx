import UserMessagesCard, { UserMessagesCardProps } from "../../component/chat/UserMessagesCard"
import profile from '../../../../assets/images/cosmic-doctor-profile.svg'
import doc2 from '../../../../assets/images/cosmic-doc-2.png'
import doc3 from '../../../../assets/images/cosmic-doc-two-profile.jpeg'

const UserMessagesPage = () => {

    const list:UserMessagesCardProps[] = [
        {
            
            doctorImage:profile,
            doctorName:"Dr boss",
            lastMessageTime:"2:00pm",
            numberOfUnreadMessages:5,
            messageType:'sending',
            messageRead:false,
            message:"jkjjjj"
        },

        {
            
            doctorImage:doc2,
            doctorName:"Dr boss",
            lastMessageTime:"2:00pm",
            numberOfUnreadMessages:5,
            messageType:'sending',
            messageRead:false,
            message:"jkjjjj"
        }
,
        {
            
            doctorImage:doc3,
            doctorName:"Dr boss",
            lastMessageTime:"2:00pm",
            numberOfUnreadMessages:5,
            messageType:'sending',
            messageRead:false,
            message:"jkjjjj"
        }
    ]

    return (
        <div className="w-full md:ps-[294px] h-[600px] overflow-y-auto "> 

        <div className="w-full mt-6 p-5 overflow-y-auto ">
           {
            list.map((it,index)=>(
                <UserMessagesCard 
                
                doctorImage={it.doctorImage}
                doctorName= {it.doctorName}
                lastMessageTime={it.lastMessageTime}
                numberOfUnreadMessages = {it.numberOfUnreadMessages}
                messageType= {it.messageType}
                messageRead = {it.messageRead}
                message ={it.message}
                key={index} />
            ))
           }
        </div>
        </div>
    )
}


export default UserMessagesPage