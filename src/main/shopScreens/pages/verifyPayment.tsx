import lantern from '../../../assets/images/lanternImg.png'


const VerifyPayment = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <img src={lantern} alt="Loading" />
        <div className="flex flex-col justify-center items-center">
          <p className="text-center font-bold">Please wait while we confirm your payment.</p>
          <p className="text-center font-extralight">This would only take a moment.</p>
        </div>
      </div>
    </div>
  )
}

export default VerifyPayment