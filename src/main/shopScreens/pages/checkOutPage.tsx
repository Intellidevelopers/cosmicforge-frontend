import { useState, useEffect } from "react"
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar"
import HomeNavBar from "../../home/component/patient/HomeNavBar"
import { useNavigate } from "react-router-dom"

const CheckOutPage = () => {
    
    const navigate = useNavigate()
    const [subTotal, setSubTotal] = useState(0)
    const [delivery, setDelivery] = useState(0)
    const [total, setTotal] = useState(0)
    const [vat, setVat] = useState(0)
    const [checkOutOption, setCheckOutOption] = useState('Card')
    const [cardNO, setCardNO] = useState(0)
    const [formattedCardNO, setFormattedCardNO] = useState('')
    const [navigateToPath, setNavigateToPath] = useState('')
    
    useEffect(()=>{
        setVat(1000.00)
        setSubTotal(9000.00)
        setDelivery(5000.00)
        setCardNO(1234567890987654)
    },[])

    useEffect(()=>{
        if(delivery&&subTotal&&vat){
            setTotal(vat+subTotal+delivery)
        }
    },[delivery,subTotal,vat])
    useEffect(()=>{
        if(cardNO){
            const card = cardNO;            
            const newCard = card.toString()
            const formatted = `${newCard.slice(0,3)} *** ** *** ${newCard.slice(newCard.length-3,newCard.length)}`
            console.log(formatted)
            setFormattedCardNO(formatted)
        }
    },[cardNO])
    useEffect(()=>{
        if(checkOutOption === 'Card'){
            setNavigateToPath('/patient/shop/card-payment')
        }else{
            setNavigateToPath('/verify-payment')
        }
    },[checkOutOption])

    const handleSelection = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target
        setCheckOutOption(value)
    }
    const handleClick = (method:string)=>{
        if(method === 'Card') {setCheckOutOption('Card')}
        if(method === 'Transfer') {setCheckOutOption('Transfer')}
    }



  return (
    <>
        <HomeMobileNavBar title={'Check Out'} onSearchFired={()=>{}}/>
        <HomeNavBar title={'Check Out'} onSearchFired={()=>{}}/>
        <div className=" p-4 flex flex-col  gap-4">
            <div className="shadow-md rounded-xl border">
                <div >
                    <div className="flex flex-col -full items-center justify-center  p-4 bg-cosmic-primary-color opacity-30">
                        <p className='font-bold text-white text-lg'>Total</p>
                        <p className='font-bold text-white text-lg'>N{total}</p>
                    </div>
                    <div className="flex flex-col w-full p-4">
                        <div className="flex justify-between">
                            <p>Sub Total</p>
                            <p className="font-bold">N{subTotal}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Delivery</p>
                            <p className="font-bold">N{delivery}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>VAT</p>
                            <p className="font-bold">N{vat}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Total</p>
                            <p className="font-bold">N{total}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="font-bold">Payment Method</p>
                <div className="p-4">
                    <div id='radio-section' className='flex flex-col w-full justify-center items-center'>
                        <div className='flex flex-col rounded-md shadow-slate-300 shadow-md justify-center items-center w-full '>
                            <div
                                className='flex border-[0.5px] p-2 border-slate-100 rounded-lg justify-between items-center w-full cursor-pointer'
                                onClick={() => handleClick('Card')}
                            >
                                <label htmlFor='option1' className='font-bold'>Card</label>
                                <div className="flex">
                                    <p className="text-slate-400 mr-2">{formattedCardNO ? formattedCardNO : ''}</p>
                                    <input
                                        type="radio"
                                        id='option1'
                                        name="profileType"
                                        checked={checkOutOption==='Card'}
                                        value={'Card'}
                                        onChange={handleSelection}
                                        className="border p-2 w-fit"
                                        placeholder="Enter your profile type"
                                    />
                                </div>
                            </div>
                            <div
                                className='flex border-[0.5px] p-2 border-slate-100 rounded-lg justify-between items-center w-full cursor-pointer'
                                onClick={() => handleClick('Transfer')}
                            >
                                <label htmlFor='option2' className='font-bold'>Transfer</label>
                                <input
                                    type="radio"
                                    id='option2'
                                    name="profileType"
                                    checked={checkOutOption==='Transfer'}
                                    value={'Transfer'}
                                    onChange={handleSelection}
                                    className="border p-2 w-fit"
                                    placeholder="Enter your profile type"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={checkOutOption === 'Transfer' ? 'block' : 'hidden'}>
                <p className="font-bold">Account Details</p>
                <div className='bg-white shadow-md rounded-md'>
                    <div className="flex justify-between text-lg px-4 py-2 ">
                        <p>Account NO</p>
                        <p className="font-bold">1234567890</p>
                    </div>
                    <div className="flex justify-between text-lg px-4 py-2 ">
                        <p>Bank</p>
                        <p className="font-bold">GTB Bank</p>
                    </div>
                    <div className="flex justify-between text-lg px-4 py-2 ">
                        <p>Account Name</p>
                        <p className="font-bold text-right">Cosmicforge Health</p>
                    </div>
                    <div className="flex justify-between text-lg px-4 py-2 ">
                        <p>Amount Payable</p>
                        <p className="font-bold">N{total}</p>
                    </div>
                </div>
            </div>
            <button type="button" className="rounded-md text-white self-center justify-self-end font-bold bg-cosmic-primary-color p-2 w-[250px]"
                onClick={()=>{navigate(navigateToPath)}}
            >{checkOutOption === 'Card' ? 'Pay Now' : 'I have made this transfer'}</button>
        </div>
    </>
  )
}

export default CheckOutPage