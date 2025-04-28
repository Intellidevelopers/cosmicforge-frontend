import { useSelector } from "react-redux"
import DoctorHomeNavBar from "../../home/component/doctor/DoctorHomeNavBar"
import DoctorNavBarMobile from "../../home/component/doctor/DoctorNavBarMobile"
import { RootReducer } from "../../store/initStore"
// import DoctorNavBarHome from "../../home/component/doctor/DoctorNavBarMobile"
import EarningsComp from "../components/earningsComp"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const Earnings = () => {

    // const user = useSelector((state: RootReducer) => state.user)

    const doctorWallet = useSelector((state: RootReducer) => state.doctorWallet)

    const [withdrawalHistories, setWithdrawalHistories] = useState<[{
        date: string,
        time: string,
        id: string,
        amount: string,
        status: "pending" | "success" | "failed",
        action: string
    }] | null>(null)





    const navigate = useNavigate()


    const formatAmout = (amount: number) => {
        if (amount) {
            amount = amount / 100
            return new Intl.NumberFormat().format(amount)
        }

        return 0
    }


    useEffect(() => {

        if (doctorWallet.wallet && doctorWallet.wallet.withdrawalHistories) {
            const formatedHistories = doctorWallet.wallet.withdrawalHistories.map((transaction) => {
                return {
                    date: new Date(transaction.date).toLocaleDateString('en-Us', {
                        dateStyle: 'medium'
                    }),
                    time: new Date(transaction.date).toLocaleTimeString('en-US', {
                        hour12: true
                    }),
                    id: transaction.withdrawalReferenceId,
                    amount: formatAmout(Number(transaction.withdrawAmount)),
                    status: transaction.transferStatus,
                    action: 'details'
                }
            }) as [{
                date: string,
                time: string,
                id: string,
                amount: string,
                status: "pending" | "success" | "failed",
                action: string
            }] | null

            setWithdrawalHistories(formatedHistories)
        }



    }, [doctorWallet])



    return (
        <div className="">
            <DoctorHomeNavBar title="Earnings" />
            <DoctorNavBarMobile title="Earnings" />
            <div className="rounded-md shadow-md md:m-4 h-full ">
                <p className="font-bold text-left px-4">Earnings & Withdrawal</p>
                <div className="flex justify-between shadow-md p-4 mt-2">
                    <div className="flex flex-col">
                        <p className="text-sm">Current Balance</p>
                        <p className="font-bold">N{doctorWallet.wallet?.amount ? formatAmout(doctorWallet.wallet?.amount!!) : 0}</p>
                    </div>
                    <button type="button" className="rounded-md bg-cosmic-primary-color text-white p-2" onClick={() => {

                        navigate('/doctor/withdrawal')
                    }}>Withdraw</button>
                </div>


                <div className="block max-h-[70vh] overflow-scroll">
                    <table className="rounded-md shadow-md p-4 w-full">
                        <thead className="w-full bg-slate-400">
                            <tr className="my-4 ">
                                <th>Withdrawal</th>
                                <th>Invoice ID</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            { withdrawalHistories && withdrawalHistories.map((data, index) => (
                                <EarningsComp key={index} {...data} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Earnings