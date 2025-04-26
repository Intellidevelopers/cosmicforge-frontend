import { useEffect, useMemo, useRef, useState } from 'react';
import HomeMobileNavBar from '../../home/component/patient/HomeMobileNavBar';
import HomeNavBar from '../../home/component/patient/HomeNavBar';
import profilePic from '../../../assets/icons/home/cosmic-home-profile-pic-temp.svg';
import robotProfilePic from '../../../assets/images/botImage.svg'
import send from '../../../assets/images/Email Send.svg';
import mic from '../../../assets/images/mic.svg'

import incomingPic from '../../../assets/images/featureIncoming.png'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../store/initStore';

const Chatbot = () => {

  const [messages, setMessages] = useState<{ sender: 'user' | 'bot', message: string, timeStamp: string }[]>([]);
  const [input, setInput] = useState<string>('');


  const userSocket = useSelector((state: RootReducer) => state.socket)

  const userChatBot = useSelector((state:RootReducer)=>state.diagnosis.chatBot)

  const user = useSelector((state:RootReducer)=>state.user)


  const getTime = (date: Date) => {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const time = hours > 12 ? 'PM' : 'AM'
    return `${hours}:${minutes} ${time}`
  }


  useMemo(()=>{

  
   if(userChatBot?.messages){
    setMessages(userChatBot.messages as { sender: 'user' | 'bot', message: string, timeStamp: string }[] )
   }
  },[userChatBot])

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', message: input, timeStamp: getTime(new Date()) },{ sender: 'bot', message: 'typing....', timeStamp: getTime(new Date()) }]);

      setInput('');
      if (userSocket.socket && (input !== '' || undefined)) {
        userSocket.socket.emit('ai-chat', input)


        userSocket.socket.on('ai-chatbot', (d: any) => {
          setMessages(d.messages)
        })
      }
      // Simulate a bot response
      /*  setTimeout(() => {
          setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: 'This is a bot response.', time:getTime(new Date) }]);
        }, 1000);*/


    }
  };
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView(true)
    }
  }, [messages]
  )
  const navigate = useNavigate()
  return (
    <>
      <HomeNavBar title='Chatbot' />
      <HomeMobileNavBar title='Chatbot' />
      <div className=" flex  flex-col h-full overflow-hidden  bg-gray-100">
        <div className="flex-1 overflow-auto p-8" >
          {messages.map((data, index) => (
            <>
              <div key={index} className={`mb-4 flex m-4 ${data.sender === 'user' && 'justify-self-end'} `} ref={lastMessageRef}>
                {data.sender == 'bot' && <img src={robotProfilePic} alt="Profile" className='inline self-end rounded-[50%]  mr-2 h-8 w-8' />}
                <div className={`inline-block p-3 rounded-lg shadow-lg ${data.sender === 'user' ? 'bg-cosmic-color-lightBlue text-white' : 'bg-white text-black'}`}>
                  <p style={{ whiteSpace: 'pre-wrap' }}> {data.message}</p>
                  <p className='text-xs mt-2 text-end'>{new Date(data.timeStamp).toLocaleTimeString('en-Us',{
                  hour12:true})}</p>
                </div>
                {data.sender == 'user' && <img src={user.data?.profile?.profilePicture} alt="Profile" className='inline-flex self-end rounded-[50%]  ml-2 h-8 w-8' />}
              </div>
            </>
          ))}
        </div>
        <div className="flex-none p-4  bg-white border-t border-gray-300">
          <div className="flex w-full">
            <input
              title='enter text'
              placeholder=' '
              name='chat'
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={(e) => e.key === 'Enter' && handleSend()}
            />
            <div className="flex gap-2 ml-4">
              <img src={mic} alt="Mic" className='w-8 cursor-pointer' />
              {/* <div
                className="w-8 text-white p-2 rounded-r-lg"
                
              >
              </div> */}
              <img src={send} alt="Send" className='w-8 cursor-pointer' onClick={handleSend} />
            </div>
          </div>
        </div>
      </div>


      <div className='  hidden flex-col gap-4  absolute md:relative h-full justify-center   items-center  w-full '>
        <div className="relative w-[300px] flex justify-center items-center">
          <img src={incomingPic} alt="Feature unavailable" className='relative z-1' />
          <div className="absolute w-full h-20  left-0 bottom-0 z-10 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <p className='text-center'>We are currently working on bringing this feature to you</p>
        <button type="button" className='p-1 w-[200px] bg-cosmic-primary-color text-white rounded-md ' onClick={() => {
          navigate(-1)
        }}>Go Back</button>

      </div>
    </>
  );
};

export default Chatbot;