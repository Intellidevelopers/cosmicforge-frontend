import { useState, useMemo } from "react"
import { useSelector } from "react-redux"
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar"
import HomeNavBar from "../../home/component/patient/HomeNavBar"
import { RootReducer } from "../../store/initStore"
import SubscribeComp from "../component/subscribeComp"


const PatientSubscribe = () => {

  const [subcriptions,setSubscriptions] = useState<{
    name:string;
    message:string;
    price:string;
    duration:string;
    active:boolean;
    offers:string[];
    commission:number | undefined
}[]| null>()

const subcription = useSelector((state:RootReducer)=>state.subscription.userSubcription)


useMemo(()=>{

  if(subcription){

    
  const formatedSubscriptionDetails =subcription.generalSubscriptionDetails?.map((plan)=>{

  return {
    name:plan.name,
    message:plan.message,
    price:plan.price,
    duration:plan.duration,
    active: plan.name === (subcription.planName?? 'Free'),
    offers:plan.offers,
    commission:plan.commission
  }
 }) 

  setSubscriptions(formatedSubscriptionDetails)
    

  }
 
},[subcription])

  return (
    <div>
        <HomeNavBar title={'Subscription'} onSearchFired={()=>{}}/>
        <HomeMobileNavBar title={'Subscription'} onSearchFired={()=>{}}/>
        <div className="flex  items-center flex-wrap">
          {subcriptions?.map((plan,index)=>(
            <SubscribeComp key={index} {...plan}/>
          ))}
        </div>
    </div>
  )
}

export default PatientSubscribe