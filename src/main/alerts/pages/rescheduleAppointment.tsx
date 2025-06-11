import BlueButton from "../components/blueButton";
import appointmentIcon from "../../../assets/images/date span.png";
import LightBlueButton from "../components/lightBlueButton";

const RescheduleAppointment = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 h-screen">
      <img src={appointmentIcon} alt="Withdrawal Successful" />
      <div className="text-center flex flex-col justify-center items-center">
        <p className="font-bold">Reschedule Successful!</p>
        <p className="">
          Dr. Olawole you have successfully rescheduled your appointment.
        </p>
      </div>
      <div className="text-center flex flex-col justify-center items-center">
        <p className="font-bold">12 PM | Grace Williams!</p>
        <p className="">Virtual appointment, 9th December, 2024.</p>
      </div>
      <div className="flex-col md:flex-row flex gap-4">
        <LightBlueButton text={"Dashboard"} />
        <BlueButton text={"Appointments"} />
      </div>
    </div>
  );
};

export default RescheduleAppointment;
