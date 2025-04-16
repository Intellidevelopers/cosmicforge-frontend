
import callIcon from '../../../../assets/icons/call-button.svg'
import messageButton from '../../../../assets/icons/message-icon.svg'
import appointmentButton from '../../../../assets/icons/appointment-icon.svg'
import verifiedThick from '../../../../assets/icons/home/verifiedThick.svg'
import ratingStar from '../../../../assets/icons/star-icon.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateCallInitialization, updateCallMode } from '../../../store/reducers/userSocketReducer'
import { useDispatch } from 'react-redux'


export interface CustomCardSpecialistViewCardProps {
    details: {
        profilePicture?:string,
       userId:{
        fullName?: string,
        lastName?:string,
        _id?:string
       },
        professionalTitle?: string,
        specialization?: string,
        currentClinic?: string,
        department?: string,
        bio?: string,
        pricing?: string,

        workAddress?:string,
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
}


const CustomCardSpecialistViewCard = ({ details }: CustomCardSpecialistViewCardProps) => {
    const navigate = useNavigate()
    const {state} = useLocation()

    const  dispatch = useDispatch()

   

    return (

        <div className="bg-white w-full  h-[150px] flex  relative  ">

            <div className=" w-[200px] h-[150px]  relative border border-cosmic-color-border-color rounded-md">

                <p className="bg-cosmic-primary-color absolute text-white  rounded-br-md font-light p-1 ">Top</p>
                <img className="bg-green-500 object-cover h-full w-full " src={details.profilePicture} />
            </div>

            <div className="w-full flex flex-col gap-4 md:ms-4 relative">
                <div className='flex  place-items-center mt-2'>
                    <p className="font-bold text-[14px]  ">Dr {details.userId.fullName}</p>
                    <img className=' h-[24px] ' src={verifiedThick} />

                </div>
                <div className='absolute mt-2 right-2  text-[14px]  flex md:ustify-center  place-items-center gap-2'>
                    <img className="w-[24px] h-[24px]" src={ratingStar} alt='ratings' />
                    <p className='text-cosmic-silver-color '>4.5</p>
                </div>
                <p className="font-extralight"> {details.specialization}</p>
                <p className="font-extralight"> {details.currentClinic}</p>
                <p className="font-extralight">  {''}</p>




                <div className=" relative md:absolute bottom-5 right-5 inline-flex  justify-end md:mt-2    flex-row gap-3">

                    <div className="w-[40px] h-[40px] bg-cosmic-color-border-color hover:bg-cosmic-primary-color rounded-md flex justify-center place-items-center" onClick={() => {
                       
                       dispatch(updateCallMode({callMode:'audio',socket:null}))
                       
                       dispatch(updateCallInitialization({isCallInitiated:true,socket:null}))
                       navigate('/patient/find-a-specialist/consult', {
                            state: {
                                doctorImage: details.profilePicture,
                                doctorName: details.userId.fullName,
                                doctorSpecialization: details.specialization,
                                clinic:details.currentClinic,
                                address: details.workAddress,
                                title:state.title,
                                department:details.department,
                                docId:details.userId._id
                            }
                        })
                    }}>
                        <img src={callIcon} alt="call button" />
                    </div>

                    <div className="w-[40px] h-[40px] bg-cosmic-color-border-color hover:bg-cosmic-primary-color rounded-md flex justify-center place-items-center" onClick={()=>{
                           navigate('/patient/messages/chat', {
                            state: {
                                doctorImage: details.profilePicture,
                                doctorName: details.userId.fullName,
                                doctorSpecialization: details.specialization,
                                clinic:details.currentClinic,
                                address: details.workAddress,
                                title:state.title,
                                department:details.department,
                                docId:details.userId._id
                            }
                        })
                    }}>
                        <img src={messageButton} alt="mesage button" />
                    </div>

                    <div className="w-[40px] h-[40px] bg-cosmic-color-border-color hover:bg-cosmic-primary-color rounded-md flex justify-center place-items-center" onClick={()=>{
                       navigate('/patient/appointment/bio', {
                        state: {
                            doctorImage: details.profilePicture,
                            doctorName: details.userId.fullName,
                            doctorSpecialization: details.specialization,
                            department:details.department,
                            clinic:details.currentClinic,
                            address: details.workAddress,
                            pricing:details.pricing,
                            bio:details.bio,
                            title:state.title,
                            workingHour:details.workTime,
                            doctorId:details.userId._id,
                            details:details
                        }
                    })  
                    }}>
                        <img src={appointmentButton} alt="appointment button" />
                    </div>
                </div>

            </div>
        </div>


    )
}


export default CustomCardSpecialistViewCard