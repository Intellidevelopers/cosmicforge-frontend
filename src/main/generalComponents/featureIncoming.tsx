import incomingPic from'../../assets/images/featureIncoming.png'

const FeatureIncoming = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-screen w-screen p-8'>
        <div className="relative w-full">
            <img src={incomingPic} alt="Feature unavailable"  className='relative z-1'/>
            <div className="absolute w-full h-10  left-0 bottom-0 z-10 gradient-to-top gradient-to-t from-white to-transparent"></div>
        </div>
        <p className='text-center'>We are currently working on bringing this feature to you</p>
        <button type="button" className='p-1 w-[200px] bg-cosmic-primary-color text-white rounded-md '>Go Back</button>
    </div>
  )
}

export default FeatureIncoming