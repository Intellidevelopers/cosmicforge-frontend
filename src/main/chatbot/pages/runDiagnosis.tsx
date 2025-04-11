import  React, { useEffect, useRef, useState } from 'react';
import HomeMobileNavBar from '../../home/component/patient/HomeMobileNavBar';
import HomeNavBar from '../../home/component/patient/HomeNavBar';
import profilePic from '../../../assets/icons/home/cosmic-home-profile-pic-temp.svg';
import send from '../../../assets/images/Email Send.svg';
import mic from '../../../assets/images/mic.svg'
import botImage from '../../../assets/images/botImage.svg'
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store/initStore';
import { cacheDiagnosis } from '../../store/reducers/diagnosisReducer';



const AiChatbot = () => {

  const  userSocket = useSelector((state:RootReducer)=>state.socket)
  const user = useSelector((state:RootReducer)=>state.user)
  const dispatch = useDispatch()
  const userDiagnosis = useSelector((state:RootReducer)=>state.diagnosis)
  
  const [messages, setMessages] = useState<{ sender: string, message: string, timeStamp:string, _id?:string }[]>(userDiagnosis.diagnosisChat?.messages as { sender: string, message: string, timeStamp:string }[] ?? []);

  const [input, setInput] = useState<string>('');
  //const [accepted, setaccepted]  = useState<boolean>(false)
  //const [rejected, setRejected]  = useState<boolean>(false)
  const [loadingResponse, setLoadingResponse]  = useState<boolean>(false)
  const [showLoader, setShowLoader]  = useState<boolean>(false)

  const getTime = (date:Date)=>{
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const time = hours>12 ? 'PM' : 'AM'
    return `${hours}:${minutes} ${time}`
  }

  /*const referralAction = (action:string)=>{
    if (action === 'accept' && accepted === false) {
      setMessages([...messages, { sender: 'user', text: 'I accept the referral', time:getTime(new Date) }]);
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: 'You have accepted the referral', time:getTime(new Date) }]);
      }, 1000);
      setaccepted(true)
    } 
    if (action === 'reject' && rejected === false){
      setMessages([...messages, { sender: 'user', text: 'I do not accept the referral', time:getTime(new Date) }]);
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: 'You have rejected the referral', time:getTime(new Date) }]);
      }, 1000);
      setRejected(true)
    }
  }*/

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', message: input,timeStamp: Date() }]);
      setInput('');
      setShowLoader(true)
      setLoadingResponse(true)
      // Simulate a bot response

      if(userSocket.connected && userSocket){
        userSocket.socket?.emit('perform-diagnosis',input)
      }
     
    }
  };

  useEffect(()=>{
    if(userSocket.connected && userSocket.socket){

      userSocket.socket.on('diagnosis',(data:any)=>{

     
      setShowLoader(false)
      setLoadingResponse(false)
      setMessages(data.messages)
      dispatch(cacheDiagnosis({diagnosisChat:data}))
      
      },)

  userSocket.socket.on('diagnosis-failed',(d:any)=>{
    setShowLoader(false)
    setLoadingResponse(false)
    setMessages([...messages, { sender: 'bot', message: d,timeStamp: Date() }]);
  })

    }
  },[userSocket.socket])

  useEffect(()=>{
    setMessages([...messages, { sender: 'bot', message:`Hello ${user.data?.fullName} i am your AI assistant how may i help you.`,timeStamp: Date() }]);
  },[])

  useEffect(()=>{
    if(!messages || messages.length<=0 && userDiagnosis.diagnosisChat?.messages && userDiagnosis.diagnosisChat?.messages.length>0)
   setMessages(userDiagnosis.diagnosisChat?.messages  as { sender: string, message: string, timeStamp:string }[])
  },[userDiagnosis.diagnosisChat?.messages])

    const lastMessageRef = useRef<HTMLDivElement>(null);
    const diagnosisRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
      if(lastMessageRef.current ){
        lastMessageRef.current.scrollIntoView(true)
      }
      if(diagnosisRef.current ){
        diagnosisRef.current.scrollIntoView(true)
      }
    },[messages]
    )



  return (
    <div className='overflow-hidden'>
      <HomeNavBar title='AI Diagnosis'/>
      <HomeMobileNavBar title='AI Diagnosis'/>

      <div className="flex flex-col h-[90%]  bg-gray-100">


        <div className="flex-1 overflow-auto p-4" >
          {messages.map((message, _) => (
            <React.Fragment  key={message._id} >
              <div className={`mb-4 flex ${message.sender === 'user' && 'justify-self-end'} `} ref={lastMessageRef}>
                {message.sender == 'bot'&& <img src={botImage} alt="Profile" className='inline self-start rounded-[50%]  mr-2 h-8 w-8' />}
                <div className={`inline-block p-3 rounded-lg shadow-lg ${message.sender === 'user' ? 'bg-cosmic-color-lightBlue text-white' : 'bg-white text-black'}`}>
                  
                  {message.message}
                <p className='text-xs mt-3 text-end '>{getTime(new Date(message.timeStamp))}</p>
                </div>
                {message.sender == 'user'&& <img src={user.data?.profile?.profilePicture?? profilePic} alt="Profile" className='inline-flex self-start rounded-[50%]  ml-2 h-8 w-8' />}
              </div>
              {/*message.diagnosis && 
                    <>
                      {/* <p>{message.diagnosis}</p> }
                      <div className='inline-block p-3 rounded-lg shadow-lg ml-10 mt-[-10px] bg-white' ref={diagnosisRef}> 
                        <div className='flex flex-col gap-2 p-2'>
                          <p className={`cursor-pointer p-2 font-bold bg-cosmic-primary-color rounded-md w-[180px] text-center ${rejected && 'hidden'} text-white`} onClick={()=>referralAction('accept')}>
                            {accepted ? 'Referral Accepted' : 'Accept Referral'}
                            </p>
                          <p className={`cursor-pointer p-2 font-bold bg-cosmic-doc-gradient-1 rounded-md w-[180px] text-center ${accepted && 'hidden'} text-white`} onClick={()=>referralAction('reject')}>
                          {rejected ? 'Referral Rejected' : 'Reject Referral'}
                            </p>
                        </div>
                        <p className='text-xs mt-2'>{message.time}</p>
                      </div>
                    </>
              */}
            </React.Fragment>
          ))}
          <div  className={`mb-4 flex ${!showLoader && 'hidden'} mt-2 `} ref={lastMessageRef}>
                <img src={botImage} alt="Profile" className='inline self-start rounded-[50%]  mr-2 h-8 w-8' />
                <div className={`inline-block p-3 rounded-xl w-20 shadow-lg bg-white overflow-hidden`}>
                  <div className='bg-cosmic-doc-gradient-1 rounded-[50%] animate-flow w-4 h-4 relative'></div>
                </div>
          </div>
        </div>
        
        <div className="flex-none md:p-4  bg-white border-t border-gray-300 relative">
          {/* STOP LOADING BUTTON HERE */}

          <div className={` ${!loadingResponse && 'hidden'} absolute top-[-5rem] left-[45%] cursor-pointer flex items-center gap-1 bg-white p-2 rounded-md shadow-md`}
                onClick={()=>{setLoadingResponse(false)}}
          >
            <div className='rounded-md bg-cosmic-primary-color w-[1rem] h-[1rem]'></div>
            <p className='font-bold text-cosmic-primary-color'>Stop</p>
          </div>

          <div className="  grid grid-cols-6 w-full">
            <input
              title='enter text'
              placeholder='Ask anything... '
              name='chat'
              type="text"
              className="  col-span-4 md:col-span-5 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={(e) => e.key === 'Enter' && handleSend()}
            />
            <div className="w-full col-span-2 md:col-span-1 flex   justify-evenly gap-2 ">
              <img src={mic} alt="Mic" className='w-8 cursor-pointer' />
                <img src={send} alt="Send" className='w-8 cursor-pointer' onClick={handleSend}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiChatbot;