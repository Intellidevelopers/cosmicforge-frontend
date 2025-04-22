import  { useEffect, useRef, useState } from 'react';
import HomeMobileNavBar from '../../home/component/patient/HomeMobileNavBar';
import HomeNavBar from '../../home/component/patient/HomeNavBar';
import profilePic from '../../../assets/icons/home/cosmic-home-profile-pic-temp.svg';
import robotProfilePic from '../../../assets/images/doctor-image.jpeg';
import send from '../../../assets/images/Email Send.svg';
import mic from '../../../assets/images/mic.svg'

import incomingPic from'../../../assets/images/featureIncoming.png'
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
  const [messages, setMessages] = useState<{ sender: string, text: string, time:string }[]>([
    { sender: 'bot', text: 'Hello! How can I assist you today?', time:'2:30 pm' },
    { sender: 'user', text: 'Hi! I need some help with my account.', time:'2:30 pm' },
    { sender: 'bot', text: 'Sure, I can help with that. What seems to be the problem?', time:'2:30 pm' },
    { sender: 'user', text: 'I forgot my password.', time:'2:30 pm' },
    { sender: 'bot', text: 'No worries. You can reset your password by clicking on the "Forgot Password" link on the login page.', time:'2:30 pm' },
    { sender: 'user', text: 'Thanks! I will try that.', time:'2:30 pm' },
    { sender: 'bot', text: 'Is there anything else I can help you with?', time:'2:30 pm' },
    { sender: 'user', text: 'Yes, I also need to update my email address.', time:'2:30 pm' },
    { sender: 'bot', text: 'You can update your email address in the account settings.', time:'2:30 pm' },
    { sender: 'user', text: 'Got it. Thank you!', time:'2:30 pm' },
    { sender: 'bot', text: 'You\'re welcome! Have a great day!', time:'2:30 pm' },
    { sender: 'user', text: 'You too!', time:'2:30 pm' },
    { sender: 'bot', text: 'Hello again! How can I assist you today?', time:'2:30 pm' },
    { sender: 'user', text: 'Hi! I need some help with my account.', time:'2:30 pm' },
    { sender: 'bot', text: 'Sure, I can help with that. What seems to be the problem?', time:'2:30 pm' },
    { sender: 'user', text: 'I forgot my password.', time:'2:30 pm' },
    { sender: 'bot', text: 'No worries. You can reset your password by clicking on the "Forgot Password" link on the login page.', time:'2:30 pm' },
    { sender: 'user', text: 'Thanks! I will try that.', time:'2:30 pm' },
    { sender: 'bot', text: 'Is there anything else I can help you with?', time:'2:30 pm' },
    { sender: 'user', text: 'No, that\'s all for now. Thanks!', time:'2:30 pm' },
  ]);
  const [input, setInput] = useState<string>('');

  const getTime = (date:Date)=>{
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const time = hours>12 ? 'PM' : 'AM'
    return `${hours}:${minutes} ${time}`
  }
  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input, time:getTime(new Date) }]);
      setInput('');
      // Simulate a bot response
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: 'This is a bot response.', time:getTime(new Date) }]);
      }, 1000);
    }
  };
    const lastMessageRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
      if(lastMessageRef.current ){
        lastMessageRef.current.scrollIntoView(true)
      }
    },[messages]
    )
  const navigate = useNavigate()
  return (
    <>
      <HomeNavBar title='Chatbot'/>
      <HomeMobileNavBar title='Chatbot'/>
      <div className=" hidden  flex-col h-full overflow-hidden  bg-gray-100">
        <div className="flex-1 overflow-auto p-4" >
          {messages.map((message, index) => (
            <>
              <div key={index} className={`mb-4 flex  ${message.sender === 'user' && 'justify-self-end'} `} ref={lastMessageRef}>
                {message.sender == 'bot'&& <img src={robotProfilePic} alt="Profile" className='inline self-end rounded-[50%]  mr-2 h-8 w-8' />}
                <div className={`inline-block p-3 rounded-lg shadow-lg ${message.sender === 'user' ? 'bg-cosmic-color-lightBlue text-white' : 'bg-white text-black'}`}>
                  {message.text}
                <p className='text-xs mt-2'>{message.time}</p>
                </div>
                {message.sender == 'user'&& <img src={profilePic} alt="Profile" className='inline-flex self-end rounded-[50%]  ml-2 h-8 w-8' />}
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
                <img src={send} alt="Send" className='w-8 cursor-pointer' onClick={handleSend}/>
            </div>
          </div>
        </div>
      </div>


      <div className='flex flex-col gap-4  absolute md:relative h-full justify-center   items-center  w-full '>
        <div className="relative w-[300px] flex justify-center items-center">
            <img src={incomingPic} alt="Feature unavailable"  className='relative z-1'/>
            <div className="absolute w-full h-20  left-0 bottom-0 z-10 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <p className='text-center'>We are currently working on bringing this feature to you</p>
        <button type="button" className='p-1 w-[200px] bg-cosmic-primary-color text-white rounded-md ' onClick={()=>{
          navigate(-1)
        }}>Go Back</button>

        </div>
    </>
  );
};

export default Chatbot;