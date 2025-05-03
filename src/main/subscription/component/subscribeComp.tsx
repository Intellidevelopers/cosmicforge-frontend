import { Plans } from "../utils/planType"

const SubscribeComp = ({name,message,active,price,duration,offers,commission}:Plans) => {
  return (
    <div className={`w-[300px] h-[400px] overflow-hidden
                    flex flex-col gap-2 justify-between items-start p-6 
                    ${name === 'Premium' ? 'bg-cosmic-primary-color text-white' : 'bg-white text-black' }
                    rounded-md shadow-xl m-4`}>
        <div className="h-full overflow-hidden">
            <div className=" flex flex-col justify-center items-start  gap-1">
                <p className="text-lg font-bold">{name} Plan</p>
                <p className="text-xs">{message}</p>
            </div>
            <div className="flex flex-col justify-center items-start p-2 ">
                <p className="font-bold text-lg">N{price}<span className="text-sm font-regular"> /{duration}</span></p>
                {commission && <p className="text-xs italic">{commission}</p>}
            </div>
            <div className="max-h-[60%] overflow-auto">
                <ul className="list-disc overflow-auto">
                    {
                        offers.map((offer,index)=> (<li key={index} className=" text-xs list-inside">{offer}</li>)
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