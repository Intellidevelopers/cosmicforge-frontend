import DoctorHomeNavBar from "../../home/component/doctor/DoctorHomeNavBar"
import DoctorNavBarMobile from "../../home/component/doctor/DoctorNavBarMobile"
import SubscribeComp from "../component/subscribeComp"
import { DoctorPlans } from "../utils/doctorPlans"

const DoctorSubscribe = () => {

  return (
    <div className="overflow-y-auto mb-8">
        <DoctorHomeNavBar title="Subscription" />
        <DoctorNavBarMobile title="Subscription" />
        <div className="flex justify-start items-center flex-wrap">
          {DoctorPlans.map((plan,index)=>(
            <SubscribeComp key={index} {...plan}/>
          ))}
        </div>
    </div>
  )
}

export default DoctorSubscribe