
import tempProductImage from '../../../assets/images/cosmic-wellness-product-temp.svg'
import cartImage from '../../../assets/icons/cosmic-cart-white-s-icon.svg'


const WellnessProductCard = () => {


    return (
        <div className="m-2 bg-white  min-w-[300px] h-[320px] flex justify-center p-4 ">
               
        <div className="relative">
         <img className="min-h-[180px] max-h-[180px]"  src={tempProductImage} />
         <div className="mt-1">
         <p className="font-semibold">Ibuprofen 400mg</p>
         </div>
         <p className="font-light">100 tablets</p>
         <p className="font-light text-nowrap overflow-x-hidden text-ellipsis w-[100%]">Lagos, Zenith Pharmacy</p>
       <div className="mt-3 flex text-white">
         <p className="text-cosmic-primary-color p-1 min-w-[200px]">N 3,500</p>
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