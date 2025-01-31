
import cartImage from '../../../assets/icons/cosmic-cart-white-s-icon.svg'

    export interface WellnessProductCardProps  {
  productImage:string,
  productTitle:string,
  productDescription:string,
  productPrice:string
}



const WellnessProductCard = ( {
  productImage,
  productTitle,
  productDescription,
  productPrice
}:WellnessProductCardProps) => {


    return (
        <div  className="m-2 bg-white  min-w-[300px] h-[320px] flex justify-center p-4 ">
        <div className="relative">
         <img className="min-h-[180px] max-h-[180px]"  src={productImage ?? '/'} />
         <div className="mt-1">
         <p className="font-semibold">{productTitle}</p>
         </div>
         <p className="font-light">{productDescription}</p>
         <p className="font-light text-nowrap overflow-x-hidden text-ellipsis w-[100%]">Lagos, Zenith Pharmacy</p>
       <div className="mt-3 flex text-white">
         <p className="text-cosmic-primary-color p-1 min-w-[200px]">{productPrice}</p>
         <div className="bg-cosmic-primary-color absolute right-0 min-w-[80px] rounded-sm font-light text-white flex justify-evenly">
            <p>Cart</p>
            <img className='' alt='cart' src={cartImage}/>
         </div>
       </div>
        </div>

     </div>
    )
}
export default  WellnessProductCard