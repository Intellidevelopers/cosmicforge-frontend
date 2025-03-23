import { useEffect, useState } from "react";
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar"
import HomeNavBar from "../../home/component/patient/HomeNavBar";
import { dummyProducts } from "../utils/dummyProducsList";
import CartItem from "../components/cart-item";
import { product } from "../components/product-card";
import { useNavigate } from "react-router-dom";


const CartPage = () => {

    const [cartItems, setCartItems] = useState<product[]|null>(null)
    const [subTotal, setSubTotal] = useState(0)
    const [delivery, setDelivery] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        setCartItems(dummyProducts)
    },[cartItems])

    useEffect(()=>{
        if(cartItems){
            let totalCost = 0;
            for (let index = 0; index < cartItems.length; index++) {
                const number =  Number(cartItems[index].price.replace(/,/g, ''))
                totalCost = totalCost + number
                setSubTotal(totalCost)
            }
        }
        setDelivery(3000)
    },[cartItems])

    useEffect(()=>{
        if(delivery && subTotal){
            setTotal(delivery + subTotal)
        }
    },[delivery,subTotal])

    const navigate = useNavigate()

  return (
    <>
    <HomeMobileNavBar title={'Cart'}/>
    <HomeNavBar title={'Cart'}/>
    <div>
        <div className="flex flex-col gap-2 p-2 md:ms-[250px] max-h-[85dvh] overflow-hidden">
            <div className="flex flex-col max-h-3/4 overflow-y-scroll">
                {cartItems && cartItems.map((item,index)=>(
                    <CartItem key={index} {...item}/>
                ))}
            </div>
            <div className="h-1/4 flex flex-col items-center shadow-md border p-4">
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
                        <p>Total</p>
                        <p className="font-bold">N{total}</p>
                    </div>
                </div>
                <button type="button" className="rounded-md text-white bg-cosmic-primary-color p-2 w-[250px]"
                onClick={()=>navigate('/patient/shop/checkout')}>Checkout</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default CartPage