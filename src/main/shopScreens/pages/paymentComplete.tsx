import { useEffect, useState } from "react"
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar"
import HomeNavBar from "../../home/component/patient/HomeNavBar"
import img from '../../../assets/images/police.png'

const PaymentComplete = () => {

    const [paymentType, setPaymentType] = useState('card')
    const [paymentAmt, /*setPaymentAmt*/] = useState(3500)

    useEffect(()=>{setPaymentType('transfer')},[])

  return (
    <div>
        <HomeMobileNavBar title={paymentType === 'card' ? 'Card Payment' : 'Transfer Payment'} onSearchFired={()=>{}}/>
        <HomeNavBar title={paymentType === 'card' ? 'Card Payment' : 'Transfer Payment'} onSearchFired={()=>{}}/> 
        <div className="flex flex-col gap-2 mt-4">
            <div className="border rounded-lg shadow-md m-4 px-4 h-fit">
                <div className="flex flex-col items-center relative justify-center border-b w-full p-8 border-slate-200">
                    <div className="p-3 rounded-[50%] absolute top-[-1.5rem] bg-cosmic-primary-color opacity-50 w-fit">
                        <i className="fas fa-shopping-bag "></i>
                    </div>
                    <p className="font-bold">-N{paymentAmt}</p>
                    <p className="text-sm bg-cosmic-primary-color opacity-50 w-fit rounded-md p-1">Cart</p>
                </div>
                <div className="border-b border-slate-200">
                    <div className="flex p-2">
                        <img src={img} alt="Pharmacy" className="rounded-[50%] w-12 h-12"/>
                        <div className="flex flex-col">
                            <p className="font-bold">Health Plus Pharmacy</p>
                            <p className="text-sm">Pharmacy</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <div className="w-full flex justify-between ">
                        <p>Cart Items:</p>
                        <p className="font-bold">Ibuprofen</p>
                    </div>
                    <div className="w-full flex justify-between ">
                        <p>Ref:</p>
                        <p className="font-bold">1233eww3300998</p>
                    </div>
                    <div className="w-full flex justify-between ">
                        <p>Transaction ID:</p>
                        <p className="font-bold">123456789</p>
                    </div>
                    <div className="w-full flex justify-between ">
                        <p>Status:</p>
                        <p className="font-bold">Successful</p>
                    </div>
                </div>
            </div>
            {/* CARD OR TRANSFER DETAILS */}
            <div className="border rounded-lg shadow-xl m-4 px-4 h-fit">
            {paymentType === 'card' ? 
                <div className="w-full flex flex-col py-2">
                    <div className="w-full flex justify-between border-b border-slate-200">
                        <p>Card:</p>
                        <p className="font-bold">*** *** *** 1234</p>
                    </div>
                    <div className="w-full flex justify-between border-b border-slate-200">
                        <p>Date:</p>
                        <p className="font-bold">12th December, 2024</p>
                    </div>
                    <div className="w-full flex justify-between">
                        <p>Time:</p>
                        <p className="font-bold">10:00 AM</p>
                    </div>
                </div> 
                    : 
                <div className="w-full flex flex-col py-2">
                    <div className="w-full flex justify-between border-b border-slate-200">
                        <p>Bank:</p>
                        <p className="font-bold">GLB Bank</p>
                    </div>
                    <div className="w-full flex justify-between border-b border-slate-200">
                        <p>Account:</p>
                        <p className="font-bold">1234567890</p>
                    </div>
                    <div className="w-full flex justify-between border-b border-slate-200">
                        <p>Recipient:</p>
                        <p className="font-bold">Chastain Park Hospital</p>
                    </div>
                    <div className="w-full flex justify-between border-b border-slate-200">
                        <p>Date:</p>
                        <p className="font-bold">12th December, 2024</p>
                    </div>
                    <div className="w-full flex justify-between">
                        <p>Time:</p>
                        <p className="font-bold">10:00 AM</p>
                    </div>
                </div>}
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button type="button" className="bg-cosmic-primary-color rounded-md p-2 w-[200px] h-fit text-white font-bold"> View Receipt</button>
                <button type="button" className="bg-cosmic-primary-color rounded-md p-2 w-[200px] h-fit text-white font-bold opacity-50"> Download Receipt</button>
            </div>
        </div>
    </div>
  )
}

export default PaymentComplete