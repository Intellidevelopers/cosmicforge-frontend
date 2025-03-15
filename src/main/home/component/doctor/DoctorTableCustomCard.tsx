import docImage from '../../../../assets/images/doctor-image.jpeg'

interface DoctorTableCustomCard {
    scrollWidth: number
}


const DoctorTableCustomCard = ({ scrollWidth }: DoctorTableCustomCard

) => {

    return <div>
        <div className='w-full inline-flex   
     mb-3 cursor-default md:hover:border md:hover:border-cosmic-primary-color rounded-full'>
            <div className=" min-w-[200px]  flex gap-2  m-2 ">
                <img alt='image' className='w-[30px] h-[30px] rounded-full place-items-center justify-center' src={docImage} />
                <p className='text-[14px]' >Agwu Emmanuel Chihwkwu</p>
            </div>
            <p className="min-w-[100px] m-2 ">Female</p>
            <p className="min-w-[120px]   m-2  ">9/12/2025</p>
            <p className="min-w-[80px]   m-2  ">12:00pm</p>
            <p className="min-w-[150px]   m-2  ">+2341235678968</p>
            <p className="min-w-[250px]    m-2 text-center  ">gracewilliams@gmail.com</p>


        </div>
        <div className={` h-[1px] border`} style={{
            width: `${scrollWidth}px`
        }}></div>
    </div>
}


export default DoctorTableCustomCard