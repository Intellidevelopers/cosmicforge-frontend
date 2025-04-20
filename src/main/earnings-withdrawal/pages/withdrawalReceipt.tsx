import logo from '../../../assets/icons/cosmic forge logo 1.svg'
import successfulIcon from '../../../assets/icons/Bell.png'
import failedIcon from '../../../assets/icons/Bell.png'
import pendingIcon from '../../../assets/icons/Bell.png'
import { useEffect, useState } from 'react'



const WithdrawalReceipt = () => {

    const [status,setStatus]=useState('pending')
    const [img,setImg]=useState<string>(pendingIcon)
    useEffect(()=>{setStatus('successful')},[status])
    useEffect(()=>{
        switch (status) {
            case 'successful':
                setImg(successfulIcon)
                break;
            case 'failed':
                setImg(failedIcon)
                break;
            case 'pending':
                setImg(pendingIcon)
                break;
        
            default:
                break;
        }
    },[status])

  return (
    <div className='bg-slate-300 w-full h-screen flex items-center justify-center'>
        <div className="max-w-[800px] w-full h-full gap-4 flex flex-col items-center justify-center p-4">
            <div className="flex justify-between px-4 items-center w-full">
                <img src={logo} alt="Cosmicforge" className='xs:h-6 h-12'/>
                <p className="font-bold xs:text-sm truncate">Withdrawal Receipt</p>
            </div>
            <div className="rounded-md shadow md flex flex-col justify-center items-center p-4 gap-2 bg-white w-full">
                <img src={img} alt={status} className='w-8'/>
                <p className="text-lg capitalize">Withdrawal {status}</p>
                <p className="font-bold text-xl">-N 200,000.00</p>
            </div>
            <div className="rounded-md shadow md flex flex-col justify-center items-start p-6 bg-white w-full">
                <p className="font-bold text-xl justify-self-left">Payment Details</p>
                <div className="flex flex-col py-4 gap-1 w-full">
                    <div className="flex justify-between items-center">
                        <p className="font-regular">Invoive ID:</p>
                        <p className="font-bold">OP01234568</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-regular">Reference NO:</p>
                        <p className="font-bold">1234568888</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-regular">Status:</p>
                        <div className="flex gap-1">
                            <img src={img} alt={status}  className='w-4'/>
                            <p className="font-bold capitalize">{status}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-regular mr-16">Time:</p>
                        <p className="font-bold truncate">23 December 2024, 12:00:28 PM</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-regular">Account NO:</p>
                        <p className="font-bold">008568972</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-regular">Bank:</p>
                        <p className="font-bold">Access Bank</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-regular">Account Name:</p>
                        <p className="font-bold">Josh Olawole</p>
                    </div>
                    <div className="flex justify-between items-center border-t-2 border-dashed border-black">
                        <p className="font-regular">Total:</p>
                        <p className="font-bold">N 200,000.00</p>
                    </div>
                </div>
            </div>
            <button type="button" className='bg-cosmic-primary-color rounded-md text-white px-6 py-4 '><i className="fas fa-download"></i> Download</button>
        </div>
    </div>
  )
}

export default WithdrawalReceipt