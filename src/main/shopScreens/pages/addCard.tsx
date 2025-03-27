import {  useState } from "react"
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar"
import HomeNavBar from "../../home/component/patient/HomeNavBar"
import card from '../../../assets/images/card-black.png'
import { useNavigate } from "react-router-dom"

interface CardDetails  {
    cardNumber:number;
    cardName:string;
    cvv:number;
    expDate:Date|null;
}

const AddCard = () => {

    const navigate = useNavigate()
    const[saveCard,setSaveCard] = useState(false)
    const [cardDetails,setCardDetails] = useState<CardDetails>({
        cardNumber:1234,
        cardName:'John Doe',
        cvv:123,
        expDate:null
    })
 

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target
        setCardDetails({...cardDetails,[name]:value})
    }
    const isFormInvalid = ()=>{
        if((cardDetails.cardNumber !== 1234) && (cardDetails.cardName !== 'John Doe') && (cardDetails.cvv !== 123) && (cardDetails.expDate !== null) ){
            return false
        } else{
            return true
        }
    }

  return (
    <>
        <HomeMobileNavBar title={'Add Card'}/>
        <HomeNavBar title={'Add Card'}/>
        <div className="md:ms-[250px] flex flex-col bg-white p-8 space-y-8 h-[85%]"> 
            <img src={card} alt="Add Card" className="w-fit"/>
            <div className="flex w-full flex-col gap-4">
                <div>
                    <label htmlFor="cardDetails.cardNumber" className="font-bold">Card NO</label>
                    <input onChange={handleChange} className="border-2 border-slate-400 rounded-md p-1 w-full" type="number" name="cardNumber" placeholder="***** **** 1234"/>
                </div>
                <div>
                    <label htmlFor="cardName" className="font-bold">Card Name</label>
                    <input onChange={handleChange} className="border-2 border-slate-400 rounded-md p-1 w-full" type="text" name="cardName" placeholder="John Doe"/>
                </div>
                <div className="flex w-full gap-8">
                    <div className="flex flex-col">
                        <label htmlFor="expDate" className="font-bold">EXP Date</label>
                        <input onChange={handleChange} className="border-2 border-slate-400 rounded-md p-1 w-full " type="date" name="expDate" placeholder="12/12/1234"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="cvv" className="font-bold">CVV</label>
                        <input onChange={handleChange} className="border-2 border-slate-400 rounded-md p-1 w-full " type="number" name="cvv" placeholder="123"/>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p>Save Card</p>
                    <div className={"rounded-full border-2 min-w-8 h-4 " + (saveCard && 'bg-black')}
                        onClick={()=>{setSaveCard(!saveCard)}}    
                        >
                        <div className={`rounded-[50%]  w-3 h-3 ${saveCard ? 'translate-x-[100%] bg-white' : 'bg-black'}`}></div>
                    </div>
                </div>
            </div>
            <button type="button" className={`rounded-md self-center justify-self-end text-white  p-2 w-[250px] ${cardDetails===null ? ' bg-gray-500 ' : ' bg-cosmic-primary-color '}`}
                onClick={()=>{navigate('/verify-payment');console.log(cardDetails)}}
                disabled={isFormInvalid()}
                >Continue</button>
        </div>
    </>
    )
}

export default AddCard