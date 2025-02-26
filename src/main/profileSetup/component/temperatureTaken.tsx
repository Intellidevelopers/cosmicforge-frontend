import fingerprintIcon from '../../../assets/images/fingerprint.svg';
import emptyFingerprintIcon from '../../../assets/images/fingerprintEmpty.svg';

interface TemperatureValue{
    temperature:string
}


const TemperatureTaken = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-[25vh]'>
        <h3 className='text-xs sm:text-sm '>Place your thumb on the fingerprint sensor</h3>
        <img src={emptyFingerprintIcon} alt="Fingerprint icon" />
    </div>
  )
}
const TemperatureNotTaken = ({temperature}:TemperatureValue) => {
  return (
    <div className='flex flex-col justify-between items-center gap-[25vh]'>
        <h3 className='font-bold text-cosmic-primary-color '>{temperature}&deg;C/{temperature}&deg;F</h3>
        <img src={fingerprintIcon} alt="Fingerprint icon" />
    </div>
  )
}

export {TemperatureTaken,TemperatureNotTaken}