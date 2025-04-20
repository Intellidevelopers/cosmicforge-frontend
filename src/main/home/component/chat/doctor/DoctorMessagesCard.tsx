//import readMessage  from '../../../../assets/icons/cosmicforge-read-mesages.svg'
//import { useNavigate } from 'react-router-dom'
//import unReadMessage from '../../../../../assets/icons/cosmicforge-unread-messages.svg'
//import profile from '../../../../assets/images/cosmic-doctor-profile.svg'

export interface DoctorMessagesCardProps {
  doctorImage: string,
  doctorName: string,
  lastMessageTime: string,
  numberOfUnreadMessages: number,
  messageType: string
  messageRead: boolean,
  message: string | null
  details: {
    patientId: string
    profilePicture?: string,
    professionalTitle?: string,
    specialization?: string,
    currentClinic?: string,
    department?: string,
    bio?: string,
    pricing?: string,

    workAddress?: string,
    experience?: {

      hospitalName?: string,
      NoOfPatientTreated?: string,
      specializationAndDepartment?: string,
      date?: string
    },
    workTime?: {
      day?: string,
      time?: string
    }



  },
  messages: {
    senderId: string,
    receiverId: string,
    messageType: string,
    message: string,
    timeStamp: string
  }[] | null,

  onChatSelected: (chatDetails: {
    doctorImage: string,
    doctorName: string,
    lastMessageTime: string,
    numberOfUnreadMessages: number,
    messageType: string
    messageRead: boolean,
    message: string | null
    details: {
      patientId: string
      profilePicture?: string,
      professionalTitle?: string,
      specialization?: string,
      currentClinic?: string,
      department?: string,
      bio?: string,
      pricing?: string,

      workAddress?: string,
      experience?: {

        hospitalName?: string,
        NoOfPatientTreated?: string,
        specializationAndDepartment?: string,
        date?: string
      },
      workTime?: {
        day?: string,
        time?: string
      }



    }
  },

    messages: {
      senderId: string,
      receiverId: string,
      messageType: string,
      message: string,
      timeStamp: string
    }[] | null) => void,

    isMobileScreen?:boolean



}



const DoctorMessagesCard = ({
  doctorImage,
  doctorName,
  lastMessageTime,
  numberOfUnreadMessages,
  messageType,
  messageRead,
  message,
  messages,
  details,
  onChatSelected,
  
  

}: DoctorMessagesCardProps
) => {

  //const navigate = useNavigate()

  return (
    <div className=" h-[100px] w-full pe-2 " onClick={() => {


      {
        /**
         *  navigate('/patient/messages/chat',{
    state:{
      doctorImage: details.profilePicture,
      doctorName: doctorName,
      doctorSpecialization: details.specialization,
      department:details.department,
      clinic:details.currentClinic,
      address: details.workAddress,
      pricing:details.pricing,
      bio:details.bio,
      docId:details.docId,
      //title:state.title,
      workingHour:details.workTime,
      details:details

    }
  })
         */
      }

      onChatSelected({
        doctorImage,
        doctorName,
        lastMessageTime,
        numberOfUnreadMessages,
        messageType,
        messageRead,
        message,
        details,

      }, messages)

    }}>

      <div className="relative w-full flex gap-4 text-white hover:bg-cosmic-color-white-light cursor-default">

        <img src={doctorImage} className="w-[50px] h-[50px] bg-gray-400 rounded-full" />
        <p className="absolute right-1 font-light  text-[14px]">{lastMessageTime}</p>

        {
          /**
           * <p className="absolute h-[22px] w-[22px] text-cosmic-primary-color text-center right-8 top-5 text-[12px] bg-white mt-1 pt-1 rounded-full font-light">{numberOfUnreadMessages}
        </p>
           */
        }
        <div className="flex flex-col">

          <p className="">{doctorName}</p>

          <div className="w-full flex gap-2">
            {
              /**
               * <img src={unReadMessage} className="w-[20px] h-[20px]  rounded-full " />
               */
            }
           {
            messageType === "text" &&  <p className="font-light text-[14px] w-[200px] text-nowrap text-ellipsis overflow-hidden">{message}</p>
           }

{
            messageType === "audio" &&  <i className="fa fa-file-audio mt-2" ></i>
           }
          </div>
        </div>

      </div>

      <div className="w-full h-[1px] bg-gray-400  mt-1 ">

      </div>
    </div>


  )
}

export default DoctorMessagesCard