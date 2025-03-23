import { useState } from "react"
import { product } from "./product-card"
import QuantityComponent from "./quantityComponent"




const CartItem = (item:product) => {

    const [quantity,setQuantity] = useState(1)

    const changeQuantity = (action:string)=>{
        if (action === 'i') {
          setQuantity(()=>quantity+1)
        } else {
          if(quantity>1){
            setQuantity(quantity-1)
          }
        }
      }

  return (
    <div className="h-[100px] w-full flex justify-between p-4 border">
        <div className="flex gap-1 md:gap-2">
            <img src={item.image} alt={item.title} />
            <div className="flex flex-col gap-2 md:gap-4">
                <p className="text-sm md:text-regular font-bold xs:max-w-[100px] truncate">{item.title}</p>
                <p className="text-cosmic-primary-color text-sm md:text-regular font-bold">N{item.price}</p>
            </div>
        </div>
        <div className="flex flex-col justify-between items-center">
            <p className="text-sm text-slate-400">Remove</p>
            <QuantityComponent quantity={quantity} changeQuantity={changeQuantity}/>
        </div>
    </div>
  )
}

export default CartItem