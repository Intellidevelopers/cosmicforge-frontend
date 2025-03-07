//import docImage from '../../../../assets/images/doctor-image.jpeg'
//import senderBg from '../../../../assets/images/cosmic-chat-sender-bg.svg'

import { useSelector } from "react-redux"
import { RootReducer } from "../../../store/initStore"

const ChatMessagesBody = () =>{
  const  userSocket = useSelector((state:RootReducer)=>state.socket)

    return <div className="w-full ">
      
      <div className=' relative   bg-cosmic-bg-chat-sender w-[350px] bg-no-repeat bg-contain h-fit' >
                 
                  <div className='w-full h-[900px]  p-5' onClick={()=>{
                    alert(JSON.stringify(userSocket.connected))
                    if(userSocket.connected){
                      alert('called')
                      userSocket.socket?.emit("hello","i am fully active boss!")
                    }else{
                      alert('mmm')
                    }
                  }}>
                    <p>kjjkj
                    djdjjhfhfhfh</p>
                    <p>kjjkj
                    djdjjhfhfhfh</p>
                    <p>kjjkj
                    djdjjhfhfhfh</p>
                    <p>kjjkj
                    djdjjhfhfhfh</p>
                  </div>

                </div>
    </div>
}

export default ChatMessagesBody