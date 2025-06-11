//import readMessage  from '../../../../assets/icons/cosmicforge-read-mesages.svg'

import { useNavigate } from "react-router-dom";

//import unReadMessage from '../../../../assets/icons/cosmicforge-unread-messages.svg'
//import profile from '../../../../assets/images/cosmic-doctor-profile.svg'

export interface UserMessagesCardProps {
  doctorImage: string;
  doctorName: string;
  lastMessageTime: string;
  numberOfUnreadMessages: number;
  messageType: string;
  messageRead: boolean;
  message: string | null;
  messages?:
    | {
        senderId: string;
        receiverId: string;
        messageType: string;
        message: string;
        timeStamp: string;
      }[]
    | null;

  details: {
    patientId?: string;
    docId: string;
    profilePicture?: string;
    professionalTitle?: string;
    specialization?: string;
    currentClinic?: string;
    department?: string;
    bio?: string;
    pricing?: string;

    workAddress?: string;
    experience?: {
      hospitalName?: string;
      NoOfPatientTreated?: string;
      specializationAndDepartment?: string;
      date?: string;
    };
    workTime?: {
      day?: string;
      time?: string;
    };
  };
}

const UserMessagesCard = ({
  doctorImage,
  doctorName,
  lastMessageTime,
  //numberOfUnreadMessages,
  messageType,
  //messageRead,
  message,
  details,
}: UserMessagesCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className=" h-[100px] w-full pe-2"
      onClick={() => {
        navigate("/patient/messages/chat", {
          state: {
            doctorImage: details.profilePicture,
            doctorName: doctorName,
            doctorSpecialization: details.specialization,
            department: details.department,
            clinic: details.currentClinic,
            address: details.workAddress,
            pricing: details.pricing,
            bio: details.bio,
            docId: details.docId,
            //title:state.title,
            workingHour: details.workTime,
            details: details,
          },
        });
      }}
    >
      <div className="relative w-full flex gap-4">
        <img
          src={doctorImage}
          className="w-[50px] h-[50px] bg-gray-400 rounded-full"
        />
        <p className="absolute right-1 font-light">{lastMessageTime}</p>

        {/**
           * <p className="absolute h-[22px] w-[22px] text-white text-center right-8 top-5 text-[12px] bg-cosmic-primary-color mt-1 pt-1 rounded-full font-light">{numberOfUnreadMessages}
                  </p>
           */}

        <div className="flex flex-col">
          <p className="">{doctorName}</p>
          <div className="w-full flex gap-2">
            {/**
             * <img src={unReadMessage} className="w-[20px] h-[20px]  rounded-full " />
             */}

            {messageType === "text" && (
              <p className="font-light text-[14px]">{message}</p>
            )}
            {messageType === "audio" && (
              <i className="fa fa-file-audio mt-2"></i>
            )}
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-400  mt-1 "></div>
    </div>
  );
};

export default UserMessagesCard;
