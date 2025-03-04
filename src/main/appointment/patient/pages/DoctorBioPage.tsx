import { useNavigate } from "react-router-dom"
import docImage from '../../../../assets/images/doctor-image.jpeg'
import Map from "../component/Map"

import unratedStar from '../../../../assets/icons/unrated-star.svg'

import ratedStar from '../../../../assets/icons/rated-star.svg'
import { useEffect, useState } from "react"
import Loader from "../../../generalComponents/Loader"
import ReviewCard from "../component/ReviewCard"
import callButton from '../../../../assets/icons/call-button.svg'
import videoButton from '../../../../assets/icons/cosmic-video-call-button.svg'
import calender from '../../../../assets/icons/cosmic-dark-calender.svg'
import time from  '../../../../assets/icons/cosmic-clock-dark.svg'
import cal from '../../../../assets/icons/home/cosmic-home-calander.svg'



const DoctorBioPage = () => {

  const navigate = useNavigate()

  const [loading,] = useState<boolean>(false)

  const [loadingServerData, setLoadingServerData] = useState<boolean>(true)

  const [errorMesage,] = useState<string>('')



  useEffect(()=>{

    const t = setTimeout(()=>{
    setLoadingServerData(false)
    },2000)

    return () =>{
      clearTimeout(t)
    }
  },[])


  return <div className="relative bg-[#F5F5F5] bg-opacity-50  cursor-default overflow-auto  font-poppins w-full p-5 overflow-x-hidden"
  >
    <div className=" place-items-center gap-3 hidden md:flex " onClick={() => {
      navigate(-1)
    }}>
      <i className="fa fa-angle-left fa-xl" />
      <p>back</p>
    </div>

    <div className="relative w-full  flex flex-col place-items-center  p-3  ">

      <div className=" relative m-4  h-[350px]  md:h-[300px] w-full   border rounded-xl">
        <img className="w-full h-full     bg-orange-400
  " src={docImage} style={{ objectPosition: 'top', objectFit: 'cover' }} />

        <div className="w-full h-fit md:h-[80px] absolute  bottom-0 bg-gradient-to-t from-cosmic-doc-gradient-1 to-cosmic-doc-gradient-2">
          <div className="w-full flex place-items-center gap-3 h-full p-2 text-white justify-evenly flex-wrap">

            <div>
              <p className="font-bold overflow-hidden  text-[14px] md:text-[16px]   min-w-[80px] max-w-[80px] md:max-w-fit  text-nowrap text-ellipsis">Dr Josh Olawale</p>
              <p className="font-bold overflow-hidden   text-[14px] md:text-[16px]   min-w-[80px] max-w-[80px] md:max-w-fit   text-nowrap text-ellipsis">General Medicine</p>
            </div>


            <div>
              <p className="font-bold">Patients</p>
              <p className="font-light">1,500+</p>
            </div>

            <div>
              <p className="font-bold">Ratings</p>
              <p className="font-light">4.7</p>
            </div>

            <div>
              <p className="font-bold">Location</p>
              <p className="font-light">Lagos,Nig</p>
            </div>


            <div className=" flex gap-6">
              <div className=" h-[30px] w-[30px] bg-cosmic-doc-gradient-1 p-2 rounded-full flex justify-center place-items-center">
               <img alt="call-btn" src={callButton}/>
              </div>

              <div className=" h-[30px] w-[30px] bg-cosmic-doc-gradient-1 p-2 rounded-full flex justify-center place-items-center">
              <img alt="call-btn" src={videoButton}/>
              </div>

            </div>


          </div>
        </div>
      </div>



    </div>
    <div className="ms-3 me-3">
      <p className="font-bold">Bio</p>
      <p className="font-extralight text-justify text-pretty leading-8">Dr. Josh Olawale is a dedicated and compassionate General Medicine doctor with over 3 years of experience in providing exceptional care. Known for his patient-centered approach, he holds an impressive 4.7-star rating and has successfully attended to more than 1,500 patients. Dr. Olawale is committed to delivering comprehensive medical solutions, empowering his patients to achieve optimal health and well-being.</p>
    </div>

    <div className="ms-3 mt-4 ">
      <p className="font-bold">Working Hours</p>

      <div>
        <div className="flex gap-2 place-items-center mt-1">
          <img alt="calender" src={calender} />
          <p className="font-light">Monday - Sunday</p>
        </div>


        <div className="flex gap-2 place-items-center mt-2">
        <img alt="calender" src={time} />
          <p className="font-light">7:30am - 6:30pm</p>
        </div>
      </div>

      <div className="md-3 mt-5">
        <p className="font-bold">Pricing</p>
        <p className="font-light">₦20,000.00</p>
      </div>
    </div>


    <div className=" w-full   relative">
      <p className="ps-3">Location</p>
      <div className="w-full h-fit floor-map-container relative ps-2 pe-2">

        <Map />

      </div>


      <div className="bg-cosmic-map-backgroud absolute bottom-0  flex place-items-center  w-full h-[50px] font-light p-1 text-white">
        Chastain Park Hospital, Lekki, Lagos, Nigeria.
      </div>





    </div>


    <div className="w-full flex gap-5 mt-5 bg-white shadow shadow-black  p-1 relative">

      <div className="bg-cosmic-light-color-call p-1">
      <img alt="calender" src={cal} />
      </div>

      <div className="text-[12px] md:text-[14px]">
        <p>Earliest Availability</p>
        <p>December 10, 2024 -12:00pm</p>
      </div>

      <i className="fa fa-angle-right me-2  mt-2 absolute top-2 right-1" />
    </div>


    <div className="mt-8 text-white flex gap-2">
      <div className="w-full bg-cosmic-primary-color text-[12px] md:text-[14px] p-2 rounded-md text-center" onClick={()=>{
        navigate('/patient/appointment/book')
      }}>
        Book Appointment
      </div>


      <div className="w-full bg-cosmic-light-color-call text-[12px] md:text-[14px] p-2 rounded-md text-center" >
        Send Message
      </div>

    </div>

    <div className="mt-5 ">
      <p>Rate this doctor</p>
      <p className="font-light">Share your Experience with Doctor</p>


      <div className="w-full mt-4 flex gap-5 justify-evenly">
        <img className="w-[40px] h-[40px] " src={ratedStar}  />
        <img className="w-[40px] h-[40px]" src={unratedStar} />
        <img className="w-[40px] h-[40px]" src={unratedStar} />
        <img className="w-[40px] h-[40px]" src={unratedStar} />
        <img className="w-[40px] h-[40px]" src={unratedStar} />
      </div>


      <div className="w-full mt-8">
        <p>Describe your experience (optional)</p>

        <div>
          <input type="text" placeholder="enter review" className="border rounded-md p-2 w-full  m-2" />
        </div >

        <div className="w-full flex justify-center m-5">
          <p className=" bg-cosmic-primary-color text-white p-2 rounded-md">Submit Review</p>
        </div>

        <div className="w-full flex justify-center place-items-center">
          {
            loading && <Loader size="40px" />
          }
          {
            errorMesage && <p className="text-red-600">{errorMesage}</p>
          }
        </div>
      </div>

      <div className="w-full ">
        <p className="">Reviews</p>

        <div className="w-full mt-2 gap-3 flex justify-evenly">

          <div className="w-[50px] h-[40px]  bg-cosmic-primary-color flex justify-center place-items-center rounded-md text-white" onClick={()=>{
        
          setLoadingServerData(true)

         setTimeout(()=>{
            setLoadingServerData(false)
            },2000)
        
        }}>
            <p>All</p>
          </div>

          <div className="w-[50px] h-[40px] p-1 border flex justify-center gap-1  place-items-center rounded-md "  onClick={()=>{
        
        setLoadingServerData(true)

       setTimeout(()=>{
          setLoadingServerData(false)
          },2000)
      
      }}>
            <img src={ratedStar} className="w-[20px] h-[20px]" />
            <p>1</p>
          </div>

          <div className="w-[50px] h-[40px] p-1  border flex justify-center gap-1  place-items-center rounded-md "  onClick={()=>{
        
        setLoadingServerData(true)

       setTimeout(()=>{
          setLoadingServerData(false)
          },2000)
      
      }}>
            <img src={ratedStar} className="w-[20px] h-[20px]" />
            <p>2</p>
          </div>

          <div className="w-[50px] h-[40px] border flex justify-center gap-1  place-items-center rounded-md " onClick={()=>{
        
        setLoadingServerData(true)

       setTimeout(()=>{
          setLoadingServerData(false)
          },2000)
      
      }}>
            <img src={ratedStar} className="w-[20px] h-[20px]" />
            <p>3</p>
          </div>

          <div className="w-[50px] h-[40px] p-1  border flex justify-center gap-1  place-items-center rounded-md "  onClick={()=>{
        
        setLoadingServerData(true)

       setTimeout(()=>{
          setLoadingServerData(false)
          },2000)
      
      }}>
            <img src={ratedStar} className="w-[20px] h-[20px]" />
            <p>4</p>
          </div>

          <div className="w-[50px] h-[40px] p-1  border flex justify-center gap-1  place-items-center rounded-md " onClick={()=>{
        
        setLoadingServerData(true)

       setTimeout(()=>{
          setLoadingServerData(false)
          },2000)
      
      }}>
            <img src={ratedStar} className="w-[20px] h-[20px]" />
            <p>5</p>
          </div>




        </div>

        <div className="mt-1 w-full  h-[500px] p-1  overflow-y-auto overflow-x-hidden">
            {
             loadingServerData && <div className="w-full h-full flex justify-center place-items-center">
              <Loader size="80px"/>
              </div>
            }
          {
            !loadingServerData && new Array(10).fill(0).map((_,index)=>(
              <ReviewCard key={index} clientName="Janet Opeyemi" comment="Dr. Josh Olawale was really Integral to my treatment process. I’m grateful for him."  clientProfile={docImage} ratings={4} time="3sec ago"/>
            ))
          }
        </div>

      </div>

    </div>





  </div>
}



export default DoctorBioPage