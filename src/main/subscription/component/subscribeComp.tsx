import { Plans } from "../utils/planType"

const SubscribeComp = ({name,message,active,price,duration,offers}:Plans) => {
  return (
    <div className={`w-[300px] h-[350px] 
                    flex flex-col gap-4 justify-between items-start p-6 
                    ${name === 'Premium' ? 'bg-cosmic-primary-color text-white' : 'bg-white text-black' }
                    rounded-md shadow-xl m-4`}>
        <div className="h-full">
            <div className=" flex flex-col justify-center items-start  gap-1">
                <p className="text-lg font-bold">{name} Plan</p>
                <p>{message}</p>
            </div>
            <p className="font-bold text-lg">N{price}<span className="text-sm font-regular"> /{duration}</span></p>
            <div className="max-h-[70%] overflow-hidden">
                <ul className="list-disc">
                    {
                        offers.map((offer,index)=> (<li key={index} className=" text-sm list-inside">{offer}</li>)
                        )
                    }
                </ul>
            </div>
        </div>
        <button type="button" className={`opacity-100 ${name === 'Premium' ? 'bg-white text-cosmic-primary-color' : 'bg-cosmic-primary-color text-white'} p-2 w-[150px] font-bold justify-self-end self-center rounded-md shadow-xl`}>{active ? 'Active' : 'Choose'} plan</button>
    </div>
  )
}

export default SubscribeComp