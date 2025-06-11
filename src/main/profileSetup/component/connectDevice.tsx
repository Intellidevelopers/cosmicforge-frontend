import wifiImg from "../../../assets/images/wifi.svg";

interface ConnectDeviceProps {
  device: string;
}

const ConnectDevice = ({ device }: ConnectDeviceProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-xs sm:text-sm ">Connect your device to a {device}</h3>
      <img src={wifiImg} alt="WifiImage" className="h-[35dvh] max-h-[500px]" />
    </div>
  );
};

export default ConnectDevice;
