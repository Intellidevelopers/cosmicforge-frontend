import { useEffect, useState } from "react"
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar"
import HomeNavBar from "../../home/component/patient/HomeNavBar"
import { dummyCards } from "../utils/dummyCardList";
import { useNavigate } from "react-router-dom";

export interface card{
  // id:number;
  image:string;
  cardNumber:number;
  cvv:number;
  expDate:string;
}

const CardPayment = () => {

      const navigate = useNavigate()
      const [subTotal, setSubTotal] = useState(0)
      const [delivery, setDelivery] = useState(0)
      const [total, setTotal] = useState(0)
      const [vat, setVat] = useState(0)

      useEffect(()=>{
              setVat(1000.00)
              setSubTotal(9000.00)
              setDelivery(5000.00)
          },[])

      useEffect(()=>{
        if(delivery&&subTotal&&vat){
            setTotal(vat+subTotal+delivery)
        }
      },[delivery,subTotal,vat])
          
  return (
    <>
        <HomeMobileNavBar title={'Card Payment'}/>
        <HomeNavBar title={'Card Payment'}/> 
        <div className="md:ms-[250px] flex flex-col h-[80%]">
          <div  className='bg-white shadow-md rounded-md m-4'>
            <div className="flex flex-col w-full p-4">
              <div className="flex justify-between">
                  <p>Sub Total</p>
                  <p className="font-bold">N{subTotal}</p>
              </div>
              <div className="flex justify-between">
                  <p>Delivery</p>
                  <p className="font-bold">N{delivery}</p>
              </div>
              <div className="flex justify-between">
                  <p>VAT</p>
                  <p className="font-bold">N{vat}</p>
              </div>
              <div className="flex justify-between">
                  <p>Total</p>
                  <p className="font-bold">N{total}</p>
              </div>
            </div>
          </div>
          <div className="m-4 p-4 flex flex-col gap-4 ">
            <p className="font-bold">Saved Cards</p>
            <div className='flex gap-8 overflow-hidden w-full'>
              {dummyCards.map((card,index)=>(
                <img alt={'card'} key={index} src={card.image}/>
              ))}
            </div>
            <div title="Add Card" className="flex self-end justify-center items-center cursor-pointer bg-cosmic-primary-color w-4 h-4 rounded-full p-4"
              onClick={()=>{navigate('/patient/shop/add-card')}}
            >
              <i className="fas fa-plus text-white"></i>
            </div>
          </div>
          <button type="button" className="rounded-md self-center justify-self-end text-white bg-cosmic-primary-color p-2 w-[250px]"
                onClick={()=>navigate('/verify-payment')}>Continue</button>
        </div>
    </>
  )
}

export default CardPayment