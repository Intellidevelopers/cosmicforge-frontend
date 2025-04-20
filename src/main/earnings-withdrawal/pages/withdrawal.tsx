import { useState } from "react"

const Withdrawal = () => {

    const [withdrawalMethod,setWithdrawalMethod] = useState('bank')

  return (
    <div className="w-screen h-screen flex justify-center items-center">
        <div className="max-w-[800px] h-fit items-center justify-center w-full gap-4 flex flex-col p-4 shadow-md">
            <p className="font-bold text-lg px-8 self-start">Withdrawal</p>
            <div className="flex justify-around  gap-4 border-b-2 w-full">
                <p onClick={()=>setWithdrawalMethod('bank')} className={`font-bold p-2 ${withdrawalMethod === 'bank' ? 'border-b-2 border-cosmic-primary-color' : 'border-none'}`}>Bank</p>
                <p onClick={()=>setWithdrawalMethod('cryptocurrency')} className={`font-bold p-2 ${withdrawalMethod === 'cryptocurrency' ? 'border-b-2 border-cosmic-primary-color' : 'border-none'}`}>Cryptocurrency</p>
            </div>
            <div className="w-full">
                {
                    withdrawalMethod === 'bank'? (
                        <div className="w-full space-y-4">
                            <div className="flex w-full flex-col">
                                <label className="font-bold" htmlFor="amount">Amount</label>
                                <input className="min-w-full border p-2" title="amount" type="number" name="amount"/>
                            </div>
                            <div className="flex w-full flex-col">
                                <label className="font-bold" htmlFor="currency">Currency</label>
                                <input className="min-w-full border p-2 text-right" title="currency" type="text" name="currency"  placeholder="'$0.00 USD"/>
                            </div>
                            <div className="flex w-full flex-col gap-2">
                                <label className="font-bold" htmlFor="account">Account</label>
                                <input className="min-w-full border p-2" title="account no" type="text" placeholder="Account NO" name="account no"/>
                                <input className="min-w-full border p-2" title="bank" type="text" placeholder="Bank" name="bank"/>
                                <input className="min-w-full border p-2" title="account name" type="text" placeholder="Account Name" name="account name"/>
                            </div>
                            <div className="flex w-full flex-col">
                                <label className="font-bold" htmlFor="reference">Reference</label>
                                <input className="min-w-full border p-2" title="reference" type="text" placeholder="Description (optional)" name="reference"/>
                            </div>
                        </div>
                    ):(
                        <div className="w-full space-y-4">
                            <div className="flex w-full flex-col">
                                <label className="font-bold" htmlFor="cryptocurrency">I want to send</label>
                                <select name="cryptocurrency" title="Choose cryptocurrency" className="p-2 border border-black">
                                    <option value="Bitcion">Bitcoin</option>
                                    <option value="Ethereum">Ethereum</option>
                                    <option value="Solana">Solana</option>
                                </select>
                            </div>
                            <div className="flex w-full flex-col">
                                <label className="font-bold" htmlFor="amou w-fullnt">Amount</label>
                                <div className="flex min-w-full">
                                    <input className="min-w-[50%] border p-2 text-right" title="amount" type="number" name="amount" placeholder="0.00 BTC"/>
                                    <input className="min-w-[50%] border p-2 text-right" title="amount" type="number" name="amount" placeholder="$0.00 USD"/>
                                </div>
                            </div>
                            
                            <div className="flex w-full flex-col">
                                <div className="flex justify-between">
                                    <label className="font-bold" htmlFor="to">To</label>
                                    <p className="font-bold">Add New</p>
                                </div>
                                <input className="min-w-full border p-2" title="To" type="text" placeholder="BTC Address" name="to"/>
                            </div>
                            <div className="flex w-full flex-col">
                                <label className="font-bold" htmlFor="reference">Reference</label>
                                <input className="min-w-full border p-2" title="reference" type="text" placeholder="Description (optional)" name="reference"/>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="flex justify-around gap-8">
                <button type="button" className='rounded-md text-white bg-cosmic-primary-color py-2 px-4 opacity-50'>Cancel</button>
                <button type="button" className='rounded-md text-white bg-cosmic-primary-color py-2 px-4'>Withdraw</button>
            </div>
        </div>
    </div>

  )
}

export default Withdrawal