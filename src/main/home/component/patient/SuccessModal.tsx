
import HandCash from '../../../../assets/HomeImg/hand.png'
import { useNavigate } from 'react-router-dom';

  interface PaymentSuccessProps {
    onClose :() => void
  }


const PaymentSuccessCard = ({onClose}:PaymentSuccessProps) => {

   const navigate = useNavigate()
   
  return (
    
      <div className="bg-white rounded-md shadow-lg p-16 max-w-2xl w-full h-[60%] text-center relative">

        <i className='fa fa-times absolute text-xl right-5 hover:text-red-600 top-2' onClick={()=>{
          onClose()
        }} /> 
        <div className="text-7xl mb-6">
          {/* Emoji or image */}
          <img src={HandCash} alt="Success" className="mx-auto w-32 h-32 mb-6" />

          {/* Or replace with an <img> if you want the exact image */}
          {/* <img src="/path/to/your/image.png" alt="Success" className="mx-auto w-24 h-24 mb-6" /> */}
        </div>
        <h2 className="text-xl font-semibold mb-2">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">
          Your payment was successfully processed.
        </p>
        <button className="bg-[#272EA7] hover:bg-indigo-700 text-white font-medium py-2 w-[50%] px-6 rounded-md transition" onClick={()=>{
          navigate('/doctor/home')  
        }}>
          Home
        </button>
      </div>
    
  );
};

export default PaymentSuccessCard;
