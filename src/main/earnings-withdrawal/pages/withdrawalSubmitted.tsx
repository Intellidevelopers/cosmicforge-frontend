import successfulIcon from '../../../assets/icons/Bell.png'

const WithdrawalSubmitted = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 w-screen h-screen p-8'>
        <img src={successfulIcon} alt={'Success'} className='w-12'/>
        <p className="font-bold">Withdrawal Submitted Successfully</p>
        <p className='text-center'>Your withdrawal request has been confirmed and successfully. You can track its progress on the withdrawal history page</p>
        <button type="button" className='py-2 px-8 text-white bg-cosmic-primary-color rounded-md '>Go to Withdrawal History</button>
    </div>
  )
}

export default WithdrawalSubmitted