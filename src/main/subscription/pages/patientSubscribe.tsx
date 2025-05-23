import { useState, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar"
import HomeNavBar from "../../home/component/patient/HomeNavBar"
import { RootReducer } from "../../store/initStore"
import SubscribeComp from "../component/subscribeComp"
import { updateCurrencyMode } from "../../store/reducers/subscriptionReducer"


const PatientSubscribe = () => {

  const [subcriptions, setSubscriptions] = useState<{
    name: string;
    message: string;
    price: string;
    duration: string;
    active: boolean;
    offers: string[];
    commission: number | undefined,
    usdPrice: string
  }[] | null>()

  const subcription = useSelector((state: RootReducer) => state.subscription.userSubcription)
  const subscriptionCurrencyMode = useSelector((state: RootReducer) => state.subscription.currentCurrencyMode)
  const dispatch = useDispatch()

  const [openAlertModal, setOpenAlertModal] = useState(false)

  useMemo(() => {

    if (subcription) {


      const formatedSubscriptionDetails = subcription.generalSubscriptionDetails?.map((plan) => {

        return {
          name: plan.name,
          message: plan.message,
          price: plan.price,
          duration: plan.duration,
          active: plan.name === (subcription.planName ?? 'Free'),
          offers: plan.offers,
          commission: plan.commission,
          usdPrice: plan.usdPrice
        }
      })

      setSubscriptions(formatedSubscriptionDetails)


    }

  }, [subcription])

  return (
    <div>
      <HomeNavBar title={'Subscription'} onSearchFired={() => { }} />
      <HomeMobileNavBar title={'Subscription'} onSearchFired={() => { }} />


      <p className="m-5 bg-white w-fit p-3 shadow-md rounded-md cursor-default" onClick={() => {
        dispatch(updateCurrencyMode({ currentCurrencyMode: (subscriptionCurrencyMode === 'NGN') ? 'USD' : 'NGN' }))
      }}>change to {subscriptionCurrencyMode === 'NGN' ? 'USD' : 'NGN'}</p>


      <div className={`${openAlertModal ? 'flex' : 'hidden'} absolute h-screen w-screen bg-black bg-opacity-15 top-0   md:ps-[25%] justify-center md:justify-normal place-items-center  cursor-default`}>


        <div className="w-[400px] h-[400px] bg-white shadow-md rounded-md flex justify-center place-items-center p-3 relative ">

          <i className="fa fa-x absolute top-4 right-8 hover:text-red-600" onClick={() => {
            setOpenAlertModal(false)
          }} />
          <p className="font-poppins leading-8"> Payment through USD is not supported at the main time. We are currently working on it.</p>
        </div>



      </div>




      <div className="flex  items-center justify-center md:justify-start flex-wrap">
        {subcriptions?.map((plan, index) => (
          <SubscribeComp key={index} plan={plan} onAlertScreenPopUp={() => {
            setOpenAlertModal(true)
          }} />
        ))}
      </div>
    </div>
  )
}

export default PatientSubscribe