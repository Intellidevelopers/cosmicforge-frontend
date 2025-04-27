import { useSelector } from "react-redux"
import DoctorHomeNavBar from "../../home/component/doctor/DoctorHomeNavBar"
import DoctorNavBarMobile from "../../home/component/doctor/DoctorNavBarMobile"
import { RootReducer } from "../../store/initStore"
// import DoctorNavBarHome from "../../home/component/doctor/DoctorNavBarMobile"
import EarningsComp from "../components/earningsComp"
import { tableData } from "../utils/earnings.utils"
import { useNavigate } from "react-router-dom"

const Earnings = () => {

   // const user = useSelector((state: RootReducer) => state.user)

    const doctorWallet = useSelector((state: RootReducer) => state.doctorWallet)

    const navigate = useNavigate()


    const formatAmout = (amount: number) => {
        if (amount) {
            amount = amount / 100
            return new Intl.NumberFormat().format(amount)
        }

        return 0
    }
    return (
        <div>
            <DoctorHomeNavBar title="Earnings" />
            <DoctorNavBarMobile title="Earnings" />
            <div className="rounded-md shadow-md m-4 h-full ">
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
                            {tableData.map((data, index) => (
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