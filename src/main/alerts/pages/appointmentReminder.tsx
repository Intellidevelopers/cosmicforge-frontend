import BlueButton from "../components/blueButton"
import image from '../../../assets/images/Today.png';
import LightBlueButton from "../components/lightBlueButton";

const AppointmentReminder = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 h-screen'>
        <img src={image} alt="Withdrawal Successful" />
        <div className="text-center flex flex-col justify-center items-center">
            <p className="font-bold">Time for Appointment!</p>
            <p className="">Dr. Olawole it's time for your appointment.</p>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
            <p className="font-bold">12 PM | Grace Williams!</p>
            <p className="">Virtual appointment, 9th December, 2024.</p>
        </div>
        <div className="flex-col md:flex-row flex gap-4">
            <BlueButton text={'Start Appointment'}/>
            <LightBlueButton text={'Cancel Appointment'}/>
        </div>
    </div>
  )
}

export default AppointmentReminder