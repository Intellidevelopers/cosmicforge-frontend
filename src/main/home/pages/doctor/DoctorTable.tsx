import { MutableRefObject, useEffect, useRef, useState } from 'react'

import DoctorTableCustomCard from '../../component/doctor/DoctorTableCustomCard'


enum AppointmentsTypes {
  upcomming = "Upcomming Appointments",
  past = "Past Appointments",
  cancelled = "Cancalled Appointments"
}

const DoctorTable = () => {

    const [scrollWidth,setScrollWidth] = useState<number>(200)
  const scrollRef:MutableRefObject<HTMLDivElement | null> = useRef(null)
  const [appointmentTypeSelected,setAppoinmentTypeSelected] = useState<'upcomming'|'past'| 'cancelled'>('upcomming')
  const [activeAppointment,setActiveAppointment] = useState<string>(AppointmentsTypes.upcomming)

  useEffect(()=>{
     
     if(scrollRef){
        scrollRef.current?.addEventListener('scroll',()=>{
            
          // setScrollWidth(scrollRef.current?.scrollWidth!!)
        })
        setScrollWidth(scrollRef.current?.scrollWidth!!)
     }
  },[window])
    return <div className="w-full  overflow-y-auto bg-white rounded-md relative">
        <div className="grid grid-cols-6 p-4 sticky top-0 bg-white z-[100]">

            <div className="w-full col-span-4 md:col-span-5">

            <p className="font-bold">{activeAppointment}</p>
            </div>

            <div className="w-full col-span-2 md:col-span-1 text-end">
               <select className='border rounded-md' value={appointmentTypeSelected} onChange={(e)=>{
                setAppoinmentTypeSelected(e.target.value!! as 'upcomming'|'past'| 'cancelled')
                const type = e.target.value!! as 'upcomming'|'past'| 'cancelled' 
                setActiveAppointment(AppointmentsTypes[ type as keyof typeof AppointmentsTypes])
               }}>
               <option className="text-end">upcomming</option>
               <option className="text-end">cancelled</option>
               <option className="text-end">past</option>
               </select>
            </div>


        </div>

      <div ref={scrollRef} className=' w-full overflow-x-auto '>


            <div className='w-full inline-flex   
            mb-4 '>
            <div className=" min-w-[200px]  m-2 ">
            <p className='text-[14px]' >Name</p>
            </div>
            <p  className="min-w-[120px]   m-2 ">Female</p>
            <p  className="min-w-[120px] md:text-center  m-2  ">Date</p>
            <p  className="min-w-[100px]  md:text-center  m-2  ">Time</p>
            <p  className="min-w-[150px]  md:text-center  m-2  ">Mobile</p>
            <p  className="min-w-[150px] m-2 ps-12  md:text-center   ">Email</p>
            </div>

        
        {
            new Array(20).fill(0).map((_,index)=>(
                <DoctorTableCustomCard key={index} scrollWidth={scrollWidth} />
            ))
        }

            

         


       
           


      </div>

           

      

       
    </div>
}


export default DoctorTable