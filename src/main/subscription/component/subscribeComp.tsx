import { Plans } from "../utils/planType"

const SubscribeComp = ({name,message,active,price,duration,offers,commission}:Plans) => {


  return (

    <div className={`w-[300px] min-h-[400px] 
                    flex flex-col gap-4 justify-between items-start p-6 
                    ${active ? 'bg-cosmic-primary-color text-white' : 'bg-white text-black' }
                    rounded-md shadow-xl m-2`}>




        <div className="h-full mt-2">


            <div className=" flex flex-col justify-center items-start  gap-3">
                <p className="text-lg font-bold">{name} Plan</p>
                <p className="font-light text-[14px] w-full min-h-[40px]">{message}</p>

            </div>


            <p className="mt-4 font-bold text-lg">N{price}<span className="text-sm font-regular font-light"> /{duration}</span></p>
          {
            commission &&  <p className={`${!active && 'text-cosmic-color-lightBlue'} text-sm font-light mt-2`}>{commission}% commission per consultation</p>
          }
          
            <div className="max-h-[70%] overflow-hidden mt-3">
                <ul className="list-disc mt-2">
                    {
                        offers.map((offer,index)=> (<li key={index} className=" text-[14px] list-inside  m-3 ">{offer}</li>)
                        )
                    }
                </ul>
            </div>
        </div>
        <button type="button" className={`opacity-100 ${active ? 'bg-white text-cosmic-primary-color' : 'bg-cosmic-primary-color text-white'} p-2 w-[150px] font-bold justify-self-end self-center rounded-md shadow-xl`}>{active ? 'Active' : 'Choose'} plan</button>
    </div>
  )
}

export default SubscribeComp