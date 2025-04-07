import HomeNavBar from "./HomeNavBar";
import aiImage from "../../../../assets/background/home-card-ai-diagnosis-image.svg";
import auRealityImage from "../../../../assets/background/home-card-augmented-reality.svg";
import SpecialistCard, { SpecialistCardProps } from "./SpecialistCard";
import arrowIcon from "../../../../assets/icons/cosmic-arrow.svg";
//import WellnessProductCard, { WellnessProductCardProps } from "./WellnessProductCard";

//import tempProductImage from '../../../../assets/images/cosmic-wellness-product-temp.svg'
import { useEffect, useRef } from "react";
import useSetScrollbar from "../../hook/patient/useSetUpScrollbar";
import HomeMobileNavBar from "./HomeMobileNavBar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../../store/initStore";
import { getDoctorDeparments } from "../../service";
import { cacheSpecialistDetails } from "../../../store/reducers/specialistDetailsReducer";



//Importing here to avoid typing the classes over and over again


const HomeBody = () => {

  /*const wellnessProducts: WellnessProductCardProps[] = [
    {
      productTitle: ' Ibuprofen 400mg',
      productDescription: ' 100 tablets',
      productImage: tempProductImage,
      productPrice: " N 3,500"

    },
    {
      productTitle: ' Ibuprofen 400mg',
      productDescription: ' 100 tablets',
      productImage: tempProductImage,
      productPrice: " N 3,500"

    },
    {
      productTitle: ' Ibuprofen 400mg',
      productDescription: ' 100 tablets',
      productImage: tempProductImage,
      productPrice: " N 3,500"

    },
    {
      productTitle: ' Ibuprofen 400mg',
      productDescription: ' 100 tablets',
      productImage: tempProductImage,
      productPrice: " N 3,500"

    },
    {
      productTitle: ' Ibuprofen 400mg',
      productDescription: ' 100 tablets',
      productImage: tempProductImage,
      productPrice: " N 3,500"

    },
    {
      productTitle: ' Ibuprofen 400mg',
      productDescription: ' 100 tablets',
      productImage: tempProductImage,
      productPrice: " N 3,500"

    }
    , {
      productTitle: ' Ibuprofen 400mg',
      productDescription: ' 100 tablets',
      productImage: tempProductImage,
      productPrice: " N 3,500"

    }
  ]*/


  const wellnessScrollContainerRef = useRef(null)



  const { scrollWellnessProductCardRight, scrollWellnessProductCardLeft } = useSetScrollbar()
   const navigate = useNavigate()  

    const user = useSelector((state:RootReducer)=>state.user)
      const specialistDetailsCache = useSelector((state:RootReducer)=>state.specialistDetails)
      const dispatch = useDispatch()


      useEffect(()=>{
       (async()=>{
          if(specialistDetailsCache.specialists === null){

          const result = await  getDoctorDeparments(user.data?.token!!)
       
          if(result.status === 200){
              dispatch(cacheSpecialistDetails({specialists:result.data}))
             
              return
          }
          }
       })()
      },[])



  return (
    <div className=" w-full  relative  h-dvh overflow-x-hidden    overflow-y-auto flex flex-col">

      <HomeNavBar title="Home" />
      <HomeMobileNavBar title="Home" />

      <div className="  ">
        <div className="w-full  md:ps-10  md:justify-start md:pt-8  md:gap-12  inline-flex overflow-x-auto" style={{
          scrollbarWidth:'none',
        
        }}>
          <img
            src={aiImage}
            alt="Ai diagnosis image"
            className=" bg-blue-400 max-h-[125px] rounded-xl me-8 mt-1"
          />
          <img
            src={auRealityImage}
            alt="Ai diagnosis image"
            className=" bg-orange-400   max-h-[125px] rounded-xl m-1"
          />
        </div>




        <div className="w-full md:ps-10 md:mt-6 ">

          <div className="w-full flex">
            <p className="font-extrabold w-fit md:w-[30%] mt-2 ms-2">
              Find a specialist
            </p>
            <p className=" absolute right-0 hover:cursor-pointer hover:opacity-70 md:right-10 md:ms-0 mt-2 me-2  md:w-[66%] text-end md:pe-12 text-cosmic-primary-color" onClick={()=>{
              navigate('/patient/find-a-specialist')
            }}>
              see more
            </p>
          </div>
          <div
            className=" cursor-default font-medium  space-x-3  md:w-[92%] w-[100%]   inline-flex  overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {specialistDetailsCache?.specialists?.map((item: SpecialistCardProps, index: number) =>
              <SpecialistCard key={index} image={item.image} name={item.name} />
            )}
          </div>
        </div>

        <div className="relative w-[95%] pl-[4%] pb-[20px] md:mt-6" >
          <div className="relative flex gap-4 place-items-center md:w-[100%] ">
            <p className="font-bold min-w-fit md:ms-2">Wellness Product</p>

            <p className="absolute right-0 md:ml-2 hover:opacity-70 cursor-pointer  md:relative  font-extralight min-w-fit text-cosmic-color-lightBlue me-2">see more</p>
            <div className="hidden w-[74%] m-2 relative md:flex justify-end place-content-center gap-5">
              <img src={arrowIcon} className="hover:scale-110 h-[30px] w-[35px] cursor-pointer" alt="scroll left" onClick={() => {
                scrollWellnessProductCardRight(wellnessScrollContainerRef)
              }} />
              <img src={arrowIcon} className="rotate-[-180deg] hover:scale-110 h-[30px] w-[35px] cursor-pointer" alt="scroll left" onClick={() => {
                scrollWellnessProductCardLeft(wellnessScrollContainerRef)
              }} />

            </div>
          </div>
          <div ref={wellnessScrollContainerRef} className="cursor-default font-medium  space-x-2  md:w-[100%] w-[98%] inline-flex  overflow-x-auto" style={{ scrollbarWidth: 'none' }}>


           <div className="w-full h-[400px] flex justify-center place-items-center">
            <p>No product yet</p>
           </div>
            {
/**   wellnessProducts.map((item: WellnessProductCardProps, index) => (
                <WellnessProductCard key={index} productTitle={item.productTitle} productDescription={item.productDescription} productImage={item.productImage} productPrice={item.productPrice} />
              )) */
             


            }
          </div>

        </div>
        </div>


      </div>
  );
};

export default HomeBody;
