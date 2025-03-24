import { useState, useEffect } from "react"
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar"
import HomeNavBar from "../../home/component/patient/HomeNavBar"

const CheckOutPage = () => {
    
    const [subTotal, setSubTotal] = useState(0)
    const [delivery, setDelivery] = useState(0)
    const [total, setTotal] = useState(0)
    const [vat, setVat] = useState(0)
    const [checkOutOption, setCheckOutOption] = useState('Card')
    
    useEffect(()=>{
        setVat(1000)
        setSubTotal(9000)
        setDelivery(5000)
    },[])

    useEffect(()=>{
        if(delivery&&subTotal&&vat){
            setTotal(vat+subTotal+delivery)
        }
    },[delivery,subTotal,vat])

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
        <HomeMobileNavBar title={'Check Out'}/>
        <HomeNavBar title={'Check Out'}/>
        <div className="md:ms-[250px] p-4 flex flex-col gap-4">
            <div className="shadow-md rounded-xl border">
                <div >
                    <div className="flex flex-col -full items-center justify-center gap-4 p-4 bg-blue-400">
                        <p className='font-bold'>Total</p>
                        <p className='font-bold'>N{total}</p>
                    </div>
                <div className="flex flex-col w-full p-4">
                        <div className="flex justify-between">
                            <p>Sub Total</p>
                            <p className="font-bold">N {subTotal}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Delivery</p>
                            <p className="font-bold">N {delivery}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>VAT</p>
                            <p className="font-bold">N {vat}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Total</p>
                            <p className="font-bold">N {total}</p>
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
            <button type="button" className="rounded-md text-white self-center justify-self-center bg-cosmic-primary-color p-2 w-[250px]">Pay Now</button>
        </div>
    </>
  )
}

export default CheckOutPage