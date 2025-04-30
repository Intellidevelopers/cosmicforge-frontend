import { useParams } from "react-router-dom"
import HomeNavBar from "../../home/component/patient/HomeNavBar"
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar"
import { useEffect, useState } from "react"
import { dummyProducts } from "../utils/dummyProducsList"
import ProductCard from "../components/product-card"
import { product } from "../components/product-card"
interface params {
    [key: string ]: string | undefined
  }



const CategoryPage = () => {

    const params = useParams<params>()
    const {category} = params
    const [products, setProuducts] = useState<product[]>()

    useEffect(()=>{
        setProuducts(dummyProducts)
    }, [products])

  return (
    <div>
        <HomeNavBar title={category ? category : 'Shop'} onSearchFired={()=>{}}/>
        <HomeMobileNavBar title={category ? category : 'Shop'} onSearchFired={()=>{}}/>
        <div className="flex max-w-full  overflow-hidden justify-center md:ms-[250px] p-4 gap-8">
            <div className="flex justify-around md:justify-start xs:gap-2 gap-4 flex-wrap">
                {products && products.map((item,index)=>(
                    item.category === category && <ProductCard key={index} {...item}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CategoryPage