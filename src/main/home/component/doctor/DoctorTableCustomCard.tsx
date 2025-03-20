import docImage from '../../../../assets/images/doctor-image.jpeg'

interface DoctorTableCustomCard {
    scrollWidth: number
}


const DoctorTableCustomCard = ({ scrollWidth }: DoctorTableCustomCard

) => {

    return <div>
        <div className='w-full inline-flex   
     mb-3 cursor-default md:hover:border md:hover:border-cosmic-primary-color rounded-full justify-evenly'>
          
            <div className=" min-w-[200px]  flex gap-2  m-2 ">
                <img alt='image' className='w-[30px] h-[30px] rounded-full place-items-center justify-center' src={docImage} />
                <p className='text-[14px]' >Agwu Emmanuel Chihwkwu</p>
            </div>
            <p className="min-w-[120px]  m-2 ">Female</p>
            <p className="min-w-[120px]   m-2  ">9/12/2025</p>
            <p className="min-w-[100px]   m-2  ">12:00pm</p>
          
           


        </div>
        <div className={` h-[1px] border md:w-full` } style={{
            width: `${scrollWidth}px`

            
        }}></div>
    </div>
}


export default DoctorTableCustomCard