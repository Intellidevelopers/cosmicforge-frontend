import { useEffect, useMemo, useRef, useState } from 'react';
import HomeMobileNavBar from '../../home/component/patient/HomeMobileNavBar';
import HomeNavBar from '../../home/component/patient/HomeNavBar';
import robotProfilePic from '../../../assets/images/botImage.svg'
import send from '../../../assets/images/Email Send.svg';
import mic from '../../../assets/images/mic.svg'

import incomingPic from '../../../assets/images/featureIncoming.png'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../store/initStore';
import CustomHomeSearchCard, { CustomHomeSearchCardProps } from '../../home/component/patient/CustomHomeSearchCard';
import searchBookAppointment from '../../../assets/search/searchBookAppoinment.png'
import searchFindASpecialist from '../../../assets/search/searchFindASpecialist.png'
import searchFirstAid from '../../../assets/search/searchFirtstAid.png'
import searchChatBot from '../../../assets/search/searchChatBot.png'
import diagnosis from '../../../assets/search/searchDiagnosis.svg'


const Chatbot = () => {
  const searchCards:CustomHomeSearchCardProps[] | null = [{
    title:'Run Diagnosis',
    image:diagnosis,
    navigationPath:'/patient/run-diagnosis'
  },
  {
    title:'Book Appointment',
    image:searchBookAppointment,
    navigationPath:'/patient/find-a-specialist'
  },
  
  {
    title:'Find A Specialist',
    image:searchFindASpecialist,
    navigationPath:'/patient/find-a-specialist'
  },
  {
    title:'First Aid',
    image:searchFirstAid,
    navigationPath:'/patient/first-aid'
  },
  
  {
    title:'Chat Bot',
    image:searchChatBot,
    navigationPath:'/patient/chatbot'
  }
  
  ]
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot', message: string, timeStamp: string }[]>([]);
  const [input, setInput] = useState<string>('');


  const userSocket = useSelector((state: RootReducer) => state.socket)

  const userChatBot = useSelector((state:RootReducer)=>state.diagnosis.chatBot)

  const user = useSelector((state:RootReducer)=>state.user)


  const [toggleSearch,setToggleSearch] = useState<boolean>(false)


  useMemo(()=>{

  
   if(userChatBot?.messages){
    setMessages(userChatBot.messages as { sender: 'user' | 'bot', message: string, timeStamp: string }[] )
   }
  },[userChatBot])

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', message: input, timeStamp: Date.now().toLocaleString('en-Us')},{ sender: 'bot', message: 'typing....', timeStamp:Date.now().toLocaleString('en-Us') }]);

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
    <div className='w-full relative overflow-y-hidden'>
      <HomeNavBar title='Chatbot' onSearchFired={(path)=>{
       if(path === 'Chatbot'){
        setToggleSearch(!toggleSearch)
       }}
      } />
      <HomeMobileNavBar title='Chatbot' onSearchFired={(path)=>{
       if(path === 'Chatbot'){
        //setToggleSearch(!toggleSearch)
       }}}/>




{
      toggleSearch && <div className="absolute  bg-white w-full  z-[600] min-h-[350px] p-10 md:flex flex-col place-items-center justify-center">
       <div className="w-full h-[20px] relative ">
       <i className="fa  font-bold text-[30px] fa-times absolute right-0 hover:text-cosmic-primary-color" onClick={()=>{
        setToggleSearch(false)
       }}/>

     
        </div>
       
       <div className="mt-6 bg-black bg-opacity-5 w-[90%] h-full flex  justify-center gap-8 p-8 flex-wrap  relative">


      {
        searchCards  && searchCards.map((card)=>(
          <CustomHomeSearchCard title={card.title} image={card.image} navigationPath={card.navigationPath} />
        ))
      }
       

        </div>
     </div>
     }


      <div className=" flex  flex-col h-full overflow-hidden  bg-gray-100 ">
    
     

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
    </div>
  );
};

export default Chatbot;