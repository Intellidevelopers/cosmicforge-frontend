import { PaystackButton } from "react-paystack"
import { Plans } from "../utils/planType"
import { useSelector } from "react-redux"
import { RootReducer } from "../../store/initStore"
import { updateSubscriptionPlan } from "../service"

const SubscribeComp = ({ name, message, active, price, duration, offers, commission }: Plans) => {

const user = useSelector((state:RootReducer)=>state.user)
  return (

    <div className={`w-[300px] min-h-[600px] 
                    flex flex-col gap-4 justify-between items-start p-6 
                    ${active ? 'bg-cosmic-primary-color text-white' : 'bg-white text-black'}
                    rounded-md shadow-xl m-2`}>




      <div className="h-full mt-2">


        <div className=" flex flex-col justify-center items-start  gap-3">
          <p className="text-lg font-bold">{name} Plan</p>
          <p className="font-light text-[14px] w-full min-h-[40px]">{message}</p>

        </div>


        <p className="mt-4 font-bold text-lg">N{price}<span className="text-sm font-regular font-light"> /{duration}</span></p>
        {
          commission && <p className={`${!active && 'text-cosmic-color-lightBlue'} text-sm font-light mt-2`}>{commission}% commission per consultation</p>
        }

        <div className="max-h-[70%] overflow-hidden mt-3">
          <ul className="list-disc mt-2">
            {
              offers.map((offer, index) => (<li key={index} className=" text-[14px] list-inside  m-3 ">{offer}</li>)
              )
            }
          </ul>
        </div>
      </div>
      <PaystackButton disabled={active}    publicKey="pk_test_5064b4c81898b5c11f082d5fbabe15b2d00bfb07"  onSuccess={async(e)=>{

        if(e.reference){
        try {
          const result= await  updateSubscriptionPlan(user.data?.token!!,e.reference,name)

          alert(JSON.stringify(result))
          
        } catch (error) {
          alert(JSON.stringify(error))
        }
        }

      }}    amount={Number(price.replace(/[,a-zA-Z]/g,''))*100} email={user.data?.email!!}  className={`opacity-100 ${active ? 'bg-white text-cosmic-primary-color' : 'bg-cosmic-primary-color text-white'} p-2 w-[150px] font-bold justify-self-end self-center rounded-md shadow-xl`}>{active ? 'Active' :  'Choose'} plan</PaystackButton>
    </div>
  )
}

export default SubscribeComp