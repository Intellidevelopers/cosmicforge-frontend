import { useParams } from "react-router-dom"
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar"
import HomeNavBar from "../../home/component/patient/HomeNavBar"
import { dummyProducts } from "../utils/dummyProducsList"
import { useEffect, useState } from "react"
import { product } from "../components/product-card"
import image from '../../../assets/images/fireStation.png';
import CartButton from "../components/cartButton"
import QuantityComponent from '../components/quantityComponent';
import { useNavigate } from "react-router-dom"

const DetailsPage = () => {

  const {product} = useParams<{product:string}>()
  const [shopProduct,setShopProduct] = useState<product | null>(null)
  const [fetchedProducts, setFetchedProducts] = useState<product[] | null>(null)
  const [quantity,setQuantity] = useState<number>(1)
  const navigate = useNavigate()


  useEffect(()=>{
    setFetchedProducts(dummyProducts)
  }, [])

  const changeQuantity = (action:string)=>{
    if (action === 'i') {
      setQuantity(()=>quantity+1)
    } else {
      if(quantity>1){
        setQuantity(quantity-1)
      }
    }
  }

  useEffect(()=>{
    if(product && fetchedProducts){
      const p:product |undefined = fetchedProducts.find(item=>item.title === product)
      if(p !== undefined){
        setShopProduct(p)
      }
    }
  }, [product,fetchedProducts])


  // useEffect(()=>{
  //   if(shopProduct){
  //     console.log(shopProduct)
  //   }
  // },[shopProduct])

  return (
    <>
      <HomeMobileNavBar title={'Details'}/>
      <HomeNavBar title={'Details'}/>
      <div className=" w-full md:w-[70%] lg:w-[75%] gap-4 flex flex-col md:flex-row justify-between md:items-start items-center p-4">
        <div className="md:w-1/2 overflow-hidden lg:w-[60%]">
          <img src={shopProduct?.image} alt={product} className="w-full" />
        </div>
          <div className="md:w-1/2 lg:w-[40%] flex flex-col gap-8 py-2">
            <div className="flex justify-between font-poppins items-center">
              <div className="flex gap-2 justify-center items-center">
                <img src={image} alt="Pharmacy Image"  className="w-[50px] h-[50px] rounded-[50%] "/>
                <div>
                  <p className="font-bold">Health Plus Pharmacy</p>
                  <p className="font-extralight">Lagos, Nigeria</p>
                </div>
              </div>
              <i className="far fa-bookmark"></i>
            </div>
            <div className="flex font-poppins justify-between">
              <div>
                <p className="font-bold">{shopProduct?.title}</p>
                <p className="">{shopProduct?.quantity}</p>
              </div>
              <i className="far fa-heart"></i>
            </div>
            <div className="flex flex-col">
              <p className="font-bold font-poppins">About</p>
              <p className="font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellat ad veritatis odit et ab recusandae sunt tempore fuga? Eum iure nemo aperiam. Modi nihil iure facilis labore nulla atque amet, repudiandae delectus! Tenetur vel similique eius at explicabo voluptatibus quae nobis rem consequatur nostrum, velit laborum placeat fugiat inventore.</p>
            </div>
            <div className="flex md:flex-col gap-4 items-center md:items-start">
              <p className="font-bold text-cosmic-primary-color">N{shopProduct?.price}</p>

                <QuantityComponent quantity={quantity} changeQuantity={changeQuantity}/>
            </div>

            <div className="flex justify-between max-w-[200px]">
              <div onClick={()=>{navigate('/patient/shop/cart')}}>
                <CartButton/>
              </div>
              <button type="button" className="bg-cosmic-primary-color px-2 py-1 cursor-pointer font-bold text-white rounded text-xs">Buy Now</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default DetailsPage