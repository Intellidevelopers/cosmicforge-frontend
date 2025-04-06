//import docImage from '../../../../assets/images/doctor-image.jpeg'
//import senderBg from '../../../../assets/images/cosmic-chat-sender-bg.svg'


 interface MessageProps {
  message:string,
  messageType:string,
  senderId:string,
  receiverId:string,
  timeStamp:string
 }
const ChatMessagesBody = ({message}:MessageProps) =>{
 

    return <div className="w-full  flex justify-end">
      
      <div className=' relative    max-w-[350px]  rounded-lg  h-fit bg-cosmic-light-color-call m-2 ' >
                 
                  <div className='w-full    p-2' >
                    <p>{message}</p>
                    <p className="text-[12px] text-end">{new Date().toLocaleString('UTC',{
                      hour:'2-digit',
                      minute:'2-digit',
                      hour12:true
                    })}</p>
                   
                  </div>

                </div>
    </div>
}

export default ChatMessagesBody