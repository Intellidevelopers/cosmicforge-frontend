import docImage from '../../../../assets/images/doctor-image.jpeg'
import videoIcon from '../../../../assets/icons/cosmic-chat-video-icon.svg'
import callIcon from '../../../../assets/icons/cosmic-chat-call-icon.svg'
import attachButton from '../../../../assets/icons/cosmic-attach-icon.svg'
import micIcon from '../../../../assets/icons/cosmic-chat-mic.svg'
import sendMessageIcon from '../../../../assets/icons/cosmic-chat-send-message-icon.svg'
import ChatMessagesBody from '../../component/chat/ChatMessagesBody'



const ChatPage = () => {

    return <div className="w-full md:ps-[250px] h-[600px] overflow-y-auto ">



        <div className=" place-items-center md:gap-3  flex  bg-white h-[80px] md:m-2 md:ps-4 " onClick={() => {
            // navigate(-1)
        }}>
            <div className='w-fit  justify-center place-items-center gap-2 hidden md:flex'>
                <i className="fa fa-angle-left fa-xl " />
                <p>back</p>
            </div>


            <div className="w-fit ps-2 md:ms-7  md:p-3 flex justify-center place-items-center gap-2 relative ">
                <img className='w-[40px] h-[40px] rounded-full' alt='card-profile' src={docImage} />
                <div className='w-full   flex flex-col justify-center  gap-1 relative'>
                    <p className="w-[180px] md:w-full overflow-hidden text-nowrap text-ellipsis text-[14px] md:text-[16px] font-bold ">{"Grace has an Appointment djdjdj"}</p>
                    <p className="w-[180px] md:w-full overflow-hidden text-nowrap text-ellipsis  text-[14px] md:text-[16px] font-light">{"Grace has an Appointment"}</p>


                </div>
            </div>


            <div className='flex gap-3 w-fit absolute right-2 md:me-3'>

                <img src={callIcon} className='w-[24px] h-[40px]' alt='call' />
                <img className='w-[24px] h-[40px]' src={videoIcon} alt='video' />

            </div>

        </div>


        <div className='w-full absolute bottom-0 bg-white gap-3 h-[80px] flex place-items-center p-3  '>
            <div className='bg-cosmic-primary-color rounded-full flex justify-center place-items-center p-1 w-[40px] h-[40px]'>
                <img src={attachButton} alt='attach' />
            </div>
            <div className='bg-white w-full grid grid-cols-6'>
                <textarea name='message-box' placeholder='Type a message...' className='w-full outline-none p-3  h-full col-span-5  md:col-span-3 overflow-auto resize-none ' />

                <div className='flex justify-center place-items-center gap-2 md:gap-6'>

                    <div className='w-[80px] md:w-[50px] md:h-[50px] h-[30px] flex justify-center place-items-center border rounded-full '>
                        <img alt='mic' className=' ' src={micIcon} />
                    </div>

                    <div className='w-[80px] h-[30px] md:w-[50px] md:h-[50px] flex justify-center place-items-center border rounded-full '>
                        <img alt='mic' className='' src={sendMessageIcon} />
                    </div>




                </div>


            </div>





        </div>
        <div className=' h-[500px] p-3'>

       <ChatMessagesBody/>
         
        </div>

    </div>
}


export default ChatPage