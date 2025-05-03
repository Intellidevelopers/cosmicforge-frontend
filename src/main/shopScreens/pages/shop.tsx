import { useEffect, useRef, useState } from "react"
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar"
import HomeNavBar from "../../home/component/patient/HomeNavBar"
import { categories, dummyProducts } from "../utils/dummyProducsList"
import ProductCard from "../components/product-card"
import { useNavigate } from "react-router-dom"
import { product } from "../components/product-card"
import incomingPic from'../../../assets/images/featureIncoming.png'
import searchBookAppointment from '../../../assets/search/searchBookAppoinment.png'
import searchFindASpecialist from '../../../assets/search/searchFindASpecialist.png'
import searchFirstAid from '../../../assets/search/searchFirtstAid.png'
import searchChatBot from '../../../assets/search/searchChatBot.png'
import diagnosis from '../../../assets/search/searchDiagnosis.svg'
import CustomHomeSearchCard, { CustomHomeSearchCardProps } from "../../home/component/patient/CustomHomeSearchCard"

const Shop = () => {

  const [toggleSearch,setToggleSearch] = useState<boolean>(false)
   const searchCards:CustomHomeSearchCardProps[] | null = [{
          title:'Run Diagnosis',
          image:diagnosis,
          navigationPath:'/patient/run-diagnosis'
        },
        {
          title:'Book Appointment',
          image:searchBookAppointment,
          navigationPath:'/patient/find-a-specialist'
        },
        
        {
          title:'Find A Specialist',
          image:searchFindASpecialist,
          navigationPath:'/patient/find-a-specialist'
        },
        {
          title:'First Aid',
          image:searchFirstAid,
          navigationPath:'/patient/first-aid'
        },
        
        {
          title:'Chat Bot',
          image:searchChatBot,
          navigationPath:'/patient/chatbot'
        }
        
        ]

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
    <div className="w-full relative overflow-hidden">
        <HomeNavBar title={'Shop'} onSearchFired={(path)=>{
          if(path === 'Shop'){
setToggleSearch(!toggleSearch)
          }

        }}/>
        <HomeMobileNavBar title={'Shop'} onSearchFired={()=>{

        }}/>
       { 
        
        /**
         * comming sooon
         */
        <div className=' hidden mt-12 w-full gap-8 flex-col place-items-center '>
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



        }

{
      toggleSearch && <div className="absolute  bg-white w-full top-[9%] z-[600] min-h-[350px] p-10 md:flex flex-col place-items-center justify-center">
       <div className="w-full h-[20px] relative ">
       <i className="fa  font-bold text-[30px] fa-times absolute right-0 hover:text-cosmic-primary-color" onClick={()=>{
        setToggleSearch(false)
       }}/>

     
        </div>
       
       <div className="mt-6 bg-black bg-opacity-5 w-[90%] h-full flex  justify-center gap-8 p-8 flex-wrap ">


      {
        searchCards  && searchCards.map((card)=>(
          <CustomHomeSearchCard title={card.title} image={card.image} navigationPath={card.navigationPath} />
        ))
      }
       

        </div>
     </div>
     }


  <div className='flex flex-col gap-4  absolute md:relative h-full justify-center   items-center  w-full  '>
       
       
       
        <div className="relative w-[300px] flex justify-center items-center">
            <img src={incomingPic} alt="Feature unavailable"  className='relative z-1'/>
            <div className="absolute w-full h-20  left-0 bottom-0 z-10 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <p className='text-center'>We are currently working on bringing this feature to you</p>
        <button type="button" className='p-1 w-[200px] bg-cosmic-primary-color text-white rounded-md ' onClick={()=>{
          navigate(-1)
        }}>Go Back</button>

        </div>
    </div>
  )
}

export default Shop