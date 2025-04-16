

interface DoctorTableCustomCard {
    scrollWidth: number,
    patientName:string,
    patientProfile:string,
    appointmentmentTime:string,
    appointmentDate:string
}


const DoctorTableCustomCard = ({ scrollWidth ,appointmentDate,appointmentmentTime,patientName,patientProfile}: DoctorTableCustomCard

) => {

    return <div>
        <div className='w-full inline-flex   
     mb-3 cursor-default md:hover:border md:hover:border-cosmic-primary-color rounded-full justify-evenly'>
          
            <div className=" min-w-[200px]  flex gap-2  m-2 ">
                <img alt='image' className='w-[30px] h-[30px] rounded-full place-items-center justify-center' src={patientProfile} />
                <p className='text-[14px]' >{patientName}</p>
            </div>
            <p className="min-w-[120px]  m-2 ">Female</p>
            <p className="min-w-[120px]   m-2  ">{appointmentDate}</p>
            <p className="min-w-[100px]   m-2  ">{appointmentmentTime}</p>
          
           


        </div>
        <div className={` h-[1px] border md:w-full` } style={{
            width: `${scrollWidth}px`

            
        }}></div>
    </div>
}


export default DoctorTableCustomCard