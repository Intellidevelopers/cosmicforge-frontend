import HomeMobileNavBar from '../../home/component/patient/HomeMobileNavBar';
import HomeNavBar from '../../home/component/patient/HomeNavBar';
import HospitalRating from '../components/hospitalRating';
import './styles.css';

const HospitalAvailability = () => {
  return (
    <>
      <HomeNavBar title={'Hospital Availability'} />
      <HomeMobileNavBar title={'Hospital Availability'} />
      <div id='map' className='md:ms-[250px] relative w-full h-full flex items-center md:justify-start justify-center rounded-md'>
        <div className='absolute bottom-4 w-full max-w-[90%] md:max-w-[80%] bg-white flex flex-col items-center justify-center p-4 rounded-md shadow-lg mb-[30%] sm:mb-[10%] md:ml-6'>
          <div className='flex w-full gap-4 overflow-auto p-2'>
            <HospitalRating />
            <HospitalRating />
            {/* <HospitalRating /> */}
            <HospitalRating />
          </div>
          <button type="button" className='mt-4 text-white rounded-md p-2 w-full max-w-[300px] bg-cosmic-primary-color'>Select Hospital</button>
        </div>
      </div>
    </>
  );
};

export default HospitalAvailability;