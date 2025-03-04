import ambulanceImg from '../../../assets/images/ambulanceSmall.png';

const HospitalRating = () => {


  return (
    <div className='max-w-[300px] min-w-[250px] flex flex-col gap-1 bg-white p-4 border shadow-xl rounded-md'>
        <div className='flex gap-2 justify-center max-h-[100px]'>   
            <img src={ambulanceImg} alt="Pseudo Hospital" className='w-1/2 rounded-sm'/>   
            <div className='w-fit rounded-sm grid-cols-2 grid gap-2'>
                <img src={ambulanceImg} alt="Pseudo Hospital" className=' rounded-sm' />
                <img src={ambulanceImg} alt="Pseudo Hospital" className=' rounded-sm' />
                <img src={ambulanceImg} alt="Pseudo Hospital" className=' rounded-sm' />
                <img src={ambulanceImg} alt="Pseudo Hospital" className=' rounded-sm' />
            </div>
        </div>
        <h2 className='font-bold text-sm'>Hospital Name</h2>
        <p className='font-extralight text-xs text-slate-500'>
          <i className='fas fa-star text-yellow-300'></i> 
          <i className='fas fa-star text-yellow-300'></i> 
          <i className='fas fa-star text-yellow-300'></i> 
          <i className='fas fa-star text-yellow-300'></i> 
          <i className='fas fa-star text-yellow-300'></i> 
          <i className='fas fa-star text-white'></i> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ea!
          </p>
        <p className='text-green-700 text-xs font-extralight'>Open 24 Hours</p>
    </div>
  )
}

export default HospitalRating