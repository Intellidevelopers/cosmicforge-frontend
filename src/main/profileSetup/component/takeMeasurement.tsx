import waveImg from "../../../assets/images/Wave.svg";

interface Props {
  recorded: string;
}

const TakeMeasurement = ({ recorded }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 pb-8">
      <h3 className="text-xs sm:text-sm">
        Please wait while the system reads your {recorded}{" "}
      </h3>
      <img
        src={waveImg}
        alt="Wave image"
        className="w-screen h-[30%] max-h-[400px]"
      />
    </div>
  );
};

export default TakeMeasurement;
