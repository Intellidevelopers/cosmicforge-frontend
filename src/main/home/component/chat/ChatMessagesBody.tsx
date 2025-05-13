//import docImage from '../../../../assets/images/doctor-image.jpeg'
//import senderBg from '../../../../assets/images/cosmic-chat-sender-bg.svg'

import { useSelector } from "react-redux"
import { RootReducer } from "../../../store/initStore"


interface MessageProps {
  message: string,
  messageType: string,
  senderId: string,
  receiverId: string,
  timeStamp: string,
  profilePicture: string
}
const ChatMessagesBody = ({ message, timeStamp, senderId, profilePicture, messageType }: MessageProps) => {

  const user = useSelector((state: RootReducer) => state.user.data)





  return <div className="w-full">

    {
      senderId === user?._id ? <div className="w-full  flex justify-end p-3">



        <div className=' relative    max-w-[350px]  rounded-lg  h-fit bg-cosmic-light-color-call m-2 ' >

          <div className='w-full    p-2' >

            {
              messageType === "text" ? <div>
                <p>{message}</p>
                <p className="text-[12px] text-end">{timeStamp}</p>

              </div> : messageType === "audio" && <div>
                <audio src={message} controls />
                <p className="text-[12px] text-end mt-2">{timeStamp}</p>


              </div>
            }

          </div>


        </div>

        <img src={user.profile?.profilePicture} alt="profile" className="bg-transparent rounded-full w-[30px] h-[30px]" />

      </div> : <div className="w-full  flex justify-start p-3">

        <img src={profilePicture} alt="profile" className="bg-transparent rounded-full w-[30px] h-[30px]" />


        <div className=' relative    max-w-[350px]  rounded-lg  h-fit bg-white shadow-black shadow-sm text-black m-2 ' >


          <div className='w-full    p-2' >

            {
              messageType === "text" ? <div>
                <p>{message}</p>
                <p className="text-[12px] text-end">{timeStamp}</p>

              </div> : messageType === "audio" && <div>
                <audio src={message} controls />
                <p className="text-[12px] text-end mt-2">{timeStamp}</p>


              </div>
            }

          </div>



        </div>
      </div>
    }
  </div>
}

export default ChatMessagesBody