import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar"
import HomeNavBar from "../../home/component/patient/HomeNavBar"
import SubscribeComp from "../component/subscribeComp"
import { patientPlans } from "../utils/patient.plans"

const PatientSubscribe = () => {

  return (
    <div>
        <HomeNavBar title={'Subscription'} onSearchFired={()=>{}}/>
        <HomeMobileNavBar title={'Subscription'} onSearchFired={()=>{}}/>
        <div className="flex justify-start  items-center flex-wrap">
          {patientPlans.map((plan,index)=>(
            <SubscribeComp key={index} {...plan}/>
          ))}
        </div>
    </div>
  )
}

export default PatientSubscribe