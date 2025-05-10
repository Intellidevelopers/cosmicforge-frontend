import { useMemo, useState } from "react"
import DoctorHomeNavBar from "../../home/component/doctor/DoctorHomeNavBar"
import DoctorNavBarMobile from "../../home/component/doctor/DoctorNavBarMobile"
import SubscribeComp from "../component/subscribeComp"
import { useSelector } from "react-redux"
import { RootReducer } from "../../store/initStore"

const DoctorSubscribe = () => {

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
      active: plan.name === subcription.planName,
      offers:plan.offers,
      commission:plan.commission
    }
   }) 

    setSubscriptions(formatedSubscriptionDetails)
      

    }
   
  },[subcription])

  return (
    <div className="overflow-y-auto mb-8">
        <DoctorHomeNavBar title="Subscription" />
        <DoctorNavBarMobile title="Subscription" />
        <div className="flex justify-center md:justify-start  flex-wrap">
          {subcriptions?.map((plan,index)=>(
            <SubscribeComp key={index} {...plan}/>
          ))}
        </div>
    </div>
  )
}

export default DoctorSubscribe