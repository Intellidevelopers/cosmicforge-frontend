import { useEffect, useRef, useState } from "react"
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar"
import HomeNavBar from "../../home/component/patient/HomeNavBar"
import { categories, dummyProducts } from "../utils/dummyProducsList"
import ProductCard from "../components/product-card"
import { useNavigate } from "react-router-dom"
import { product } from "../components/product-card"


const Shop = () => {

  const [shopCategories, setShopCategories] = useState<string[]>()
  const [products,setProuducts] = useState<product[]>()
  const carouselRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(()=>{
    setShopCategories(categories)
    setProuducts(dummyProducts)
  },[products,shopCategories])

  const scrollLeft = (index:number)=>{
    if(carouselRefs.current[index]){
      carouselRefs.current[index]?.scrollBy({
        left:-300,
        behavior:'smooth'
      })
    }
  }
  const scrollRight = (index:number)=>{
    if(carouselRefs.current[index]){
      carouselRefs.current[index]?.scrollBy({
        left:300,
        behavior:'smooth'
      })
    }
  }


  const navigate = useNavigate()

  return (
    <>
        <HomeNavBar title={'Shop'}/>
        <HomeMobileNavBar title={'Shop'}/>
        <div className='mt-12 w-full gap-8 flex flex-col place-items-center '>
          {
            shopCategories && shopCategories.map((item,index)=>(
              <div key={index} className="flex flex-col overflow-hidden w-[88%]">
                <div className="flex justify-between">
                  <div className="flex place-items-center gap-4">
                    <h2 className="font-bold">{item}</h2>
                    <p className="text-xs font-bold text-cosmic-doc-gradient-1 cursor-pointer" onClick={()=>navigate(item)}>View More</p>
                  </div>
                  <div className="flex gap-6">
                    <i onClick={()=>scrollLeft(index)} className="fas fa-arrow-left"></i>
                    <i onClick={()=>scrollRight(index)} className="fas fa-arrow-right"></i>
                  </div>
                </div>
                <div className="flex gap-4 max-w-[100%] overflow-hidden" ref={(el)=>{carouselRefs.current[index]=el}}>
                  {products && products.map((productItem,index)=>(
                    productItem.category === item && <ProductCard key={index} {...productItem}/>
                  ))
                  }
                </div>
              </div>
            ))
          }
        </div>
    </>
  )
}

export default Shop