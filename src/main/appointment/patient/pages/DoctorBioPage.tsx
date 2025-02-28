import { useNavigate } from "react-router-dom"
import docImage from '../../../../assets/images/doctor-image.jpeg'
import Map from "../component/Map"



const DoctorBioPage = () => {

    const navigate = useNavigate()

    
    

    return <div className="relative bg-[#F5F5F5] bg-opacity-50  overflow-auto  font-poppins w-full p-5 overflow-x-hidden" 
>
     <div className="flex place-items-center gap-3 " onClick={()=>{
        navigate(-1)
    }}>
        <i className="fa fa-angle-left fa-xl"/>
     <p>back</p>
     </div>

     <div className="relative w-full  flex flex-col place-items-center  p-3  ">
     
     <div className=" relative m-4  h-[350px]  md:h-[300px] w-full   border rounded-xl">
        <img  className="w-full h-full     bg-orange-400
  " src={docImage} style={{objectPosition:'top', objectFit:'cover'}} />

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
   <i className="fa fa-calculator " />
   </div>

   <div className=" h-[30px] w-[30px] bg-cosmic-doc-gradient-1 p-2 rounded-full flex justify-center place-items-center">
   <i className="fa fa-calculator " />
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
                <i className=" fa fa-calendar-day" />
                <p className="font-light">Monday - Sunday</p>
            </div>


            <div className="flex gap-2 place-items-center mt-2">
                <i className=" fa fa-clock" />
                <p className="font-light">7:30am - 6:30pm</p>
            </div>
        </div>
       
<div className="mt-5">
    <p className="font-bold">Pricing</p>
    <p className="font-light">20,0000</p>
</div>
         </div>


  <div className=" w-full  relative">
  <p>Location</p>
    <div className="w-full h-fit floor-map-container relative">
            
            <Map/>
            
         </div>


   <div className="bg-cosmic-map-backgroud absolute bottom-0 w-full h-[50px] font-light p-1 text-white">
   Chastain Park Hospital, Lekki, Lagos, Nigeria.
   </div>




 
  </div>


  <div className="w-full flex gap-5 mt-5 bg-white shadow shadow-black  p-1 relative">

    <div>
        jjf
    </div>

    <div className="text-[12px] md:text-[14px]">
     <p>Earlist Availability</p>
     <p>December 10, 2024 -12:00pm</p>
    </div>

    <i className="fa fa-angle-right me-2  mt-2 md:absolute right-1"/>
  </div>


  <div className="mt-5 text-white flex gap-2">
   <div className="w-full bg-cosmic-primary-color text-[12px] md:text-[14px] p-2 rounded-md text-center">
    Book Appointment
   </div>


   <div className="w-full bg-cosmic-primary-color text-[12px] md:text-[14px] p-2 rounded-md text-center">
    Send Message
   </div>
  
  </div>

  <div className="mt-5">
      <p>Rate this doctor</p>
      <p className="font-light">Share your Experience with Doctor</p>
   </div>
         




    </div>
}



export default DoctorBioPage