
import callIcon from '../../../../assets/icons/call-button.svg'
import messageButton from '../../../../assets/icons/message-icon.svg'
import appointmentButton from '../../../../assets/icons/appointment-icon.svg'
import verifiedThick from '../../../../assets/icons/home/verifiedThick.svg'
import ratingStar from '../../../../assets/icons/star-icon.svg'
import { useLocation, useNavigate } from 'react-router-dom'

export interface CustomCardSpecialistViewCardProps {
    details: {
        doctorImage: string,
        doctorName: string,
        doctorSpecialization: string,
        clinic: string,
        address: string
    }
}


const CustomCardSpecialistViewCard = ({ details }: CustomCardSpecialistViewCardProps) => {
    const navigate = useNavigate()
    const {state} = useLocation()
    return (

        <div className="bg-white w-full h-fit flex  relative  ">

            <div className=" w-[200px] h-[150px]  relative border border-cosmic-color-border-color rounded-md">

                <p className="bg-cosmic-primary-color absolute text-white  rounded-br-md font-light p-1 ">Top</p>
                <img className="bg-green-500 object-cover h-full w-full" src={details.doctorImage} />
            </div>

            <div className="w-full flex flex-col gap-4 md:ms-4 relative">
                <div className='flex  place-items-center mt-2'>
                    <p className="font-bold text-[14px]  "> {details.doctorName}</p>
                    <img className=' h-[24px] ' src={verifiedThick} />

                </div>
                <div className='absolute mt-2 right-2  text-[14px]  flex md:ustify-center  place-items-center gap-2'>
                    <img className="w-[24px] h-[24px]" src={ratingStar} alt='ratings' />
                    <p className='text-cosmic-silver-color '>4.5</p>
                </div>
                <p className="font-extralight"> {details.doctorSpecialization}</p>
                <p className="font-extralight"> {details.clinic}</p>
                <p className="font-extralight">  {details.address}</p>




                <div className=" relative md:absolute bottom-5 right-5 inline-flex  justify-end mt-2    flex-row gap-3">

                    <div className="w-[40px] h-[40px] bg-cosmic-color-border-color hover:bg-cosmic-primary-color rounded-md flex justify-center place-items-center" onClick={() => {
                        navigate('/patient/find-a-specialist/consult', {
                            state: {
                                doctorImage: details.doctorImage,
                                doctorName: details.doctorName,
                                doctorSpecialization: details.doctorSpecialization,
                                clinic:details.clinic,
                                address: details.address,
                                title:state.title
                            }
                        })
                    }}>
                        <img src={callIcon} alt="call button" />
                    </div>

                    <div className="w-[40px] h-[40px] bg-cosmic-color-border-color hover:bg-cosmic-primary-color rounded-md flex justify-center place-items-center">
                        <img src={messageButton} alt="mesage button" />
                    </div>

                    <div className="w-[40px] h-[40px] bg-cosmic-color-border-color hover:bg-cosmic-primary-color rounded-md flex justify-center place-items-center" onClick={()=>{
                       navigate('/patient/appointment/bio', {
                        state: {
                            doctorImage: details.doctorImage,
                            doctorName: details.doctorName,
                            doctorSpecialization: details.doctorSpecialization,
                            clinic:details.clinic,
                            address: details.address,
                            title:state.title
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