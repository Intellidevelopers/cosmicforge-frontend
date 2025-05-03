import { useEffect, useState } from "react"
//import { useNavigate } from "react-router-dom"

import incomingPic from '../../../assets/images/featureIncoming.png'

import Loader from "../../generalComponents/Loader"
import WithdrawalSubmitted from "./withdrawalSubmitted"
import { useSelector } from "react-redux"
import { RootReducer, store } from "../../store/initStore"
import { getBanks, verifyAccount, withdrawBalance } from "../service"
import { updateDoctorWallet } from "../../store/reducers/doctorWalletReducer"

const Withdrawal = () => {

    const [withdrawalMethod, setWithdrawalMethod] = useState('bank')

    const user = useSelector((state: RootReducer) => state.user)


    const [withdeawalDetails, setWithdrawalDetails] = useState<{ amount: string, currency: 'NGN' | 'USD', accountNumber: string, accountName: string, reference?: string, bankCode: string }>({
        amount: '',
        currency: 'NGN',
        accountName: '',
        accountNumber: '',
        bankCode: ''



    })

    const walletBallance = useSelector((state: RootReducer) => state.doctorWallet)

    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState<boolean>(false)

    const [banks, setBanks] = useState<{
        data: [{
            id: number,
            name: string,
            slug: string,
            code: string,
            longcode: string,
            gateway: any,
            pay_with_bank: boolean,
            supports_transfer: boolean,
            active: boolean,
            country: string,
            currency: string,
            type: string,
            is_deleted: boolean,
        }]
    }>()

    const [transactionProcessed, setTrasactionProcessed] = useState<boolean>(false)




    useEffect(() => {
        (async () => {
            try {

                let banks: {
                    data: [{
                        id: number,
                        name: string,
                        slug: string,
                        code: string,
                        longcode: string,
                        gateway: any,
                        pay_with_bank: boolean,
                        supports_transfer: boolean,
                        active: boolean,
                        country: string,
                        currency: string,
                        type: string,
                        is_deleted: boolean,
                    }]
                } = (await getBanks(user.data?.token!!)).data

                const d = banks.data.filter(bank => {
                    return bank.supports_transfer === true
                }) as [{
                    id: number,
                    name: string,
                    slug: string,
                    code: string,
                    longcode: string,
                    gateway: any,
                    pay_with_bank: boolean,
                    supports_transfer: boolean,
                    active: boolean,
                    country: string,
                    currency: string,
                    type: string,
                    is_deleted: boolean,
                }]

                setBanks({ data: d })
                setWithdrawalDetails({ ...withdeawalDetails, bankCode: banks.data[0].code!! })

            } catch (error) {

            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {

                if (withdeawalDetails.bankCode && withdeawalDetails.accountNumber) {
                    const validAccountDetails = await verifyAccount(user.data?.token!!, withdeawalDetails.accountNumber, withdeawalDetails.bankCode)
                    setWithdrawalDetails({ ...withdeawalDetails, accountName: validAccountDetails.data.data.account_name })
                }

            } catch (error) {
                setWithdrawalDetails({ ...withdeawalDetails, accountName: 'Not a valid account.' })

            }

        })()

    }, [withdeawalDetails.bankCode])


    return (
        <div className="w-screen h-screen flex justify-center items-center relative">

            <div className="absolute">
                {
                    transactionProcessed && <WithdrawalSubmitted />
                }
            </div>
            <div className="max-w-[800px] h-fit items-center justify-center w-full gap-4 flex flex-col p-4 shadow-md shadow-black rounded-md">
                <p className="font-bold text-lg px-8 self-start" >Withdrawal</p>
                <div className="flex justify-around  gap-4 border-b-2 w-full">
                    <p onClick={() => setWithdrawalMethod('bank')} className={`font-bold p-2 ${withdrawalMethod === 'bank' ? 'border-b-2 border-cosmic-primary-color' : 'border-none'}`}>Bank</p>
                    <p onClick={() => setWithdrawalMethod('cryptocurrency')} className={`font-bold p-2 ${withdrawalMethod === 'cryptocurrency' ? 'border-b-2 border-cosmic-primary-color' : 'border-none'}`}>Cryptocurrency</p>
                </div>
                <div className="w-full">
                    {
                        withdrawalMethod === 'bank' ? (
                            <div className="w-full space-y-4">
                                <div className="flex w-full flex-col">
                                    <label className="font-bold" htmlFor="amount">Amount</label>
                                    <input className="min-w-full border p-2" value={withdeawalDetails.amount} title="amount" type="text" name="amount" onChange={(e) => {


                                        setWithdrawalDetails({ ...withdeawalDetails, amount: new Intl.NumberFormat().format(Number(e.target.value.replace(/[a-z A-Z,]/g, ''))) })
                                    }} />
                                </div>


                                <div className="flex w-full flex-col">
                                    <label className="font-bold" htmlFor="currency">Currency</label>


                                    <select className="min-w-full border p-2 text-right" value={withdeawalDetails.currency} onChange={(e) => {
                                        setWithdrawalDetails({ ...withdeawalDetails, currency: e.target.value as 'NGN' | 'USD' })

                                    }}>
                                        <option>NGN</option>
                                        <option>USD</option>
                                    </select>
                                </div>

                                <div className="flex w-full flex-col gap-2">
                                    <label className="font-bold" htmlFor="account">Account</label>
                                    <input className="min-w-full border p-2" value={withdeawalDetails.accountNumber} title="account no" type="text" placeholder="Account NO" name="account no" onChange={async (e) => {

                                        if (e.target.value.length <= 10)
                                            setWithdrawalDetails({ ...withdeawalDetails, accountNumber: e.target.value.replace(/[a-z,A-Z,./<>:";{[±!@£$%^&*()}_+#€∞§]/g, '') })


                                    }} />


                                    <select className="min-w-full border p-2" name="bank" onChange={async (e) => {
                                        setWithdrawalDetails({ ...withdeawalDetails, bankCode: banks?.data.find(bank => bank.name === e.target.value)?.code!! })



                                    }}>
                                        {
                                            banks && banks.data.length && banks.data.length > 0 && banks.data.map((bank, index) => (
                                                <option key={index}>{bank.name}</option>

                                            ))
                                        }
                                    </select>


                                    <input className="min-w-full border p-2" value={withdeawalDetails.accountName} title="account name" type="text" placeholder="Account Name" name="account name" onChange={() => {

                                        // setWithdrawalDetails({ ...withdeawalDetails, accountName: e.target.value.replace(/[0-9,./<>:";{[±!@£$%^&*()}_+#€∞§]/g, '') })

                                    }} />
                                </div>
                                <div className="flex w-full flex-col">
                                    <label className="font-bold" htmlFor="reference">Reference</label>
                                    <input className="min-w-full border p-2" title="reference" type="text" placeholder="Description (optional)" name="reference" onChange={(e) => {
                                        setWithdrawalDetails({ ...withdeawalDetails, reference: e.target.value })

                                    }} />
                                </div>

                                <div className="w-full flex justify-center">


                                    {
                                        errorMessage && <p className="text-red-600">{errorMessage}</p>
                                    }

                                    {
                                        loading && <Loader size="40px" />
                                    }

                                </div>
                            </div>
                        ) : (


                            /*<div className="w-full space-y-4">
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
                                    <input className="min-w-[50%] border p-2 text-right" title="amount" type="number" name="amount" placeholder="0.00 BTC" />
                                    <input className="min-w-[50%] border p-2 text-right" title="amount" type="number" name="amount" placeholder="$0.00 USD" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col">
                                <div className="flex justify-between">
                                    <label className="font-bold" htmlFor="to">To</label>
                                    <p className="font-bold">Add New</p>
                                </div>
                                <input className="min-w-full border p-2" title="To" type="text" placeholder="BTC Address" name="to" />
                            </div>
                            <div className="flex w-full flex-col">
                                <label className="font-bold" htmlFor="reference">Reference</label>
                                <input className="min-w-full border p-2" title="reference" type="text" placeholder="Description (optional)" name="reference" />
                            </div>
                        </div>*/




                            <div className='flex flex-col gap-4  absolute md:relative h-full justify-center   items-center  w-full '>
                                <div className="relative w-[300px] flex justify-center items-center">
                                    <img src={incomingPic} alt="Feature unavailable" className='relative z-1' />
                                    <div className="absolute w-full h-20  left-0 bottom-0 z-10 bg-gradient-to-t from-white to-transparent"></div>
                                </div>
                                <p className='text-center'>We are currently working on bringing this feature to you</p>


                            </div>

                        )
                    }
                </div>
                <div className="flex justify-around gap-8">
                    <button type="button" className='rounded-md text-white bg-cosmic-primary-color py-2 px-4 opacity-50'>Cancel</button>
                    <button type="button" className='rounded-md text-white bg-cosmic-primary-color py-2 px-4' onClick={async () => {


                        if (withdrawalMethod === 'bank') {


                            setErrorMessage('')


                            const isNotDataComplete = Object.entries(withdeawalDetails).some(([_, value]) => {

                                return !value || value === "" || value === undefined || value === null
                            })

                            if (isNotDataComplete) {
                                setErrorMessage('Please fill all details as they are required to continue.')
                                return
                            }

                            let amountToWithdraw = Number(withdeawalDetails.amount.replace(/,/g, '')) * 100






                            if (walletBallance && walletBallance.wallet && amountToWithdraw > walletBallance.wallet.amount) {
                                setErrorMessage('Insufficient fund on wallet.')
                                return
                            }
                            setErrorMessage('')
                            setLoading(true)

                            try {
                                const withdrawResponse = await withdrawBalance(user.data?.token!!, 'nuban', withdeawalDetails.accountName, withdeawalDetails.accountNumber, withdeawalDetails.bankCode, 'NGN', amountToWithdraw.toString())
                                setLoading(false)

                                if (withdrawResponse.status === 200) {
                                    setTrasactionProcessed(true)
                                    setLoading(false)
                                    store.dispatch(updateDoctorWallet({ wallet: withdrawResponse.data }))
                                }


                            } catch (error: any) {
                                setLoading(false)
                                alert(error.message)
                            }

                        }



                    }}>Withdraw</button>
                </div>
            </div>
        </div>

    )
}

export default Withdrawal